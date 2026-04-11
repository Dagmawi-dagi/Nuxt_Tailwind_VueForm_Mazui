<script setup lang="js">
import { TESTIMONIALS } from '../assets/constants';
import { Star } from 'lucide-vue-next';

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section :class="['py-24', props.dark ? 'bg-stone-900 text-white' : 'bg-white text-stone-900']">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h3 
          :class="['uppercase tracking-widest text-sm font-bold mb-3', props.dark ? 'text-gold-500' : 'text-gold-600']"
        >
          Guest Stories
        </h3>
        <h2 class="text-4xl font-serif">Unforgettable Moments</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="t in TESTIMONIALS" :key="t.id" class="text-center flex flex-col items-center">
          <div class="flex justify-center mb-6 gap-1">
            <Star 
              v-for="i in t.rating" 
              :key="i" 
              size="16" 
              fill="currentColor" 
              :class="props.dark ? 'text-gold-500' : 'text-gold-600'" 
            />
          </div>

          <p 
            :class="['font-serif text-xl italic leading-relaxed mb-8 flex-grow', props.dark ? 'text-stone-300' : 'text-stone-600']"
          >
            "{{ t.text }}"
          </p>

          <div>
            <h4 class="font-bold uppercase tracking-wider text-sm">{{ t.name }}</h4>
            <span :class="['text-xs mt-1 block', props.dark ? 'text-stone-500' : 'text-stone-400']">
              {{ t.location }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
