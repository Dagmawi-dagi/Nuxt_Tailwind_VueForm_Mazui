<script setup lang="js">

const team = [
  { name: "Elena Rossi", role: "General Manager", img: "https://picsum.photos/300/300?random=20" },
  { name: "Marco Pierre", role: "Executive Chef", img: "https://picsum.photos/300/300?random=21" },
  { name: "Sarah Jenkins", role: "Head of Concierge", img: "https://picsum.photos/300/300?random=22" }
];
</script>

<template>
  <div class="animate-in fade-in duration-500">
    <!-- Hero -->
    <div class="bg-stone-900 dark:bg-amber-200 dark:text-black text-white py-24 text-center pt-40">
      <h1 class="text-5xl font-serif mb-4">Our Story</h1>
      <p class="text-stone-400 max-w-xl mx-auto px-6">
        A century of excellence in the heart of the mountains.
      </p>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-6 py-20">
      <div class="prose prose-lg prose-stone mx-auto">
        <p class="text-xl font-serif leading-relaxed mb-8 text-stone-800">
          "Lumina Grand isn't just a hotel; it is a testament to the art of hospitality, preserved through four generations of the Rossi family."
        </p>
        <p class="mb-6 text-stone-600">
          Nestled in the pristine valley of Zermatt, Lumina Grand opened its doors in 1924. Originally a modest alpine lodge for mountaineers, it has evolved into one of Switzerland's most prestigious luxury resorts.
        </p>
        <p class="mb-6 text-stone-600">
          Our philosophy is simple: anticipation. We believe in understanding our guests' needs before they are spoken. From our Michelin-starred kitchen led by Chef Marco Pierre, to our world-class spa treatments utilizing glacial water, every detail is curated for your rejuvenation.
        </p>

        <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
          <img src="https://picsum.photos/600/400?random=10" alt="Historical photo" class="rounded-sm shadow-lg" />
          <img src="https://picsum.photos/600/400?random=11" alt="Modern interior" class="rounded-sm shadow-lg" />
        </div>

        <h3 class="text-2xl font-serif text-stone-900 mt-12 mb-6">Sustainability</h3>
        <p class="text-stone-600">
          We are committed to preserving the alpine environment that we call home. Lumina Grand is 100% carbon neutral, utilizing geothermal heating and locally sourced amenities to minimize our footprint while maximizing your comfort.
        </p>
      </div>
    </div>

    <!-- Testimonials - Light Theme -->
    <TestimonialSection :dark="false" />

    <!-- Team Section -->
    <div class="bg-stone-100 py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-serif mb-12">Meet the Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(member, i) in team" :key="i" class="bg-white p-6 shadow-sm">
            <img :src="member.img" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h4 class="font-serif text-lg">{{ member.name }}</h4>
            <p class="text-stone-500 text-sm uppercase tracking-wider">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
