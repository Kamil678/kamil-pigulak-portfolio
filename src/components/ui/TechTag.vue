<template>
  <span
    class="inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[0.72rem] leading-5"
    :class="highlight ? 'border-accent/30 bg-accent/10 text-accent' : 'border-border bg-surface-2 text-muted'"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  highlight: { type: Boolean, default: false },
});
</script>
