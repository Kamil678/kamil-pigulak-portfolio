<template>
  <component :is="tag" v-bind="linkAttrs" :class="classes">
    <AppIcon v-if="icon" :name="icon" class="text-lg" />
    <slot />
    <AppIcon v-if="iconRight" :name="iconRight" class="text-lg transition-transform group-hover:translate-x-0.5" />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  external: { type: Boolean, default: false },
  download: { type: Boolean, default: false },
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  icon: { type: String, default: null },
  iconRight: { type: String, default: null },
});

const tag = computed(() => (props.to ? RouterLink : props.href ? "a" : "button"));

const linkAttrs = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) {
    return {
      href: props.href,
      ...(props.download && { download: "" }),
      ...(props.external && { target: "_blank", rel: "noopener noreferrer" }),
    };
  }
  return {};
});

const variants = {
  primary: "bg-accent text-accent-contrast hover:bg-accent/90 shadow-[0_6px_20px_-8px_rgb(var(--accent)/0.6)]",
  secondary: "border border-border bg-surface text-text hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-text hover:bg-surface-2",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
};

const classes = computed(() => [
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
  variants[props.variant],
  sizes[props.size],
]);
</script>
