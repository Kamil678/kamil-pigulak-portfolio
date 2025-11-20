<template>
  <header
    :class="{
      'bg-light-background dark:bg-dark-background shadow-md': hasScrolled,
      'bg-transparent': !hasScrolled,
    }"
    class="py-6 px-5 md:px-10 lg:px-20 xxl:px-0 fixed w-full z-50 transition-all duration-300"
  >
    <div class="flex justify-between items-center container mx-auto">
      <a href="/" aria-label="Home" class="flex-shrink-0">
        <p
          class="font-medium text-xl md:text-2xl text-light-text dark:text-dark-text"
        >
          <
          <span class="text-light-accent dark:text-dark-accent">Kamil</span>
          Pigulak />
        </p>
      </a>

      <div class="flex items-center lg:hidden">
        <button
          class="text-yellow mr-4 text-2xl"
          @click="$emit('clickToggleDarkMode')"
          aria-label="Toggle dark mode"
        >
          <i v-if="!isDarkMode" class="bx bxs-moon text-3xl"></i>
          <i v-else class="bx bxs-sun text-3xl"></i>
        </button>
        <button
          class="text-light-text dark:text-dark-text text-2xl"
          @click="toggleMenu"
          :aria-expanded="hasOpenMenu.toString()"
          aria-label="Toggle menu"
        >
          <i v-if="!hasOpenMenu" class="bx bx-menu text-3xl"></i>
          <i v-else class="bx bx-x text-3xl"></i>
        </button>
      </div>

      <nav class="hidden lg:flex lg:items-center lg:space-x-8">
        <ul class="flex items-center gap-8">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="relative text-base"
          >
            <a
              :href="item.href"
              class="block text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent transition-colors duration-200"
              :class="{
                '!text-light-accent !dark:text-dark-accent font-medium':
                  activeMenuItem === item.name,
              }"
              :aria-current="activeMenuItem === item.name ? 'page' : null"
              @click="setActive(item.name), $emit('clickItemMenu', item.name)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
      <button
        class="text-yellow text-2xl hidden lg:block"
        @click="$emit('clickToggleDarkMode')"
        aria-label="Toggle dark mode"
      >
        <i v-if="!isDarkMode" class="bx bxs-moon text-2xl"></i>
        <i v-else class="bx bxs-sun text-2xl"></i>
      </button>
    </div>

    <transition name="slide-fade">
      <div
        v-if="hasOpenMenu"
        class="lg:hidden absolute top-full left-0 right-0 bg-light-background dark:bg-dark-background shadow-lg z-20 p-4 sm:px-8"
        @click.self="closeMenu"
      >
        <ul class="space-y-3">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            <a
              :href="item.href"
              class="block py-3 px-2 text-light-text hover:text-light-accent dark:text-dark-text dark:hover:text-dark-accent transition-colors duration-200"
              :class="{
                '!text-light-accent !dark:text-dark-accent font-medium':
                  activeMenuItem === item.name,
              }"
              :aria-current="activeMenuItem === item.name ? 'page' : null"
              @click="
                setActive(item.name),
                  closeMenu(),
                  $emit('clickItemMenu', item.name)
              "
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineEmits, defineProps } from "vue";

const hasOpenMenu = ref(false);
const activeMenuItem = ref("home");
const hasScrolled = ref(false);

const setActive = (item) => {
  activeMenuItem.value = item;
};

const toggleMenu = () => {
  hasOpenMenu.value = !hasOpenMenu.value;
  document.body.style.overflow = hasOpenMenu.value ? "hidden" : "";
};

const closeMenu = () => {
  hasOpenMenu.value = false;
  document.body.style.overflow = "";
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50;

  const isAtBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
  if (isAtBottom) {
    setActive("contact");
    return;
  }

  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;
  let maxVisibleSection = null;
  let maxVisibleHeight = 0;

  menuItems.forEach((item) => {
    const sectionId = item.href.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      const visibleTop = Math.max(sectionTop, viewportTop);
      const visibleBottom = Math.min(sectionBottom, viewportBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        maxVisibleSection = item.name;
      }
    }
  });

  if (maxVisibleSection) {
    setActive(maxVisibleSection);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setTimeout(handleScroll, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menuItems = [
  { name: "home", label: "Home", href: "#home" },
  { name: "about", label: "About", href: "#about" },
  { name: "skills", label: "Skills", href: "#skills" },
  { name: "projects", label: "Projects", href: "#projects" },
  { name: "contact", label: "Contact", href: "#contact" },
];

defineProps(["isDarkMode"]);
defineEmits(["clickToggleDarkMode", "clickItemMenu"]);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
