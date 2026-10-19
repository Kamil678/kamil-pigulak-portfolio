import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const FIELDS = ["name", "email", "subject", "message"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Errors are i18n keys (e.g. "contact.validation.required") so they re-translate on language change.
export function useContactForm() {
  const form = reactive({ name: "", email: "", subject: "", message: "" });
  const errors = reactive({ name: "", email: "", subject: "", message: "" });
  const status = ref("idle"); // idle | sending | success | error

  const validateField = (field) => {
    const value = form[field].trim();
    if (!value) errors[field] = "contact.validation.required";
    else if (field === "email" && !EMAIL_PATTERN.test(value)) errors[field] = "contact.validation.email";
    else errors[field] = "";
  };

  // Re-validate on input only once a field already shows an error, so users aren't nagged while typing.
  const revalidateIfInvalid = (field) => {
    if (errors[field]) validateField(field);
  };

  const submit = async () => {
    FIELDS.forEach(validateField);
    const firstInvalid = FIELDS.find((field) => errors[field]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS configuration");
      status.value = "error";
      return;
    }

    status.value = "sending";
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        Object.fromEntries(FIELDS.map((field) => [field, form[field].trim()])),
        EMAILJS_PUBLIC_KEY,
      );
      status.value = "success";
      FIELDS.forEach((field) => {
        form[field] = "";
        errors[field] = "";
      });
    } catch (error) {
      console.error("Error sending email:", error);
      status.value = "error";
    }
  };

  return { form, errors, status, validateField, revalidateIfInvalid, submit };
}
