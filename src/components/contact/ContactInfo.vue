<template>
  <div class="h-full flex flex-col">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4"
    >
      <ContactInfoBox
        v-for="(contact, index) in contactInfo"
        :key="index"
        :icon="contact.icon"
        :title="contact.title"
        :value="contact.value"
        :href="contact.href"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactInfoBox from "./ContactInfoBox.vue";

const contactInfo = ref([
  {
    icon: "bx bx-envelope",
    title: "Email",
    value: "kamilpigulak@gmail.com",
    href: "mailto:kamilpigulak@gmail.com",
  },
  {
    icon: "bx bx-phone",
    title: "Phone",
    value: "+48 518 144 228",
    href: "tel:+48518144228",
  },
  {
    icon: "bx bx-current-location",
    title: "Location",
    value: "Miechów, Poland",
    href: null,
  },
  {
    icon: "bx bxl-linkedin",
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/kamil-pigulak/",
    href: "https://www.linkedin.com/in/kamil-pigulak/",
  },
  {
    icon: "bx bxl-github",
    title: "GitHub",
    value: "https://github.com/Kamil678",
    href: "https://github.com/Kamil678",
  },
  {
    icon: "bx bxl-facebook",
    title: "Facebook",
    value: "facebook.com/kamil.pigulak",
    href: "https://www.facebook.com/kamil.pigulak/",
  },
]);
</script>
