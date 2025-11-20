<template>
  <div
    class="group relative overflow-hidden rounded-lg bg-white dark:bg-dark-background h-full transition-all duration-300 shadow-md hover:shadow-xl border border-transparent hover:border-light-accent dark:hover:border-dark-accent"
  >
    <div class="relative overflow-hidden">
      <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <img
          :src="project.image"
          :alt="project.name"
          class="h-[250px] w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
        >
          <p
            class="p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          >
            {{ project.description }}
          </p>
        </div>
      </a>
    </div>

    <div class="p-5">
      <h3
        class="text-xl font-semibold mb-2 text-light-text dark:text-dark-text"
      >
        {{ project.name }}
      </h3>

      <div
        class="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <a
          :href="project.linkGithub"
          class="text-sm text-light-accent dark:text-dark-accent border border-light-accent dark:border-dark-accent hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          Code
        </a>
        <a
          :href="project.link"
          class="text-sm text-light-accent dark:text-dark-accent border border-light-accent dark:border-dark-accent hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            />
            <path
              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            />
          </svg>
          Live Preview
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["project"]);
</script>

<style scoped>
/* Project card-specific animations */
.group:hover .transform {
  transform: scale(1.05);
}
</style>
