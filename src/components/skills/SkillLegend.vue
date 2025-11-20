<template>
  <div class="mt-4 mb-16 text-center">
    <div class="flex flex-wrap justify-center gap-3 md:gap-5">
      <LegendItem
        v-for="(item, index) in legendItems"
        :key="index"
        :color="item.color"
        :label="item.label"
      />
    </div>
  </div>
</template>

<script setup>
import LegendItem from "./LegendItem.vue";

defineProps({
  legendItems: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
