<template>
  <div
    class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
  >
    <div
      class="hidden lg:flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-light-accent dark:bg-dark-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-700 ease-out translate-x-[-50%]"
      aria-hidden="true"
    ></div>

    <div
      class="w-full lg:w-[calc(50%-1.25rem)] text-light-text dark:text-dark-text bg-light-gradient dark:bg-dark-gradient p-3 md:p-4 rounded-lg shadow-md"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2"
      >
        <h3 class="font-bold text-base md:text-lg">
          {{ experience.company }}
        </h3>
        <time
          class="font-medium text-sm text-light-accent dark:text-dark-accent"
        >
          {{ experience.period }}
        </time>
      </div>

      <div class="mb-2 text-sm">
        <strong class="text-light-text dark:text-dark-text"
          >Technologies:</strong
        >
        <div class="flex flex-wrap gap-1 mt-2">
          <TechBadge
            v-for="tech in experience.technologies"
            :key="tech"
            :tech="tech"
          />
        </div>
      </div>

      <div class="text-xs md:text-sm leading-relaxed mt-3">
        <strong class="text-light-text dark:text-dark-text"
          >Description:</strong
        >
        <p>{{ experience.description }}</p>
      </div>
      <div class="mt-3 text-xs md:text-sm">
        <strong class="text-light-text dark:text-dark-text">Tasks:</strong>
        <div class="mt-1">
          <ul class="space-y-1 list-none">
            <TaskItem
              v-for="task in experience.tasks"
              :key="task"
              :task="task"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import TechBadge from "./TechBadge.vue";
import TaskItem from "./TaskItem.vue";

defineProps({
  experience: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
