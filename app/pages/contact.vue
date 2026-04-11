<script setup lang="js">
// Import Vue icons
import { MapPin, Phone, Mail } from 'lucide-vue-next';
</script>

<template>
  <div class="animate-in fade-in duration-500 min-h-screen bg-white">
    <!-- Hero -->
    <div class="bg-stone-900 text-white py-24 text-center pt-40">
      <h1 class="text-5xl font-serif mb-4">Contact Us</h1>
      <p class="text-stone-400 max-w-xl mx-auto px-6">We are at your service 24/7.</p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Info Side -->
      <div>
        <h2 class="text-3xl font-serif text-stone-900 mb-8">Get in Touch</h2>
        <p class="text-stone-600 mb-12">
          Whether you are planning a corporate retreat, a romantic getaway, or a family vacation, 
          our team is here to assist you with every detail.
        </p>

        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="bg-gold-100 p-3 rounded-full text-gold-700">
              <MapPin :size="24" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900">Location</h4>
              <p class="text-stone-600">123 Alpine Way, Zermatt, 3920, Switzerland</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-gold-100 p-3 rounded-full text-gold-700">
              <Phone :size="24" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900">Phone</h4>
              <p class="text-stone-600">+41 22 555 0199</p>
              <p class="text-stone-500 text-sm">Mon-Fri, 9am - 6pm CET</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-gold-100 p-3 rounded-full text-gold-700">
              <Mail :size="24" />
            </div>
            <div>
              <h4 class="font-bold text-stone-900">Email</h4>
              <p class="text-stone-600">concierge@luminagrand.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Side -->
      <div class="bg-stone-50 p-8 md:p-12 shadow-sm border border-stone-100">
        <h3 class="text-xl font-serif mb-6">Send us a message</h3>
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-stone-700 mb-2">First Name</label>
              <input type="text" class="w-full bg-white border border-stone-300 p-3 text-stone-900 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none" />
            </div>
            <div>
              <label class="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
              <input type="text" class="w-full bg-white border border-stone-300 p-3 text-stone-900 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
            <input type="email" class="w-full bg-white border border-stone-300 p-3 text-stone-900 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none" />
          </div>

          <div>
            <label class="block text-sm font-medium text-stone-700 mb-2">Message</label>
            <textarea rows="4" class="w-full bg-white border border-stone-300 p-3 text-stone-900 focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none"></textarea>
          </div>

          <button type="button" class="w-full bg-stone-900 text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-gold-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>

    <!-- Map Section -->
    <div class="w-full h-[600px] relative bg-stone-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22045.666877995667!2d7.73147895!3d46.02277025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f35a229113615%3A0x77cce13540d52d90!2sZermatt%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1709220000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        class="hover:filter-none transition-all duration-1000 ease-in-out"
      ></iframe>

      <!-- Floating Arrival Card -->
      <div class="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-sm p-6 shadow-2xl max-w-sm border-l-4 border-gold-600">
        <h4 class="font-serif font-bold text-stone-900 text-lg mb-2">Arrival Guide</h4>
        <p class="text-sm text-stone-600 leading-relaxed">
          <strong>Note:</strong> Zermatt is a car-free zone. Private vehicles must be parked in Täsch (5km away). 
          Our electric horse-carriage service operates from the Zermatt Train Station directly to the hotel entrance.
        </p>
      </div>
    </div>
  </div>
</template>
