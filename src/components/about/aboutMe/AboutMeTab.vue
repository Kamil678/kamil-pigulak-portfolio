<template>
  <div
    id="about-me-panel"
    aria-labelledby="about-me-tab"
    class="animate-fade-in"
  >
    <div class="flex flex-col lg:flex-row gap-10 2xl:gap-20">
      <div
        class="w-full md:w-2/3 mx-auto 2xl:w-1/2 overflow-hidden transition-transform duration-300"
      >
        <img
          src="../../../assets/kp.png"
          alt="Kamil Pigulak photo"
          class="w-full shadow-lg rounded-lg"
          loading="lazy"
        />
      </div>
      <div
        class="text-center lg:text-left lg:w-2/3 flex flex-col gap-4 text-sm sm:text-base text-light-text dark:text-dark-text leading-relaxed"
      >
        <p>
          I am a Frontend / Fullstack Developer with over 3,5 years of
          commercial experience, specializing in JavaScript, TypeScript, and
          Vue. I excel at building modern, efficient, and responsive web
          applications, ensuring clean and optimized code, best practices, and
          high performance.
        </p>
        <p>
          With experience managing both frontend and fullstack projects, I
          thrive in team-oriented environments that foster knowledge-sharing and
          continuous development. I have successfully improved authentication
          systems, optimized UI performance, and implemented scalable solutions
          using Vue, React, and other technologies.
        </p>
        <p>
          I am passionate about new technologies and always eager to expand my
          skill set by exploring the latest trends in web development. In my
          free time, I enjoy sports, especially football, which helps me stay
          active and competitive both on and off the field.
        </p>
        <div
          class="flex items-center justify-center lg:justify-start gap-10 mt-4"
        >
          <StatsCounter
            icon="bxs-briefcase"
            :value="yearsExperience"
            unit="years"
          />
          <StatsCounter
            icon="bx-code-block"
            :value="projectsCount"
            unit="projects"
          />
        </div>
        <ButtonLink
          href="#contact"
          :targetBlank="false"
          label="Let's talk"
          class="mt-4 self-center lg:self-start"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StatsCounter from "./StatsCounter.vue";
import ButtonLink from "../../shared/ButtonLink.vue";

defineProps({
  yearsExperience: {
    type: Number,
    required: true,
  },
  projectsCount: {
    type: Number,
    required: true,
  },
});
</script>
