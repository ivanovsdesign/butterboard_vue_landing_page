<script setup>
import { ref, watch, onMounted } from 'vue';

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

watch(() => props.value, (newVal, oldVal) => {
  animateValue(oldVal || 0, newVal, props.duration);
});

onMounted(() => {
  animateValue(0, props.value, props.duration);
});
</script>

<template>
  <span class="animated-counter text-6xl font-bold font-theme-heading text-theme-primary">
    {{ displayValue }}
  </span>
</template>

<style scoped>
.animated-counter {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
}
</style>
