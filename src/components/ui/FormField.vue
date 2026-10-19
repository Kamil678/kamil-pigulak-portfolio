<template>
  <div class="flex flex-col gap-1.5">
    <label :for="id" class="text-sm font-medium">{{ label }}</label>
    <component
      :is="multiline ? 'textarea' : 'input'"
      :id="id"
      :name="name"
      :type="multiline ? undefined : type"
      :rows="multiline ? rows : undefined"
      :value="modelValue"
      :autocomplete="autocomplete"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="w-full rounded-xl border bg-bg px-4 py-3 text-[0.95rem] text-text transition-colors placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 focus-visible:ring-offset-0"
      :class="[error ? 'border-red-500/70' : 'border-border', multiline && 'resize-y']"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <p v-if="error" :id="`${id}-error`" class="flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
      <i class="bx bx-error-circle" aria-hidden="true"></i>{{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  multiline: { type: Boolean, default: false },
  rows: { type: Number, default: 5 },
  autocomplete: { type: String, default: undefined },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue", "blur"]);
</script>
