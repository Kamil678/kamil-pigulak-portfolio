<template>
  <section aria-labelledby="hero-title" class="container pb-20 pt-24 md:pb-28 md:pt-28">
    <div class="grid auto-rows-auto grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      <div class="tile col-span-2 flex flex-col justify-between gap-10 p-6 md:p-10 lg:row-span-2">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium">
            <span
              class="h-2 w-2 rounded-full"
              :class="PROFILE.openToWork ? 'animate-pulse bg-accent' : 'bg-muted'"
              aria-hidden="true"
            ></span>
            {{ PROFILE.openToWork ? t("hero.statusOpen") : t("hero.statusClosed") }}
          </p>
          <h1
            id="hero-title"
            class="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem] lg:tracking-tightest"
          >
            <span class="text-accent">{{ t("hero.titleLead") }}</span>
            {{ t("hero.titleRest") }}
          </h1>
          <p class="mt-6 max-w-xl text-pretty text-base text-muted md:text-lg">
            {{ t("hero.lead", { years, since: careerStartYear }) }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <AppButton :href="PROFILE.cvUrl" download icon="bx-download">{{ t("nav.cv") }}</AppButton>
          <AppButton href="/#contact" variant="secondary" icon-right="bx-right-arrow-alt" @click.prevent="goToSection('contact')">
            {{ t("hero.cta") }}
          </AppButton>
        </div>
      </div>

      <div class="tile relative col-span-2 min-h-[420px] overflow-hidden md:min-h-[520px] lg:row-span-2 lg:min-h-0">
        <img
          :src="photo800"
          :srcset="`${photo800} 800w, ${photo1400} 1400w`"
          sizes="(min-width: 1024px) 600px, 100vw"
          :alt="t('hero.photoAlt')"
          width="1400"
          height="1400"
          fetchpriority="high"
          class="absolute inset-0 h-full w-full object-cover object-[52%_0%] lg:object-[52%_25%]"
        />
      </div>

      <div class="tile col-span-1 flex animate-fade-up flex-col justify-between gap-6 p-6 [animation-delay:140ms]">
        <i class="bx bx-briefcase-alt-2 text-2xl text-accent" aria-hidden="true"></i>
        <p>
          <span class="block font-mono text-5xl font-medium tracking-tight">{{ num(years) }}</span>
          <span class="mt-1 block text-sm text-muted">{{ t("hero.years", years) }}</span>
        </p>
      </div>

      <div class="tile col-span-1 flex animate-fade-up flex-col justify-between gap-6 p-6 [animation-delay:200ms]">
        <i class="bx bx-map text-2xl text-accent" aria-hidden="true"></i>
        <p>
          <span class="block font-mono text-xs uppercase tracking-wider text-muted">{{ t("hero.location") }}</span>
          <span class="mt-1 block font-medium">{{ l(PROFILE.location) }}</span>
          <span class="mt-0.5 block text-sm text-muted">{{ l(PROFILE.workMode) }}</span>
        </p>
      </div>

      <div
        class="tile col-span-2 flex animate-fade-up flex-col justify-between gap-6 p-6 [animation-delay:260ms] lg:col-start-1 lg:row-start-4"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-muted">{{ t("hero.stack") }}</p>
        <div>
          <ul class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <li
              v-for="tech in PROFILE.coreStack"
              :key="tech"
              class="flex items-center gap-2.5 rounded-xl border border-border bg-bg py-2 pl-2 pr-3.5 transition-colors hover:border-accent/40"
            >
              <span class="grid h-8 w-8 place-items-center rounded-lg bg-surface-2">
                <img :src="skillIcon[tech]" alt="" width="20" height="20" class="h-5 w-5" />
              </span>
              <span class="text-[0.95rem] font-semibold tracking-tight">{{ tech }}</span>
            </li>
          </ul>
          <div class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-dashed border-border pt-4 text-sm">
            <span class="font-mono text-xs uppercase tracking-wider text-muted">+ {{ t("hero.also") }}</span>
            <span v-for="tech in PROFILE.alsoStack" :key="tech" class="inline-flex items-center gap-1.5 text-muted">
              <img :src="skillIcon[tech]" alt="" width="16" height="16" class="h-4 w-4" />
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div class="col-span-2 animate-fade-up [animation-delay:320ms] lg:col-start-3 lg:row-span-2 lg:row-start-3">
        <CodeCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PROFILE, yearsOfExperience } from "../../data/profile";
import { SKILL_CATEGORIES } from "../../data/skills";
import { useLocalized } from "../../composables/useLocalized";
import { useSectionNav } from "../../composables/useSectionNav";
import AppButton from "../ui/AppButton.vue";
import CodeCard from "./CodeCard.vue";

const { t } = useI18n();
const { l, num } = useLocalized();
const { goToSection } = useSectionNav();

const years = yearsOfExperience();
const skillIcon = Object.fromEntries(SKILL_CATEGORIES.flatMap((category) => category.skills).map((skill) => [skill.name, skill.icon]));
const photo800 = "/images/kp-photo-800.webp";
const photo1400 = "/images/kp-photo-1400.webp";
const careerStartYear = new Date(PROFILE.careerStart).getFullYear();
</script>
