<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 1200 // ms
  }
});

const displayValue = ref(0);
const counterRef = ref(null);
let observer = null;

function animateValue(start, end, duration) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    if (elapsed < duration) {
      displayValue.value = Math.round(start + (end - start) * (elapsed / duration));
      requestAnimationFrame(update);
    } else {
      displayValue.value = end;
    }
  }
  requestAnimationFrame(update);
}

// When value prop changes, animate to new value
watch(() => props.value, (newVal, oldVal) => {
  animateValue(oldVal || 0, newVal, props.duration);
});

function handleVisibility(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Relaunch animation every time the counter enters the viewport
      animateValue(0, props.value, props.duration);
    }
  });
}

onMounted(() => {
  observer = new window.IntersectionObserver(handleVisibility, {
    threshold: 0.5, // At least 50% visible
  });
  if (counterRef.value) {
    observer.observe(counterRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && counterRef.value) {
    observer.unobserve(counterRef.value);
    observer.disconnect();
  }
});
</script>

<template>
  <span ref="counterRef" class="animated-counter text-6xl font-bold font-theme-heading text-theme-primary">
    {{ displayValue }}
  </span>
</template>

<style scoped>
.animated-counter {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
}
</style>
