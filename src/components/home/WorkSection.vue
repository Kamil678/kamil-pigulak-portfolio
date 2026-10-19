<template>
  <section id="work" aria-labelledby="work-title" class="container py-20 md:py-28">
    <SectionHeading
      heading-id="work-title"
      :eyebrow="t('sections.work.eyebrow')"
      :title="t('sections.work.title')"
      :description="t('sections.work.description')"
    />

    <div class="grid gap-4 md:grid-cols-2">
      <ProjectCard v-for="(project, index) in featured" :key="project.slug" v-reveal="index * 80" :project="project" large />
    </div>
    <div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="(project, index) in others" :key="project.slug" v-reveal="index * 80" :project="project" />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PROJECTS } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading.vue";
import ProjectCard from "./ProjectCard.vue";

const { t } = useI18n();

const featured = PROJECTS.filter((project) => project.featured);
const others = PROJECTS.filter((project) => !project.featured);
</script>
