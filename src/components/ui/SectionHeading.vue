<template>
  <header v-reveal class="mb-10 max-w-2xl md:mb-14">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 :id="headingId" class="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl md:tracking-tightest">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-pretty text-base text-muted md:text-lg">{{ description }}</p>
  </header>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  headingId: { type: String, default: undefined },
});
</script>
