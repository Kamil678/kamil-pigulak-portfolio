<template>
  <footer class="border-t border-border">
    <div class="container flex flex-col items-center justify-between gap-6 py-10 text-sm text-muted md:flex-row">
      <div class="text-center md:text-left">
        <p class="font-medium text-text">© {{ year }} {{ PROFILE.name }}</p>
        <p class="mt-1">
          {{ t("footer.built") }}
          <a
            :href="PROFILE.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-border underline-offset-4 hover:text-text"
          >
            {{ t("footer.source") }}<span class="sr-only"> ({{ t("a11y.newTab") }})</span>
          </a>
        </p>
      </div>

      <div class="flex items-center gap-2">
        <a
          v-for="social in PROFILE.socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${social.name} (${t('a11y.newTab')})`"
          class="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
        >
          <AppIcon :name="social.icon" class="text-lg" />
        </a>
        <a
          :href="`mailto:${PROFILE.email}`"
          :aria-label="t('a11y.email')"
          class="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent"
        >
          <AppIcon name="bx-envelope" class="text-lg" />
        </a>
        <button
          type="button"
          class="ml-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider hover:text-text"
          @click="scrollToTop"
        >
          {{ t("footer.top") }} <AppIcon name="bx-up-arrow-alt" class="text-base" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PROFILE } from "../../data/profile";
import AppIcon from "../ui/AppIcon.vue";

const { t } = useI18n();
const year = new Date().getFullYear();

const scrollToTop = () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  document.getElementById("main")?.focus({ preventScroll: true });
};
</script>
