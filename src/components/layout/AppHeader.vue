<template>
  <header
    class="fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,border-color] duration-300"
    :class="hasScrolled || isMenuOpen ? 'border-b border-border bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <div class="container flex h-full items-center justify-between gap-4">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2.5 rounded-lg" @click="onLogoClick">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-text font-mono text-xs font-semibold text-bg">
          {{ PROFILE.initials }}
        </span>
        <span class="hidden text-sm font-semibold sm:inline">{{ PROFILE.name }}</span>
      </RouterLink>

      <nav :aria-label="t('a11y.mainNav')" class="hidden md:block">
        <ul class="flex items-center gap-1">
          <li v-for="id in SECTIONS" :key="id">
            <a
              :href="`/#${id}`"
              class="relative rounded-full px-3 py-1.5 text-sm transition-colors"
              :class="activeSection === id ? 'text-text' : 'text-muted hover:text-text'"
              :aria-current="activeSection === id ? 'location' : undefined"
              @click.prevent="goToSection(id)"
            >
              {{ t(`nav.${id}`) }}
              <span
                class="absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300"
                :class="activeSection === id ? 'scale-x-100' : 'scale-x-0'"
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <LangSwitch />
        <ThemeToggle />
        <AppButton :href="PROFILE.cvUrl" download size="sm" icon="bx-download" class="hidden lg:inline-flex">
          {{ t("nav.cv") }}
        </AppButton>
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface md:hidden"
          :aria-label="isMenuOpen ? t('a11y.menuClose') : t('a11y.menuOpen')"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i :class="['bx text-xl', isMenuOpen ? 'bx-x' : 'bx-menu']" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <!-- Teleported: the header's backdrop-filter would otherwise become the containing block for `fixed` -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" id="mobile-menu" class="fixed inset-x-0 bottom-0 top-16 z-40 bg-bg md:hidden">
          <nav :aria-label="t('a11y.mainNav')" class="container flex h-full flex-col justify-between py-8">
            <ul class="flex flex-col gap-1">
              <li v-for="(id, index) in SECTIONS" :key="id">
                <a
                  :href="`/#${id}`"
                  class="flex items-baseline gap-4 py-3 text-3xl font-semibold tracking-tight"
                  @click.prevent="onMobileLinkClick(id)"
                >
                  <span class="font-mono text-xs text-accent">0{{ index + 1 }}</span>
                  {{ t(`nav.${id}`) }}
                </a>
              </li>
            </ul>
            <AppButton :href="PROFILE.cvUrl" download icon="bx-download" class="w-full">{{ t("nav.cv") }}</AppButton>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { PROFILE } from "../../data/profile";
import { SECTIONS, useActiveSection, useSectionNav } from "../../composables/useSectionNav";
import AppButton from "../ui/AppButton.vue";
import LangSwitch from "./LangSwitch.vue";
import ThemeToggle from "./ThemeToggle.vue";

const { t } = useI18n();
const route = useRoute();
const { goToSection } = useSectionNav();
const { activeSection, hasScrolled, update } = useActiveSection();

const isMenuOpen = ref(false);

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
    // Sections change when the page changes — recompute once the new page has rendered.
    setTimeout(update, 300);
  },
);

const onMobileLinkClick = async (id) => {
  isMenuOpen.value = false;
  // Scroll only after the body scroll lock is released, otherwise smooth scrolling stops short.
  await nextTick();
  requestAnimationFrame(() => goToSection(id));
};

const onLogoClick = () => {
  isMenuOpen.value = false;
  if (route.name === "home") window.scrollTo({ top: 0, behavior: "smooth" });
};

const onKeydown = (event) => {
  if (event.key === "Escape") isMenuOpen.value = false;
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>
