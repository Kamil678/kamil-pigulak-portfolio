<template>
  <div>
    <h3 class="text-xl font-bold text-light-text dark:text-dark-text mb-2">
      {{ name }}
    </h3>
    <p
      class="text-light-text/70 dark:text-dark-text/70 text-sm mb-4 line-clamp-3"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
