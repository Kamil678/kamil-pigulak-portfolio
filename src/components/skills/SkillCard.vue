<template>
  <div
    ref="cardRef"
    class="relative bg-light-background dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 overflow-hidden group h-full min-h-[130px] md:min-h-[150px] border"
    :class="borderColorClass"
    :aria-label="`Umiejętność: ${skill.name}, poziom: ${skill.mastery}`"
  >
    <div
      class="absolute top-0 left-0 w-full h-1"
      :class="indicatorColorClass"
      aria-hidden="true"
    ></div>

    <div class="p-4 flex flex-col items-center justify-center">
      <div
        class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 transform group-hover:scale-110 transition-transform duration-300"
      >
        <img
          :src="skill.img"
          :alt="`${skill.name} logo`"
          class="w-10 h-10 md:w-12 md:h-12"
          loading="lazy"
        />
      </div>

      <h3
        class="text-sm md:text-base font-medium text-light-text dark:text-dark-text text-center"
      >
        {{ skill.name }}
      </h3>

      <div
        class="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden"
        role="progressbar"
        :aria-valuenow="getProgressValue(skill.mastery)"
        :aria-valuemin="0"
        :aria-valuemax="100"
      >
        <div
          class="h-full rounded-full transition-all duration-700 ease-out"
          :style="{
            width: animatedWidth,
            backgroundColor: getProgressColor(skill.mastery),
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  skill: { type: Object, required: true },
});

const masteryColorMap = {
  expert: "bg-green-500",
  advanced: "bg-blue-500",
  intermediate: "bg-yellow-400",
  basic: "bg-gray-400",
};

const indicatorColorClass = computed(
  () => masteryColorMap[props.skill.mastery] || "bg-gray-400"
);

const borderColorClass = computed(() => {
  const map = {
    expert: "border-green-500",
    advanced: "border-blue-500",
    intermediate: "border-yellow-400",
    basic: "border-gray-400",
  };
  return map[props.skill.mastery] || "border-gray-400";
});

function getProgressValue(mastery) {
  const values = { expert: 100, advanced: 75, intermediate: 50, basic: 25 };
  return values[mastery] || 0;
}

function getProgressColor(mastery) {
  const colors = {
    expert: "#22c55e",
    advanced: "#3b82f6",
    intermediate: "#eab308",
    basic: "#9ca3af",
  };
  return colors[mastery] || "#9ca3af";
}

const animatedWidth = ref("0%");
const cardRef = ref(null);
let observer;

onMounted(() => {
  let hasAnimated = false;

  const widths = {
    expert: "100%",
    advanced: "75%",
    intermediate: "50%",
    basic: "25%",
  };

  observer = new IntersectionObserver(
    ([entry], observerInstance) => {
      if (entry.isIntersecting && !hasAnimated) {
        animatedWidth.value = widths[props.skill.mastery] || "25%";
        hasAnimated = true;
        observerInstance.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );

  if (cardRef.value) observer.observe(cardRef.value);
});

onUnmounted(() => {
  if (observer && cardRef.value) observer.unobserve(cardRef.value);
});
</script>
