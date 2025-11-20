<template>
  <span
    class="px-2 py-1 rounded text-xs bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent"
  >
    {{ technology }}
  </span>
</template>

<script setup>
defineProps({
  technology: {
    type: String,
    required: true,
  },
});
</script>
