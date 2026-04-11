<script setup lang="js">
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import { Menu, X, Hotel } from 'lucide-vue-next'; // use lucide-vue-next for Vue 3

import { useRouter } from 'vue-router';

const props = defineProps({
  currentPage: null // accept any value
});

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const PageView = {
  HOME: '/',
  ABOUT: 'aboutus',
  AMENITIES: 'amenities',
  DESTINATION: 'destination',
  EVENTS: 'events',
  CONTACT: 'contact',
  BOOKING: 'booking'
};

const navItems = [
  { label: 'Home', value: PageView.HOME },
  { label: 'About Us', value: PageView.ABOUT },
  { label: 'Amenities', value: PageView.AMENITIES },
  { label: 'Destination', value: PageView.DESTINATION },
  { label: 'Events', value: PageView.EVENTS },
  { label: 'Contact', value: PageView.CONTACT },
];


const router = useRouter();
const handleNavClick = (page) => {
  router.push(page)
  isMobileMenuOpen.value = false;
  window.scrollTo(0, 0);
};
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-600 text-red',
      isScrolled ? 'bg-white  backdrop-blur-md shadow-md py-4' : 'bg-transparent  py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2 cursor-pointer" @click="handleNavClick(PageView.HOME)">
        <Hotel :class="['h-8 w-8', isScrolled ? 'text-gold-600' : 'text-white']" />
        <span
          :class="['text-2xl font-serif font-bold tracking-tight', isScrolled ? 'text-stone-900' : 'text-white']"
        >
          LUMINA
        </span>
      </div>

      <!-- Desktop Menu (lg and up) -->
      <div class="hidden lg:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.value"
          @click="handleNavClick(item.value)"
          :class="[
            'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-600',
            props.currentPage === item.value ? 'text-gold-600 border-b-2 border-gold-600' : 'text-stone-600',
            isScrolled ? 'text-stone-600' : 'text-white',
          ]"
        >
          {{ item.label }}
        </button>

        <button
          @click="handleNavClick(PageView.BOOKING)"
          class="bg-stone-900 text-white px-6 py-2.5 font-serif rounded-sm hover:bg-gold-600 transition-colors duration-300"
        >
          Book Now
        </button>
      </div>

      <!-- Mobile/Tablet Toggle (below lg) -->
      <button class="lg:hidden text-stone-800" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <component :is="isMobileMenuOpen ? X : Menu" />
      </button>
    </div>

    <!-- Mobile/Tablet Menu (below lg) -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 py-6 px-6 flex flex-col gap-4"
    >
      <button
        v-for="item in navItems"
        :key="item.value"
        @click="handleNavClick(item.value)"
        :class="['text-left text-lg py-2', props.currentPage === item.value ? 'text-gold-600 font-bold' : 'text-stone-600']"
      >
        {{ item.label }}
      </button>

      <button
        @click="handleNavClick(PageView.BOOKING)"
        class="bg-gold-600 text-white w-full py-3 mt-4 rounded-sm font-serif"
      >
        Book Your Stay
      </button>
    </div>
  </nav>
</template>
