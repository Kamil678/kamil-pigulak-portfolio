<template>
  <section id="stack" aria-labelledby="stack-title" class="container py-20 md:py-28">
    <SectionHeading
      heading-id="stack-title"
      :eyebrow="t('sections.stack.eyebrow')"
      :title="t('sections.stack.title')"
      :description="t('sections.stack.description')"
    />

    <div class="grid gap-4 lg:grid-cols-3">
      <article v-for="(category, index) in SKILL_CATEGORIES" :key="category.id" v-reveal="index * 80" class="tile p-6">
        <h3 class="text-lg font-semibold">{{ t(`stack.categories.${category.id}`) }}</h3>

        <div v-for="tier in tiersOf(category)" :key="tier.id" class="mt-6">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">{{ t(`stack.tiers.${tier.id}`) }}</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="skill in tier.skills"
              :key="skill.name"
              class="inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm"
              :class="skill.highlight ? 'border-accent/40 bg-accent/10 font-medium' : 'border-border bg-bg'"
            >
              <img :src="skill.icon" alt="" width="18" height="18" loading="lazy" class="h-[18px] w-[18px]" />
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { SKILL_CATEGORIES, SKILL_TIERS } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading.vue";

const { t } = useI18n();

const tiersOf = (category) =>
  SKILL_TIERS.map((id) => ({ id, skills: category.skills.filter((skill) => skill.tier === id) })).filter(
    (tier) => tier.skills.length,
  );
</script>
