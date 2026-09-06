/**
 * Family Japan trip map data — populated from the trip spreadsheet.
 * nearbySuggestions remain optional kid-friendly extras (not on the main itinerary).
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
      zoom: 11.2,
      pitch: 55,
      bearing: -20,
      itineraryStops: [
        {
          id: "tokyo-mimaru-ueno",
          name: "MIMARU Tokyo Ueno Okachimachi",
          summary:
            "Your first Tokyo home base — a roomy family apartment near Ueno where you can crash after the long flight and plot snack runs.",
          image: "https://mimaruhotels.com/app/uploads/2025/01/pc-1-7.jpg",
          coordinates: [139.7748, 35.7089],
        },
        {
          id: "tokyo-ameyoko",
          name: "Ameyoko Market",
          summary:
            "A packed shopping street under the train tracks with snack stalls, dried fruit, and cool souvenirs — perfect for tasting Japan one bite at a time.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ameya_Yokocho_Shopping_Street_%2853074765364%29.jpg/960px-Ameya_Yokocho_Shopping_Street_%2853074765364%29.jpg",
          coordinates: [139.7745, 35.7100],
        },
        {
          id: "tokyo-akihabara",
          name: "Akihabara",
          summary:
            "Tokyo’s neon “Electric Town” of arcades, anime shops, and gadget floors — hunt for rare figures and high-score glory.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Akihabara_Electric_Town%2C_Tokyo%2C_20240823_1617_5580.jpg/960px-Akihabara_Electric_Town%2C_Tokyo%2C_20240823_1617_5580.jpg",
          coordinates: [139.7744, 35.6987],
        },
        {
          id: "tokyo-imperial-palace",
          name: "Imperial Palace",
          summary:
            "Wander the moats, bridges, and huge East Gardens around the Emperor’s home — a calm green adventure right in downtown Tokyo.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/August_2007_Imperial_Palace_in_Tokyo_4.jpg/960px-August_2007_Imperial_Palace_in_Tokyo_4.jpg",
          coordinates: [139.7545, 35.6852],
        },
        {
          id: "tokyo-teamlab-planets",
          name: "teamLab Planets",
          summary:
            "Walk barefoot through glowing rooms of light, flowers, and even water — an art museum you don’t just look at, you step inside.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/At_teamLab_Planets_%2848277793276%29.jpg/960px-At_teamLab_Planets_%2848277793276%29.jpg",
          coordinates: [139.7897, 35.6494],
        },
        {
          id: "tokyo-cappiness",
          name: "CAPPINESS Capybara Cafe",
          summary:
            "Meet Japan’s chillest giant rodents — feed friendly capybaras, take silly photos, and leave with a story nobody at school will believe.",
          image: "https://cappiness.jp/_astro/shinjuku-cover.jkXQfMZV_1xrSe4.jpg",
          coordinates: [139.6998, 35.7108],
        },
        {
          id: "tokyo-disneyland-hotel",
          name: "Tokyo Disneyland Hotel",
          summary:
            "Sleep next door to the parks with Early Entry perks — wake up closer to the magic than almost anyone else in line.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tokyo_DisneyLand_Hotel.jpg/960px-Tokyo_DisneyLand_Hotel.jpg",
          coordinates: [139.8783, 35.6368],
        },
        {
          id: "tokyo-disneyland",
          name: "Tokyo Disneyland",
          summary:
            "Race to Beauty and the Beast, Pooh’s Hunny Hunt, and Baymax — then stay late for parade lights and fireworks energy.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cinderella_Castle%2C_Tokyo_Disneyland_%289407195793%29.jpg/960px-Cinderella_Castle%2C_Tokyo_Disneyland_%289407195793%29.jpg",
          coordinates: [139.8806, 35.6329],
        },
        {
          id: "tokyo-disneysea",
          name: "Tokyo DisneySea",
          summary:
            "A one-of-a-kind Disney park with oceans, volcanoes, and Fantasy Springs — ride Journey to the Center of the Earth if you dare.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mediterranean_Harbor_%28DisneySea%29_at_Night_-_Dec_2019.jpg/960px-Mediterranean_Harbor_%28DisneySea%29_at_Night_-_Dec_2019.jpg",
          coordinates: [139.8854, 35.6267],
        },
        {
          id: "tokyo-shinagawa-prince",
          name: "Shinagawa Prince Hotel",
          summary:
            "A mega hotel by Shinagawa Station with twin rooms for the DisneySea night — easy trains out toward Kanazawa the next morning.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shinagawa_Prince_Hotel_-_Tokyo%2C_Japan_-_DSC09419.jpg/960px-Shinagawa_Prince_Hotel_-_Tokyo%2C_Japan_-_DSC09419.jpg",
          coordinates: [139.7367, 35.6276],
        },
      ],
      nearbySuggestions: [
        {
          id: "tokyo-discover-1",
          name: "GiGO Ikebukuro",
          summary:
            "A huge multi-floor arcade with claw machines, rhythm games, and photo booths — perfect for a rainy afternoon score-chase.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sega_center_at_ikebukuro_tokyo.jpg/960px-Sega_center_at_ikebukuro_tokyo.jpg",
          coordinates: [139.7109, 35.7298],
          tag: "Arcade",
        },
        {
          id: "tokyo-discover-2",
          name: "Itoya Ginza",
          summary:
            "A famous stationery wonderland with fancy pens, stickers, washi tape, and journals — great for stocking a travel scrapbook.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Itoya_ginza.jpg/960px-Itoya_ginza.jpg",
          coordinates: [139.7658, 35.6717],
          tag: "Stationery",
        },
        {
          id: "tokyo-discover-3",
          name: "Miraikan",
          summary:
            "The National Museum of Emerging Science and Innovation — try hands-on exhibits, robots, and a giant Earth globe you can walk under.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Miraikan.jpg/960px-Miraikan.jpg",
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
          id: "kanazawa-kumu",
          name: "KUMU Kanazawa by The Share Hotels",
          summary:
            "A stylish share-hotel base after the shinkansen ride — drop bags, recharge, then head out to explore Kanazawa’s old streets.",
          image:
            "https://www.thesharehotels.com/kumu/wp2022/wp-content/themes/kumu2022/hotel/common/images/home/slide-1.jpg",
          coordinates: [136.6541, 36.5682],
        },
        {
          id: "kanazawa-kenrokuen",
          name: "Kenrokuen Garden",
          summary:
            "One of Japan’s three great gardens — hunt for the famous two-legged lantern, feed the koi vibes, and feel like you stepped into a painting.",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Kenroku-en_Kotoji_Lantern.jpg",
          coordinates: [136.6624, 36.5624],
        },
        {
          id: "kanazawa-nagamachi",
          name: "Nagamachi Samurai District",
          summary:
            "Wander earthen walls and old samurai houses — peek into a real warrior residence and imagine life with swords and secret gardens.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Nagamachi_Bukeyashiki.jpg/960px-Nagamachi_Bukeyashiki.jpg",
          coordinates: [136.65, 36.5638],
        },
      ],
      nearbySuggestions: [
        {
          id: "kanazawa-discover-1",
          name: "21st Century Museum",
          summary:
            "A circular contemporary art museum with a free public zone — kids love the outdoor “swimming pool” optical illusion and playful installations.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/21st_Century_Museum_of_Contemporary_Art%2C_Kanazawa011.jpg/960px-21st_Century_Museum_of_Contemporary_Art%2C_Kanazawa011.jpg",
          coordinates: [136.6565, 36.5608],
          tag: "Art",
        },
        {
          id: "kanazawa-discover-2",
          name: "Hakuichi Gold Leaf Workshop",
          summary:
            "Try a gold-leaf craft class — press shimmering foil onto chopsticks, a coaster, or a postcard to take home.",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Kenroku-en_Kotoji_Lantern.jpg",
          coordinates: [136.6598, 36.5628],
          tag: "Hands-on",
        },
        {
          id: "kanazawa-discover-3",
          name: "Myoryuji Ninja Temple",
          summary:
            "A puzzle-box temple tour with trap doors, hidden stairs, and secret rooms — book ahead for the guided adventure.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Nagamachi_Bukeyashiki.jpg/960px-Nagamachi_Bukeyashiki.jpg",
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
          id: "takayama-ouan",
          name: "Takayama Ouan",
          summary:
            "A comfy onsen-style stay with a king bed and futons for the crew — soak sore train legs and wake up ready for old-town exploring.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Takayamaouan_%28An_Onsen_Ryokan_style_Hotel%29.jpg/960px-Takayamaouan_%28An_Onsen_Ryokan_style_Hotel%29.jpg",
          coordinates: [137.2519, 36.1386],
        },
        {
          id: "takayama-sanmachi",
          name: "Sanmachi Suji Historic District",
          summary:
            "Three old merchant streets packed with wooden shops, sweet shops, and sake vibes — the classic Hida Takayama stroll for a no-luggage day.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sanmachi_Takayama02ds3872.jpg/960px-Sanmachi_Takayama02ds3872.jpg",
          coordinates: [137.2597, 36.1409],
        },
      ],
      nearbySuggestions: [
        {
          id: "takayama-discover-1",
          name: "Teddy Bear Eco Village",
          summary:
            "A cozy teddy-bear museum and garden with thousands of bears, photo spots, and a sweet break from temple-hopping.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sanmachi_Takayama02ds3872.jpg/960px-Sanmachi_Takayama02ds3872.jpg",
          coordinates: [137.2415, 36.1355],
          tag: "Museum",
        },
        {
          id: "takayama-discover-2",
          name: "Takayama Showa Museum",
          summary:
            "Step into a recreation of 1950s–70s Japan — candy shops, retro games, and classrooms that feel like a time-travel set.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Takayamaouan_%28An_Onsen_Ryokan_style_Hotel%29.jpg/960px-Takayamaouan_%28An_Onsen_Ryokan_style_Hotel%29.jpg",
          coordinates: [137.2582, 36.1418],
          tag: "Retro",
        },
        {
          id: "takayama-discover-3",
          name: "Sarubobo Folklore Museum",
          summary:
            "Learn about the famous red monkey dolls of Hida, then craft or pick a sarubobo charm for good luck on the trip.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sanmachi_Takayama02ds3872.jpg/960px-Sanmachi_Takayama02ds3872.jpg",
          coordinates: [137.2605, 36.1428],
          tag: "Craft",
        },
      ],
    },
    kyoto: {
      id: "kyoto",
      name: "Kyoto",
      coordinates: [135.7681, 35.0116],
      zoom: 12.2,
      pitch: 52,
      bearing: 18,
      itineraryStops: [
        {
          id: "kyoto-mimaru",
          name: "MIMARU Kyoto Station",
          summary:
            "Your Kyoto apartment HQ by the station — unpack, ship bags later with TA-Q-BIN, and launch temple-and-neighborhood days from here.",
          image: "https://mimaruhotels.com/app/uploads/2025/01/pc-1-14.jpg",
          coordinates: [135.7619, 34.9833],
        },
        {
          id: "kyoto-fushimi-inari",
          name: "Fushimi Inari Taisha",
          summary:
            "Hike through thousands of bright orange torii gates climbing the mountain — every photo looks like a portal to another world.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/20181110_Fushimi_Inari_shrine_3.jpg/960px-20181110_Fushimi_Inari_shrine_3.jpg",
          coordinates: [135.7727, 34.9671],
        },
        {
          id: "kyoto-higashiyama",
          name: "Higashiyama Streets",
          summary:
            "Wander Kyoto’s postcard neighborhoods of wooden shops, stone lanes, and snack stalls — slow down and soak up old-city vibes.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pedestrian_road_with_pavements%2C_paper_umbrellas_and_people_in_yukata%2C_Higashiyama-ku%2C_Kyoto%2C_Japan.jpg/960px-Pedestrian_road_with_pavements%2C_paper_umbrellas_and_people_in_yukata%2C_Higashiyama-ku%2C_Kyoto%2C_Japan.jpg",
          coordinates: [135.7802, 34.9985],
        },
        {
          id: "kyoto-arashiyama",
          name: "Arashiyama Bamboo Grove",
          summary:
            "Step into a towering green bamboo forest that sways and whispers — then explore riverside nature just beyond the path.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Arashiyama_Bamboo_Grove.jpg/960px-Arashiyama_Bamboo_Grove.jpg",
          coordinates: [135.6721, 35.0175],
        },
      ],
      nearbySuggestions: [
        {
          id: "kyoto-discover-1",
          name: "Kyoto Railway Museum",
          summary:
            "Climb into real trains, ride a steam locomotive simulator, and explore giant locomotives — a hit for train-loving tweens.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kyoto_Railway_Museum%2C_enkei.jpg/960px-Kyoto_Railway_Museum%2C_enkei.jpg",
          coordinates: [135.7425, 34.9872],
          tag: "Trains",
        },
        {
          id: "kyoto-discover-2",
          name: "Kyoto International Manga Museum",
          summary:
            "Walls of manga you can browse freely, plus exhibits about comics culture — pick a volume and claim a reading nook.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pedestrian_road_with_pavements%2C_paper_umbrellas_and_people_in_yukata%2C_Higashiyama-ku%2C_Kyoto%2C_Japan.jpg/960px-Pedestrian_road_with_pavements%2C_paper_umbrellas_and_people_in_yukata%2C_Higashiyama-ku%2C_Kyoto%2C_Japan.jpg",
          coordinates: [135.7594, 35.0116],
          tag: "Manga",
        },
        {
          id: "kyoto-discover-3",
          name: "Nintendo Museum",
          summary:
            "In nearby Uji — interactive stations tracing Nintendo from hanafuda cards to consoles, with playable classics (book timed tickets).",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/20181110_Fushimi_Inari_shrine_3.jpg/960px-20181110_Fushimi_Inari_shrine_3.jpg",
          coordinates: [135.8025, 34.9075],
          tag: "Games",
        },
      ],
    },
  },
};
