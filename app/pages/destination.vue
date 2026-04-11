
<script setup lang="js">
import { ATTRACTIONS } from '@/assets/constants' // Adjust path based on your project
import { MapPin, ArrowUpRight } from 'lucide-vue-next'
</script>


<template>
  <div class="animate-in fade-in duration-500 bg-white ">
    <!-- Hero Section -->
    <div class="relative h-[60vh] flex items-center justify-center overflow-hidden pt-40">
      <div class="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=500"
          alt="Zermatt Village"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-stone-900/40"/>
      </div>

      <div class="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 class="text-5xl md:text-7xl font-serif mb-6">Discover Zermatt</h1>
        <p class="text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto">
          A car-free sanctuary at the foot of the Matterhorn. Where heritage meets alpine adventure.
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="mb-16 text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-serif text-stone-900 mb-6">Explore the Region</h2>
        <p class="text-stone-600 leading-relaxed">
          Whether you seek the thrill of the slopes, the tranquility of mountain lakes,
          or the charm of the old village, Zermatt offers an unforgettable experience in every season.
        </p>
      </div>

      <!-- Attractions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="attraction in ATTRACTIONS"
          :key="attraction.id"
          class="group cursor-pointer"
        >
          <div class="relative overflow-hidden h-80 rounded-sm mb-6">
            <img
              :src="attraction.image"
              :alt="attraction.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-stone-900">
              {{ attraction.type }}
            </div>
          </div>

          <div>
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-serif text-stone-900 group-hover:text-gold-600 transition-colors">
                {{ attraction.name }}
              </h3>
              <ArrowUpRight :size="20" class="text-stone-300 group-hover:text-gold-600 transition-colors" />
            </div>

            <p class="text-stone-500 text-sm leading-relaxed mb-4 min-h-[60px]">
              {{ attraction.description }}
            </p>

            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600 border-t border-stone-100 pt-4">
              <MapPin :size="14" />
              <span>{{ attraction.distance }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
