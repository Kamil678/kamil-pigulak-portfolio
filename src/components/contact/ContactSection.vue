<template>
  <section
    id="contact"
    class="scroll-mt-[76px] py-8 lg:py-16 px-5 md:px-10 lg:px-20 bg-light-background dark:bg-dark-background"
    aria-labelledby="contact-heading"
  >
    <div class="container mx-auto">
      <div class="text-center mb-10 lg:mb-12 space-y-6">
        <h2
          id="contact-heading"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text animate-fade-from-bottom"
        >
          Contact Me
        </h2>
        <p
          class="text-light-text dark:text-dark-text text-base md:text-lg max-w-2xl mx-auto animate-fade-in delay-200"
        >
          Ready to build something clean, fast, and impactful together? I'm open
          to freelance projects, exciting collaborations, and full-time
          opportunities.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <ContactInfo class="animate-fade-from-right delay-300" />
        <ContactForm class="animate-fade-from-left delay-300 self-start" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactInfo from "./ContactInfo.vue";
import ContactForm from "./ContactForm.vue";
</script>

<style scoped>
/* Animation classes */
@keyframes fade-from-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-from-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-from-bottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-from-left {
  animation: fade-from-left 0.8s ease-out forwards;
}

.animate-fade-from-right {
  animation: fade-from-right 0.8s ease-out forwards;
}

.animate-fade-from-bottom {
  animation: fade-from-bottom 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .animate-fade-from-left,
  .animate-fade-from-right {
    animation: fade-from-bottom 0.8s ease-out forwards;
  }
}
</style>
