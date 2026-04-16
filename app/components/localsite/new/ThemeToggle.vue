
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { Sun, Moon } from 'lucide-vue-next';
import { gsap } from 'gsap';
// ThemeToggle
const isDark = useDark();
const toggleDark = useToggle(isDark);

const handleRef = ref(null);
const sunRef = ref(null);
const moonRef = ref(null);

const animateToggle = (dark) => {
  if (!handleRef.value) return;

  // Animate handle position
  gsap.to(handleRef.value, {
    x: dark ? 20 : 0,
    duration: 0.4,
    ease: 'back.out(1.5)'
  });

  // Animate icons
  if (sunRef.value && moonRef.value) {
    gsap.to(sunRef.value, {
      opacity: dark ? 0 : 1,
      scale: dark ? 0.5 : 1,
      rotate: dark ? 45 : 0,
      duration: 0.3
    });
    gsap.to(moonRef.value, {
      opacity: dark ? 1 : 0,
      scale: dark ? 1 : 0.5,
      rotate: dark ? 0 : -45,
      duration: 0.3
    });
  }
};

watch(isDark, (val) => {
  animateToggle(val);
});

onMounted(() => {
  // Initial state
  gsap.set(handleRef.value, { x: isDark.value ? 20 : 0 });
  gsap.set(sunRef.value, { opacity: isDark.value ? 0 : 1, scale: isDark.value ? 0.5 : 1 });
  gsap.set(moonRef.value, { opacity: isDark.value ? 1 : 0, scale: isDark.value ? 1 : 0.5 });
});
</script>

<template>
  <button
    @click="toggleDark()"
    class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none bg-crm-border"
  >
    <span class="sr-only">Toggle theme</span>
    <span
      ref="handleRef"
      class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0"
    >
      <span
        ref="sunRef"
        class="absolute inset-0 flex h-full w-full items-center justify-center"
      >
        <Sun :size="12" class="text-yellow-500" />
      </span>
      <span
        ref="moonRef"
        class="absolute inset-0 flex h-full w-full items-center justify-center"
      >
        <Moon :size="12" class="text-crm-accent" />
      </span>
    </span>
  </button>
</template>
