<script setup lang="js">
import { EVENTS } from '@/assets/constants'
import { Clock, MapPin, Tag } from 'lucide-vue-next'

const filter = ref('All')
const categories = ['All', 'Dining', 'Wellness', 'Music', 'Social']

const filteredEvents = computed(() => {
  return filter.value === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.category === filter.value)
})
</script>

<template>
  <div class="animate-in fade-in duration-500 min-h-screen bg-white">
    <!-- Hero -->
    <div class="bg-stone-900 text-white py-24 text-center relative overflow-hidden pt-40">
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://picsum.photos/1920/600?grayscale&blur=2"
          alt="Events Background"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="relative z-10">
        <h1 class="text-5xl font-serif mb-4">Lumina Journal</h1>
        <p class="text-stone-400 max-w-xl mx-auto px-6">
          Upcoming gatherings, culinary experiences, and wellness notes.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <!-- Filter -->
      <div class="flex flex-wrap justify-center gap-8 mb-20 border-b border-stone-100 pb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="filter = cat"
          :class="[
            'text-sm uppercase tracking-widest font-bold transition-colors duration-300',
            filter === cat ? 'text-gold-600' : 'text-stone-400 hover:text-stone-800'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        <article
          v-for="event in filteredEvents"
          :key="event.id"
          class="group flex flex-col h-full cursor-default"
        >
          <!-- Image -->
          <div class="relative h-72 overflow-hidden mb-8 bg-stone-100">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div class="absolute top-0 left-0 bg-stone-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
              {{ event.category }}
            </div>
          </div>

          <div class="flex flex-col flex-grow">
            <!-- Meta -->
            <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gold-600 mb-3">
              <span>{{ event.date }}</span>
              <span class="w-1 h-1 bg-stone-300 rounded-full"></span>
              <span class="text-stone-400 font-medium normal-case flex items-center gap-1">
                <Clock :size="12" /> {{ event.time }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-3xl font-serif text-stone-900 leading-tight mb-4 group-hover:text-gold-600 transition-colors duration-300">
              {{ event.title }}
            </h3>

            <!-- Description -->
            <p class="text-stone-500 leading-relaxed mb-8 flex-grow">
              {{ event.description }}
            </p>

            <!-- Footer -->
            <div class="pt-6 border-t border-stone-100 flex items-center justify-between text-sm text-stone-500">
              <div class="flex items-center gap-2">
                <MapPin :size="16" class="text-gold-500" />
                <span>{{ event.location }}</span>
              </div>
              <div v-if="event.price" class="flex items-center gap-2">
                <Tag :size="16" class="text-stone-300" />
                <span>{{ event.price }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="filteredEvents.length === 0" class="text-center py-20 text-stone-500">
        <p>No stories found in this category.</p>
      </div>
    </div>
  </div>
</template>
