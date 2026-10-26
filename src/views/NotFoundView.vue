<template>
  <section class="container flex min-h-[80vh] flex-col items-center justify-center py-28 text-center">
    <div class="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-[#0d0d10] text-left font-mono text-sm text-[#e4e4e7]">
      <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true"></span>
      </div>
      <p class="px-4 py-4 leading-7" aria-hidden="true">
        <span class="text-[#34d399]">$</span> cd {{ route.path }}<br />
        <span class="text-[#f87171]">404:</span> route not found
      </p>
    </div>
    <h1 class="mt-10 text-4xl font-semibold tracking-tight md:text-5xl">{{ t("notFound.title") }}</h1>
    <p class="mt-3 max-w-md text-muted">{{ t("notFound.text") }}</p>
    <AppButton :to="{ name: 'home' }" icon="bx-left-arrow-alt" class="mt-8">{{ t("notFound.back") }}</AppButton>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import AppButton from "../components/ui/AppButton.vue";

const route = useRoute();
const { t } = useI18n();
</script>
