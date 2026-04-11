<script setup lang="ts">
const isDark = ref(false)

onMounted(() => {
  // Detect saved theme or system preference
  isDark.value = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark.value)
})

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
    <button @click="toggleDark" class="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200">
      toggle dark mode
    </button>
</template>