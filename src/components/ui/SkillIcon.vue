<template>
  <img v-if="skill.icon" :src="skill.icon" alt="" :width="size" :height="size" loading="lazy" :class="skill.mono && 'dark:invert'" />
  <span
    v-else
    class="grid place-items-center rounded bg-surface-2 font-mono text-[0.6rem] font-semibold text-muted"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
  >
    {{ skill.name.charAt(0) }}
  </span>
</template>

<script setup>
defineProps({
  skill: { type: Object, required: true },
  size: { type: Number, default: 18 },
});
</script>
