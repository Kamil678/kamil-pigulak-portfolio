<template>
  <div
    class="flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-3 lg:gap-1"
  >
    <div class="flex items-center gap-2">
      <div
        v-if="submitStatus === 'success'"
        class="text-green-500 flex items-center gap-1 text-sm animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <i class="bx bx-check-circle text-lg" aria-hidden="true"></i>
        <span>Message sent successfully!</span>
      </div>
      <div
        v-if="submitStatus === 'error'"
        class="text-red-500 flex items-center gap-1 text-sm animate-fade-in"
        role="alert"
      >
        <i class="bx bx-error-circle text-lg" aria-hidden="true"></i>
        <span>Failed to send message. Please try again.</span>
      </div>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="text-light-background bg-light-accent hover:bg-opacity-80 dark:text-dark-background dark:bg-dark-accent dark:hover:bg-opacity-80 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-6 py-3 text-center"
      :aria-busy="isSubmitting"
    >
      <span v-if="!isSubmitting">Send message</span>
      <span v-else class="flex items-center justify-center gap-2">
        <svg
          class="animate-spin h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Sending...</span>
      </span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  isSubmitting: {
    type: Boolean,
    default: false,
  },
  submitStatus: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>
