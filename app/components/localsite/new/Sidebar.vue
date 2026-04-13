<script setup>
import { ref } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import { ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen } from 'lucide-vue-next'

const props = defineProps({
  header: Object,
  sections: Array,
})

const isCollapsed = ref(false)
const openSections = ref({}) // track collapsible sections

const toggleSection = (index) => {
  openSections.value[index] = !openSections.value[index]
}
</script>

<template>
  <motion.aside
    :initial="false"
    :animate="{ width: isCollapsed ? 64 : 240 }"
    :transition="{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }"
    class="h-screen bg-crm-sidebar border-r border-crm-border flex flex-col sticky top-0 z-40 overflow-hidden"
  >
    <!-- Header -->
    <div class="p-4 flex items-center min-h-[64px] overflow-hidden">
      <img
        v-if="header?.logo"
        :src="header.logo"
        class="w-8 h-8 rounded-lg shrink-0"
      />

      <motion.div
        :initial="false"
        :animate="{
          opacity: isCollapsed ? 0 : 1,
          x: isCollapsed ? -10 : 0,
          width: isCollapsed ? 0 : 'auto'
        }"
        :transition="{ duration: 0.2 }"
        class="ml-3 flex flex-col min-w-0 overflow-hidden"
      >
        <span class="text-sm font-semibold truncate">{{ header?.title }}</span>
        <span class="text-xs text-crm-text-muted truncate">{{ header?.subtitle }}</span>
      </motion.div>

      <ChevronDown v-if="!isCollapsed" size="16" class="ml-auto text-crm-text-muted shrink-0" />
    </div>

    <!-- Sections -->
    <div class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4 space-y-6 scrollbar-hide">
      <div
        v-for="(section, idx) in sections"
        :key="idx"
        class="space-y-1"
      >
        <!-- Section Label -->
        <button
          v-if="section.label && !isCollapsed"
          @click="section.collapsible && toggleSection(idx)"
          class="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-crm-text-muted uppercase tracking-wider"
        >
          <span>{{ section.label }}</span>
          <component
            v-if="section.collapsible"
            :is="openSections[idx] ? ChevronDown : ChevronRight"
            size="14"
          />
        </button>

        <!-- Items -->
        <AnimatePresence>
          <motion.div
            v-if="!section.collapsible || openSections[idx] !== false || isCollapsed"
            :initial="section.collapsible && !isCollapsed ? { height: 0, opacity: 0 } : false"
            :animate="{ height: 'auto', opacity: 1 }"
            :exit="{ height: 0, opacity: 0 }"
            class="space-y-1 overflow-hidden"
          >
            <LocalsiteNewSidebarItem
              v-for="item in section.items"
              :key="item.label"
              :icon="item.icon"
              :label="item.label"
              :isCollapsed="isCollapsed"
              :onClick="item.onClick"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-2 border-t border-crm-border">
      <SidebarItem
        :icon="isCollapsed ? PanelLeftOpen : PanelLeftClose"
        label="Collapse"
        :isCollapsed="isCollapsed"
        :onClick="() => (isCollapsed = !isCollapsed)"
      />
    </div>
  </motion.aside>
</template>