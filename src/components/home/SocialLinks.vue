<template>
  <div
    class="hidden lg:flex absolute lg:top-0 right-0 flex-col justify-center items-center gap-5 text-gray-2 dark:text-gray-200 translate-x-[150px] opacity-0 animate-slide-in"
    aria-label="Linki społecznościowe"
  >
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      :target="link.target ?? ''"
      :aria-label="link.name"
      class="text-4xl flex items-center gap-1 hover:scale-110"
      rel="noopener"
    >
      <i :class="`bx ${link.icon} text-light-accent`" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  {
    name: "Email",
    url: "mailto:kamilpigulak@gmail.com",
    icon: "bxs-envelope",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamil-pigulak/",
    icon: "bxl-linkedin-square",
    target: "_blank",
  },
  {
    name: "GitHub",
    url: "https://github.com/Kamil678",
    icon: "bxl-github",
    target: "_blank",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/kamil.pigulak/",
    icon: "bxl-facebook-square",
    target: "_blank",
  },
];
</script>
