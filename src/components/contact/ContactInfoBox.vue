<template>
  <div
    class="p-4 bg-light-background dark:bg-dark-background rounded-lg border border-light-text/20 dark:border-dark-text/20 shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] hover:border-light-accent dark:hover:border-dark-accent"
  >
    <div class="flex items-start gap-4">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center text-light-accent dark:text-dark-accent border-2 border-light-accent/30 dark:border-dark-accent/30"
        aria-hidden="true"
      >
        <i :class="icon + ' text-2xl'"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p
          class="font-semibold text-base mb-1 text-light-text dark:text-dark-text"
        >
          {{ title }}
        </p>

        <a
          v-if="href"
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-light-accent dark:text-dark-accent font-medium text-sm hover:underline hover:text-light-accent/80 dark:hover:text-dark-accent/80"
        >
          <span class="truncate block min-w-0">
            {{ value }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <p
          v-else
          class="text-light-text/90 dark:text-dark-text/90 text-sm font-medium"
        >
          {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null,
  },
});
</script>
