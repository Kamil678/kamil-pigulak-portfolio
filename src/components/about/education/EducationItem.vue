<template>
  <div
    class="max-w-4xl bg-light-gradient dark:bg-dark-gradient rounded-lg shadow-md overflow-hidden transition-all duration-300"
  >
    <div
      class="h-3 bg-light-accent dark:bg-dark-accent"
      aria-hidden="true"
    ></div>
    <div class="p-4">
      <div class="flex justify-between items-start mb-3 gap-x-2">
        <h3 class="text-lg font-bold text-light-text dark:text-dark-text">
          {{ education.institution }}
        </h3>
        <span
          class="px-3 py-1 bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent text-xs font-medium rounded-full min-w-[90px]"
        >
          {{ education.period }}
        </span>
      </div>

      <div class="mb-3">
        <p class="text-light-text dark:text-dark-text font-medium">
          {{ education.degree }}
        </p>
        <p class="text-sm text-light-text/80 dark:text-dark-text/80">
          {{ education.field }}
        </p>
      </div>

      <div
        v-if="education.description"
        class="text-sm text-light-text/90 dark:text-dark-text/90 mb-3"
      >
        {{ education.description }}
      </div>

      <EducationAchievements
        v-if="education.achievements && education.achievements.length > 0"
        :achievements="education.achievements"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import EducationAchievements from "./EducationAchievements.vue";

defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>
