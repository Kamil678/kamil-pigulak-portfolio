<template>
  <section id="experience" aria-labelledby="experience-title" class="border-y border-border bg-surface-2/40 py-20 md:py-28">
    <div class="container">
      <SectionHeading
        heading-id="experience-title"
        :eyebrow="t('sections.experience.eyebrow')"
        :title="t('sections.experience.title')"
        :description="t('sections.experience.description')"
      />
      <ol class="space-y-8 md:space-y-10">
        <ExperienceItem v-for="experience in EXPERIENCES" :key="experience.company" v-reveal :experience="experience" />
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { EXPERIENCES } from "../../data/experiences";
import SectionHeading from "../ui/SectionHeading.vue";
import ExperienceItem from "./ExperienceItem.vue";

const { t } = useI18n();
</script>
