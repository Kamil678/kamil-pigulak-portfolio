<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-contrast"
  >
    {{ t("a11y.skip") }}
  </a>
  <AppHeader />
  <main id="main" tabindex="-1" class="min-h-screen outline-none">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<script setup>
import { useI18n } from "vue-i18n";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import { usePageMeta } from "./composables/usePageMeta";

const { t } = useI18n();
usePageMeta();
</script>
