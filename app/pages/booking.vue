<template>
  <div class="animate-in fade-in duration-500 min-h-screen bg-stone-50 pb-20">
    <!-- Header -->
    <div class="bg-stone-900 text-white py-16 text-center pt-40">
      <h1 class="text-4xl font-serif mb-4">Book Your Stay</h1>

      <!-- Steps -->
      <div class="flex justify-center items-center gap-4 text-sm uppercase tracking-widest text-stone-400">
        <span :class="step >= STEP_DATES ? 'text-gold-500' : ''">1. Dates</span>
        <span class="text-stone-700">/</span>
        <span :class="step >= STEP_ROOMS ? 'text-gold-500' : ''">2. Room</span>
        <span class="text-stone-700">/</span>
        <span :class="step >= STEP_DETAILS ? 'text-gold-500' : ''">3. Details</span>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 -mt-8 relative z-10">

      <!-- STEP 1: DATES -->
      <div v-if="step === STEP_DATES" class="bg-white p-8 md:p-12 shadow-xl rounded-sm">
        <h2 class="text-2xl font-serif text-stone-900 mb-6">Select Dates & Guests</h2>

        <form @submit.prevent="handleDateSubmit" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
              <Calendar size="16" /> Check In
            </label>
            <input type="date" required v-model="dates.checkIn"
              class="w-full border border-stone-300 p-3 text-stone-700 focus:ring-1 focus:ring-gold-500 outline-none" />
          </div>

          <div>
            <label class="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
              <Calendar size="16" /> Check Out
            </label>
            <input type="date" required v-model="dates.checkOut"
              class="w-full border border-stone-300 p-3 text-stone-700 focus:ring-1 focus:ring-gold-500 outline-none" />
          </div>

          <div>
            <label class="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
              <Users size="16" /> Guests
            </label>
            <select v-model="guests"
              class="w-full border border-stone-300 p-3.5 text-stone-700 focus:ring-1 focus:ring-gold-500 outline-none bg-white">
              <option v-for="n in 6" :key="n" :value="n">{{ n }} Guest{{ n > 1 ? 's' : '' }}</option>
            </select>
          </div>

          <div class="md:col-span-3 mt-4 flex justify-end">
            <button type="submit"
              class="bg-gold-600 text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors flex items-center gap-2">
              Check Availability <ChevronRight size="18" />
            </button>
          </div>
        </form>
      </div>

      <!-- STEP 2: ROOMS -->
      <div v-if="step === STEP_ROOMS" class="space-y-6">
        <button @click="step = STEP_DATES"
          class="text-stone-500 flex items-center gap-2 hover:text-stone-900 mb-4">
          <ChevronLeft size="18" /> Back to Dates
        </button>

        <div v-for="room in availableRooms" :key="room.id"
          class="bg-white p-6 md:p-0 shadow-md flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div class="md:w-1/3 h-64 md:h-auto overflow-hidden relative group">
            <img :src="room.image" :alt="room.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-2 left-2 bg-stone-900 text-white text-xs px-2 py-1 uppercase tracking-wider">
              {{ room.category }}
            </div>
          </div>

          <div class="md:w-2/3 md:py-6 md:pr-6 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-2xl font-serif text-stone-900">{{ room.name }}</h3>
                <p class="text-xl font-bold text-gold-600">${{ room.price }}
                  <span class="text-xs text-stone-400 font-normal">/ night</span>
                </p>
              </div>

              <p class="text-stone-600 mb-4">{{ room.description }}</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="am in room.amenities" :key="am"
                  class="bg-stone-100 text-stone-600 px-3 py-1 text-xs uppercase tracking-wide">
                  {{ am }}
                </span>
              </div>
            </div>

            <div class="flex justify-end">
              <button @click="handleRoomSelect(room)"
                class="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors">
                Select Room
              </button>
            </div>
          </div>
        </div>

        <div v-if="availableRooms.length === 0" class="p-8 text-center text-stone-500 bg-white shadow-sm">
          <p>No rooms available. Try reducing guests.</p>
        </div>
      </div>

      <!-- STEP 3: DETAILS -->
      <div v-if="step === STEP_DETAILS && selectedRoom" class="bg-white p-8 md:p-12 shadow-xl rounded-sm">
        <button @click="step = STEP_ROOMS"
          class="text-stone-500 flex items-center gap-2 hover:text-stone-900 mb-6">
          <ChevronLeft size="18" /> Back to Rooms
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-serif mb-6">Guest Details</h3>
            <form id="booking-form" @submit.prevent="confirmBooking" class="space-y-4">
              <input type="text" placeholder="Full Name" required class="w-full border p-3 outline-none focus:border-gold-500" />
              <input type="email" placeholder="Email" required class="w-full border p-3 outline-none focus:border-gold-500" />
              <input type="tel" placeholder="Phone" required class="w-full border p-3 outline-none focus:border-gold-500" />
              <textarea placeholder="Special Requests" class="w-full border p-3 outline-none focus:border-gold-500 h-32"></textarea>
            </form>
          </div>

          <div class="bg-stone-50 p-8 border">
            <h3 class="text-xl font-serif mb-6">Booking Summary</h3>
            <div class="space-y-4 text-sm text-stone-600">
              <div class="flex justify-between"><span>Check In:</span> <b>{{ dates.checkIn }}</b></div>
              <div class="flex justify-between"><span>Check Out:</span> <b>{{ dates.checkOut }}</b></div>
              <div class="flex justify-between"><span>Guests:</span> <b>{{ guests }}</b></div>
              <div class="flex justify-between"><span>Room:</span> <b>{{ selectedRoom.name }}</b></div>

              <div class="border-t pt-4 mt-4 flex justify-between text-lg font-serif font-bold text-stone-900">
                <span>Total</span>
                <span>${{ selectedRoom.price }} <small class="text-xs text-stone-500">(est.)</small></span>
              </div>
            </div>

            <button type="submit" form="booking-form"
              class="w-full bg-gold-600 text-white py-4 mt-8 uppercase tracking-widest font-bold text-sm hover:bg-gold-500">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      <!-- STEP 4: CONFIRMATION -->
      <div v-if="step === STEP_CONFIRM" class="bg-white p-12 shadow-xl text-center rounded-sm">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size="40" class="text-green-600" />
        </div>
        <h2 class="text-3xl font-serif text-stone-900 mb-4">Reservation Confirmed</h2>
        <button @click="resetBooking"
          class="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-600">
          Book Again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue'
import { Calendar, Users, Check, ChevronRight, ChevronLeft } from 'lucide-vue-next'
import { ROOMS } from '../assets/constants'

// Simple numeric steps
const STEP_DATES = 0
const STEP_ROOMS = 1
const STEP_DETAILS = 2
const STEP_CONFIRM = 3

const step = ref(STEP_DATES)
const dates = ref({ checkIn: '', checkOut: '' })
const guests = ref(2)
const selectedRoom = ref(null)

const availableRooms = computed(() => ROOMS.filter(r => r.capacity >= guests.value))

const handleDateSubmit = () => {
  if (dates.value.checkIn && dates.value.checkOut) step.value = STEP_ROOMS
}

const handleRoomSelect = room => {
  selectedRoom.value = room
  step.value = STEP_DETAILS
}

const confirmBooking = () => step.value = STEP_CONFIRM

const resetBooking = () => {
  step.value = STEP_DATES
  selectedRoom.value = null
  dates.value = { checkIn: '', checkOut: '' }
}
</script>
