<template>
  <section
    id="projects"
    class="scroll-mt-[76px] py-8 lg:py-16 px-5 md:px-10 lg:px-20 bg-light-background dark:bg-dark-background"
    aria-labelledby="projects-heading"
  >
    <div class="container mx-auto relative">
      <h2
        id="projects-heading"
        class="text-3xl lg:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-10 lg:mb-12"
      >
        Projects
      </h2>

      <ProjectsGrid :projects="projects" @card-visible="handleCardVisible" />

      <div class="text-center mt-20 md:mt-24">
        <ButtonLink
          href="https://github.com/Kamil678"
          label="Explore More Projects"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ButtonLink from "../shared/ButtonLink.vue";
import ProjectsGrid from "./ProjectsGrid.vue";
import { PROJECTS_DATA } from "../../data/projects";

const projects = ref(PROJECTS_DATA);

const handleCardVisible = (element) => {
  element.classList.add("opacity-100", "translate-y-0", "blur-none");
};
</script>
