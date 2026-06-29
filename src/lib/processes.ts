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
  heroText: string;
  headerBg: string;
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
  heroIllustration: string;
  heroIllustrationDesktop: string;
  theme: ProcessTheme;
  ingredients: string[];
  curiosity: { question: string; answer: string };
  journeySectionTitle: string;
  journeySteps: JourneyStep[];
  dryingStep: { title: string; description: string; image: string };
  mixingStep: { title: string; description: string; image: string };
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
    desc:    "Grown in the Himalayan region,\n\nJatamansi roots are dried for 7–10 days after harvest.",
    caption: "From the hills of himalaya Behind every ingredient is a person who knows it well.",
  },
  cowDung: {
    desc:    "From the villages of India,\n\ncow dung is carefully collected and sun-dried for up to two weeks.",
    caption: "A familiar morning routine in many villages across India.",
  },
  kesar: {
    desc:    "In the valleys of Kashmir,\nsaffron flowers bloom for just a few weeks each year.\n\nPlucked carefully then dried for 3–5 days.",
    caption: "Long before it reaches your home, someone carefully separates every saffron thread by hand.",
  },
  chandan: {
    desc:    "From the sandalwood trees of southern India,\n\nChandan is harvested and dried for 2–6 weeks.",
    caption: "The work is slow, but some things are worth taking time for.",
  },
  champa: {
    desc:    "Grown in the temple towns of South India,\n\nChampa flowers are hand-picked and dried for 3–5 days.",
    caption: "Each flower is picked before the sun grows too strong.",
  },
  rose: {
    desc:    "Rose flowers bloom across the fields of Kannauj uttar pradesh \n\nTheir petals are dried for 4–7 days under the sun.",
    caption: "Before it becomes a fragrance, countless petals pass through caring hand",
  },
  kasturi: {
    desc:    "In Kannauj, India's perfume capital,\nKasturi powder is prepared and dried for 4-6  days",
    caption: "Every batch begins with people who know the fragrance long before it reaches a box.",
  },
};

// ─── Drying descriptions per ingredient ─────────────────────────
const DRYING = {
  kesar:     "Freshly picked saffron threads are left to dry,\nso their colour and aroma stay intact.",
  rose:      "The petals are spread out and left to dry naturally,\nbefore they become part of the blend.",
  champa:    "Once gathered, the flowers are carefully dried,\npreserving their delicate fragrance.",
  chandan:   "After being ground into powder,\nit is left to settle before moving to the next stage.",
  jatamansi: "The roots are dried over several days,\npreparing them for the blending process.",
  cowDung:   "Shaped and laid out in the sun,\nit slowly dries the traditional way.",
  kasturi:   "Once processed into powder,\nit is allowed to dry before being blended.",
};

// ─── Mixing descriptions per ingredient ─────────────────────────
const MIXING = {
  kesar:     "Once dried, the saffron is blended into the mix,\nbringing its distinctive character to the blend.",
  rose:      "The dried petals are finely processed\nand mixed into the fragrance blend.",
  champa:    "The flowers are blended with other ingredients,\nadding their soft floral notes.",
  chandan:   "The sandalwood powder becomes part of the blend,\nbringing a fragrance known for generations.",
  jatamansi: "The dried roots are mixed in,\nadding depth to the final composition.",
  cowDung:   "Combined with natural ingredients,\nit forms the base of the incense stick.",
  kasturi:   "The powder is blended in carefully,\nbecoming part of the fragrance profile.",
};

