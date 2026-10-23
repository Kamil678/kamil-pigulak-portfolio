<template>
  <button
    type="button"
    class="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-text"
    :aria-label="isDark ? t('a11y.themeToLight') : t('a11y.themeToDark')"
    @click="toggleTheme"
  >
    <AppIcon :name="isDark ? 'bx-sun' : 'bx-moon'" class="text-lg" />
  </button>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useTheme } from "../../composables/useTheme";
import AppIcon from "../ui/AppIcon.vue";

const { t } = useI18n();
const { isDark, toggleTheme } = useTheme();
</script>
