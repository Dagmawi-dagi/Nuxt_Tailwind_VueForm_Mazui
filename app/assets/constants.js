const ROOMS = [
  {
    id: 'superior-queen',
    name: 'Superior Queen',
    category: 'Rooms',
    description: 'Cozy alpine luxury designed for solo travelers or couples, featuring warmth, intimacy, and a courtyard view.',
    price: 280,
    capacity: 2,
    image: 'https://picsum.photos/600/400?random=104',
    amenities: ['Courtyard View', '30 sqm', 'Rain Shower']
  },
  {
    id: 'deluxe-king',
    name: 'Deluxe King',
    category: 'Rooms',
    description: 'A spacious retreat featuring a king-sized bed, private balcony, and stunning mountain views.',
    price: 350,
    capacity: 2,
    image: 'https://picsum.photos/600/400?random=101',
    amenities: ['Mountain View', '45 sqm', 'Balcony']
  },
  {
    id: 'alpine-family',
    name: 'Alpine Family Suite',
    category: 'Suites',
    description: 'Perfect for families, offering two bedrooms, a cozy living area with a fireplace, and ample space.',
    price: 520,
    capacity: 4,
    image: 'https://picsum.photos/600/400?random=105',
    amenities: ['2 Bedrooms', 'Fireplace', '90 sqm']
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    category: 'Suites',
    description: 'Separate living area, marble bathroom with jacuzzi, and panoramic windows overlooking the peaks.',
    price: 600,
    capacity: 3,
    image: 'https://picsum.photos/600/400?random=102',
    amenities: ['Jacuzzi', '70 sqm', 'Lounge Access']
  },
  {
    id: 'chalet-residence',
    name: 'The Chalet',
    category: 'Residences',
    description: 'A standalone residence offering ultimate privacy with a private garden and direct ski-in/ski-out access.',
    price: 1200,
    capacity: 6,
    image: 'https://picsum.photos/600/400?random=106',
    amenities: ['Private Garden', 'Kitchen', 'Ski-in/out']
  },
  {
    id: 'royal-penthouse',
    name: 'Royal Penthouse',
    category: 'Residences',
    description: 'The pinnacle of luxury. Top floor exclusivity with a private sauna, butler service, and rooftop terrace.',
    price: 1500,
    capacity: 4,
    image: 'https://picsum.photos/600/400?random=103',
    amenities: ['Private Sauna', 'Butler', '150 sqm']
  }
];

const EVENTS = [
  {
    id: 'jazz-night',
    title: 'Alpine Jazz Nights',
    date: 'Every Friday',
    time: '20:00 - 23:00',
    location: 'The Obsidian Lounge',
    description: 'Experience the smooth sounds of the Zermatt Jazz Trio while enjoying our signature cocktails. No reservation required.',
    image: 'https://picsum.photos/800/600?random=201',
    category: 'Music',
    price: 'Free Entry'
  },
  {
    id: 'chefs-table',
    title: 'Chef\'s Table Experience',
    date: 'Nov 24, 2024',
    time: '19:00',
    location: 'L\'Etoile Restaurant',
    description: 'An exclusive 7-course tasting menu curated by Chef Marco Pierre, featuring seasonal white truffles.',
    image: 'https://picsum.photos/800/600?random=202',
    category: 'Dining',
    price: '$250 pp'
  },
  {
    id: 'sunrise-yoga',
    title: 'Sunrise Glacial Yoga',
    date: 'Daily',
    time: '07:00 - 08:00',
    location: 'Spa Terrace',
    description: 'Greet the sun as it hits the Matterhorn. Mats and warm tea provided. All levels welcome.',
    image: 'https://picsum.photos/800/600?random=203',
    category: 'Wellness',
    price: 'Complimentary'
  },
  {
    id: 'wine-tasting',
    title: 'Swiss Wine Masterclass',
    date: 'Dec 02, 2024',
    time: '16:00',
    location: 'The Wine Cellar',
    description: 'Discover the hidden gems of Valais winemaking with our head sommelier.',
    image: 'https://picsum.photos/800/600?random=204',
    category: 'Social',
    price: '$80 pp'
  },
  {
    id: 'apres-ski',
    title: 'Après-Ski Social',
    date: 'Daily (Winter)',
    time: '15:00 - 18:00',
    location: 'Outdoor Fire Pit',
    description: 'Warm up after the slopes with hot chocolate, mulled wine, and live DJ sets.',
    image: 'https://picsum.photos/800/600?random=205',
    category: 'Social',
    price: 'Free Entry'
  }
];

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sarah & James Mitchell',
    location: 'London, UK',
    rating: 5,
    text: "The attention to detail is simply unmatched. From the ski concierge to the private dining, Lumina Grand redefined what luxury means to us."
  },
  {
    id: 't2',
    name: 'Elena V.',
    location: 'Milan, Italy',
    rating: 5,
    text: "A magical experience. Waking up to the view of the Matterhorn from our suite was a memory I will cherish forever. The spa is world-class."
  },
  {
    id: 't3',
    name: 'Thomas H.',
    location: 'New York, USA',
    rating: 5,
    text: "Business and leisure perfectly balanced. The executive suite provided the perfect workspace, while the slopes were just steps away."
  },
];

