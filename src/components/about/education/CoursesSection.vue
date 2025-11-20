<template>
  <div class="mt-8">
    <h3
      class="text-xl font-semibold text-light-text dark:text-dark-text mb-4 flex items-center"
    >
      <i
        class="bx bx-certification text-light-accent dark:text-dark-accent mr-2 text-2xl"
        aria-hidden="true"
      ></i>
      Courses
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseCard
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CourseCard from "./CourseCard.vue";

defineProps({
  courses: {
    type: Array,
    required: true,
  },
});
</script>
