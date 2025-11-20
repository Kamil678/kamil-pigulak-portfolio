<template>
  <div class="mb-16">
    <div class="flex items-center mb-8">
      <h3
        class="text-2xl md:text-3xl font-semibold dark:text-white flex items-center"
      >
        <i :class="['bx', icon, 'text-primary', 'mr-2']"></i>{{ title }}
      </h3>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
    >
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
        :categoryColor="categoryColor"
        :categoryName="categoryName"
      />
    </div>
  </div>
</template>

<script setup>
import SkillCard from "./SkillCard.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  categoryColor: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});
</script>
