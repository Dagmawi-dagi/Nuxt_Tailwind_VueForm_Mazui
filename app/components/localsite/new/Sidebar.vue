<script setup>
import { ref, reactive, markRaw, onMounted, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import { 
  ChevronDown, 
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  User,
  LogOut,
  HelpCircle,
  Moon
} from 'lucide-vue-next';
import ThemeToggle from './ThemeToggle.vue';

const props = defineProps({
  header: Object,
  sections: Array
});

const isCollapsed = ref(false);
const isHeaderMenuOpen = ref(false);
const sidebarRef = ref(null);
const headerMenuRef = ref(null);

// Track open state for collapsible sections
const openSections = reactive({});

// Initialize open state
props.sections.forEach((section, idx) => {
  if (section.collapsible) {
    openSections[idx] = true;
  }
});

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleSection = (idx) => {
  openSections[idx] = !openSections[idx];
};

const toggleHeaderMenu = () => {
  isHeaderMenuOpen.value = !isHeaderMenuOpen.value;
};

// Close header menu on click outside
onMounted(() => {
  window.addEventListener('click', (e) => {
    if (headerMenuRef.value && !headerMenuRef.value.contains(e.target) && !e.target.closest('.header-trigger')) {
      isHeaderMenuOpen.value = false;
    }
  });
});

// GSAP Animations
watch(isCollapsed, (val) => {
  if (!sidebarRef.value) return;

  const tl = gsap.timeline({
    defaults: { duration: 0.4, ease: 'power3.inOut' }
  });

  // Animate Sidebar Width
  tl.to(sidebarRef.value, {
    width: val ? 64 : 240,
  }, 0);

  // Animate Labels
  const labels = sidebarRef.value.querySelectorAll('.nav-label');
  tl.to(labels, {
    opacity: val ? 0 : 1,
    x: val ? -10 : 0,
    width: val ? 0 : 'auto',
    marginLeft: val ? 0 : 12,
    stagger: 0.01,
    duration: 0.3,
    ease: 'power2.out'
  }, 0);

  // Animate Header Trigger
  const headerTrigger = sidebarRef.value.querySelector('.header-trigger');
  if (headerTrigger) {
    tl.to(headerTrigger, {
      padding: val ? '8px' : '8px',
      duration: 0.4
    }, 0);
  }

  // Animate Section Headers
  const sectionHeaders = sidebarRef.value.querySelectorAll('.section-header');
  tl.to(sectionHeaders, {
    opacity: val ? 0 : 1,
    height: val ? 0 : 'auto',
    marginBottom: val ? 0 : 4,
    duration: 0.3
  }, 0);
});

watch(isHeaderMenuOpen, (val) => {
  if (!headerMenuRef.value) return;
  if (val) {
    gsap.fromTo(headerMenuRef.value, 
      { opacity: 0, y: -10, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
    );
  }
});

// Tooltip logic
const tooltip = ref({
  show: false,
  label: '',
  top: 0,
  left: 0
});
const tooltipRef = ref(null);

const handleMouseEnter = (e, label) => {
  if (isCollapsed.value) {
    const rect = e.currentTarget.getBoundingClientRect();
    tooltip.value = {
      show: true,
      label,
      top: rect.top + rect.height / 2,
      left: rect.right + 8
    };
    
    // Animate tooltip entrance
    nextTick(() => {
      if (tooltipRef.value) {
        gsap.fromTo(tooltipRef.value, 
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.2, ease: 'back.out(1.7)' }
        );
      }
    });
  }
};

const handleMouseLeave = () => {
  if (tooltipRef.value) {
    gsap.to(tooltipRef.value, {
      opacity: 0,
      x: -5,
      duration: 0.15,
      onComplete: () => {
        tooltip.value.show = false;
      }
    });
  } else {
    tooltip.value.show = false;
  }
};
</script>

<template>
  <aside
    ref="sidebarRef"
    class="h-screen bg-crm-sidebar border-r border-crm-border flex flex-col sticky top-0 z-40 overflow-visible"
    :style="{ width: isCollapsed ? '64px' : '240px' }"
  >
    <!-- Header -->
    <div class="p-3 relative">
      <div 
        @click="toggleHeaderMenu"
        class="header-trigger flex items-center p-2 rounded-xl border border-crm-border bg-crm-sidebar hover:bg-white/5 transition-all cursor-pointer group/header shadow-sm"
        :class="{ 'justify-center': isCollapsed }"
      >
        <div v-if="header.logo" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
          <img :src="header.logo" :alt="header.title" class="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
        </div>
        <div v-else class="w-10 h-10 rounded-lg bg-crm-accent flex items-center justify-center shrink-0">
          <span class="text-white font-bold">{{ header.title.charAt(0) }}</span>
        </div>
        
        <div
          v-if="!isCollapsed"
          class="nav-label flex flex-col min-w-0 ml-3 flex-1"
        >
          <span class="text-sm font-semibold truncate text-crm-text">{{ header.title }}</span>
          <span class="text-xs text-crm-text-muted truncate">{{ header.subtitle }}</span>
        </div>

        <ChevronDown v-if="!isCollapsed" :size="16" class="ml-2 text-crm-text-muted shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isHeaderMenuOpen }" />
      </div>

      <!-- Header Menu Dropdown -->
      <div 
        v-if="isHeaderMenuOpen" 
        ref="headerMenuRef"
        class="absolute left-3 right-3 top-full mt-2 bg-crm-sidebar border border-crm-border rounded-xl shadow-2xl z-50 py-2 overflow-hidden"
      >
        <div class="px-4 py-2 flex items-center justify-between border-b border-crm-border mb-1">
          <div class="flex items-center gap-3">
            <Moon :size="16" class="text-crm-text-muted" />
            <span class="text-sm text-crm-text">Toggle Theme</span>
          </div>
          <LocalsiteNewThemeToggle />
        </div>
        
        <button
          @click="alert('Help clicked!')"
          class="w-full flex items-center gap-3 px-4 py-2 text-sm text-crm-text hover:bg-white/5 transition-colors"
        >
          <HelpCircle :size="16" class="text-crm-text-muted" />
          <span>Help</span>
        </button>
        
        <button
          @click="alert('Logging out...')"
          class="w-full flex items-center gap-3 px-4 py-2 text-sm text-crm-text hover:bg-white/5 transition-colors"
        >
          <User :size="16" class="text-crm-text-muted" />
          <span>Profile</span>
        </button>

        <div class="h-px bg-crm-border my-1" />

        <button
          @click="alert('Logging out...')"
          class="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-400/5 transition-colors"
        >
          <LogOut :size="16" />
          <span>Logout</span>
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 space-y-6 scrollbar-hide">
      <div v-for="(section, idx) in sections" :key="idx" class="space-y-1">
        <!-- Section Header (if label exists and not collapsed) -->
        <button
          v-if="section.label && !isCollapsed"
          @click="section.collapsible ? toggleSection(idx) : null"
          class="section-header w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-crm-text-muted uppercase tracking-wider hover:text-white transition-colors"
          :class="{ 'cursor-pointer': section.collapsible, 'cursor-default': !section.collapsible }"
        >
          <span>{{ section.label }}</span>
          <template v-if="section.collapsible">
            <ChevronDown v-if="openSections[idx]" :size="14" />
            <ChevronRight v-else :size="14" />
          </template>
        </button>

        <!-- Section Items -->
        <div
          v-if="!section.collapsible || openSections[idx] || isCollapsed"
          class="space-y-1 overflow-hidden transition-all duration-300"
          :class="{ 'max-h-0 opacity-0': section.collapsible && !openSections[idx] && !isCollapsed }"
        >
          <NuxtLink
            v-for="item in section.items"
            :key="item.label"
            :to="item.to"
            @mouseenter="handleMouseEnter($event, item.label)"
            @mouseleave="handleMouseLeave"
            class="w-full flex items-center px-3 rounded-md group relative h-10 text-crm-text-muted hover:bg-white/5 hover:text-white transition-colors"
            active-class="bg-white/10 text-white"
          >
            <div class="w-5 h-5 flex items-center justify-center shrink-0">
              <component :is="item.icon" :size="20" />
            </div>
            
            <div
              class="nav-label overflow-hidden whitespace-nowrap"
              :style="{ opacity: isCollapsed ? 0 : 1, marginLeft: isCollapsed ? '0' : '12px' }"
            >
              <span class="text-sm font-medium">{{ item.label }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer / Collapse -->
    <div class="p-2 border-t border-crm-border">
      <button
        @click="toggleSidebar"
        @mouseenter="handleMouseEnter($event, 'Collapse')"
        @mouseleave="handleMouseLeave"
        class="w-full flex items-center px-3 rounded-md group relative h-10 text-crm-text-muted hover:bg-white/5 hover:text-white transition-colors"
      >
        <div class="w-5 h-5 flex items-center justify-center shrink-0">
          <PanelLeftOpen v-if="isCollapsed" :size="20" />
          <PanelLeftClose v-else :size="20" />
        </div>
        
        <div
          class="nav-label overflow-hidden whitespace-nowrap"
          :style="{ opacity: isCollapsed ? 0 : 1, marginLeft: isCollapsed ? '0' : '12px' }"
        >
          <span class="text-sm font-medium">Collapse</span>
        </div>
      </button>
    </div>

    <!-- Tooltip -->
    <Teleport to="body">
      <div 
        v-if="tooltip.show && isCollapsed"
        ref="tooltipRef"
        class="fixed z-[100] px-2 py-1 bg-black text-white text-xs rounded pointer-events-none whitespace-nowrap -translate-y-1/2 shadow-lg border border-crm-border"
        :style="{ top: `${tooltip.top}px`, left: `${tooltip.left}px` }"
      >
        {{ tooltip.label }}
        <div class="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-black" />
      </div>
    </Teleport>
  </aside>
</template>

