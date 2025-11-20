<template>
  <div
    id="education-panel"
    role="tabpanel"
    aria-labelledby="education-tab"
    class="animate-fade-in"
  >
    <div>
      <div class="flex justify-center items-center mb-8">
        <EducationItem
          v-for="(education, index) in educationList"
          :key="index"
          :education="education"
        />
      </div>

      <CoursesSection :courses="courses" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import EducationItem from "./EducationItem.vue";
import CoursesSection from "./CoursesSection.vue";

defineProps({
  educationList: {
    type: Array,
    required: true,
  },
  courses: {
    type: Array,
    required: true,
  },
});
</script>
