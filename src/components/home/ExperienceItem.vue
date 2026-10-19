<template>
  <li class="relative grid gap-4 md:grid-cols-[minmax(0,200px)_1fr] md:gap-10">
    <div class="md:pt-6">
      <p class="font-mono text-sm text-accent">{{ experience.start }} - {{ experience.end ?? t("experience.present") }}</p>
      <p class="mt-1 text-lg font-semibold">{{ experience.company }}</p>
      <p class="text-sm text-muted">{{ l(experience.location) }}</p>
    </div>

    <article class="tile p-6 md:p-8">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 class="text-xl font-semibold tracking-tight md:text-2xl">{{ l(experience.role) }}</h3>
          <p class="mt-2 max-w-2xl text-pretty text-muted">{{ l(experience.description) }}</p>
        </div>
        <p v-if="experience.metric" class="rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-right">
          <span class="block font-mono text-2xl font-medium text-accent">{{ experience.metric.value }}</span>
          <span class="block text-xs text-muted">{{ l(experience.metric.label) }}</span>
        </p>
      </div>

      <ul class="mt-6 space-y-3">
        <li v-for="(item, index) in visibleItems" :key="index" class="flex gap-3 text-pretty">
          <i class="bx bx-check mt-0.5 text-xl text-accent" aria-hidden="true"></i>
          <span>{{ l(item) }}</span>
        </li>
      </ul>

      <button
        v-if="experience.tasks.length"
        type="button"
        class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        {{ expanded ? t("experience.showLess") : t("experience.showMore") }}
        <i :class="['bx text-lg transition-transform', expanded ? 'bx-chevron-up' : 'bx-chevron-down']" aria-hidden="true"></i>
      </button>

      <ul class="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-6">
        <li v-for="tech in experience.technologies" :key="tech"><TechTag>{{ tech }}</TechTag></li>
      </ul>
    </article>
  </li>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useLocalized } from "../../composables/useLocalized";
import TechTag from "../ui/TechTag.vue";

const props = defineProps({
  experience: { type: Object, required: true },
});

const { t } = useI18n();
const { l } = useLocalized();

const expanded = ref(false);
const visibleItems = computed(() =>
  expanded.value ? [...props.experience.highlights, ...props.experience.tasks] : props.experience.highlights,
);
</script>
