<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
  >
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :index="index"
      @visible="$emit('card-visible', $event)"
    />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

defineEmits(["card-visible"]);
</script>