const FACILITIES = [
  {
    id: 'restaurant',
    title: "L'Etoile",
    subtitle: "Michelin-Starred Dining",
    description: "A culinary journey through the Alps. Chef Marco Pierre creates seasonal masterpieces using locally sourced ingredients, paired with a wine list featuring rare vintage selections.",
    image: "https://picsum.photos/800/600?random=301",
    features: ["7-Course Tasting Menu", "Private Dining Room", "Panoramic Views"],
    hours: "Dinner: 18:30 - 22:30"
  },
  {
    id: 'bar',
    title: "The Obsidian Lounge",
    subtitle: "Craft Cocktails & Jazz",
    description: "An intimate setting for after-hours relaxation. Enjoy bespoke cocktails inspired by mountain herbs, rare whiskies, and live jazz performances every Friday and Saturday.",
    image: "https://picsum.photos/800/600?random=302",
    features: ["Signature Cocktails", "Fireplace", "Live Music"],
    hours: "Open Daily: 16:00 - 01:00"
  },
  {
    id: 'pool',
    title: "Glacial Spa & Infinity Pool",
    subtitle: "Wellness Redefined",
    description: "Immerse yourself in our heated indoor-outdoor infinity pool that blends seamlessly with the snowy landscape. Our spa offers treatments utilizing glacial water and alpine botanicals.",
    image: "https://picsum.photos/800/600?random=303",
    features: ["Heated Infinity Pool", "Thermal Circuit", "Sauna & Steam Room"],
    hours: "07:00 - 21:00"
  },
  {
    id: 'gym',
    title: "Peak Performance Center",
    subtitle: "State-of-the-art Fitness",
    description: "Maintain your regimen at altitude. Equipped with the latest Technogym Artis line, personal training pods, and a yoga studio facing the Matterhorn.",
    image: "https://picsum.photos/800/600?random=304",
    features: ["Technogym Equipment", "Yoga Studio", "Personal Training"],
    hours: "24 Hours"
  },
  {
    id: 'conference',
    title: "Summit Conference Center",
    subtitle: "Business at 2000m",
    description: "Inspire your team with a backdrop of peaks. Our configurable conference rooms are equipped with cutting-edge AV technology, high-speed connectivity, and ergonomic design.",
    image: "https://picsum.photos/800/600?random=305",
    features: ["Capacity up to 100", "Video Conferencing", "Catering Service"]
  },
  {
    id: 'entertainment',
    title: "Aurora Cinema & Game Room",
    subtitle: "Leisure for All Ages",
    description: "Unwind in our private 20-seat cinema screening classic and contemporary films, or challenge friends in our game room featuring billiards, vintage arcade games, and a virtual golf simulator.",
    image: "https://picsum.photos/800/600?random=306",
    features: ["Private Cinema", "Billiards", "Virtual Golf"],
    hours: "10:00 - 23:00"
  }
];

const ATTRACTIONS = [
  {
    id: 'matterhorn',
    name: "Matterhorn Glacier Paradise",
    description: "Ascend to Europe's highest cable car station at 3,883m. Experience breathtaking 360-degree panoramic views of the Swiss, French, and Italian Alps.",
    image: "https://picsum.photos/600/400?random=401",
    distance: "20 min via Cable Car",
    type: "Sightseeing"
  },
  {
    id: 'gornergrat',
    name: "Gornergrat Railway",
    description: "Take the historic open-air cog railway up to 3,089m for the best view of the Matterhorn and the surrounding 29 peaks above 4,000m.",
    image: "https://picsum.photos/600/400?random=402",
    distance: "5 min walk to Station",
    type: "Excursion"
  },
  {
    id: 'old-village',
    name: "Hinterdorf (Old Village)",
    description: "Step back in time in Zermatt's oldest district. Walk among barns and storehouses built from ancient larch timber, some dating back to the 16th century.",
    image: "https://picsum.photos/600/400?random=403",
    distance: "10 min walk",
    type: "Culture"
  },
  {
    id: 'museum',
    name: "Matterhorn Museum - Zermatlantis",
    description: "An underground museum revealing the history of the village and the tragic yet heroic first ascent of the Matterhorn in 1865.",
    image: "https://picsum.photos/600/400?random=404",
    distance: "5 min walk",
    type: "Museum"
  },
  {
    id: '5-lakes',
    name: "Five Lakes Walk",
    description: "A stunning hiking trail that passes five crystal-clear mountain lakes. In three of them, the Matterhorn is reflected mirrored on the water's surface.",
    image: "https://picsum.photos/600/400?random=405",
    distance: "Accessible via Sunnegga",
    type: "Hiking"
  },
  {
    id: 'shopping',
    name: "Bahnhofstrasse Shopping",
    description: "Stroll through the main car-free street offering everything from Swiss watches and chocolate to high-end fashion and mountaineering gear.",
    image: "https://picsum.photos/600/400?random=406",
    distance: "On your doorstep",
    type: "Lifestyle"
  }
];

// Exporting for use in other JS modules
export { ROOMS, EVENTS, TESTIMONIALS, FACILITIES, ATTRACTIONS };
