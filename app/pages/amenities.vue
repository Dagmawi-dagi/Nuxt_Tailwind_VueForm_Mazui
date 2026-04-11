<script setup lang="ts">
import { FACILITIES } from '../assets/constants';
import { Clock, Check } from 'lucide-vue-next';
</script>

<template>
  <div class="animate-in fade-in duration-500 bg-white">
    <!-- Hero -->
    <div class="bg-stone-900 text-white py-24 text-center pt-40">
      <h1 class="text-5xl font-serif mb-4">Amenities</h1>
      <p class="text-stone-400 max-w-xl mx-auto px-6">Curated experiences for the body, mind, and spirit.</p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div 
        v-for="(facility, index) in FACILITIES" 
        :key="facility.id" 
        :class="[
          'flex flex-col md:flex-row gap-12 lg:gap-24 items-center py-16 border-b border-stone-100 last:border-0',
          index % 2 === 1 ? 'md:flex-row-reverse' : ''
        ]"
      >
        <!-- Image Side -->
        <div class="w-full md:w-1/2">
          <div class="relative overflow-hidden h-[400px] shadow-lg rounded-sm group">
            <img 
              :src="facility.image" 
              :alt="facility.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" ></div>  
          </div>
        </div>

        <!-- Content Side -->
        <div class="w-full md:w-1/2 space-y-6">
          <div>
            <h3 class="text-gold-600 text-sm font-bold uppercase tracking-widest mb-2">{{ facility.subtitle }}</h3>
            <h2 class="text-4xl font-serif text-stone-900">{{ facility.title }}</h2>
          </div>
          
          <p class="text-stone-600 text-lg leading-relaxed font-light">
            {{ facility.description }}
          </p>

          <div class="pt-4 space-y-4">
            <!-- Features List -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                v-for="(feature, i) in facility.features" 
                :key="i" 
                class="flex items-center gap-2 text-stone-700 text-sm font-medium"
              >
                <div class="bg-stone-100 p-1 rounded-full">
                  <Check :size="12" class="text-stone-900" />
                </div>
                {{ feature }}
              </div>
            </div>

            <!-- Hours -->
            <div v-if="facility.hours" class="flex items-center gap-2 text-stone-500 text-sm pt-4 border-t border-stone-100 mt-4">
              <Clock :size="16" />
              <span>{{ facility.hours }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
