<template>
  <span
    class="px-2 py-1 text-xs md:text-sm font-medium rounded-lg cursor-default bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent transition-all duration-300 hover:bg-light-accent hover:text-light-background dark:hover:bg-dark-accent dark:hover:text-dark-text"
  >
    {{ tech }}
  </span>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  tech: {
    type: String,
    required: true,
  },
});
</script>
