<template>
  <div
    id="experience-panel"
    role="tabpanel"
    aria-labelledby="experience-tab"
    class="animate-fade-in"
  >
    <div>
      <div
        class="space-y-6 relative before:hidden before:lg:block before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-light-text before:dark:via-dark-text before:to-transparent"
      >
        <ExperienceItem
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ExperienceItem from "./ExperienceItem.vue";

defineProps({
  experiences: {
    type: Array,
    required: true,
  },
});
</script>
