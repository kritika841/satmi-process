export type JourneyStep = {
  number: number;
  title: string;
  description: string;
  caption?: string;
  sceneImage: string;
  ingredientImage: string;
};

export type ProcessTheme = {
  pageBg: string;
  heroGradient: string;
  heroOverlay: string;
  accent: string;
  accentSoft: string;
  eyebrow: string;
};

export type ProcessPage = {
  step: string;
  fragrance: string;
  sanskritName: string;
  title: string;
  path: string;
  heroBanner: string;
  theme: ProcessTheme;
  ingredients: string[];
  curiosity: { question: string; answer: string };
  journeySectionTitle: string;
  journeySteps: JourneyStep[];
  mixingStep: { title: string; description: string; image: string };
  packagingStep: { title: string; description: string; image: string };
  closingText: { headline: string; body: string };
  artisans: { headline: string; subheadline: string; groupImage: string };
};

// ─── Shared images ─────────────────────────────────────────────
const COMMON = {
  drying:    "/images/common/drying.png",
  mixing:    "/images/common/mixing.png",
  packaging: "/images/common/packaging.png",
  artisans:  "/images/common/artisans-group.png",
};

// ─── Shared ingredient texts ────────────────────────────────────
const TEXT = {
  jatamanshi: {
    desc:    "Grown in the Himalayan region, Jatamansi roots are dried for 7–10 days after harvest.",
    caption: "From the hills of Himalaya. Behind every ingredient is a person who knows it well.",
  },
  cowDung: {
    desc:    "From the villages of India, cow dung is carefully collected and sun-dried for up to two weeks.",
    caption: "A familiar morning routine in many villages across India.",
  },
  kesar: {
    desc:    "In the valleys of Kashmir, saffron flowers bloom for just a few weeks each year.\n\nPlucked carefully then dried for 3–5 days.",
    caption: "Long before it reaches your home, someone carefully separates every saffron thread by hand.",
  },
  chandan: {
    desc:    "From the sandalwood trees of southern India, Chandan is harvested and dried for 2–6 weeks.",
    caption: "The work is slow, but some things are worth taking time for.",
  },
  champa: {
    desc:    "Grown in the temple towns of South India, Champa flowers are hand-picked and dried for 3–5 days.",
    caption: "Each flower is picked before the sun grows too strong.",
  },
  rose: {
    desc:    "Rose flowers bloom across the fields of Kannauj, Uttar Pradesh.\n\nTheir petals are dried for 4–7 days under the sun.",
    caption: "Before it becomes a fragrance, countless petals pass through caring hands.",
  },
  kasturi: {
    desc:    "In Kannauj, India's perfume capital, Kasturi powder is prepared and dried for 4–6 days.",
    caption: "Every batch begins with people who know the fragrance long before it reaches a box.",
  },
};

