<template>
  <div class="flex flex-wrap gap-2 mb-4">
    <TechBadge
      v-for="(tech, idx) in technologies"
      :key="idx"
      :technology="tech"
    />
  </div>
</template>

<script setup>
import TechBadge from "./TechBadge.vue";

defineProps({
  technologies: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
