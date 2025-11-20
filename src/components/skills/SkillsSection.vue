<template>
  <section
    id="skills"
    class="bg-light-gradient dark:bg-dark-gradient scroll-mt-[76px] py-8 lg:py-16 px-5 md:px-10 lg:px-20 xxl:px-0"
  >
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl font-semibold text-center mb-4 text-light-text dark:text-dark-text"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Skills
      </h2>
      <SkillLegend
        data-aos="fade-up"
        data-aos-duration="900"
        :legendItems="[
          { color: 'bg-green-500', label: 'Expert' },
          { color: 'bg-blue-500', label: 'Advanced' },
          { color: 'bg-yellow', label: 'Intermediate' },
          { color: 'bg-gray-400', label: 'Basic' },
        ]"
      />

      <SkillCategory
        title="Frontend"
        icon="bx-code-alt"
        :skills="skillsData.frontend"
        categoryColor="from-primary to-teal-400"
        categoryName="Frontend"
        data-aos="fade-up"
        data-aos-duration="800"
      />

      <SkillCategory
        title="Backend"
        icon="bx-data"
        :skills="skillsData.backend"
        categoryColor="from-blue-500 to-indigo-600"
        categoryName="Backend"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      />

      <SkillCategory
        title="Tools"
        icon="bx-cog"
        :skills="skillsData.tools"
        categoryColor="from-yellow to-amber-500"
        categoryName="Tools"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      />
    </div>
  </section>
</template>

<script setup>
import { useSkillsStore } from "../../stores/skillsStore";
import SkillCategory from "./SkillCategory.vue";
import SkillLegend from "./SkillLegend.vue";

const skillsData = useSkillsStore();
</script>
