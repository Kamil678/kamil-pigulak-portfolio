import { reactive, ref } from "vue";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const FIELDS = ["name", "email", "subject", "message"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_LENGTH = { name: 100, email: 254, subject: 150, message: 5000 };

export function useContactForm() {
  const form = reactive({ name: "", email: "", subject: "", message: "" });
  const errors = reactive({ name: "", email: "", subject: "", message: "" });
  const status = ref("idle");
  const honeypot = ref("");

  const reset = () => {
    FIELDS.forEach((field) => {
      form[field] = "";
      errors[field] = "";
    });
  };

  const validateField = (field) => {
    const value = form[field].trim();
    if (!value) errors[field] = "contact.validation.required";
    else if (field === "email" && !EMAIL_PATTERN.test(value)) errors[field] = "contact.validation.email";
    else errors[field] = "";
  };

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

    if (honeypot.value) {
      status.value = "success";
      reset();
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS configuration");
      status.value = "error";
      return;
    }

    status.value = "sending";
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        Object.fromEntries(FIELDS.map((field) => [field, form[field].trim()])),
        EMAILJS_PUBLIC_KEY,
      );
      status.value = "success";
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      status.value = "error";
    }
  };

  return { form, errors, status, honeypot, validateField, revalidateIfInvalid, submit };
}
