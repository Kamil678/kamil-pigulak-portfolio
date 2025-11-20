<template>
  <div
    class="relative overflow-hidden border-b border-gray-100 dark:border-gray-700"
  >
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
