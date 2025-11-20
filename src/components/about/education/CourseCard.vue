<template>
  <div
    class="p-3 bg-light-gradient dark:bg-dark-gradient rounded-lg shadow-md transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] flex items-start gap-3"
  >
    <div>
      <i
        class="bx bx-award text-xl leading-none text-light-accent dark:text-dark-accent"
        aria-hidden="true"
      ></i>
    </div>
    <div>
      <p class="font-medium text-sm text-light-text dark:text-dark-text">
        {{ course.name }}
      </p>
      <div
        class="flex items-center text-xs text-light-text/70 dark:text-dark-text/70 mt-1"
      >
        <span>{{ course.issuer }}</span>
        <span class="mx-1" aria-hidden="true">•</span>
        <span>{{ course.date }}</span>
      </div>
      <p
        v-if="course.description"
        class="text-xs mt-2 text-light-text/80 dark:text-dark-text/80"
      >
        {{ course.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>
