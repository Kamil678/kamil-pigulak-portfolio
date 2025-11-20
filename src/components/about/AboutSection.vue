<template>
  <section
    id="about"
    class="scroll-mt-[76px] py-8 lg:py-16 px-5 md:px-10 lg:px-20 bg-light-background dark:bg-dark-background"
    aria-labelledby="about-heading"
  >
    <div class="container mx-auto">
      <h2
        id="about-heading"
        class="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-10 lg:mb-12"
      >
        About
      </h2>

      <TabNavigation :activeTab="activeTab" @tab-change="activeTab = $event" />

      <div class="overflow-hidden">
        <div class="py-4 md:py-6 text-light-text dark:text-dark-text">
          <AboutMeTab
            v-if="activeTab === 1"
            :yearsExperience="yearsExperience"
            :projectsCount="projectsCount"
          />
          <ExperienceTab v-if="activeTab === 2" :experiences="experiences" />
          <EducationTab
            v-if="activeTab === 3"
            :educationList="educationList"
            :courses="courses"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TabNavigation from "./TabNavigation.vue";
import AboutMeTab from "./aboutMe/AboutMeTab.vue";
import ExperienceTab from "./experience/ExperienceTab.vue";
import EducationTab from "./education/EducationTab.vue";
import { experiencesData } from "../../data/experiences";
import { educationData, coursesData } from "../../data/education";

const activeTab = ref(1);
const yearsExperience = ref(0);
const projectsCount = ref(0);
const experiences = ref(experiencesData);
const educationList = ref(educationData);
const courses = ref(coursesData);

// Prosta funkcja animująca liczby
const animateNumbers = (target, refValue) => {
  let start = 0;
  const duration = 3000; // 3 sekundy
  const step = Math.ceil(target / (duration / 50));

  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      refValue.value = target;
      clearInterval(interval);
    } else {
      refValue.value = start;
    }
  }, 50);
};

onMounted(() => {
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateNumbers(3, yearsExperience);
        animateNumbers(15, projectsCount);
        hasAnimated = true;
        observerInstance.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
});
</script>
