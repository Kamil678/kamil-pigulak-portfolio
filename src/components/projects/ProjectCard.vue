<template>
  <div
    ref="cardRef"
    class="project-card transition-all duration-400 ease-out opacity-0 translate-y-10 flex"
    :style="{ transitionDelay: `${index * 150}ms` }"
  >
    <article
      class="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-full flex flex-col"
    >
      <ProjectImage :src="project.image" :alt="project.name" />

      <div class="p-6 flex flex-col flex-grow">
        <ProjectHeader
          :name="project.name"
          :description="project.description"
        />

        <TechStack :technologies="project.techStack" />

        <ProjectLinks
          :projectLink="project.link"
          :githubLink="project.linkGithub"
        />
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ProjectImage from "./ProjectImage.vue";
import ProjectHeader from "./ProjectHeader.vue";
import TechStack from "./TechStack.vue";
import ProjectLinks from "./ProjectLinks.vue";

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
    { threshold: 0.1 }
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
