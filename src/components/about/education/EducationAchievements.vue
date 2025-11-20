<template>
  <div class="mt-4">
    <p class="text-sm font-medium mb-2 text-light-text dark:text-dark-text">
      Key achievements:
    </p>
    <ul class="space-y-3">
      <li
        v-for="(achievement, i) in achievements"
        :key="i"
        class="flex items-start gap-2 text-xs"
      >
        <i
          class="bx bx-badge-check text-light-accent dark:text-dark-accent text-lg leading-none flex-shrink-0"
          aria-hidden="true"
        ></i>
        <span>{{ achievement }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  achievements: {
    type: Array,
    required: true,
  },
});
</script>
