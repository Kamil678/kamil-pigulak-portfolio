<template>
  <div class="flex justify-center mb-6">
    <nav
      class="flex gap-1 sm:gap-4 overflow-x-auto p-1 text-sm sm:text-base"
      role="tablist"
      aria-label="About section tabs"
    >
      <button
        @click="$emit('tab-change', 1)"
        :class="getTabButtonClasses(1)"
        role="tab"
        :aria-selected="activeTab === 1"
        aria-controls="about-me-panel"
        id="about-me-tab"
      >
        About me
      </button>
      <button
        @click="$emit('tab-change', 2)"
        :class="getTabButtonClasses(2)"
        role="tab"
        :aria-selected="activeTab === 2"
        aria-controls="experience-panel"
        id="experience-tab"
      >
        Experience
      </button>
      <button
        @click="$emit('tab-change', 3)"
        :class="getTabButtonClasses(3)"
        role="tab"
        :aria-selected="activeTab === 3"
        aria-controls="education-panel"
        id="education-tab"
      >
        Education
      </button>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  activeTab: {
    type: Number,
    required: true,
  },
});

defineEmits(["tab-change"]);

const getTabButtonClasses = (tabNumber) => [
  "py-2 px-2 sm:px-4 text-center font-medium rounded-lg transition-all whitespace-nowrap ",
  props.activeTab === tabNumber
    ? "bg-light-accent/20 border-b-2 border-light-accent text-light-accent dark:bg-dark-accent/20 dark:border-dark-accent dark:text-dark-accent"
    : "text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent",
];
</script>
