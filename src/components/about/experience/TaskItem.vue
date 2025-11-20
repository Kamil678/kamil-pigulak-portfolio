<template>
  <li class="flex items-start gap-2">
    <i
      class="bx bx-check text-lg leading-none text-light-accent dark:text-dark-accent"
      aria-hidden="true"
    ></i>
    <span class="text-light-text dark:text-dark-text">{{ task }}</span>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  task: {
    type: String,
    required: true,
  },
});
</script>
