<template :class="{ dark: isDarkMode }">
  <Nav
    :is-dark-mode="isDarkMode"
    @clickToggleDarkMode="toggleDarkMode"
    @clickItemMenu="scrollToSection"
  />
  <main>
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <Footer />
</template>
<script setup>
import { ref, onMounted } from "vue";
import Nav from "./components/shared/Nav.vue";
import HomeSection from "./components/home/HomeSection.vue";
import AboutSection from "./components/about/AboutSection.vue";
import SkillsSection from "./components/skills/SkillsSection.vue";
import ProjectsSection from "./components/projects/ProjectsSection.vue";
import ContactSection from "./components/contact/ContactSection.vue";
import Footer from "./components/shared/Footer.vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", isDarkMode.value);
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode !== null) {
    isDarkMode.value = JSON.parse(savedDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  } else {
    isDarkMode.value = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
</script>
<style scoped></style>
