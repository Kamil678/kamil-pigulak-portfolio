<template>
  <a
    :href="href"
    :target="targetBlank ? '_blank' : ''"
    rel="noopener noreferrer"
    class="inline-block text-light-background bg-light-accent hover:bg-opacity-80 dark:text-dark-background dark:bg-dark-accent dark:hover:bg-opacity-80 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-6 py-3 text-center"
  >
    {{ label }}
  </a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  targetBlank: {
    type: Boolean,
    default: true,
  },
});
</script>
