<template>
  <article class="tile tile-interactive group relative flex flex-col overflow-hidden">
    <div class="aspect-[2/1] overflow-hidden border-b border-border bg-surface-2">
      <img
        :src="project.cover.src"
        :srcset="project.cover.srcset"
        :sizes="large ? '(min-width: 768px) 600px, 100vw' : '(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw'"
        alt=""
        :width="project.cover.width"
        :height="project.cover.height"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div class="flex flex-1 flex-col p-5 md:p-6" :class="large && 'md:p-8'">
      <div class="flex items-center justify-between gap-3">
        <span class="font-mono text-xs uppercase tracking-wider text-muted">
          {{ project.type === "client" ? t("work.client") : t("work.personal") }}
        </span>
        <div class="relative z-10 flex items-center gap-1">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${t('work.live')}: ${project.name} (${t('a11y.newTab')})`"
            class="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text"
          >
            <AppIcon name="bx-link-external" class="text-lg" />
          </a>
          <a
            v-if="project.linkGithub"
            :href="project.linkGithub"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${t('work.code')}: ${project.name} (${t('a11y.newTab')})`"
            class="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-text"
          >
            <AppIcon name="bxl-github" class="text-lg" />
          </a>
        </div>
      </div>

      <h3 class="mt-3 font-semibold tracking-tight" :class="large ? 'text-2xl md:text-3xl' : 'text-xl'">
        <RouterLink
          :to="{ name: 'case-study', params: { slug: project.slug } }"
          class="rounded after:absolute after:inset-0 after:content-['']"
        >
          {{ project.name }}
        </RouterLink>
      </h3>
      <p class="mt-2 text-pretty text-muted" :class="large ? 'md:text-lg' : 'text-[0.95rem]'">{{ l(project.outcome) }}</p>

      <div class="mt-auto pt-6">
        <ul class="flex flex-wrap gap-1.5">
          <li v-for="tech in project.techStack" :key="tech">
            <TechTag>{{ tech }}</TechTag>
          </li>
        </ul>
        <p class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent" aria-hidden="true">
          {{ t("work.caseStudy") }}
          <AppIcon name="bx-right-arrow-alt" class="text-lg transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLocalized } from "../../composables/useLocalized";
import AppIcon from "../ui/AppIcon.vue";
import TechTag from "../ui/TechTag.vue";

defineProps({
  project: { type: Object, required: true },
  large: { type: Boolean, default: false },
});

const { t } = useI18n();
const { l } = useLocalized();
</script>
