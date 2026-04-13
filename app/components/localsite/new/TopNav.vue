<script setup>
import { Search, Plus, Moon, Settings } from 'lucide-vue-next'
</script>

<template>
  <header class="h-14 border-b border-crm-border bg-crm-dark flex items-center justify-between px-4 sticky top-0 z-30">
    <div class="flex items-center gap-4 flex-1">
      <div class="relative w-full max-w-md">
        <Search size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-crm-text-muted" />
        <input
          type="text"
          placeholder="Search..."
          class="w-full bg-white/5 border border-crm-border rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-crm-accent transition-colors"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <button class="p-2 text-crm-text-muted hover:text-white hover:bg-white/5 rounded-md">
        <Plus size="20" />
      </button>
      <button class="p-2 text-crm-text-muted hover:text-white hover:bg-white/5 rounded-md">
        <Moon size="20" />
      </button>
      <button class="p-2 text-crm-text-muted hover:text-white hover:bg-white/5 rounded-md">
        <Settings size="20" />
      </button>

      <div class="w-8 h-8 rounded-full bg-crm-accent/20 border border-crm-accent/30 flex items-center justify-center text-xs font-bold text-crm-accent ml-2">
        JD
      </div>
    </div>
  </header>
</template>