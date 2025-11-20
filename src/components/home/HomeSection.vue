<template>
  <section
    id="home"
    class="flex items-center lg:items-end relative bg-light-gradient dark:bg-dark-gradient px-5 md:px-10 lg:px-20 xxl:px-0"
    aria-label="Strona główna"
  >
    <div
      class="mt-36 lg:mt-52 flex flex-col items-center justify-center lg:justify-between container mx-auto lg:flex-row relative z-10 gap-14 lg:gap-0 xl:gap-14 h-full"
    >
      <div
        class="lg:w-2/4 text-center lg:text-left text-light-text dark:text-dark-text opacity-0 translate-y-5 animate-fade-in-move"
      >
        <h1
          class="text-4xl xl:text-5xl 2xl:text-6xl text-light-text dark:text-dark-text"
        >
          Hi, I am Kamil <br />
          <TypingText :texts="['Frontend Developer', 'Fullstack Developer']" />
        </h1>
        <p class="mt-8 xl:mr-12 text-light-text dark:text-dark-text">
          I'm a Frontend / Fullstack Developer with over 3,5 years of experience
          working on commercial projects. I'm passionate about web technologies
          and continuously expand my skills by keeping up with the latest
          industry trends. I specialize in JavaScript, TypeScript, and Vue,
          building modern, efficient, and responsive web applications.
        </p>
        <Button label="Download CV" @click="downloadCV" class="mt-8" />
      </div>
      <div
        class="sm:w-3/4 lg:w-2/4 relative flex items-center justify-end scale-0 animate-scale-in"
      >
        <div class="glow-frame w-auto">
          <img
            src="../../assets/kp-image.png"
            alt="Kamil Pigulak - Frontend Developer"
            class="w-full border-transparent"
            loading="eager"
          />
        </div>
      </div>
      <SocialLinks />
    </div>
  </section>
</template>

<script setup>
import Button from "../shared/Button.vue";
import TypingText from "./TypingText.vue";
import SocialLinks from "./SocialLinks.vue";

function downloadCV() {
  try {
    const basePath = window.location.origin;
    const cvUrl = `${basePath}/src/assets/CV_Pigulak_Kamil.pdf`;
    window.open(cvUrl, "_blank", "noopener");
  } catch (error) {
    console.error("Error downloading CV:", error);
  }
}
</script>

<style lang="scss" scoped>
@keyframes slide-in {
  from {
    transform: translateX(150px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.8s ease-out forwards;
}

@keyframes fade-in-move {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-move {
  animation: fade-in-move 1s ease-out forwards 0.3s;
}

@keyframes scale-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.8s ease-out forwards;
}
</style>