export const processPages: ProcessPage[] = [
  /* ═══ STEP 1 — NAG CHAMPA ═══ */
  {
    step: "1",
    fragrance: "Nag Champa",
    sanskritName: "वनसुरभि",
    title: "Nag Champa",
    path: "/process/1/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/nagchampa.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/nagchampa.png",
    theme: {
      pageBg: "#fdf5e6",
      heroGradient: "linear-gradient(135deg,#5c3520 0%,#7a4830 35%,#c8934a 70%,#5c3520 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(92,53,32,.25) 0%,rgba(92,53,32,.55) 40%,rgba(40,22,10,.88) 100%)",
      heroText: "#523210",
      headerBg: "rgba(92,53,32,0.75)",
      accent: "#c8934a",
      accentSoft: "rgba(200,147,74,.12)",
      eyebrow: "#8b5a2b",
    },
    ingredients: ["Champa Petals Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Champa flowers blended with jatamansi and natural base – Warm, deep floral fragrance – Meditative and spiritually grounding scent",
    },
    journeySectionTitle: "Our Nag Champa journey",
    journeySteps: [
      {
        number: 1,
        title: "Champa flowers",
        description: TEXT.champa.desc,
        caption: TEXT.champa.caption,
        sceneImage: "/images/nagchampa/scene-1.png",
        ingredientImage: "/images/nagchampa/ingredient-step1.png",
      },
      {
        number: 2,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/nagchampa/scene-2.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 3,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/nagchampa/scene-4.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `CHAMPA\n${MIXING.champa}\n\nCOW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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

  /* ═══ STEP 2 — OUDH ═══ */
  {
    step: "2",
    fragrance: "Oudh",
    sanskritName: "अगरु",
    title: "Oudh",
    path: "/process/2/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/oudh.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/oudh.png",
    theme: {
      pageBg: "#f7ead8",
      heroGradient: "linear-gradient(135deg,#3d1f0a 0%,#6b3a18 35%,#b07030 70%,#3d1f0a 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(61,31,10,.3) 0%,rgba(61,31,10,.6) 40%,rgba(25,12,4,.9) 100%)",
      heroText: "#523210",
      headerBg: "rgba(61,31,10,0.75)",
      accent: "#b07030",
      accentSoft: "rgba(176,112,48,.12)",
      eyebrow: "#7a4a18",
    },
    ingredients: ["Kasturi Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Rich oud with musk and jatamansi on a natural base – Gives an earthy, royal fragrance – Deep, grounding, and long-lasting calming scent",
    },
    journeySectionTitle: "Our Oudh journey",
    journeySteps: [
      {
        number: 1,
        title: "Kasturi powder",
        description: TEXT.kasturi.desc,
        caption: TEXT.kasturi.caption,
        sceneImage: "/images/oudh/scene-1.png",
        ingredientImage: "/images/oudh/ingredient-step1.png",
      },
      {
        number: 2,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/oudh/scene-2.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 3,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/oudh/scene-5.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `KASTURI\n${MIXING.kasturi}\n\nCOW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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

  /* ═══ STEP 3 — KESAR CHANDAN ═══ */
  {
    step: "3",
    fragrance: "Kesar Chandan",
    sanskritName: "काशी",
    title: "Kesar Chandan",
    path: "/process/3/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/kesar-chandan.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/kesar chandn.png",
    theme: {
      pageBg: "#fdf6e8",
      heroGradient: "linear-gradient(135deg,#7a3a08 0%,#c47820 40%,#f5d080 75%,#7a3a08 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(122,58,8,.2) 0%,rgba(122,58,8,.5) 40%,rgba(40,18,0,.88) 100%)",
      heroText: "#523210",
      headerBg: "rgba(122,58,8,0.75)",
      accent: "#c47820",
      accentSoft: "rgba(196,120,32,.12)",
      eyebrow: "#9a5a10",
    },
    ingredients: ["Kesar Powder", "Chandan Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Saffron and sandalwood blend with jatamansi and a traditional base – Creates a warm, sacred aroma – Feels pure, devotional, and deeply calming",
    },
    journeySectionTitle: "Our Kesar Chandan journey",
    journeySteps: [
      {
        number: 1,
        title: "Kesar",
        description: TEXT.kesar.desc,
        caption: TEXT.kesar.caption,
        sceneImage: "/images/kesarchandan/scene-1.png",
        ingredientImage: "/images/kesarchandan/ingredient-step1.png",
      },
      {
        number: 2,
        title: "Chandan",
        description: TEXT.chandan.desc,
        caption: TEXT.chandan.caption,
        sceneImage: "/images/kesarchandan/scene-2.png",
        ingredientImage: "/images/kesarchandan/ingredient-step2.png",
      },
      {
        number: 3,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/kesarchandan/scene-5.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 4,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/kesarchandan/scene-3.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `KESAR\n${MIXING.kesar}\n\nCHANDAN\n${MIXING.chandan}\n\nCOW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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

  /* ═══ STEP 4 — HAWAN ═══ */
  {
    step: "4",
    fragrance: "Hawan",
    sanskritName: "आहुति",
    title: "Hawan",
    path: "/process/4/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/havan.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/havan.png",
    theme: {
      pageBg: "#fdf4e0",
      heroGradient: "linear-gradient(135deg,#6b2020 0%,#9a4020 40%,#c89030 75%,#6b2020 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(107,32,32,.25) 0%,rgba(107,32,32,.55) 40%,rgba(40,10,10,.9) 100%)",
      heroText: "#523210",
      headerBg: "rgba(107,32,32,0.75)",
      accent: "#c89030",
      accentSoft: "rgba(200,144,48,.12)",
      eyebrow: "#8b4820",
    },
    ingredients: ["Hawan Samagri Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Sacred hawan herbs with jatamansi and traditional base – Smoky, temple-like natural aroma – Purifying and powerful spiritual feel",
    },
    journeySectionTitle: "Our Hawan journey",
    journeySteps: [
      {
        number: 1,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/hawan/scene-5.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 2,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/hawan/scene-3.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `COW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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

  /* ═══ STEP 5 — GULAB ═══ */
  {
    step: "5",
    fragrance: "Gulab",
    sanskritName: "कुसुम",
    title: "Gulab",
    path: "/process/5/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/gulab.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/gulab.png",
    theme: {
      pageBg: "#fdf0ee",
      heroGradient: "linear-gradient(135deg,#8b2040 0%,#c04060 35%,#d4788a 70%,#8b2040 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(139,32,64,.25) 0%,rgba(139,32,64,.55) 40%,rgba(50,10,20,.9) 100%)",
      heroText: "#960035",
      headerBg: "rgba(139,32,64,0.75)",
      accent: "#c04060",
      accentSoft: "rgba(192,64,96,.10)",
      eyebrow: "#9a3050",
    },
    ingredients: ["Rose Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Fresh rose with jatamansi and natural base – Light and gentle floral fragrance – Uplifting and emotionally soothing",
    },
    journeySectionTitle: "Our Gulab journey",
    journeySteps: [
      {
        number: 1,
        title: "Rose",
        description: TEXT.rose.desc,
        caption: TEXT.rose.caption,
        sceneImage: "/images/gulab/scene-1.png",
        ingredientImage: "/images/gulab/ingredient-step1.png",
      },
      {
        number: 2,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/gulab/scene-2.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 3,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/gulab/scene-5.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `ROSE\n${MIXING.rose}\n\nCOW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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

  /* ═══ STEP 6 — CHANDAN ═══ */
  {
    step: "6",
    fragrance: "Chandan",
    sanskritName: "श्रीगंध",
    title: "Chandan",
    path: "/process/6/",
    heroBanner: "",
    heroIllustration: "/images/incense illustration/chandan.png",
    heroIllustrationDesktop: "/images/incense illustration  desktop/chandan.png",
    theme: {
      pageBg: "#fdf8f0",
      heroGradient: "linear-gradient(135deg,#4a2c10 0%,#7a4e28 35%,#c49050 70%,#4a2c10 100%)",
      heroOverlay: "linear-gradient(to bottom,rgba(74,44,16,.25) 0%,rgba(74,44,16,.55) 40%,rgba(25,14,4,.9) 100%)",
      heroText: "#523210",
      headerBg: "rgba(74,44,16,0.75)",
      accent: "#c49050",
      accentSoft: "rgba(196,144,80,.12)",
      eyebrow: "#8a5828",
    },
    ingredients: ["Chandan Powder", "Cow Dung", "Jatamanshi"],
    curiosity: {
      question: "What's the story behind this stick?",
      answer: "Pure sandalwood blended with jatamansi and natural base – Soft and soothing aroma – Brings calmness and spiritual balance",
    },
    journeySectionTitle: "Our Chandan journey",
    journeySteps: [
      {
        number: 1,
        title: "Chandan",
        description: TEXT.chandan.desc,
        caption: TEXT.chandan.caption,
        sceneImage: "/images/chandan/scene-1.png",
        ingredientImage: "/images/chandan/ingredient-step1.png",
      },
      {
        number: 2,
        title: "Cow Dung",
        description: TEXT.cowDung.desc,
        caption: TEXT.cowDung.caption,
        sceneImage: "/images/chandan/scene-2.png",
        ingredientImage: "/images/ingredients/cowdung.png",
      },
      {
        number: 3,
        title: "Jatamanshi",
        description: TEXT.jatamanshi.desc,
        caption: TEXT.jatamanshi.caption,
        sceneImage: "/images/chandan/scene-5.png",
        ingredientImage: "/images/ingredients/jatamansi.png",
      },
    ],
    dryingStep: {
      title: "Drying",
      description: "The incense sticks have now taken their final shape. \n\nThey are carefully laid out to dry naturally, allowing the moisture to fade away slowly. \n\nWith every passing day, they move one step closer to being ready.",
      image: COMMON.drying,
    },
    mixingStep: {
      title: "Mixing",
      description: `CHANDAN\n${MIXING.chandan}\n\nCOW DUNG\n${MIXING.cowDung}\n\nJATAMANSI\n${MIXING.jatamansi}`,
      image: COMMON.mixing,
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