<template>
  <div
    ref="cardRef"
    class="project-card transition-all duration-400 ease-out opacity-0 translate-y-10 flex"
    :style="{ transitionDelay: `${index * 150}ms` }"
  >
    <article
      class="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-full flex flex-col"
    >
      <div class="relative overflow-hidden border-b border-gray-100 dark:border-gray-700">
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div>
          <h3 class="text-xl font-bold text-light-text dark:text-dark-text mb-2">
            {{ project.name }}
          </h3>
          <p class="text-light-text/70 dark:text-dark-text/70 text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <TechBadge v-for="(tech, idx) in project.techStack" :key="idx" :technology="tech" />
        </div>

        <ProjectLinks :projectLink="project.link" :githubLink="project.linkGithub" />
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ProjectLinks from "./ProjectLinks.vue";
import TechBadge from "./TechBadge.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["visible"]);

const cardRef = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emit("visible", entry.target);
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