export const processPages: ProcessPage[] = [

  /* ═══════════════════════════════════════════════════════
     STEP 1 — NAG CHAMPA  (वनसुरभि)
     Champa flowers blended with jatamansi and natural base
     Warm, deep floral fragrance
     Meditative and spiritually grounding scent
  ═══════════════════════════════════════════════════════ */
  {
    step: "1",
    fragrance: "Nag Champa",
    sanskritName: "वनसुरभि",
    title: "Nag Champa",
    path: "/process/1/",
    heroBanner: "",
    theme: {
      pageBg: "#fdf5e6",
      heroGradient: "linear-gradient(135deg,#5c3520 0%,#7a4830 35%,#c8934a 70%,#5c3520 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(92,53,32,.25) 0%,rgba(92,53,32,.55) 40%,rgba(40,22,10,.88) 100%)",
      accent: "#c8934a",
      accentSoft: "rgba(200,147,74,.12)",
      eyebrow: "#8b5a2b",
    },
    ingredients: ["Champa Petals Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What makes Nag Champa so deeply meditative?",
      answer:
        "Champa flowers blended with Jatamansi and a natural base create a warm, deep floral fragrance that is meditative and spiritually grounding — a scent used in temples and ashrams across India for generations.",
    },
    journeySectionTitle: "Our Nag Champa journey",
    journeySteps: [
      {
        number: 1,
        title: "Gathering Champa petals",
        description: TEXT.champa.desc,
        caption: TEXT.champa.caption,
        sceneImage: "/images/nagchampa/scene-1.png",
        ingredientImage: "/images/nagchampa/ingredient.png",
      },
      {
        number: 2,
        title: "Selecting the finest blooms",
        description: "Only fully opened, fragrant Champa blossoms are chosen. Each petal is gently inspected — if it doesn't carry that distinctive sweet warmth, it doesn't make the cut.",
        sceneImage: "/images/nagchampa/scene-2.png",
        ingredientImage: "/images/nagchampa/ingredient.png",
      },
      {
        number: 3,
        title: "Stone-grinding to a soft powder",
        description: "The dried petals are slowly stone-ground into a silky, aromatic powder — the beating heart of every Nag Champa stick.",
        sceneImage: "/images/nagchampa/scene-3.png",
        ingredientImage: "/images/nagchampa/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Champa powder and Jatamanshi root are spread on bamboo trays and dried together under the open sky — a shared ritual that connects all our ingredients to the same source.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/nagchampa/ingredient.png",
      },
      {
        number: 5,
        title: "Jatamanshi — the grounding note",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/nagchampa/scene-4.png",
        ingredientImage: "/images/nagchampa/ingredient.png",
      },
    ],
    mixingStep: {
      title: "All ingredients come together",
      description:
        "Champa powder, Jatamanshi, and purified cow dung are blended by hand in a traditional stone mortar — the moment this fragrance truly begins.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Packed with purpose",
      description:
        "Each bundle of bamboo-less Nag Champa sticks is hand-wrapped and sealed, ready to fill your home with their meditative warmth.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "Ancient petals. Timeless fragrance.",
      body: "Nag Champa is more than a scent — it's a tradition carried in every flower, every root, and every hand that shapes it.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Nag Champa",
      groupImage: COMMON.artisans,
    },
  },

  /* ═══════════════════════════════════════════════════════
     STEP 2 — OUDH  (अगरु)
     Rich oud with musk and jatamansi on a natural base
     Earthy, royal fragrance
     Deep, grounding, long-lasting calming scent
  ═══════════════════════════════════════════════════════ */
  {
    step: "2",
    fragrance: "Oudh",
    sanskritName: "अगरु",
    title: "Oudh",
    path: "/process/2/",
    heroBanner: "",
    theme: {
      pageBg: "#f7ead8",
      heroGradient: "linear-gradient(135deg,#3d1f0a 0%,#6b3a18 35%,#b07030 70%,#3d1f0a 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(61,31,10,.3) 0%,rgba(61,31,10,.6) 40%,rgba(25,12,4,.9) 100%)",
      accent: "#b07030",
      accentSoft: "rgba(176,112,48,.12)",
      eyebrow: "#7a4a18",
    },
    ingredients: ["Kasturi Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What makes Oudh one of the world's most prized fragrances?",
      answer:
        "Rich oud with musk and Jatamansi on a natural base gives an earthy, royal fragrance — deep, grounding, and a long-lasting calming scent that has been prized by royalty and mystics alike for centuries.",
    },
    journeySectionTitle: "Our Oudh journey",
    journeySteps: [
      {
        number: 1,
        title: "Sourcing Kasturi from Kannauj",
        description: TEXT.kasturi.desc,
        caption: TEXT.kasturi.caption,
        sceneImage: "/images/oudh/scene-1.png",
        ingredientImage: "/images/oudh/ingredient.png",
      },
      {
        number: 2,
        title: "Selecting the finest resin",
        description: "Only the richest, darkest Kasturi pieces are chosen — ensuring maximum depth and complexity in every stick.",
        sceneImage: "/images/oudh/scene-2.png",
        ingredientImage: "/images/oudh/ingredient.png",
      },
      {
        number: 3,
        title: "Traditional stone grinding",
        description: "The resin is stone-ground by hand into a fine, dark powder that preserves every note of its deep, smoky character.",
        sceneImage: "/images/oudh/scene-3.png",
        ingredientImage: "/images/oudh/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Kasturi powder and Jatamanshi root dry together in the open sun — the shared step that gives Oudh its grounded, earthy depth.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/oudh/ingredient.png",
      },
      {
        number: 5,
        title: "Jatamanshi — the earthy anchor",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/oudh/scene-5.png",
        ingredientImage: "/images/oudh/ingredient.png",
      },
    ],
    mixingStep: {
      title: "Where the magic is blended",
      description:
        "Kasturi powder, Jatamanshi, and purified cow dung converge in the mortar — the moment Oudh's legendary depth is born.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Wrapped in reverence",
      description:
        "Each bundle of bamboo-less Oudh sticks is hand-wrapped with care, ready to bring sacred, smoky warmth into your space.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "Rare resin. Deep roots. Pure Oudh.",
      body: "From Kannauj's perfume capital to your hands — every Oudh stick carries centuries of tradition and the soul of the wild.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Oudh",
      groupImage: COMMON.artisans,
    },
  },

  /* ═══════════════════════════════════════════════════════
     STEP 3 — KESAR CHANDAN  (काशी)
     Saffron and sandalwood blend with jatamansi
     Warm, sacred aroma
     Pure, devotional, and deeply calming
  ═══════════════════════════════════════════════════════ */
  {
    step: "3",
    fragrance: "Kesar Chandan",
    sanskritName: "काशी",
    title: "Kesar Chandan",
    path: "/process/3/",
    heroBanner: "",
    theme: {
      pageBg: "#fdf6e8",
      heroGradient: "linear-gradient(135deg,#7a3a08 0%,#c47820 40%,#f5d080 75%,#7a3a08 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(122,58,8,.2) 0%,rgba(122,58,8,.5) 40%,rgba(40,18,0,.88) 100%)",
      accent: "#c47820",
      accentSoft: "rgba(196,120,32,.12)",
      eyebrow: "#9a5a10",
    },
    ingredients: ["Kesar Powder", "Chandan Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "Why do we blend Saffron and Sandalwood together?",
      answer:
        "Saffron and sandalwood blend with Jatamansi and a traditional base to create a warm, sacred aroma that feels pure, devotional, and deeply calming — used in temple offerings across India for thousands of years.",
    },
    journeySectionTitle: "Our Kesar Chandan journey",
    journeySteps: [
      {
        number: 1,
        title: "Harvesting precious Kesar",
        description: TEXT.kesar.desc,
        caption: TEXT.kesar.caption,
        sceneImage: "/images/kesarchandan/scene-1.png",
        ingredientImage: "/images/kesarchandan/ingredient.png",
      },
      {
        number: 2,
        title: "Sourcing Chandan from the South",
        description: TEXT.chandan.desc,
        caption: TEXT.chandan.caption,
        sceneImage: "/images/kesarchandan/scene-2.png",
        ingredientImage: "/images/kesarchandan/ingredient.png",
      },
      {
        number: 3,
        title: "Jatamanshi — the Himalayan root",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/kesarchandan/scene-3.png",
        ingredientImage: "/images/kesarchandan/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Kesar, Chandan, and Jatamanshi rest together on bamboo trays under the open sky — a shared drying ritual that unites three very different ingredients into one.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/kesarchandan/ingredient.png",
      },
      {
        number: 5,
        title: "Preparing the sacred base",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/kesarchandan/scene-5.png",
        ingredientImage: "/images/kesarchandan/ingredient.png",
      },
    ],
    mixingStep: {
      title: "Gold meets wood in the bowl",
      description:
        "Kesar, Chandan, Jatamanshi, and cow dung come together in exact measure — the ancient alchemy that creates Kesar Chandan's unmistakable warmth.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Sealed in golden warmth",
      description:
        "Each bundle of bamboo-less Kesar Chandan sticks is carefully wrapped, locking in saffron warmth and sandalwood cool until the moment you light it.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "Saffron gold. Sandalwood calm.",
      body: "Two of India's most sacred scents, united in every stick — bringing the glow of devotion into your daily ritual.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Kesar Chandan",
      groupImage: COMMON.artisans,
    },
  },

  /* ═══════════════════════════════════════════════════════
     STEP 4 — HAWAN  (आहुति)
     Sacred hawan herbs with jatamansi and traditional base
     Smoky, temple-like natural aroma
     Purifying and powerful spiritual feel
  ═══════════════════════════════════════════════════════ */
  {
    step: "4",
    fragrance: "Hawan",
    sanskritName: "आहुति",
    title: "Hawan",
    path: "/process/4/",
    heroBanner: "",
    theme: {
      pageBg: "#fdf4e0",
      heroGradient: "linear-gradient(135deg,#6b2020 0%,#9a4020 40%,#c89030 75%,#6b2020 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(107,32,32,.25) 0%,rgba(107,32,32,.55) 40%,rgba(40,10,10,.9) 100%)",
      accent: "#c89030",
      accentSoft: "rgba(200,144,48,.12)",
      eyebrow: "#8b4820",
    },
    ingredients: ["Hawan Samagri Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What makes Hawan agarbatti different from all other incense?",
      answer:
        "Sacred Hawan herbs blended with Jatamansi and a traditional base create a smoky, temple-like natural aroma that is purifying and powerfully spiritual — the same sacred plants used in Vedic fire rituals for thousands of years, now in every stick.",
    },
    journeySectionTitle: "Our Hawan journey",
    journeySteps: [
      {
        number: 1,
        title: "Sourcing sacred Hawan herbs",
        description: "Our Hawan Samagri draws from dozens of sacred herbs and roots — from dried mango wood to holy basil — sourced from Himalayan forests and Ayurvedic farms that have tended these plants for generations.",
        caption: "Each herb in this blend has been part of Vedic ritual for thousands of years.",
        sceneImage: "/images/hawan/scene-1.png",
        ingredientImage: "/images/hawan/ingredient.png",
      },
      {
        number: 2,
        title: "Selecting each component",
        description: "Every herb in the Samagri blend is individually inspected before grinding. If it doesn't carry the right sacred potency, it doesn't enter our blend.",
        sceneImage: "/images/hawan/scene-2.png",
        ingredientImage: "/images/hawan/ingredient.png",
      },
      {
        number: 3,
        title: "Jatamanshi — the Himalayan anchor",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/hawan/scene-3.png",
        ingredientImage: "/images/hawan/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Hawan Samagri and Jatamanshi root dry together in the open sun — the same purifying warmth that Vedic fire ceremonies have always called upon.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/hawan/ingredient.png",
      },
      {
        number: 5,
        title: "Preparing the sacred base",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/hawan/scene-5.png",
        ingredientImage: "/images/hawan/ingredient.png",
      },
    ],
    mixingStep: {
      title: "The Vedic blend assembled",
      description:
        "Hawan Samagri powder, Jatamanshi, and purified cow dung are combined with intention — a blending ritual as sacred as the fire ceremony it evokes.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Wrapped in ritual intention",
      description:
        "Each bundle of bamboo-less Hawan sticks is sealed to preserve the sacred potency of Samagri, ready to purify and bless your space.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "Ancient fire. Modern calm.",
      body: "Hawan brings the purifying spirit of Vedic ritual into your home — one breath, one stick, one sacred moment at a time.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Hawan",
      groupImage: COMMON.artisans,
    },
  },

  /* ═══════════════════════════════════════════════════════
     STEP 5 — GULAB  (कुसुम)
     Fresh rose with jatamansi and natural base
     Light and gentle floral fragrance
     Uplifting and emotionally soothing
  ═══════════════════════════════════════════════════════ */
  {
    step: "5",
    fragrance: "Gulab",
    sanskritName: "कुसुम",
    title: "Gulab",
    path: "/process/5/",
    heroBanner: "",
    theme: {
      pageBg: "#fdf0ee",
      heroGradient: "linear-gradient(135deg,#8b2040 0%,#c04060 35%,#d4788a 70%,#8b2040 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(139,32,64,.25) 0%,rgba(139,32,64,.55) 40%,rgba(50,10,20,.9) 100%)",
      accent: "#c04060",
      accentSoft: "rgba(192,64,96,.10)",
      eyebrow: "#9a3050",
    },
    ingredients: ["Rose Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "How do we capture the soul of a rose in an incense stick?",
      answer:
        "Fresh rose with Jatamansi and a natural base creates a light and gentle floral fragrance that is uplifting and emotionally soothing — every petal dried and ground by hand so the true scent of Kannauj's rose fields reaches you, unchanged.",
    },
    journeySectionTitle: "Our Gulab journey",
    journeySteps: [
      {
        number: 1,
        title: "Harvesting rose petals at dawn",
        description: TEXT.rose.desc,
        caption: TEXT.rose.caption,
        sceneImage: "/images/gulab/scene-1.png",
        ingredientImage: "/images/gulab/ingredient.png",
      },
      {
        number: 2,
        title: "Inspecting every petal",
        description: "Each petal is checked by hand — only fully opened, blemish-free petals make it into our Gulab blend. There are no shortcuts in this step.",
        sceneImage: "/images/gulab/scene-2.png",
        ingredientImage: "/images/gulab/ingredient.png",
      },
      {
        number: 3,
        title: "Gentle shade-drying",
        description: "Petals are dried slowly in the shade — never in harsh sunlight — to prevent the precious aromatic oils from evaporating before they reach you.",
        sceneImage: "/images/gulab/scene-3.png",
        ingredientImage: "/images/gulab/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Once shade-dried, rose petals and Jatamanshi root come together on bamboo trays in the open sun — the shared drying ritual that unites all our ingredients.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/gulab/ingredient.png",
      },
      {
        number: 5,
        title: "Jatamanshi — the grounding note",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/gulab/scene-5.png",
        ingredientImage: "/images/gulab/ingredient.png",
      },
    ],
    mixingStep: {
      title: "A garden in a bowl",
      description:
        "Rose powder, Jatamanshi, and purified cow dung are blended together — transforming individual ingredients into the full, blooming heart of Gulab.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Wrapped with petal-soft care",
      description:
        "Every bundle of bamboo-less Gulab sticks is gently wrapped and sealed, ready to bring the soft, uplifting warmth of rose into your home.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "A rose, from nature to your hands.",
      body: "Every Gulab stick is a letter written by a rose — patient, fragrant, and made with love.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Gulab",
      groupImage: COMMON.artisans,
    },
  },

  /* ═══════════════════════════════════════════════════════
     STEP 6 — CHANDAN  (श्रीगंध)
     Pure sandalwood blended with jatamansi and natural base
     Soft and soothing aroma
     Brings calmness and spiritual balance
  ═══════════════════════════════════════════════════════ */
  {
    step: "6",
    fragrance: "Chandan",
    sanskritName: "श्रीगंध",
    title: "Chandan",
    path: "/process/6/",
    heroBanner: "",
    theme: {
      pageBg: "#fdf8f0",
      heroGradient: "linear-gradient(135deg,#4a2c10 0%,#7a4e28 35%,#c49050 70%,#4a2c10 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(74,44,16,.25) 0%,rgba(74,44,16,.55) 40%,rgba(25,14,4,.9) 100%)",
      accent: "#c49050",
      accentSoft: "rgba(196,144,80,.12)",
      eyebrow: "#8a5828",
    },
    ingredients: ["Chandan Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "Why has sandalwood been sacred in India for over 4,000 years?",
      answer:
        "Pure sandalwood blended with Jatamansi and a natural base creates a soft and soothing aroma that brings calmness and spiritual balance — Chandan's cool, creamy scent has graced temples, ritual, and meditation since ancient times.",
    },
    journeySectionTitle: "Our Chandan journey",
    journeySteps: [
      {
        number: 1,
        title: "Sourcing Chandan heartwood",
        description: TEXT.chandan.desc,
        caption: TEXT.chandan.caption,
        sceneImage: "/images/chandan/scene-1.png",
        ingredientImage: "/images/chandan/ingredient.png",
      },
      {
        number: 2,
        title: "Ageing the sacred wood",
        description: "Raw sandalwood is aged in dry storage to concentrate its aromatic oils naturally — patience is built into every step of the Chandan process.",
        sceneImage: "/images/chandan/scene-2.png",
        ingredientImage: "/images/chandan/ingredient.png",
      },
      {
        number: 3,
        title: "Chipping and stone-grinding",
        description: "The heartwood is hand-chipped then slowly stone-ground into the finest Chandan powder — cool, creamy, and unmistakably sacred.",
        sceneImage: "/images/chandan/scene-3.png",
        ingredientImage: "/images/chandan/ingredient.png",
      },
      {
        number: 4,
        title: "Sun-drying together",
        description: "Chandan powder and Jatamanshi root dry together in the open sun — the shared ritual that connects every Satmi fragrance to the same earth.",
        sceneImage: COMMON.drying,
        ingredientImage: "/images/chandan/ingredient.png",
      },
      {
        number: 5,
        title: "Jatamanshi — depth from the Himalayas",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/chandan/scene-5.png",
        ingredientImage: "/images/chandan/ingredient.png",
      },
    ],
    mixingStep: {
      title: "Wood, earth, and root united",
      description:
        "Chandan powder, Jatamanshi, and purified cow dung are hand-blended until the mixture achieves its characteristic cool, woody, soothing character.",
      image: COMMON.mixing,
    },
    packagingStep: {
      title: "Sealed in sandalwood warmth",
      description:
        "Each bundle of bamboo-less Chandan sticks is wrapped and sealed to preserve its precious aromatic oils — ready to bring calmness and spiritual balance to your space.",
      image: COMMON.packaging,
    },
    closingText: {
      headline: "Cool wood. Ancient calm.",
      body: "Chandan has graced temples for millennia. Now it graces your home — one hand-crafted, bamboo-less stick at a time.",
    },
    artisans: {
      headline: "Meet the hands that make this possible.",
      subheadline: "The people behind Chandan",
      groupImage: COMMON.artisans,
    },
  },
];

export function getProcessPage(step: string) {
  return processPages.find((page) => page.step === step);
}