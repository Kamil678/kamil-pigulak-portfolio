<template>
  <span class="text-light-accent">{{ displayedText }}</span>
  <span v-if="isTyping" class="text-light-accent">|</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({ texts: Array });

const displayedText = ref("");
const isTyping = ref(true);
let typingInterval;
let textIndex = 0;

const startTypingEffect = () => {
  let charIndex = 0;
  isTyping.value = true;
  typingInterval = setInterval(() => {
    if (charIndex < props.texts[textIndex].length) {
      displayedText.value += props.texts[textIndex][charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
      isTyping.value = false;
      setTimeout(startDeletingEffect, 2000);
    }
  }, 150);
};

const startDeletingEffect = () => {
  isTyping.value = true;
  typingInterval = setInterval(() => {
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1);
    } else {
      clearInterval(typingInterval);
      textIndex = (textIndex + 1) % props.texts.length;
      setTimeout(startTypingEffect, 500);
    }
  }, 100);
};

onMounted(() => {
  startTypingEffect();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>
