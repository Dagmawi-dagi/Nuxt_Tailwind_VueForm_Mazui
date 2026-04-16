<!-- components/SidebarItem.vue -->
<script setup>

const props = defineProps({
  icon: { type: Object, required: true },
  label: { type: String, required: true },
  to: { type: String, default: '' },
  isCollapsed: { type: Boolean, required: true }
})

const emit = defineEmits(['click'])

const router = useRouter()
const route = useRoute()
const itemRef = ref(null)
const hoverRect = ref(null)

const isActive = computed(() => {
  if (!props.to) return false
  return route.path === props.to
})

const handleClick = () => {
  if (props.to) {
    router.push(props.to)
  }
  emit('click')
}

const handleMouseEnter = () => {
  if (props.isCollapsed && itemRef.value) {
    hoverRect.value = itemRef.value.getBoundingClientRect()
  }
}

const handleMouseLeave = () => {
  hoverRect.value = null
}
</script>


<template>
  <div>
    <button
      ref="itemRef"
      :class="[
        'w-full flex items-center rounded-md transition-colors group relative cursor-pointer',
        isCollapsed ? 'justify-center h-10' : 'gap-3 px-3 py-2',
        isActive ? 'bg-white/10 text-white' : 'text-crm-text-muted hover:bg-white/5 hover:text-white'
      ]"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <component :is="icon" :size="20" class="shrink-0" />
      <span v-if="!isCollapsed" class="text-sm font-medium truncate">{{ label }}</span>
    </button>

    <!-- Tooltip teleported to body -->
    <Teleport to="body">
      <Transition name="tooltip">
        <div
          v-if="isCollapsed && hoverRect"
          class="fixed px-2 py-1.5 bg-crm-dark border border-crm-border text-white text-xs rounded-md z-[9999] whitespace-nowrap pointer-events-none shadow-2xl flex items-center gap-2"
          :style="{
            top: `${hoverRect.top + hoverRect.height / 2}px`,
            left: `${hoverRect.right + 8}px`,
            transform: 'translateY(-50%)'
          }"
        >
          <span class="font-medium">{{ label }}</span>
          <div class="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-crm-border" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>



<style scoped>
/* Tooltip animations */
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.tooltip-enter-to,
.tooltip-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Grid row transition for collapsible sections */
.grid-rows-1fr {
  grid-template-rows: 1fr;
}

.grid-rows-0fr {
  grid-template-rows: 0fr;
}
</style>