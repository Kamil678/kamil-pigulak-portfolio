<template>
  <footer
    class="w-full p-5 bg-light-background dark:bg-dark-background shadow-inner"
  >
    <div
      class="flex justify-center items-center gap-5 text-gray-2 dark:text-gray-200"
    >
      <div
        v-for="(link, index) in socialLinks"
        :key="index"
        class="flex gap-3 sm:gap-5 items-center"
      >
        <a
          :href="link.url"
          :aria-label="link.name"
          target="_blank"
          class="text-3xl sm:text-4xl flex items-center transition-transform duration-300 transform hover:translate-y-[-5px]"
        >
          <i
            :class="link.iconClass + ' text-light-accent dark:text-dark-accent'"
          ></i>
        </a>
        <span class="text-2xl sm:text-3xl inline-block">/</span>
      </div>
    </div>
    <div
      class="text-sm sm:text-base text-center mt-5 text-light-text dark:text-dark-text"
    >
      <p>
        Copyright {{ new Date().getFullYear() }} &copy; and website created by
        Kamil Pigulak
      </p>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: "Email",
    url: "mailto:kamilpigulak@gmail.com",
    iconClass: "bx bxs-envelope",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamil-pigulak/",
    iconClass: "bx bxl-linkedin-square",
  },
  {
    name: "GitHub",
    url: "https://github.com/Kamil678",
    iconClass: "bx bxl-github",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/kamil.pigulak/",
    iconClass: "bx bxl-facebook-square",
  },
];
</script>

<style scoped></style>
