/**
 * Family Japan trip map data.
 * Update itineraryStops from your spreadsheet — placeholders are intentional.
 * nearbySuggestions are real kid-friendly extras (not standard temple/tower stops).
 */
const tripData = {
  national: {
    center: [137.5, 36.2],
    zoom: 5.2,
    pitch: 0,
    bearing: 0,
  },
  cities: {
    tokyo: {
      id: "tokyo",
      name: "Tokyo",
      coordinates: [139.6917, 35.6895],
      zoom: 12.4,
      pitch: 55,
      bearing: -20,
      itineraryStops: [
        {
          id: "tokyo-stop-1",
          name: "Stop 1 — update me",
          summary:
            "Placeholder stop. Replace with your real Tokyo itinerary from the spreadsheet.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Tokyo+Stop+1",
          coordinates: [139.7006, 35.689],
        },
        {
          id: "tokyo-stop-2",
          name: "Stop 2 — update me",
          summary:
            "Placeholder stop. Swap in your second Tokyo place name, notes, and photo.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Tokyo+Stop+2",
          coordinates: [139.7101, 35.6586],
        },
        {
          id: "tokyo-stop-3",
          name: "Stop 3 — update me",
          summary:
            "Placeholder stop. Add the third Tokyo visit details when you are ready.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Tokyo+Stop+3",
          coordinates: [139.7671, 35.6812],
        },
      ],
      nearbySuggestions: [
        {
          id: "tokyo-discover-1",
          name: "GiGO Ikebukuro",
          summary:
            "A huge multi-floor arcade with claw machines, rhythm games, and photo booths — perfect for a rainy afternoon score-chase.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=GiGO+Ikebukuro",
          coordinates: [139.7109, 35.7298],
          tag: "Arcade",
        },
        {
          id: "tokyo-discover-2",
          name: "Itoya Ginza",
          summary:
            "A famous stationery wonderland with fancy pens, stickers, washi tape, and journals — great for stocking a travel scrapbook.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Itoya+Ginza",
          coordinates: [139.7658, 35.6717],
          tag: "Stationery",
        },
        {
          id: "tokyo-discover-3",
          name: "Miraikan",
          summary:
            "The National Museum of Emerging Science and Innovation — try hands-on exhibits, robots, and a giant Earth globe you can walk under.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Miraikan",
          coordinates: [139.777, 35.619],
          tag: "Science",
        },
      ],
    },
    kanazawa: {
      id: "kanazawa",
      name: "Kanazawa",
      coordinates: [136.6561, 36.5613],
      zoom: 13.1,
      pitch: 50,
      bearing: 25,
      itineraryStops: [
        {
          id: "kanazawa-stop-1",
          name: "Stop 1 — update me",
          summary:
            "Placeholder stop. Replace with your real Kanazawa itinerary from the spreadsheet.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kanazawa+Stop+1",
          coordinates: [136.6622, 36.5622],
        },
        {
          id: "kanazawa-stop-2",
          name: "Stop 2 — update me",
          summary:
            "Placeholder stop. Swap in your second Kanazawa place name, notes, and photo.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kanazawa+Stop+2",
          coordinates: [136.6566, 36.572],
        },
        {
          id: "kanazawa-stop-3",
          name: "Stop 3 — update me",
          summary:
            "Placeholder stop. Add the third Kanazawa visit details when you are ready.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kanazawa+Stop+3",
          coordinates: [136.6485, 36.561],
        },
      ],
      nearbySuggestions: [
        {
          id: "kanazawa-discover-1",
          name: "21st Century Museum",
          summary:
            "A circular contemporary art museum with a free public zone — kids love the outdoor “swimming pool” optical illusion and playful installations.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=21st+Century+Museum",
          coordinates: [136.6565, 36.5608],
          tag: "Art",
        },
        {
          id: "kanazawa-discover-2",
          name: "Hakuichi Gold Leaf Workshop",
          summary:
            "Try a gold-leaf craft class — press shimmering foil onto chopsticks, a coaster, or a postcard to take home.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Gold+Leaf+Workshop",
          coordinates: [136.6598, 36.5628],
          tag: "Hands-on",
        },
        {
          id: "kanazawa-discover-3",
          name: "Myoryuji Ninja Temple",
          summary:
            "A puzzle-box temple tour with trap doors, hidden stairs, and secret rooms — book ahead for the guided adventure.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Ninja+Temple",
          coordinates: [136.646, 36.5555],
          tag: "Adventure",
        },
      ],
    },
    takayama: {
      id: "takayama",
      name: "Takayama",
      coordinates: [137.2522, 36.146],
      zoom: 13.4,
      pitch: 48,
      bearing: -12,
      itineraryStops: [
        {
          id: "takayama-stop-1",
          name: "Stop 1 — update me",
          summary:
            "Placeholder stop. Replace with your real Takayama itinerary from the spreadsheet.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Takayama+Stop+1",
          coordinates: [137.2595, 36.1405],
        },
        {
          id: "takayama-stop-2",
          name: "Stop 2 — update me",
          summary:
            "Placeholder stop. Swap in your second Takayama place name, notes, and photo.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Takayama+Stop+2",
          coordinates: [137.2528, 36.1485],
        },
        {
          id: "takayama-stop-3",
          name: "Stop 3 — update me",
          summary:
            "Placeholder stop. Add the third Takayama visit details when you are ready.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Takayama+Stop+3",
          coordinates: [137.244, 36.1468],
        },
      ],
      nearbySuggestions: [
        {
          id: "takayama-discover-1",
          name: "Teddy Bear Eco Village",
          summary:
            "A cozy teddy-bear museum and garden with thousands of bears, photo spots, and a sweet break from temple-hopping.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Teddy+Bear+Village",
          coordinates: [137.2415, 36.1355],
          tag: "Museum",
        },
        {
          id: "takayama-discover-2",
          name: "Takayama Showa Museum",
          summary:
            "Step into a recreation of 1950s–70s Japan — candy shops, retro games, and classrooms that feel like a time-travel set.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Showa+Museum",
          coordinates: [137.2582, 36.1418],
          tag: "Retro",
        },
        {
          id: "takayama-discover-3",
          name: "Sarubobo Folklore Museum",
          summary:
            "Learn about the famous red monkey dolls of Hida, then craft or pick a sarubobo charm for good luck on the trip.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Sarubobo",
          coordinates: [137.2605, 36.1428],
          tag: "Craft",
        },
      ],
    },
    kyoto: {
      id: "kyoto",
      name: "Kyoto",
      coordinates: [135.7681, 35.0116],
      zoom: 12.6,
      pitch: 52,
      bearing: 18,
      itineraryStops: [
        {
          id: "kyoto-stop-1",
          name: "Stop 1 — update me",
          summary:
            "Placeholder stop. Replace with your real Kyoto itinerary from the spreadsheet.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kyoto+Stop+1",
          coordinates: [135.782, 35.003],
        },
        {
          id: "kyoto-stop-2",
          name: "Stop 2 — update me",
          summary:
            "Placeholder stop. Swap in your second Kyoto place name, notes, and photo.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kyoto+Stop+2",
          coordinates: [135.7745, 35.026],
        },
        {
          id: "kyoto-stop-3",
          name: "Stop 3 — update me",
          summary:
            "Placeholder stop. Add the third Kyoto visit details when you are ready.",
          image: "https://placehold.co/600x360/b8e8f5/1a4a5c?text=Kyoto+Stop+3",
          coordinates: [135.748, 35.014],
        },
      ],
      nearbySuggestions: [
        {
          id: "kyoto-discover-1",
          name: "Kyoto Railway Museum",
          summary:
            "Climb into real trains, ride a steam locomotive simulator, and explore giant locomotives — a hit for train-loving tweens.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Railway+Museum",
          coordinates: [135.7425, 34.9872],
          tag: "Trains",
        },
        {
          id: "kyoto-discover-2",
          name: "Kyoto International Manga Museum",
          summary:
            "Walls of manga you can browse freely, plus exhibits about comics culture — pick a volume and claim a reading nook.",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Manga+Museum",
          coordinates: [135.7594, 35.0116],
          tag: "Manga",
        },
        {
          id: "kyoto-discover-3",
          name: "Nintendo Museum",
          summary:
            "In nearby Uji — interactive stations tracing Nintendo from hanafuda cards to consoles, with playable classics (book timed tickets).",
          image: "https://placehold.co/600x360/c5f0e0/1a5c45?text=Nintendo+Museum",
          coordinates: [135.8025, 34.9075],
          tag: "Games",
        },
      ],
    },
  },
};
