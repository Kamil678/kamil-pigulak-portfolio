<template>
  <NotFoundView v-if="!project" />

  <article v-else class="pb-20 pt-28 md:pb-28 md:pt-32">
    <div class="container">
      <RouterLink
        :to="{ name: 'home', hash: '#work' }"
        class="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
      >
        <i class="bx bx-left-arrow-alt text-lg" aria-hidden="true"></i>{{ t("caseStudy.back") }}
      </RouterLink>

      <header class="mt-8 max-w-3xl">
        <p class="eyebrow">{{ project.type === "client" ? t("work.client") : t("work.personal") }}</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight md:text-6xl md:tracking-tightest">{{ project.name }}</h1>
        <p class="mt-5 text-pretty text-lg text-muted md:text-xl">{{ l(project.outcome) }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton v-if="project.link" :href="project.link" external icon-right="bx-link-external">{{ t("work.live") }}</AppButton>
          <AppButton v-if="project.linkGithub" :href="project.linkGithub" external variant="secondary" icon="bxl-github">
            {{ t("work.code") }}
          </AppButton>
        </div>
      </header>

      <dl class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        <div class="bg-surface p-5">
          <dt class="font-mono text-xs uppercase tracking-wider text-muted">{{ t("caseStudy.role") }}</dt>
          <dd class="mt-2 font-medium">{{ l(project.role) }}</dd>
        </div>
        <div class="bg-surface p-5">
          <dt class="font-mono text-xs uppercase tracking-wider text-muted">{{ t("caseStudy.type") }}</dt>
          <dd class="mt-2 font-medium">{{ project.type === "client" ? t("work.client") : t("work.personal") }}</dd>
        </div>
        <div class="bg-surface p-5">
          <dt class="font-mono text-xs uppercase tracking-wider text-muted">{{ t("caseStudy.stack") }}</dt>
          <dd class="mt-2 flex flex-wrap gap-1.5">
            <TechTag v-for="tech in project.techStack" :key="tech">{{ tech }}</TechTag>
          </dd>
        </div>
      </dl>

      <div class="mt-8 overflow-hidden rounded-2xl border border-border bg-surface-2">
        <img
          :src="project.cover.src"
          :srcset="project.cover.srcset"
          sizes="(min-width: 1248px) 1200px, 100vw"
          :alt="`${project.name} — screenshot`"
          :width="project.cover.width"
          :height="project.cover.height"
          class="h-auto w-full"
        />
      </div>

      <div class="mx-auto mt-16 max-w-3xl space-y-14 md:mt-24 md:space-y-20">
        <section v-reveal aria-labelledby="cs-problem">
          <h2 id="cs-problem" class="eyebrow">{{ t("caseStudy.problem") }}</h2>
          <p class="mt-4 text-pretty text-xl leading-relaxed md:text-2xl">{{ l(project.caseStudy.problem) }}</p>
        </section>

        <section v-reveal aria-labelledby="cs-approach">
          <h2 id="cs-approach" class="eyebrow">{{ t("caseStudy.approach") }}</h2>
          <ol class="mt-6 space-y-4">
            <li v-for="(step, index) in project.caseStudy.approach" :key="index" class="tile flex gap-5 p-5 md:p-6">
              <span class="font-mono text-sm text-accent">{{ String(index + 1).padStart(2, "0") }}</span>
              <p class="text-pretty leading-relaxed">{{ l(step) }}</p>
            </li>
          </ol>
        </section>

        <section v-reveal aria-labelledby="cs-results">
          <h2 id="cs-results" class="eyebrow">{{ t("caseStudy.results") }}</h2>
          <ul class="mt-6 space-y-3">
            <li v-for="(result, index) in project.caseStudy.results" :key="index" class="flex gap-3 text-lg">
              <i class="bx bx-check mt-1 text-xl text-accent" aria-hidden="true"></i>
              <span class="text-pretty">{{ l(result) }}</span>
            </li>
          </ul>
        </section>

        <section v-reveal aria-labelledby="cs-learnings">
          <h2 id="cs-learnings" class="eyebrow">{{ t("caseStudy.learnings") }}</h2>
          <blockquote class="mt-4 border-l-2 border-accent pl-5 text-pretty text-xl italic leading-relaxed text-muted">
            {{ l(project.caseStudy.learnings) }}
          </blockquote>
        </section>
      </div>

      <nav :aria-label="t('caseStudy.back')" class="mx-auto mt-20 grid max-w-3xl gap-4 sm:grid-cols-2">
        <RouterLink
          v-for="item in neighbours"
          :key="item.project.slug"
          :to="{ name: 'case-study', params: { slug: item.project.slug } }"
          class="tile tile-interactive p-5"
          :class="item.direction === 'next' && 'sm:text-right'"
        >
          <span class="font-mono text-xs uppercase tracking-wider text-muted">
            {{ item.direction === "prev" ? `← ${t("caseStudy.prev")}` : `${t("caseStudy.next")} →` }}
          </span>
          <span class="mt-1 block text-lg font-semibold">{{ item.project.name }}</span>
        </RouterLink>
      </nav>

      <aside class="mx-auto mt-16 max-w-3xl rounded-2xl bg-text p-8 text-center text-bg md:p-12">
        <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{{ t("caseStudy.ctaTitle") }}</h2>
        <p class="mx-auto mt-3 max-w-md opacity-75">{{ t("caseStudy.ctaText") }}</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <AppButton :to="{ name: 'home', hash: '#contact' }" icon-right="bx-right-arrow-alt">{{ t("hero.cta") }}</AppButton>
          <AppButton :href="PROFILE.cvUrl" download variant="secondary" icon="bx-download">{{ t("nav.cv") }}</AppButton>
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PROJECTS, findProject } from "../data/projects";
import { PROFILE } from "../data/profile";
import { useLocalized } from "../composables/useLocalized";
import AppButton from "../components/ui/AppButton.vue";
import TechTag from "../components/ui/TechTag.vue";
import NotFoundView from "./NotFoundView.vue";

const props = defineProps({
  slug: { type: String, required: true },
});

const { t } = useI18n();
const { l } = useLocalized();

const project = computed(() => findProject(props.slug));

const neighbours = computed(() => {
  const index = PROJECTS.indexOf(project.value);
  const count = PROJECTS.length;
  return [
    { direction: "prev", project: PROJECTS[(index - 1 + count) % count] },
    { direction: "next", project: PROJECTS[(index + 1) % count] },
  ];
});
</script>
