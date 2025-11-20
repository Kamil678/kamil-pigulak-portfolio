<template>
  <div class="flex items-center gap-4">
    <div>
      <i
        :class="`bx ${icon} text-light-accent dark:text-dark-accent text-2xl sm:text-3xl`"
        aria-hidden="true"
      ></i>
    </div>
    <div class="text-left">
      <strong
        class="text-2xl sm:text-4xl text-light-accent dark:text-dark-accent"
        >{{ value }} +</strong
      >
      <p class="text-sm sm:text-base">{{ unit }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});
</script>
