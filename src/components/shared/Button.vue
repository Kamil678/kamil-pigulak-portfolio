<template>
  <button
    type="button"
    class="text-light-background bg-light-accent hover:bg-opacity-80 dark:text-dark-background dark:bg-dark-accent dark:hover:bg-opacity-80 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-6 py-3 text-center"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>
