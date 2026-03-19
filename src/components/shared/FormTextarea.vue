<template>
  <div class="relative">
    <textarea
      :id="id"
      :name="name"
      :rows="rows"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full px-4 py-3 text-sm bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text border border-light-text/20 dark:border-dark-text/20 rounded-lg focus:ring-1 focus:ring-light-accent dark:focus:ring-dark-accent focus:border-light-accent dark:focus:border-dark-accent focus:outline-none transition-all duration-300 peer resize-none"
      placeholder=" "
      :required="required"
      :aria-required="required"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : null"
    ></textarea>
    <label
      :for="id"
      class="absolute text-sm text-light-text/60 dark:text-dark-text/60 duration-300 transform -translate-y-4 scale-75 top-[5px] z-10 origin-[0] bg-light-background dark:bg-dark-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-placeholder-shown:top-8 peer-focus:top-[5px] peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-light-accent dark:peer-focus:text-dark-accent left-3"
    >
      {{ label }}
    </label>
    <div v-if="error" :id="`${id}-error`" class="text-red-500 text-xs mt-1">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  rows: {
    type: [String, Number],
    default: 4,
  },
  modelValue: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
