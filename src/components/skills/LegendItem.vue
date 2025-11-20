<template>
  <div class="flex items-center" role="presentation">
    <div
      :class="['w-3', 'h-3', 'rounded-full', color, 'mr-2']"
      aria-hidden="true"
    ></div>
    <span class="text-sm text-gray-600 dark:text-gray-300">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
