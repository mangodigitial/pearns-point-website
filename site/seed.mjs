import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'st9j6mh7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

function key() {
  return Math.random().toString(36).slice(2, 10)
}

// Helper: portable text block
function block(text, style = 'normal') {
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
  }
}

const documents = [
  // ═══════════════════════════════════════
  // SITE SETTINGS
  // ═══════════════════════════════════════
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Pearns Point',
    contactPhoneAntigua: '+1 268-736-4028',
    contactPhoneSales: '+1 268-720-2225',
    contactEmail: 'info@orangelimited.com',
    footerTagline: "An exclusive 137-acre peninsula development on Antigua's stunning west coast, offering the finest in Caribbean luxury living.",
    navLinks: [
      { _key: key(), label: 'The Development', href: '/the-development' },
      { _key: key(), label: 'Lots & Site Plan', href: '/lots-site-plan' },
      { _key: key(), label: 'The Villas', href: '/the-villas' },
      { _key: key(), label: 'Antigua', href: '/the-antigua-experience' },
      { _key: key(), label: 'Contact', href: '/contact' },
    ],
  },

  // ═══════════════════════════════════════
  // HOME PAGE
  // ═══════════════════════════════════════
  {
    _id: 'homePage',
    _type: 'homePage',
    hero: {
      eyebrow: "Antigua's Exclusive Western Peninsula",
      title: 'Shared by Few, Rivalled by None',
      subtitle: "Discover the Caribbean's most prestigious address — where seven pristine beaches, endless sunshine, and an extraordinary lifestyle await the discerning few.",
      primaryCTA: { label: 'Explore the Peninsula', href: '/the-development' },
      secondaryCTA: { label: 'Discover the Lifestyle', href: '/lots-site-plan' },
    },
    intro: {
      eyebrow: 'The Development',
      title: 'A Peninsula of Extraordinary Beauty',
      body: "Stretching along Antigua's celebrated western coast, Pearns Point is a rare and unspoilt peninsula offering spectacular ocean views, seven white sand beaches, and an unmatched sense of privacy. Every detail has been considered to respect and enhance the island's natural beauty.",
      stats: [
        { _key: key(), number: '49', label: 'Exclusive Plots' },
        { _key: key(), number: '7', label: 'Private Beaches' },
        { _key: key(), number: '360°', label: 'Ocean Views' },
      ],
    },
    lifestyle: {
      eyebrow: 'The Lifestyle',
      title: 'More Than a Home. A Way of Living.',
      subtitle: 'Pearns Point is an invitation to an extraordinary life — where turquoise waters, world-class dining, and unhurried luxury define every single day.',
      cards: [
        { _key: key(), tag: 'On the Water', title: 'Yacht & Sail', description: 'Set sail from your doorstep into the sapphire waters of the Antiguan coastline and surrounding islands.' },
        { _key: key(), tag: 'Culinary', title: 'World-Class Dining', description: "From beachfront seafood grills to Michelin-calibre kitchens — Antigua's culinary scene is flourishing." },
        { _key: key(), tag: 'Beaches', title: 'Seven Beaches', description: 'Seven private white sand beaches line the peninsula — each offering a different shade of paradise.' },
        { _key: key(), tag: 'Evenings', title: 'Sunsets & Serenity', description: "Antigua's western coast is renowned for the most breathtaking sunsets in the entire Caribbean." },
      ],
    },
    quote: {
      text: 'An investment in Pearns Point is an investment in an unparalleled way of life — where every sunrise brings possibility and every sunset is a masterpiece.',
      attribution: 'Pearns Point, Antigua & Barbuda',
    },
    features: {
      eyebrow: 'Why Pearns Point',
      title: 'Crafted with Purpose & Precision',
      subtitle: 'Every element of Pearns Point has been carefully considered — from the preservation of native ecosystems to the freedom of bespoke architectural design.',
      cards: [
        {
          _key: key(),
          icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4C18 12 12 18 4 22C12 26 18 32 22 40C26 32 32 26 40 22C32 18 26 12 22 4Z"/><circle cx="22" cy="22" r="4"/></svg>',
          title: 'Respecting Nature',
          description: "The development honours the island's native fauna and flora, utilising natural resources and blending them seamlessly into the untouched landscape of the peninsula.",
        },
        {
          _key: key(),
          icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 36 Q12 8 22 20 Q32 32 40 8"/><circle cx="22" cy="20" r="3"/></svg>',
          title: 'A Serene Paradise',
          description: "Seven white sand beaches along Antigua's western coast make Pearns Point a place of outstanding natural beauty, tranquility, and complete seclusion.",
        },
        {
          _key: key(),
          icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="12" width="32" height="24" rx="1"/><path d="M6 12 L22 4 L38 12"/><line x1="22" y1="12" x2="22" y2="36"/><line x1="14" y1="20" x2="14" y2="28"/><line x1="30" y1="20" x2="30" y2="28"/></svg>',
          title: 'Bespoke Design',
          description: 'Build your dream home with total creative freedom, or collaborate with our award-winning architects at KSR to craft a residence that is uniquely yours.',
        },
      ],
    },
    villas: {
      eyebrow: 'Residences',
      title: 'Homes Designed for Exceptional Living',
      description: 'With only 49 plots available, homeowners join an exclusive enclave — each property commanding breathtaking panoramic views from hillside or coastline positions.',
      cards: [
        { _key: key(), category: 'Premium Collection', title: 'Hillside Estates', isHero: true },
        { _key: key(), category: 'Waterfront', title: 'Beachfront Retreats', isHero: false },
        { _key: key(), category: 'Architecture', title: 'Bespoke Design with KSR', isHero: false },
      ],
    },
    antigua: {
      eyebrow: 'The Island',
      title: 'Antigua, Jewel of the Caribbean',
      body: "A hidden jewel of pure tranquility and immense beauty. Antigua offers exceptional cuisine, world-class sailing, a vibrant culture, and a growing economy backed by a politically stable government — making it an ideal destination for lifestyle and investment alike.",
      badgeNumber: '365',
      badgeLabel: 'beaches',
      details: [
        { _key: key(), title: '4 Hours', description: 'Direct from New York' },
        { _key: key(), title: '8 Hours', description: 'Direct from Europe' },
        { _key: key(), title: '365 Beaches', description: 'One for every day' },
        { _key: key(), title: 'Stable', description: 'Growing economy & government' },
      ],
    },
    cbi: {
      eyebrow: 'Citizenship by Investment',
      title: 'Your Passport to a New Horizon',
      body: "Antigua & Barbuda's Citizenship by Investment Programme offers a distinguished pathway to second citizenship — with visa-free access to over 150 countries including the UK, EU Schengen zone, and more.",
      primaryCTA: { label: 'Learn About CBI', href: '/citizenship-by-investment' },
      secondaryCTA: { label: 'Speak to an Advisor', href: '/contact' },
    },
    developerStrip: {
      developers: [
        { _key: key(), name: 'Orange Limited', role: 'Developer' },
      ],
    },
  },

  // ═══════════════════════════════════════
  // THE DEVELOPMENT PAGE
  // ═══════════════════════════════════════
  {
    _id: 'developmentPage',
    _type: 'developmentPage',
    heroEyebrow: 'Pearns Point',
    heroTitle: 'The Development',
    heroSubtitle: "Discover the vision behind Antigua's most exclusive peninsula development.",
    vision: {
      eyebrow: 'The Vision',
      title: 'A Long-Term Vision, Beautifully Realised',
      body: "Pearns Point marks the realisation of a long-term vision. Immersed in a bounty of nature, this exclusive development inhabits a beautiful peninsula on Antigua's west coast. Notable for its spectacular vistas across intimate white-sand beaches and turquoise waters to the islands of Montserrat, Redonda, and St Kitts and Nevis — Pearns Point is secluded yet conveniently close to the island's main attractions.",
    },
    project: {
      eyebrow: 'The Project',
      title: 'Your Perfect Plot, Your Perfect Home',
      body: 'A spectacular choice of lots are available for sale on this remarkable peninsula. Subject to restrictive covenants that respect the low density, luxury vision for the peninsula, the Developer can also make available experienced design, planning and construction teams to build out your dream villa.',
      lotTypes: [
        { _key: key(), label: 'Beach Front', color: 'ocean' },
        { _key: key(), label: 'Ocean Front', color: 'ocean' },
        { _key: key(), label: 'Ocean View', color: 'ocean' },
      ],
    },
    amenities: {
      eyebrow: "Owners' Facilities",
      title: 'A Community Built on Luxury & Lifestyle',
      cards: [
        { _key: key(), title: 'Beach Bar & Restaurant', description: 'Dine oceanside with Caribbean-inspired cuisine and international fine dining.' },
        { _key: key(), title: 'Swimming Pool', description: 'An infinity-edge pool overlooking the Caribbean Sea and surrounding islands.' },
        { _key: key(), title: 'Tennis Courts', description: 'Championship-standard courts set amongst the tropical landscape.' },
        { _key: key(), title: 'Fitness Centre', description: 'State-of-the-art wellness and fitness facilities for residents.' },
      ],
    },
    quote: {
      text: 'A luxurious sanctuary that respects the rich local inheritance and culture of Antigua — ecologically sensitive and financially exceptional.',
    },
    developer: {
      eyebrow: 'The Developer',
      title: 'Orange Limited',
      body: "Pearns Point is owned by luxury property developers Orange Limited, led by Dutch entrepreneur Albert Hartog and his partners. Together, they have been creating one of the most exclusive projects in the Caribbean — a luxurious sanctuary that respects the rich local inheritance and culture of Antigua, while protecting local ecosystems in a sustainable way.",
      highlights: [
        { _key: key(), title: 'Conservation', description: 'Sponsor of major wildlife projects in South Africa' },
        { _key: key(), title: 'Sustainable', description: 'Ecologically sensitive development practices' },
        { _key: key(), title: 'Experienced', description: 'Proven track record in luxury real estate' },
        { _key: key(), title: 'Community', description: 'Active sponsors of local Antiguan charities' },
      ],
    },
  },

  // ═══════════════════════════════════════
  // THE VILLAS PAGE
  // ═══════════════════════════════════════
  {
    _id: 'villasPage',
    _type: 'villasPage',
    heroEyebrow: 'Architecture & Design',
    heroTitle: 'The Villas',
    heroSubtitle: 'Signature details and a horizontal design philosophy maximise the spectacular views — offering creative layout possibilities to suit every individual style.',
    philosophy: {
      eyebrow: 'Design Philosophy',
      title: 'Where Architecture Meets Paradise',
      body: "Every villa at Pearns Point is designed around a horizontal philosophy — maximising the spectacular views from every room and providing creative layout possibilities to suit individual ideas and styles, whether modern or classical.\n\nEffective use of natural elements is paramount. The island's pervasive trade winds keep indoor temperatures cool, while locally sourced materials ensure each home feels intrinsically connected to its Caribbean surroundings.",
    },
    features: {
      eyebrow: 'Villa Features',
      title: 'Designed for Durability, Built for Beauty',
      subtitle: 'The villas are designed to ensure durability is assured, ecological impact is minimised, and barely any maintenance is required — so you can focus on living, not upkeep.',
      cards: [
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="16" width="36" height="24" rx="1"/><path d="M4 16 L22 4 L40 16"/></svg>', title: 'Horizontal Design', description: 'Low-rise architecture maximises ocean views from every room while embracing the natural contours of the landscape.' },
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="14" r="8"/><path d="M6 40 C6 28 38 28 38 40"/></svg>', title: 'Bespoke to You', description: 'Work with world-class architects to personalise every detail — from layout and finishes to pool positioning and landscaping.' },
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4C18 12 12 18 4 22C12 26 18 32 22 40C26 32 32 26 40 22C32 18 26 12 22 4Z"/><circle cx="22" cy="22" r="4"/></svg>', title: 'Natural Materials', description: 'Locally sourced stone, timber, and natural materials connect each home to the Caribbean landscape and minimise ecological impact.' },
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 32 Q14 8 22 20 Q30 32 36 12"/><line x1="4" y1="38" x2="40" y2="38" stroke-width="1"/></svg>', title: 'Trade Wind Cooling', description: "Designed to harness Antigua's pervasive trade winds for natural ventilation — reducing energy consumption and keeping interiors cool year-round." },
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="6" width="32" height="32" rx="2"/><line x1="6" y1="22" x2="38" y2="22"/><line x1="22" y1="6" x2="22" y2="38"/></svg>', title: 'Indoor/Outdoor Flow', description: 'Floor-to-ceiling openings, covered terraces, and infinity pools dissolve the boundary between interior luxury and the natural beauty beyond.' },
        { _key: key(), iconSvg: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="22" r="16"/><polyline points="22,12 22,22 30,26"/></svg>', title: 'Low Maintenance', description: 'Engineered for the tropical climate using materials and systems that withstand the elements and require barely any ongoing maintenance.' },
      ],
    },
    architects: {
      eyebrow: 'The Architects',
      title: 'World-Class Creative Partners',
      body: "Homeowners at Pearns Point have the opportunity to work with some of the most celebrated design studios in the world — or bring their own team, subject to architectural covenants that protect the peninsula's luxury vision.",
      partners: [
        { _key: key(), name: 'KSR Architects', role: 'Architecture & Design', description: 'Award-winning London-based architects with an international portfolio of luxury residential and hospitality projects. KSR bring a refined sensibility to tropical living.' },
        { _key: key(), name: 'Studio Piet Boon', role: 'Interior Design & Architecture', description: 'One of the most notable and exclusive designers of our era, with an impressive portfolio of stunning hotels and homes across the globe. Studio Piet Boon creates bespoke contemporary architecture and interiors.' },
        { _key: key(), name: 'James Hamilton Architects', role: 'Architecture & Masterplanning', description: 'A leading Caribbean architecture practice renowned for designing landmark luxury residences and resort developments that respond sensitively to tropical landscapes and island culture.' },
      ],
    },
    quote: {
      text: 'Signature details and a horizontal design maximise the spectacular views and provide creative layout possibilities to suit individual ideas and styles.',
    },
    gallery: [
      { _key: key(), title: 'Villa exterior panorama', isWide: true, isTall: false },
      { _key: key(), title: 'Interior living space', isWide: false, isTall: false },
      { _key: key(), title: 'Pool and terrace', isWide: false, isTall: false },
      { _key: key(), title: 'Villa approach', isWide: false, isTall: false },
      { _key: key(), title: 'Bedroom with view', isWide: false, isTall: false },
      { _key: key(), title: 'Kitchen and dining', isWide: true, isTall: false },
    ],
    bespoke: {
      eyebrow: 'Your Own Vision',
      title: 'Bring Your Own Design Team',
      body: "While we offer access to internationally celebrated architects, homeowners are also free to engage their own design teams — subject to certain architectural and building covenants that protect the low-density, luxury character of the peninsula.\n\nWhether you choose our recommended partners or bring your own vision, the result will be a home uniquely tailored to you — set within one of the most beautiful landscapes in the Caribbean.",
    },
  },

  // ═══════════════════════════════════════
  // LOTS & SITE PLAN PAGE
  // ═══════════════════════════════════════
  {
    _id: 'lotsSitePlanPage',
    _type: 'lotsSitePlanPage',
    heroEyebrow: 'Explore the Peninsula',
    heroTitle: 'Lots & Site Plan',
    heroSubtitle: "Discover the exciting opportunities available across eight distinct areas of the Pearns Point peninsula — each with its own character, views, and unique appeal.",
    lotAreas: [
      {
        _key: key(), name: 'Oceans Edge', lotRange: 'Lots 1–21',
        description: "Situated directly above beautiful turquoise waters with breathtaking sunset views for large parts of the year, these lots are conveniently close to the main Pearns Point beach. Although entirely private, owners will still be within easy walking distance from the amenities of the luxury hotel on site. Lots 9, 10 and 18–20 enjoy a secluded white sand beach with easy swimming.",
        features: ['Sunset views', 'Direct water location', '⅔ acre lots', 'Near hotel amenities'],
      },
      {
        _key: key(), name: 'Five Islands Point', lotRange: 'Lots 24 & 25',
        description: 'Set on their own point, these lots face out to the iconic Five Islands and the endless turquoise Caribbean Sea. Being at the western point of the property, the sunset views are mesmerising and quiet privacy is guaranteed. Lot 25 is one of the few remaining lots with direct beach access.',
        features: ['Private point position', 'Five Islands views', 'Direct beach access', 'Best sunset position'],
      },
      {
        _key: key(), name: 'Pearns Bay', lotRange: 'Lot 28',
        description: 'An exceptional lot with beach access to a gorgeous powder white soft sand beach with excellent snorkelling. The views out to the unpopulated far green shore are enhanced by panoramic ocean views. The lot rises gently back to the road making for easy access and elevated views that include the iconic Five Islands.',
        features: ['Beach access', 'Snorkelling', 'Panoramic views', 'Gentle elevation'],
      },
      {
        _key: key(), name: 'Secret Bay', lotRange: 'Lots 38 & 39',
        description: 'Some of the last beachfront lots available — this exquisite bay has a beautiful and secluded stretch of white sand with turquoise waters straight in front. The elevated incline down to the beach allows for complete privacy and safety from any seasonal wave activity whilst ensuring a panoramic view amid the gentle sounds of lapping waves.',
        features: ['Beachfront', 'Secluded white sand', 'Elevated privacy', 'Last remaining'],
      },
      {
        _key: key(), name: 'Five Islands Bay', lotRange: 'Lots 41–43, 59, 63–71',
        description: 'These more elevated ocean view lots are generously sized to allow for residences with multiple views and also benefit from the cooling north-easterly winds across Antigua. In good proximity to the property entrance, they are within easy reach of the main Pearns Point beach. Lots 38–40 enjoy access to a stunning white sand beach set in an intimate cove.',
        features: ['Elevated position', 'Generous lot sizes', 'Cooling breezes', 'Intimate cove access'],
      },
      {
        _key: key(), name: 'Pearns Beach', lotRange: 'Lots 44–53',
        description: 'Looking out to Montserrat on a clear day, these lots are all about an abundance of colour — with views over the white Pearns Point Beach and out to the famous turquoise waters of Antigua, all amid a backdrop of the Antiguan mountain range to the south.',
        features: ['Montserrat views', 'Beach views', 'Mountain backdrop', 'Turquoise waters'],
      },
      {
        _key: key(), name: 'Five Islands View', lotRange: 'Lots 54–59',
        description: 'Offering perhaps the best combination of ocean and Five Islands views, these higher elevation lots also enjoy an almost year-round breeze and a peaceful serenity. Lot sizes are larger here, affording more uses of the property and different design options for your dream home.',
        features: ['Best combined views', 'Higher elevation', 'Larger lot sizes', 'Year-round breeze'],
      },
      {
        _key: key(), name: 'The Look Out', lotRange: 'Lots 60–61',
        description: 'The highest points on the property — the 360-degree views here are outstanding. Cooling breezes and a view over most of the north-west coast of Antigua will keep you spellbound. These are truly the crown jewels of the peninsula.',
        features: ['360° views', 'Highest elevation', 'Cooling breezes', 'Crown jewel lots'],
      },
    ],
    availabilityBanner: {
      stats: [
        { _key: key(), number: '49', label: 'Total Plots' },
        { _key: key(), number: '8', label: 'Distinct Areas' },
        { _key: key(), number: '137', label: 'Acres' },
      ],
    },
  },

  // ═══════════════════════════════════════
  // PLOT AND PLAN PAGE
  // ═══════════════════════════════════════
  {
    _id: 'plotAndPlanPage',
    _type: 'plotAndPlanPage',
    heroEyebrow: 'Turnkey Luxury',
    heroTitle: 'Plot and Plan',
    heroSubtitle: "For the first time, Pearns Point offers pre-designed luxury villas at a final price — giving you simplicity, peace of mind, and a home crafted by world-class architects.",
    intro: {
      eyebrow: 'The Programme',
      title: 'Your Dream Home, Delivered',
      body: "Developing an overseas luxury home in the tropics is a dream for many — but managing a project remotely can be challenging. Our Plot & Plan programme removes the complexity entirely.\n\nChoose between three stunning design styles, select your plot, and our team of internationally renowned architects and experienced local contractors will deliver a finished turnkey villa — on time, on budget, and to the highest international standards.",
    },
    designs: [
      {
        _key: key(), optionLabel: 'Option A', name: 'Caribbean Chic',
        description: 'Timeless Caribbean elegance reimagined. Refined proportions, natural stone, and graceful archways create a sense of enduring luxury that feels both grand and perfectly at home on the island.',
        features: ['Open-plan living', 'Infinity pool', '5,000+ sq ft', 'Natural stone & timber', 'Panoramic terraces', 'Energy efficient'],
      },
      {
        _key: key(), optionLabel: 'Option B', name: 'Naturally Modern',
        description: 'Clean lines and contemporary forms embrace the landscape. Floor-to-ceiling glass, horizontal planes, and natural timber create a seamless connection between interior spaces and the Caribbean beyond.',
        features: ['Floor-to-ceiling glass', 'Infinity pool', '5,000+ sq ft', 'Indoor/outdoor flow', 'Trade wind cooling', 'Minimal maintenance'],
      },
      {
        _key: key(), optionLabel: 'Option C', name: 'Caribbean Connected',
        description: 'A design that celebrates the relationship between architecture and nature. Interconnected pavilions, covered walkways, and open courtyards weave through the tropical landscape — blurring the boundaries between home and paradise.',
        features: ['Pavilion layout', 'Infinity pool', '5,000+ sq ft', 'Covered walkways', 'Courtyard living', 'Landscape integrated'],
      },
    ],
    process: [
      { _key: key(), stepNumber: 1, title: 'Choose Your Plot', description: 'Select from our available beachfront, ocean front, or ocean view lots. Our team will help you understand the unique character, views, and potential of each position on the peninsula.' },
      { _key: key(), stepNumber: 2, title: 'Select Your Design', description: 'Choose between the Caribbean Chic, Naturally Modern, or Caribbean Connected villa design. Each can be tailored to your preferences while maintaining the architectural integrity of the development.' },
      { _key: key(), stepNumber: 3, title: 'Personalise & Refine', description: 'Work with our architects to customise finishes, layouts, and features. From kitchen specifications to pool positioning — every detail is considered and agreed before construction begins.' },
      { _key: key(), stepNumber: 4, title: 'Construction & Updates', description: "Our experienced local contractors build your villa to the highest international standards. You'll receive regular progress updates, photography, and site reports throughout." },
      { _key: key(), stepNumber: 5, title: 'Handover & Welcome', description: 'Your completed turnkey villa is ready. Keys in hand, step into your new Caribbean home — fully finished, fully furnished, and ready to enjoy from day one.' },
    ],
    whatsIncluded: [
      'Land plot of your choice (½ acre minimum)',
      '5,000+ sq ft luxury villa, fully constructed',
      'Private infinity pool and landscaped gardens',
      'Full interior fit-out and furnishing',
      'All utilities, connections, and infrastructure',
      'Eligible for Citizenship by Investment Programme',
    ],
    pricing: {
      eyebrow: 'Investment',
      title: 'Turnkey Villas Starting From',
      price: 'US $6,000,000',
      subtitle: 'Including land, construction, pool, landscaping, and full interior fit-out. Villas of 5,000 sq ft with pools on ½ acre lots.',
    },
    partners: [
      { _key: key(), name: 'Orange Limited', role: 'Developer' },
      { _key: key(), name: 'KSR Architects', role: 'Architecture & Design' },
      { _key: key(), name: 'Studio Piet Boon', role: 'Interior Design' },
      { _key: key(), name: 'James Hamilton Architects', role: 'Architecture & Masterplanning' },
    ],
  },

  // ═══════════════════════════════════════
  // ANTIGUA EXPERIENCE PAGE
  // ═══════════════════════════════════════
  {
    _id: 'antiguaPage',
    _type: 'antiguaPage',
    heroEyebrow: 'Island Life',
    heroTitle: 'The Antigua Experience',
    heroSubtitle: "A Caribbean island of extraordinary natural beauty, rich culture, and world-class amenities — where every day feels like a holiday.",
    intro: {
      eyebrow: 'Discover Antigua',
      title: 'A Beach for Every Day of the Year',
      body: "Antigua is famed for its 365 beaches — one for every day of the year. But beyond the powder-white sands and turquoise waters lies a vibrant island of English Harbour history, world-class sailing, exceptional dining, and a warm, welcoming culture.\n\nWith year-round sunshine, a stable economy, English-speaking population, and excellent international connectivity, Antigua has become one of the most desirable addresses in the Caribbean for discerning investors and families alike.",
      badgeNumber: '365',
      badgeLabel: 'Beaches',
    },
    stats: [
      { _key: key(), number: '365', label: 'Beaches' },
      { _key: key(), number: '28', suffix: '°C', label: 'Avg Temperature' },
      { _key: key(), number: '8', suffix: 'hrs', label: 'From London' },
      { _key: key(), number: '4.5', suffix: 'hrs', label: 'From Miami' },
      { _key: key(), number: '300', suffix: '+', label: 'Days of Sunshine' },
    ],
    lifestyle: {
      eyebrow: 'Island Lifestyle',
      title: 'More Than a Destination',
      subtitle: 'From world-class sailing regattas to sunset dining on the harbour, Antigua offers a lifestyle that blends Caribbean ease with international sophistication.',
      cards: [
        { _key: key(), title: 'World-Class Sailing', description: "Home to Antigua Sailing Week — one of the world's premier regattas — and Nelson's Dockyard, a UNESCO World Heritage site." },
        { _key: key(), title: 'Exceptional Dining', description: "From beachside grills to sophisticated restaurants, the island's culinary scene blends Caribbean flavours with international cuisine." },
        { _key: key(), title: 'Pristine Beaches', description: 'From the buzzing sands of Jolly Beach to hidden coves accessible only by boat — an endless variety of coastal paradise.' },
        { _key: key(), title: 'Yacht & Marina', description: "Antigua's marinas host superyachts from around the world. Charter a vessel for the day or moor your own at one of several luxury harbours." },
      ],
    },
    quote: {
      text: 'Antigua is a place where the pace of life slows, the sunsets never disappoint, and the sea is always just a few steps away.',
    },
    gettingHere: {
      eyebrow: 'Connectivity',
      title: 'Easy to Reach, Hard to Leave',
      body: "V.C. Bird International Airport connects Antigua to major cities across Europe, North America, and the Caribbean — with direct flights from London, New York, Miami, Toronto, and beyond.",
      flights: [
        { _key: key(), city: 'London Gatwick', duration: '8h direct' },
        { _key: key(), city: 'New York JFK', duration: '4.5h direct' },
        { _key: key(), city: 'Miami', duration: '3.5h direct' },
        { _key: key(), city: 'Toronto', duration: '5h direct' },
      ],
    },
    climate: {
      eyebrow: 'Year-Round Sunshine',
      title: 'The Perfect Climate',
      body: "Antigua enjoys one of the sunniest, driest climates in the Eastern Caribbean. Cooled by the north-east trade winds, temperatures remain comfortable year-round — perfect for outdoor living every single day.",
      months: [
        { _key: key(), name: 'Jan', temp: '27' },
        { _key: key(), name: 'Feb', temp: '27' },
        { _key: key(), name: 'Mar', temp: '27' },
        { _key: key(), name: 'Apr', temp: '28' },
        { _key: key(), name: 'May', temp: '29' },
        { _key: key(), name: 'Jun', temp: '30' },
        { _key: key(), name: 'Jul', temp: '30' },
        { _key: key(), name: 'Aug', temp: '30' },
        { _key: key(), name: 'Sep', temp: '30' },
        { _key: key(), name: 'Oct', temp: '29' },
        { _key: key(), name: 'Nov', temp: '28' },
        { _key: key(), name: 'Dec', temp: '27' },
      ],
    },
    experiences: [
      {
        _key: key(), title: "Nelson's Dockyard & English Harbour",
        description: 'A UNESCO World Heritage site and the only continuously working Georgian dockyard in the world. Explore restored naval buildings, waterfront restaurants, and a living piece of maritime history.',
        tags: ['UNESCO Heritage', 'Maritime History', 'Restaurants'],
      },
      {
        _key: key(), title: 'Sport & Wellness',
        description: 'From championship golf at Cedar Valley to kitesurfing, deep-sea fishing, tennis, and world-class spa retreats — Antigua caters to every level of sporting ambition and relaxation.',
        tags: ['Golf', 'Water Sports', 'Spa & Wellness'],
      },
      {
        _key: key(), title: 'Nature & Adventure',
        description: "Hike to Shirley Heights for panoramic sunset views, kayak through mangrove reserves, snorkel coral reefs, or take a helicopter tour of the island's dramatic coastline.",
        tags: ['Shirley Heights', 'Snorkelling', 'Hiking', 'Eco Tours'],
      },
    ],
  },

  // ═══════════════════════════════════════
  // CITIZENSHIP BY INVESTMENT PAGE
  // ═══════════════════════════════════════
  {
    _id: 'cbiPage',
    _type: 'cbiPage',
    heroEyebrow: 'Second Citizenship',
    heroTitle: 'Citizenship by Investment',
    heroSubtitle: "Antigua & Barbuda's CBI programme offers one of the most respected and efficient routes to second citizenship through qualifying real estate investment.",
    intro: {
      eyebrow: 'The Programme',
      title: 'A Pathway to Global Freedom',
      body: "Antigua & Barbuda's Citizenship by Investment Programme, established in 2013, enables individuals and families to obtain full citizenship through a qualifying investment in government-approved real estate. As a government-approved development, Pearns Point offers one of the Caribbean's most prestigious CBI-qualifying investments — combining an exceptional lifestyle asset with the security and freedom of second citizenship.",
    },
    benefits: {
      eyebrow: 'Key Benefits',
      title: 'Why Antigua Citizenship?',
      subtitle: 'A second passport that opens doors — for you and your family.',
      cards: [
        { _key: key(), title: 'Visa-Free Travel', description: 'Antigua citizenship grants visa-free or visa-on-arrival access to over 150 countries and territories, including the UK, EU Schengen Zone, Hong Kong, and Singapore.' },
        { _key: key(), title: 'Tax Advantages', description: 'No income tax, capital gains tax, inheritance tax, or wealth tax. Antigua offers one of the most favourable tax environments in the Caribbean for individuals and families.' },
        { _key: key(), title: 'Fast Processing', description: 'Applications are typically processed within 3–6 months, with citizenship granted to the principal applicant, spouse, dependent children, and eligible family members.' },
        { _key: key(), title: 'Dual Citizenship', description: 'Antigua & Barbuda permits dual citizenship with no restrictions. There is no requirement to renounce your existing nationality or residency.' },
        { _key: key(), title: 'Minimal Residency', description: 'No minimum residency requirement before or after obtaining citizenship. The programme requires just five days of residence within the first five years.' },
        { _key: key(), title: 'Family Inclusion', description: 'Include your spouse, dependent children under 30, parents and grandparents over 55, and siblings under 18 on a single application.' },
      ],
    },
    passport: {
      eyebrow: 'Global Mobility',
      title: 'Your Passport to the World',
      body: "An Antigua & Barbuda passport is one of the strongest in the Caribbean, offering extensive visa-free access to major business and leisure destinations worldwide.",
      stats: [
        { _key: key(), value: '150+', label: 'Countries Visa-Free' },
        { _key: key(), value: 'EU', label: 'Schengen Access' },
        { _key: key(), value: 'UK', label: '6 Month Visa-Free' },
        { _key: key(), value: 'HK & SG', label: 'Asia-Pacific Access' },
      ],
    },
    process: [
      { _key: key(), stepNumber: 1, title: 'Initial Consultation', description: 'Discuss your goals and requirements with our team. We will outline the process, costs, and expected timeline.', duration: 'Week 1' },
      { _key: key(), stepNumber: 2, title: 'Due Diligence & Documentation', description: 'Compile the required documents and complete due diligence checks with our licensed agents.', duration: 'Weeks 2–4' },
      { _key: key(), stepNumber: 3, title: 'Application Submission', description: 'Your application is formally submitted to the Citizenship by Investment Unit (CIU) of Antigua & Barbuda.', duration: 'Month 2' },
      { _key: key(), stepNumber: 4, title: 'Government Processing', description: 'The CIU conducts its own due diligence and reviews your application. Processing typically takes 3–4 months.', duration: 'Months 2–5' },
      { _key: key(), stepNumber: 5, title: 'Approval & Citizenship', description: 'Upon approval, finalise your property investment and receive your Certificate of Citizenship and passport.', duration: 'Month 5–6' },
    ],
    qualifies: {
      eyebrow: 'Approved Development',
      title: 'Pearns Point Qualifies',
      body: "Pearns Point is a government-approved project under Antigua & Barbuda's Citizenship by Investment Programme — meaning purchases here qualify fully for second citizenship.",
      features: [
        'Government-approved development',
        'Luxury real estate investment',
        'Full citizenship eligibility',
        'Family inclusion on single application',
      ],
    },
    quote: {
      text: "Citizenship by investment is more than a financial transaction — it's securing your family's future with greater global freedom and mobility.",
    },
    faq: [
      { _key: key(), question: 'What is the minimum investment for CBI?', answer: "The minimum qualifying real estate investment for Antigua & Barbuda's CBI programme is US $300,000 (held for a minimum of 5 years). Pearns Point plots and villas exceed this threshold and qualify fully." },
      { _key: key(), question: 'How long does the process take?', answer: 'From initial consultation to passport in hand, the process typically takes 5–6 months, though timelines can vary depending on individual circumstances and government processing.' },
      { _key: key(), question: 'Is there a residency requirement?', answer: 'There is no minimum residency requirement. Citizens are required to spend just 5 days in Antigua within the first 5 years of citizenship — and that includes time spent during your property visit.' },
      { _key: key(), question: 'Can I include my family?', answer: 'Yes. Your spouse, dependent children under 30, parents and grandparents over 55, and siblings under 18 can all be included on a single application.' },
      { _key: key(), question: 'Do I need to give up my current citizenship?', answer: 'No. Antigua & Barbuda permits full dual citizenship with no restrictions whatsoever. You retain all existing citizenships and passports.' },
      { _key: key(), question: 'What taxes apply in Antigua?', answer: 'Antigua has no income tax, no capital gains tax, no inheritance tax, and no wealth tax — making it one of the most tax-efficient jurisdictions in the world for individuals and families.' },
    ],
  },

  // ═══════════════════════════════════════
  // GALLERY PAGE
  // ═══════════════════════════════════════
  {
    _id: 'galleryPage',
    _type: 'galleryPage',
    heroEyebrow: 'Pearns Point',
    heroTitle: 'The Gallery',
    heroSubtitle: "Explore the breathtaking beauty of Pearns Point — from aerial views of the peninsula to intimate glimpses of island life.",
    categories: ['Aerial', 'Beaches', 'Villas', 'Lifestyle', 'Landscape'],
    images: [
      { _key: key(), title: 'Peninsula From Above', category: 'Aerial' },
      { _key: key(), title: 'Crystal Waters', category: 'Beaches' },
      { _key: key(), title: 'Modern Villa Exterior', category: 'Villas' },
      { _key: key(), title: 'Yacht at Sunset', category: 'Lifestyle' },
      { _key: key(), title: 'Coastline Panorama', category: 'Aerial' },
      { _key: key(), title: 'Powder White Sand', category: 'Beaches' },
      { _key: key(), title: 'Villa Pool Terrace', category: 'Villas' },
      { _key: key(), title: 'Harbour Dining', category: 'Lifestyle' },
      { _key: key(), title: 'Tropical Sunset', category: 'Landscape' },
      { _key: key(), title: 'Peninsula Aerial View', category: 'Aerial' },
      { _key: key(), title: 'Hidden Cove Beach', category: 'Beaches' },
      { _key: key(), title: 'Villa Interior Living', category: 'Villas' },
      { _key: key(), title: 'Sailing Regatta', category: 'Lifestyle' },
      { _key: key(), title: 'Mangrove Coastline', category: 'Landscape' },
      { _key: key(), title: 'Turquoise Bay', category: 'Beaches' },
      { _key: key(), title: 'Bedroom Ocean View', category: 'Villas' },
      { _key: key(), title: 'Five Islands View', category: 'Landscape' },
      { _key: key(), title: 'Infinity Pool Dusk', category: 'Villas' },
    ],
    videoSection: {
      eyebrow: 'Aerial Tour',
      title: 'See Pearns Point From Above',
      description: "Experience the scale and beauty of the peninsula with our drone flyover — showcasing the seven beaches, tropical landscape, and breathtaking coastline.",
      youtubeId: '46A0w8iI8hs',
    },
  },

  // ═══════════════════════════════════════
  // CONTACT PAGE
  // ═══════════════════════════════════════
  {
    _id: 'contactPage',
    _type: 'contactPage',
    heroEyebrow: 'Get in Touch',
    heroTitle: 'Contact Us',
    heroSubtitle: "Whether you're ready to invest or simply exploring your options, our team is here to help at every stage.",
    contactCards: [
      { _key: key(), icon: 'phone', title: 'Call Us', subtitle: 'Speak directly with our sales team', linkText: '+1 268-736-4028', linkHref: 'tel:+12687364028', detail: 'Antigua Office' },
      { _key: key(), icon: 'email', title: 'Email Us', subtitle: 'We respond within 24 hours', linkText: 'info@orangelimited.com', linkHref: 'mailto:info@orangelimited.com', detail: 'General & Sales Enquiries' },
      { _key: key(), icon: 'location', title: 'Visit Us', subtitle: 'Tour the peninsula in person', linkText: 'Book a Site Visit', linkHref: '/contact', detail: 'Pearns Point, Five Islands, Antigua' },
    ],
    formIntro: {
      eyebrow: 'Enquiry Form',
      title: 'Send Us a Message',
      body: 'Complete the form below and a member of our team will be in touch to discuss your requirements.',
    },
    enquiryTypes: [
      'Purchasing a Plot',
      'Plot & Plan Programme',
      'Citizenship by Investment',
      'Visiting the Site',
      'General Enquiry',
    ],
    offices: [
      { _key: key(), name: 'Antigua', address: "Pearns Point Sales Office\nFive Islands Village\nSt. John's, Antigua" },
      { _key: key(), name: 'Orange Limited', address: "Developer Head Office\nSt. John's, Antigua & Barbuda" },
    ],
    officeHours: [
      { _key: key(), days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM (AST)' },
      { _key: key(), days: 'Saturday', hours: 'By appointment only' },
    ],
  },

  // ═══════════════════════════════════════
  // NEWS PAGE
  // ═══════════════════════════════════════
  {
    _id: 'newsPage',
    _type: 'newsPage',
    heroEyebrow: 'Pearns Point',
    heroTitle: 'Latest News',
    heroSubtitle: 'Updates from the development, island events, and insights into life at Pearns Point.',
    categories: ['Development', 'Lifestyle', 'Antigua', 'Citizenship'],
  },

  // ═══════════════════════════════════════
  // BLOG POST — Featured article
  // ═══════════════════════════════════════
  {
    _id: 'blogPost-three-new-villa-designs',
    _type: 'blogPost',
    title: 'Three New Villa Designs Unveiled for Pearns Point',
    slug: { _type: 'slug', current: 'three-new-villa-designs-unveiled' },
    category: 'Development',
    publishedAt: '2026-02-12T00:00:00Z',
    author: {
      name: 'Pearns Point Team',
      bio: "Updates from the development team at Pearns Point, bringing you the latest news on architecture, construction progress, and island life at Antigua's foremost luxury real estate development.",
    },
    excerpt: "We're excited to reveal three distinctive architectural visions for the Plot & Plan programme — Caribbean Chic, Naturally Modern, and Caribbean Connected — each crafted by our internationally acclaimed design partners.",
    body: [
      block("We are delighted to unveil three distinctive architectural visions for the Pearns Point Plot & Plan programme — Caribbean Chic, Naturally Modern, and Caribbean Connected. Each design has been crafted by our internationally acclaimed architectural partners to offer a unique expression of Caribbean luxury living."),
      block("The three designs represent different expressions of tropical architecture, but all share a commitment to the same core principles: maximising the spectacular peninsula views, embracing indoor/outdoor living, and using natural materials that connect each home to its Caribbean surroundings."),
      block('Caribbean Chic', 'h2'),
      block("The first of our three designs draws on timeless Caribbean elegance — refined proportions, natural stone, and graceful archways create a sense of enduring luxury that feels both grand and perfectly at home on the island. With open-plan living spaces, panoramic terraces, and an infinity pool as standard, Caribbean Chic offers a classic yet contemporary take on island living."),
      block('Naturally Modern', 'h2'),
      block("Clean lines and contemporary forms embrace the landscape. Floor-to-ceiling glass, horizontal planes, and natural timber create a seamless connection between interior spaces and the Caribbean beyond. This design is for those who want their home to feel like a work of modern architecture — without compromising on warmth or comfort."),
      block('Caribbean Connected', 'h2'),
      block("A design that celebrates the relationship between architecture and nature. Interconnected pavilions, covered walkways, and open courtyards weave through the tropical landscape — blurring the boundaries between home and paradise. Caribbean Connected is the most adventurous of the three designs, offering a truly unique living experience."),
      block('What All Three Designs Share', 'h2'),
      block("Despite their different aesthetics, all three villa designs share key features: 5,000+ sq ft of living space, private infinity pools, trade wind cooling, panoramic terraces, and full interior fit-out. Each is designed to be delivered as a complete, turnkey home — ready to live in from day one."),
    ],
    tags: ['Villas', 'Architecture', 'Plot & Plan'],
    readTime: 5,
  },

  // Additional blog posts
  {
    _id: 'blogPost-infrastructure-phase-one',
    _type: 'blogPost',
    title: 'Infrastructure Phase One Reaches Completion',
    slug: { _type: 'slug', current: 'infrastructure-phase-one-reaches-completion' },
    category: 'Development',
    publishedAt: '2026-01-20T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: 'The first phase of road infrastructure and utilities across the Pearns Point peninsula has been completed on schedule, laying the groundwork for villa construction to begin.',
    body: [block('The first phase of road infrastructure and utilities across the Pearns Point peninsula has been completed on schedule, laying the groundwork for villa construction to begin.')],
    tags: ['Development', 'Infrastructure'],
    readTime: 3,
  },
  {
    _id: 'blogPost-antigua-sailing-week',
    _type: 'blogPost',
    title: "Antigua Sailing Week: The Caribbean's Premier Regatta",
    slug: { _type: 'slug', current: 'antigua-sailing-week-the-caribbeans-premier-regatta' },
    category: 'Lifestyle',
    publishedAt: '2026-01-10T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "As the island prepares for its world-famous sailing week, we look at why Antigua remains one of the top destinations for competitive sailing and superyacht culture.",
    body: [block("As the island prepares for its world-famous sailing week, we look at why Antigua remains one of the top destinations for competitive sailing and superyacht culture.")],
    tags: ['Lifestyle', 'Sailing'],
    readTime: 4,
  },
  {
    _id: 'blogPost-antigua-cbi-2026',
    _type: 'blogPost',
    title: 'Antigua CBI Programme: 2026 Updates & What You Need to Know',
    slug: { _type: 'slug', current: 'antigua-cbi-programme-2026-updates' },
    category: 'Citizenship',
    publishedAt: '2025-12-15T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "An overview of recent updates to Antigua & Barbuda's Citizenship by Investment programme, including processing times, fee structures, and new due diligence requirements.",
    body: [block("An overview of recent updates to Antigua & Barbuda's Citizenship by Investment programme, including processing times, fee structures, and new due diligence requirements.")],
    tags: ['Citizenship', 'CBI'],
    readTime: 5,
  },
  {
    _id: 'blogPost-best-restaurants',
    _type: 'blogPost',
    title: 'The Best Restaurants in Antigua: A Curated Guide',
    slug: { _type: 'slug', current: 'best-restaurants-in-antigua' },
    category: 'Antigua',
    publishedAt: '2025-11-20T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "From beachside lobster grills to refined Caribbean-fusion dining, our guide to the island's most exceptional restaurants — and the chefs behind them.",
    body: [block("From beachside lobster grills to refined Caribbean-fusion dining, our guide to the island's most exceptional restaurants — and the chefs behind them.")],
    tags: ['Antigua', 'Dining'],
    readTime: 6,
  },
  {
    _id: 'blogPost-ksr-architects',
    _type: 'blogPost',
    title: 'In Conversation: KSR Architects on Designing for the Tropics',
    slug: { _type: 'slug', current: 'ksr-architects-designing-for-the-tropics' },
    category: 'Development',
    publishedAt: '2025-10-15T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "We sit down with the London-based practice behind Pearns Point's villa designs to discuss their approach to tropical architecture, sustainability, and the creative process.",
    body: [block("We sit down with the London-based practice behind Pearns Point's villa designs to discuss their approach to tropical architecture, sustainability, and the creative process.")],
    tags: ['Development', 'Architecture'],
    readTime: 7,
  },
  {
    _id: 'blogPost-superyacht-season',
    _type: 'blogPost',
    title: 'Superyacht Season: Chartering in the Leeward Islands',
    slug: { _type: 'slug', current: 'superyacht-season-chartering-leeward-islands' },
    category: 'Lifestyle',
    publishedAt: '2025-10-05T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "As the winter charter season begins, we explore the best routes, anchorages, and island-hopping itineraries available from Antigua's world-class marinas.",
    body: [block("As the winter charter season begins, we explore the best routes, anchorages, and island-hopping itineraries available from Antigua's world-class marinas.")],
    tags: ['Lifestyle', 'Yachting'],
    readTime: 5,
  },
  {
    _id: 'blogPost-english-harbour',
    _type: 'blogPost',
    title: 'English Harbour: The Heart of Antiguan Heritage',
    slug: { _type: 'slug', current: 'english-harbour-heart-of-antiguan-heritage' },
    category: 'Antigua',
    publishedAt: '2025-09-10T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "A look at Nelson's Dockyard and the surrounding English Harbour area — its history, its restoration, and why it remains the island's most iconic destination.",
    body: [block("A look at Nelson's Dockyard and the surrounding English Harbour area — its history, its restoration, and why it remains the island's most iconic destination.")],
    tags: ['Antigua', 'Heritage'],
    readTime: 5,
  },
  {
    _id: 'blogPost-conservation',
    _type: 'blogPost',
    title: 'Conservation at Pearns Point: Protecting 70% of the Peninsula',
    slug: { _type: 'slug', current: 'conservation-at-pearns-point' },
    category: 'Development',
    publishedAt: '2025-08-20T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: "How Orange Limited's commitment to preserving over 70% of the land as natural habitat is shaping one of the most environmentally responsible developments in the Caribbean.",
    body: [block("How Orange Limited's commitment to preserving over 70% of the land as natural habitat is shaping one of the most environmentally responsible developments in the Caribbean.")],
    tags: ['Development', 'Conservation'],
    readTime: 4,
  },
  {
    _id: 'blogPost-second-citizenship',
    _type: 'blogPost',
    title: 'Why Second Citizenship is Becoming Essential for HNWI Families',
    slug: { _type: 'slug', current: 'why-second-citizenship-essential-hnwi' },
    category: 'Citizenship',
    publishedAt: '2025-07-15T00:00:00Z',
    author: { name: 'Pearns Point Team', bio: 'Updates from the development team at Pearns Point.' },
    excerpt: 'As global uncertainty grows, high-net-worth individuals are increasingly turning to citizenship by investment as a strategic tool for family security, mobility, and tax planning.',
    body: [block('As global uncertainty grows, high-net-worth individuals are increasingly turning to citizenship by investment as a strategic tool for family security, mobility, and tax planning.')],
    tags: ['Citizenship', 'Investment'],
    readTime: 6,
  },
]

// Now set the featured post reference on newsPage
const newsPageUpdate = documents.find(d => d._id === 'newsPage')
newsPageUpdate.featuredPost = { _type: 'reference', _ref: 'blogPost-three-new-villa-designs' }

// ═══════════════════════════════════════
// RUN SEED
// ═══════════════════════════════════════
async function seed() {
  console.log(`Seeding ${documents.length} documents into Sanity...`)

  for (const doc of documents) {
    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${doc._type} → ${doc._id}`)
    } catch (err) {
      console.error(`  ✗ ${doc._type} → ${doc._id}: ${err.message}`)
    }
  }

  console.log('\nDone! Images need to be uploaded manually via Sanity Studio.')
}

seed()
