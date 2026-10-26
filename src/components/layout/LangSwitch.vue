<template>
  <div
    role="group"
    :aria-label="t('a11y.language')"
    class="flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-xs"
  >
    <button
      v-for="code in LOCALES"
      :key="code"
      type="button"
      :aria-pressed="locale === code"
      :lang="code"
      class="h-7 rounded-full px-2.5 uppercase transition-colors"
      :class="locale === code ? 'bg-text text-bg' : 'text-muted hover:text-text'"
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { LOCALES, setLocale } from "../../i18n";

const { t, locale } = useI18n();
</script>
