<template>
  <div
    class="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto"
    :class="githubLink ? 'justify-between' : 'justify-end'"
  >
    <a
      v-if="githubLink"
      :href="githubLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-md font-medium text-light-accent dark:text-dark-accent hover:opacity-80 transition"
      aria-label="View source code on GitHub"
    >
      View code
      <i class="bx bxl-github text-lg" aria-hidden="true"></i>
    </a>
    <a
      :href="projectLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-md font-medium text-light-accent dark:text-dark-accent hover:opacity-80 transition"
      aria-label="View live project"
    >
      View project
      <i class="bx bx-link-external text-lg" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script setup>
defineProps({
  projectLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    default: null,
  },
});
</script>
