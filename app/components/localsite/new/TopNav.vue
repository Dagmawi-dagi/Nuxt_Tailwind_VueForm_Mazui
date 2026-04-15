<script setup>
import { onMounted, ref } from 'vue';
import { Search, Plus, Moon, Settings } from 'lucide-vue-next';
import { gsap } from 'gsap';

const navRef = ref(null);

onMounted(() => {
  if (navRef.value) {
    gsap.from(navRef.value.children, {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    });
  }
});
</script>

<template>
  <header ref="navRef" class="h-14 border-b border-crm-border bg-crm-dark flex items-center justify-between px-4 sticky top-0 z-30">
    <div class="flex items-center gap-4 flex-1">
      <div class="relative w-full max-w-md">
        <Search :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-crm-text-muted" />
        <input
          type="text"
          placeholder="Search..."
          class="w-full bg-crm-sidebar border border-crm-border rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-crm-accent transition-colors text-crm-text"
        />
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <button class="p-2 text-crm-text-muted hover:text-crm-text hover:bg-crm-border/50 rounded-md transition-colors">
        <Plus :size="20" />
      </button>
      <button class="p-2 text-crm-text-muted hover:text-crm-text hover:bg-crm-border/50 rounded-md transition-colors">
        <Moon :size="20" />
      </button>
      <button class="p-2 text-crm-text-muted hover:text-crm-text hover:bg-crm-border/50 rounded-md transition-colors">
        <Settings :size="20" />
      </button>
      <div class="w-8 h-8 rounded-full bg-crm-accent/20 border border-crm-accent/30 flex items-center justify-center text-xs font-bold text-crm-accent ml-2">
        JD
      </div>
    </div>
  </header>
</template>
