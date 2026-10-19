<template>
  <section id="about" aria-labelledby="about-title" class="border-y border-border bg-surface-2/40 py-20 md:py-28">
    <div class="container">
      <SectionHeading heading-id="about-title" :eyebrow="t('sections.about.eyebrow')" :title="t('sections.about.title')" />

      <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div v-reveal>
          <div class="space-y-5 text-pretty text-lg leading-relaxed">
            <p v-for="(paragraph, index) in tm('about.paragraphs')" :key="index" :class="index > 0 && 'text-muted'">
              {{ rt(paragraph) }}
            </p>
          </div>

          <dl class="mt-10 grid grid-cols-2 gap-4">
            <div class="tile flex flex-col p-5">
              <dt class="text-sm text-muted">{{ t("about.statYears", years) }}</dt>
              <dd class="order-first font-mono text-4xl font-medium">{{ years }}+</dd>
            </div>
            <div class="tile flex flex-col p-5">
              <dt class="text-sm text-muted">{{ t("about.statProjects") }}</dt>
              <dd class="order-first font-mono text-4xl font-medium">{{ PROFILE.projectsCount }}</dd>
            </div>
          </dl>
        </div>

        <div v-reveal="100" class="space-y-4">
          <article v-for="school in EDUCATION" :key="l(school.institution)" class="tile p-6">
            <p class="eyebrow">{{ t("about.education") }}</p>
            <h3 class="mt-3 text-lg font-semibold">{{ l(school.degree) }}</h3>
            <p class="text-muted">{{ l(school.institution) }} · <span class="font-mono text-sm">{{ school.period }}</span></p>
            <p class="mt-1 text-sm text-muted">{{ l(school.field) }}</p>
            <p class="mt-4 text-pretty text-sm leading-relaxed">{{ l(school.description) }}</p>
          </article>

          <article class="tile p-6">
            <p class="eyebrow">{{ t("about.courses") }}</p>
            <ul class="mt-3 divide-y divide-border">
              <li v-for="course in COURSES" :key="course.name" class="flex items-start justify-between gap-4 py-3">
                <div>
                  <p class="text-sm font-medium">{{ course.name }}</p>
                  <p class="text-xs text-muted">{{ course.issuer }}</p>
                </div>
                <span class="font-mono text-xs text-muted">{{ course.year }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PROFILE, yearsOfExperience } from "../../data/profile";
import { EDUCATION, COURSES } from "../../data/education";
import { useLocalized } from "../../composables/useLocalized";
import SectionHeading from "../ui/SectionHeading.vue";

const { t, tm, rt } = useI18n();
const { l } = useLocalized();

const years = yearsOfExperience();
</script>
