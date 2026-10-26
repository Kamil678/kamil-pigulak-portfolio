<template>
  <section id="contact" aria-labelledby="contact-title" class="container py-20 md:py-28">
    <div class="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div v-reveal>
        <p class="eyebrow">{{ t("sections.contact.eyebrow") }}</p>
        <h2 id="contact-title" class="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-6xl md:tracking-tightest">
          {{ t("sections.contact.title") }}
        </h2>
        <p class="mt-5 max-w-md text-pretty text-lg text-muted">{{ t("sections.contact.description") }}</p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            :href="`mailto:${PROFILE.email}`"
            class="font-mono text-lg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            {{ PROFILE.email }}
          </a>
          <AppButton variant="secondary" size="sm" :icon="copied ? 'bx-check' : 'bx-copy'" @click="copyEmail">
            {{ copied ? t("contact.copied") : t("contact.copyEmail") }}
          </AppButton>
          <span class="sr-only" aria-live="polite">{{ copied ? t("contact.copied") : "" }}</span>
        </div>

        <ul class="mt-8 space-y-3 text-sm">
          <li>
            <a :href="`tel:${PROFILE.phone.replace(/\s/g, '')}`" class="inline-flex items-center gap-3 hover:text-accent">
              <span class="grid h-9 w-9 place-items-center rounded-full border border-border"
                ><AppIcon name="bx-phone" class="text-lg"
              /></span>
              <span
                ><span class="text-muted">{{ t("contact.phone") }}:</span> {{ PROFILE.phone }}</span
              >
            </a>
          </li>
          <li v-for="social in PROFILE.socials" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 hover:text-accent">
              <span class="grid h-9 w-9 place-items-center rounded-full border border-border"
                ><AppIcon :name="social.icon" class="text-lg"
              /></span>
              {{ social.name }}
              <span class="sr-only">({{ t("a11y.newTab") }})</span>
              <AppIcon name="bx-link-external" class="text-muted" />
            </a>
          </li>
          <li>
            <a :href="PROFILE.cvUrl" download class="inline-flex items-center gap-3 hover:text-accent">
              <span class="grid h-9 w-9 place-items-center rounded-full border border-border"
                ><AppIcon name="bx-file" class="text-lg"
              /></span>
              {{ t("nav.cv") }} <span class="font-mono text-xs text-muted">PDF</span>
            </a>
          </li>
        </ul>
      </div>

      <ContactForm v-reveal="100" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { PROFILE } from "../../data/profile";
import AppButton from "../ui/AppButton.vue";
import AppIcon from "../ui/AppIcon.vue";
import ContactForm from "./ContactForm.vue";

const { t } = useI18n();
const copied = ref(false);
let resetTimer;

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    copied.value = true;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => (copied.value = false), 2500);
  } catch {
    window.location.href = `mailto:${PROFILE.email}`;
  }
};
</script>
