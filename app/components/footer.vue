<script setup lang="js">
import { defineEmits } from 'vue';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-vue-next';

const emit = defineEmits(['navigate']);

const PageView = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  AMENITIES: 'AMENITIES',
  DESTINATION: 'DESTINATION',
  EVENTS: 'EVENTS',
  CONTACT: 'CONTACT',
  BOOKING: 'BOOKING'
};

const handleNavigate = (page) => {
  emit('navigate', page);
};
</script>

<template>
  <footer class="bg-stone-900 text-stone-300 py-16">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

      <!-- Brand -->
      <div class="space-y-6">
        <h3 class="text-2xl font-serif text-white font-bold tracking-wider">LUMINA</h3>
        <p class="text-sm leading-relaxed text-stone-400">
          Experience the pinnacle of alpine luxury. Where timeless elegance meets modern comfort in the heart of the mountains.
        </p>
        <div class="flex gap-4">
          <Instagram class="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
          <Facebook class="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
          <Twitter class="h-5 w-5 hover:text-gold-400 cursor-pointer transition-colors" />
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-serif text-lg mb-6">Explore</h4>
        <ul class="space-y-4 text-sm">
          <li><button @click="handleNavigate(PageView.HOME)" class="hover:text-gold-400 transition-colors">Home</button></li>
          <li><button @click="handleNavigate(PageView.ABOUT)" class="hover:text-gold-400 transition-colors">About Us</button></li>
          <li><button @click="handleNavigate(PageView.DESTINATION)" class="hover:text-gold-400 transition-colors">Destination</button></li>
          <li><button @click="handleNavigate(PageView.EVENTS)" class="hover:text-gold-400 transition-colors">Events</button></li>
          <li><button @click="handleNavigate(PageView.BOOKING)" class="hover:text-gold-400 transition-colors">Rooms & Suites</button></li>
          <li><button @click="handleNavigate(PageView.AMENITIES)" class="hover:text-gold-400 transition-colors">Spa & Wellness</button></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-serif text-lg mb-6">Contact</h4>
        <ul class="space-y-4 text-sm">
          <li class="flex items-start gap-3">
            <MapPin class="h-5 w-5 text-gold-500 shrink-0" />
            <span>123 Alpine Way,<br/>Zermatt, Switzerland</span>
          </li>
          <li class="flex items-center gap-3">
            <Phone class="h-5 w-5 text-gold-500 shrink-0" />
            <span>+41 22 555 0199</span>
          </li>
          <li class="flex items-center gap-3">
            <Mail class="h-5 w-5 text-gold-500 shrink-0" />
            <span>concierge@luminagrand.com</span>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="text-white font-serif text-lg mb-6">Newsletter</h4>
        <p class="text-sm text-stone-400 mb-4">Subscribe for exclusive offers and updates.</p>
        <div class="flex flex-col gap-2">
          <input 
            type="email" 
            placeholder="Your email address" 
            class="bg-stone-800 border-none p-3 text-sm focus:ring-1 focus:ring-gold-500 text-white placeholder-stone-500"
          />
          <button class="bg-gold-600 text-white w-full py-2.5 text-sm uppercase tracking-wider font-bold hover:bg-gold-500 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-stone-800 text-center text-xs text-stone-500">
      &copy; {{ new Date().getFullYear() }} Lumina Grand Hotel. All rights reserved.
    </div>
  </footer>
</template>
