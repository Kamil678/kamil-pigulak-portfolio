<template>
  <form
    ref="contactForm"
    @submit.prevent="sendEmail"
    class="shadow-lg rounded-lg p-6 bg-light-gradient dark:bg-dark-gradient backdrop-blur-sm"
    aria-labelledby="form-heading"
  >
    <h2 id="form-heading" class="sr-only">Contact Form</h2>
    <div class="flex flex-col gap-5">
      <FormInput
        v-model="formData.name"
        id="name"
        name="name"
        label="Your name"
        type="text"
        :error="validationErrors.name"
        @input="validateField('name')"
      />

      <FormInput
        v-model="formData.email"
        id="email"
        name="email"
        label="Email address"
        type="email"
        :error="validationErrors.email"
        @input="validateField('email')"
      />

      <FormInput
        v-model="formData.subject"
        id="subject"
        name="subject"
        label="Subject"
        type="text"
        :error="validationErrors.subject"
        @input="validateField('subject')"
      />

      <FormTextarea
        v-model="formData.message"
        id="message"
        name="message"
        label="Your message"
        rows="4"
        :error="validationErrors.message"
        @input="validateField('message')"
      />
    </div>

    <FormSubmitButton
      :is-submitting="isSubmitting"
      :submit-status="submitStatus"
      class="mt-6"
    />
  </form>
</template>

<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";
import FormSubmitButton from "./FormSubmitSection.vue";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const validationErrors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref(null);
const contactForm = ref(null);

const validateField = (fieldName) => {
  switch (fieldName) {
    case "name":
      validationErrors.name =
        formData.name.trim() === "" ? "Name is required" : "";
      break;
    case "email":
      if (formData.email.trim() === "") {
        validationErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        validationErrors.email = "Please enter a valid email address";
      } else {
        validationErrors.email = "";
      }
      break;
    case "subject":
      validationErrors.subject =
        formData.subject.trim() === "" ? "Subject is required" : "";
      break;
    case "message":
      validationErrors.message =
        formData.message.trim() === "" ? "Message is required" : "";
      break;
  }
};

const validateForm = () => {
  validateField("name");
  validateField("email");
  validateField("subject");
  validateField("message");

  return Object.values(validationErrors).every((error) => error === "");
};

const sendEmail = () => {
  if (!validateForm()) {
    return;
  }

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error("Missing EmailJS configuration");
    submitStatus.value = "error";
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  const sanitizedData = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
  };

  emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      sanitizedData,
      EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        submitStatus.value = "success";

        formData.name = "";
        formData.email = "";
        formData.subject = "";
        formData.message = "";
        Object.keys(validationErrors).forEach((key) => {
          validationErrors[key] = "";
        });
      },
      (error) => {
        console.error("Error sending email:", error);
        submitStatus.value = "error";
      }
    )
    .finally(() => {
      isSubmitting.value = false;
      setTimeout(() => {
        submitStatus.value = null;
      }, 5000);
    });
};
</script>
