import { arAltTracks, frAltTracks } from "./altTracksData";

export type Lang = "fr" | "ar";

const fr = {
  nav: {
    mahadra: "La Mahadra",
    music: "Musique",
    instruments: "Instruments",
    games: "Jeux",
    brand: "GP Culturelle",
    langSwitch: "عربي",
  },
  hero: {
    badge: "Patrimoine Immatériel",
    titleLine1: "La Culture",
    titleLine2: "Mauritanienne",
    subtitle:
      "Un patrimoine riche influencé par les traditions maures, arabo-berbères et subsahariennes, avec un fort accent sur la transmission orale et communautaire.",
    discover: "Découvrir",
  },
  mahadra: {
    subtitle: "L'université du désert",
    title: "La Mahadra",
    description:
      "Surnommée l'université du désert, la Mahadra est un système communautaire d'éducation traditionnelle inscrit au patrimoine immatériel de l'UNESCO en 2023.",
    body: "Les savoirs oraux, poétiques et scientifiques sont transmis par écoute et mémorisation sous une tente nomade. Cette institution unique enseigne le Coran, la poésie mauritanienne et les connaissances sur la nature.",
    videoCaption: "La Mahadra : l'université du désert mauritanien",
    statYears: "Ans",
    statHeritage: "Héritage",
    features: [
      { title: "Enseignement Coranique", desc: "Le Coran constitue le pilier fondamental, transmis par récitation et mémorisation." },
      { title: "Poésie & Sciences", desc: "Poésie mauritanienne, plantes médicinales, étoiles et connaissance du désert." },
      { title: "Cohésion Sociale", desc: "Ouverte à tous, elle renforce les liens communautaires entre maîtres et élèves." },
      { title: "Vie Nomade", desc: "L'enseignement se fait sous une tente dans le désert, suivant les déplacements." },
    ],
  },
  music: {
    subtitle: "L'âme sonore du Sahara",
    title: "Musique Traditionnelle",
    description:
      "L'azawan maure, interprété par les iggawin, est classé en 5 modes musicaux pour poèmes, éloges, danses ou psalmodies religieuses.",
    videoCaption1: "La musique traditionnelle mauritanienne",
    videoCaption2: "Performance musicale maure",
    videoCaption3: "Chants et rythmes traditionnels",
    artistsTitle: "Artistes Emblématiques",
    trackLabel: "Piste",
    artists: [
      { name: "Dimi Mint Abba", role: "Diva de la musique maure", desc: "Voix emblématique de la musique mauritanienne, reconnue internationalement." },
      { name: "Malouma Mint Meidah", role: "Artiste & Sénatrice", desc: "Pionnière qui mêle traditions maures et sonorités modernes." },
      { name: "Les Iggawin", role: "Griots traditionnels", desc: "Gardiens de la musique azawan, ils interprètent chants et poèmes aux cours royales." },
    ],
  },
  instruments: {
    subtitle: "L'artisanat sonore",
    title: "Instruments Traditionnels",
    description:
      "Les instruments de la musique maure reflètent des influences arabo-berbères et mandingues, souvent liés à des castes spécifiques.",
    videoCaption1: "Les instruments de la musique maure",
    videoCaption2: "Démonstration d'instruments traditionnels",
    tableHeaders: { instrument: "Instrument", type: "Type", origin: "Origine", description: "Description" },
    typeLabels: { Cordes: "Cordes", Percussion: "Percussion", Vent: "Vent", Mixte: "Mixte" } as Record<string, string>,
    footerCount: "5 instruments",
    list: [
      { name: "Tidinit", type: "Cordes", origin: "Maure", desc: "Luth à 4 cordes joué par les hommes griots (iggawin), instrument principal de la musique azawan." },
      { name: "Ardine", type: "Cordes", origin: "Maure", desc: "Harpe à 10-14 cordes jouée exclusivement par les femmes griotes (tigiwatin)." },
      { name: "Tbal", type: "Percussion", origin: "Arabo-Berbère", desc: "Grand tambour hémisphérique joué par les femmes, rythme central des cérémonies." },
      { name: "Daghumma", type: "Percussion", origin: "Mixte", desc: "Petit tambour d'accompagnement complétant les rythmes du tbal." },
      { name: "Nifara", type: "Vent", origin: "Subsaharienne", desc: "Flûte traditionnelle utilisée dans les mélodies pastorales et les chants nomades." },
    ],
  },
  games: {
    subtitle: "L'esprit du jeu",
    title: "Jeux Traditionnels",
    description:
      "Ces jeux renforcent les liens communautaires et divertissent sans violence, témoignant d'une culture de partage et de convivialité.",
    howToPlay: "Règles du jeu",
    items: [
      {
        name: "Anigur",
        aka: "Jeu de Bâton",
        image: "/anigur.jpg",
        description: "Simule un duel à l'épée avec des bâtons, sans vainqueur. Un spectacle impressionnant rythmé par les tambours et les youyous féminins.",
        occasion: "Mariages & Cérémonies",
        players: "Hommes",
        rules: [
          "Deux participants s'affrontent avec des bâtons",
          "Le duel est symbolique, sans vainqueur désigné",
          "Accompagné par les tambours (tbal)",
          "Les femmes encouragent avec des youyous",
        ],
      },
      {
        name: "Ekrour",
        aka: "Jeu de Billes",
        image: "/ekrour.jpg",
        description: "Jeu de stratégie ancestral joué avec des graines dans un plateau à trous. Répandu dans toute la Mauritanie, il fait appel à la réflexion et au calcul.",
        occasion: "Quotidien & Rassemblements",
        players: "Hommes & Femmes",
        rules: [
          "Un plateau à deux rangées de six trous",
          "Les joueurs distribuent les graines une par une",
          "On capture les graines de l'adversaire stratégiquement",
          "Le gagnant est celui qui capture le plus de graines",
        ],
      },
      {
        name: "Dhamet",
        aka: "Jeu de Mancala",
        image: "/dhamet.jpg",
        description: "Jeu de billes dans des trous pratiqués dans le sable. Les femmes y jouent particulièrement pendant le Ramadan.",
        occasion: "Ramadan",
        players: "Femmes",
        rules: [
          "Des trous sont creusés dans le sable",
          "Les joueuses lancent des billes dans les trous",
          "Les équipes s'affrontent amicalement",
          "Jeu de stratégie et d'adresse",
        ],
      },
    ],
  },
  about: {
    subtitle: "Notre héritage",
    title: "À Propos",
    description: "La culture mauritanienne est une mosaïque unique de traditions maures, arabo-berbères et subsahariennes.",
    influences: [
      { name: "Maure", icon: "🏜️", desc: "Traditions nomades du Sahara, poésie hassaniya et mode de vie du désert." },
      { name: "Arabo-Berbère", icon: "🕌", desc: "Héritage islamique, calligraphie, architecture et spiritualité soufie." },
      { name: "Subsaharienne", icon: "🌍", desc: "Cultures Peule, Wolof et Soninké : musiques festives, danses et rites." },
    ],
    influencePrefix: "Influence",
    unescoTitle: "Patrimoine UNESCO",
    unescoText: "La Mahadra a été inscrite au patrimoine culturel immatériel de l'UNESCO en 2023, reconnaissant son importance dans la préservation des savoirs traditionnels mauritaniens.",
    tags: ["Transmission Orale", "Éducation Communautaire", "Préservation Culturelle"],
  },
  footer: {
    brand: "GP - Journée Culturelle",
    desc: "Un projet dédié à la valorisation et la préservation de la culture traditionnelle mauritanienne.",
    navTitle: "Navigation",
    sourcesTitle: "Sources",
    copyright: "© 2026 GP - Journée Culturelle. Projet éducatif et culturel.",
    republic: "الجمهورية الإسلامية الموريتانية",
    madeBy: "Conçu & développé par",
    espStudents: "Étudiants GP",
    contact: "Contact",
  },
  cultureNav: {
    aria: "Choisir un peuple ou une culture mauritanienne",
    cultures: {
      bidan: { label: "Bidan", arabic: "البيظان" },
      soninke: { label: "Soninkés", arabic: "سوننكي" },
      wolof: { label: "Wolof", arabic: "ولوف" },
      pulaar: { label: "Poular", arabic: "بولار" },
    },
  },
  altTracks: frAltTracks,
} as const;

const ar = {
  nav: {
    mahadra: "المحظرة",
    music: "الموسيقى",
    instruments: "الآلات",
    games: "الألعاب",
    brand: "اليوم الثقافي",
    langSwitch: "Français",
  },
  hero: {
    badge: "تراث إنساني غير مادي",
    titleLine1: "الثقافة",
    titleLine2: "الموريتانية",
    subtitle:
      "إرث عريق تتشابك فيه عادات البيظان والعرب والأمازيغ وشعوب أفريقيا جنوب الصحراء، قوامه الرواية الشفهية والتكافل المجتمعي.",
    discover: "اكتشف",
  },
  mahadra: {
    subtitle: "جامعة الصحراء",
    title: "المحظرة",
    description:
      "تُلقّب بجامعة الصحراء، وهي منظومة تعليم أهلية عريقة أدرجتها اليونسكو ضمن التراث غير المادي سنة 2023.",
    body: "تُنقل المعارف الشفهية والأدبية والعلمية عبر السماع والحفظ تحت خيمة بدوية مترحّلة. تُعلّم هذه المؤسسة الفريدة القرآن الكريم والشعر الحساني وعلوم البادية.",
    videoCaption: "المحظرة: جامعة الصحراء الموريتانية",
    statYears: "سنة",
    statHeritage: "إرث",
    features: [
      { title: "تحفيظ القرآن", desc: "القرآن الكريم هو الأساس، يُتعلّم بالتلقين والترديد حتى يُحفظ عن ظهر قلب." },
      { title: "الشعر والمعارف", desc: "الشعر الحساني، التداوي بالأعشاب، علم الفلك الشعبي، ومعرفة أسرار الصحراء." },
      { title: "التماسك المجتمعي", desc: "أبوابها مفتوحة للجميع، تُوثّق الروابط بين الشيوخ والطلبة وتُعزّز التكافل." },
      { title: "الحياة البدوية", desc: "الدراسة تحت الخيمة في قلب الصحراء، تنتقل مع القبيلة أينما حلّت." },
    ],
  },
  music: {
    subtitle: "صوت الصحراء الكبرى",
    title: "الموسيقى التقليدية",
    description:
      "يُؤدّي «إيگاوِن» فنّ العزوان وفق خمسة مقامات تتراوح بين القصيد والمديح والرقص والذكر.",
    videoCaption1: "الموسيقى التقليدية الموريتانية",
    videoCaption2: "عزف موري أصيل",
    videoCaption3: "ألحان وإيقاعات تراثية",
    artistsTitle: "أعلام الفن الموريتاني",
    trackLabel: "مقطع",
    artists: [
      { name: "ديمي منت آبّا", role: "سيّدة الغناء الموري", desc: "صوت خالد في الذاكرة الموريتانية، نالت شهرة عالمية بأدائها الآسر." },
      { name: "معلومة منت الميداح", role: "فنانة وبرلمانية", desc: "رائدة جمعت بين أصالة اللحن الموري ونبض الموسيقى المعاصرة." },
      { name: "إيگاوِن", role: "حُماة التراث الموسيقي", desc: "حرّاس فنّ العزوان، يُنشدون القصائد في مجالس الأمراء والأعيان." },
    ],
  },
  instruments: {
    subtitle: "صنعة الأنغام",
    title: "الآلات التقليدية",
    description:
      "آلات الطرب الموري مرآة لتلاقح الثقافات العربية البربرية والمانديغية، ولكل آلة مكانتها ضمن الفئات الاجتماعية.",
    videoCaption1: "آلات الموسيقى المورية",
    videoCaption2: "عرض حيّ للآلات التراثية",
    tableHeaders: { instrument: "الآلة", type: "النوع", origin: "الأصل", description: "الوصف" },
    typeLabels: { Cordes: "وترية", Percussion: "إيقاعية", Vent: "هوائية", Mixte: "مختلط" } as Record<string, string>,
    footerCount: "٥ آلات موسيقية",
    list: [
      { name: "تيدينيت", type: "Cordes", origin: "مورية", desc: "عود ذو أربعة أوتار يعزف عليه الرجال من إيگاوِن، وهو العمود الفقري لموسيقى العزوان." },
      { name: "آردين", type: "Cordes", origin: "مورية", desc: "قيثارة بعشرة إلى أربعة عشر وتراً تختصّ بعزفها النساء (تيگيواتن)." },
      { name: "الطبل", type: "Percussion", origin: "عربية-بربرية", desc: "طبل كبير نصف كروي تضرب عليه النساء، يُشكّل نبض الاحتفالات." },
      { name: "الداغمّة", type: "Percussion", origin: "مختلطة", desc: "طبل صغير مُرافق يُكمّل إيقاعات الطبل الكبير." },
      { name: "النيفارة", type: "Vent", origin: "أفريقية", desc: "ناي تقليدي يُستخدم في ألحان الرعي وأغاني البادية." },
    ],
  },
  games: {
    subtitle: "روح اللعب والمنافسة",
    title: "الألعاب التقليدية",
    description:
      "ألعاب تُقوّي أواصر المجتمع وتُمتّع دون عنف، شاهدة على ثقافة المشاركة وحسن الجوار.",
    howToPlay: "طريقة اللعب",
    items: [
      {
        name: "أنيگور",
        aka: "لعبة العصا",
        image: "/anigur.jpg",
        description: "استعراض يُحاكي المبارزة بالعصي دون تحديد فائز، يصاحبه قرع الطبول وزغاريد النساء في أجواء حماسية.",
        occasion: "الأعراس والمناسبات",
        players: "الرجال",
        rules: [
          "يتقابل اثنان وبيد كل منهما عصا",
          "المبارزة رمزية لا تُحدّد فائزاً",
          "تُصاحبها إيقاعات الطبل",
          "تُشجّع النساء بالزغاريد",
        ],
      },
      {
        name: "اكرور",
        aka: "لعبة الحصى",
        image: "/ekrour.jpg",
        description: "لعبة تفكير قديمة تُلعب بالبذور على لوح ذي حفر، منتشرة في كل أنحاء موريتانيا وتحتاج إلى حساب وتخطيط.",
        occasion: "يومي وتجمعات",
        players: "الجميع",
        rules: [
          "لوح بصفّين كل منهما ستة حفر",
          "تُوزّع البذور واحدة تلو الأخرى",
          "تُلتقط بذور الخصم بحيلة وتدبير",
          "الفائز من يجمع أكبر عدد من البذور",
        ],
      },
      {
        name: "الضامة",
        aka: "المنقلة",
        image: "/dhamet.jpg",
        description: "لعبة حصى تُمارَس في حفر محفورة بالرمل، تشتهر بين النساء خصوصاً في ليالي رمضان.",
        occasion: "رمضان",
        players: "النساء",
        rules: [
          "تُحفر حفر صغيرة في الرمل",
          "تُرمى الحصى نحو الحفر بمهارة",
          "تتنافس الفرق بروح ودّية",
          "لعبة ذكاء ودقة في التصويب",
        ],
      },
    ],
  },
  about: {
    subtitle: "تراثنا",
    title: "حول المشروع",
    description: "الثقافة الموريتانية فسيفساء فريدة من التقاليد المورية والعربية البربرية والأفريقية.",
    influences: [
      { name: "مورية", icon: "🏜️", desc: "تقاليد الصحراء البدوية، شعر الحسانية ونمط حياة الصحراء." },
      { name: "عربية بربرية", icon: "🕌", desc: "الإرث الإسلامي، الخط العربي، العمارة والروحانية الصوفية." },
      { name: "أفريقية", icon: "🌍", desc: "ثقافات الفلان والولوف والسوننكي: موسيقى احتفالية، رقص وطقوس." },
    ],
    influencePrefix: "التأثير",
    unescoTitle: "تراث اليونسكو",
    unescoText: "أُدرجت المحظرة ضمن التراث الثقافي غير المادي لليونسكو سنة 2023، اعترافاً بدورها في حفظ المعارف التقليدية الموريتانية.",
    tags: ["النقل الشفهي", "التعليم المجتمعي", "الحفاظ على الثقافة"],
  },
  footer: {
    brand: "GP - اليوم الثقافي",
    desc: "مشروع مخصص لتثمين وحفظ الثقافة التقليدية الموريتانية.",
    navTitle: "التنقل",
    sourcesTitle: "المصادر",
    copyright: "© 2026 GP - اليوم الثقافي. مشروع تعليمي وثقافي.",
    republic: "الجمهورية الإسلامية الموريتانية",
    madeBy: "تصميم وتطوير",
    espStudents: "طلبة GP",
    contact: "تواصل",
  },
  cultureNav: {
    aria: "اختر شعباً أو ثقافة موريتانية",
    cultures: {
      bidan: { label: "البيظان", arabic: "البيظان" },
      soninke: { label: "سوننكي", arabic: "سوننكي" },
      wolof: { label: "ولوف", arabic: "ولوف" },
      pulaar: { label: "بولار", arabic: "بولار" },
    },
  },
  altTracks: arAltTracks,
} as const;

export type AltCultureTrack = {
  heritage: {
    subtitle: string;
    title: string;
    description: string;
    body: string;
    heroImage?: string;
    heroImageCaption?: string;
    videoId: string;
    videoCaption: string;
    stats: readonly { value: string; label: string }[];
    features: readonly { title: string; desc: string }[];
  };
  music: {
    subtitle: string;
    title: string;
    description: string;
    artistsTitle: string;
    trackLabel: string;
    videos: readonly { id: string; caption: string }[];
    artists: readonly { name: string; role: string; desc: string }[];
  };
  crafts: {
    subtitle: string;
    title: string;
    description: string;
    videoCaption1: string;
    videoCaption2: string;
    videoId1: string;
    videoId2: string;
    footerCount: string;
    /** Lien source optionnel (ex. portail culturel) */
    reference?: { label: string; url: string; hint: string };
    items: readonly { name: string; type: string; origin: string; desc: string; image?: string }[];
  };
  social: {
    subtitle: string;
    title: string;
    description: string;
    howToPlay: string;
    items: readonly {
      name: string;
      aka: string;
      image: string;
      description: string;
      occasion: string;
      players: string;
      rules: readonly string[];
    }[];
  };
};

export type Content = {
  cultureNav: {
    aria: string;
    cultures: {
      bidan: { label: string; arabic: string };
      soninke: { label: string; arabic: string };
      wolof: { label: string; arabic: string };
      pulaar: { label: string; arabic: string };
    };
  };
  altTracks: {
    soninke: AltCultureTrack;
    wolof: AltCultureTrack;
    pulaar: AltCultureTrack;
  };
  nav: { mahadra: string; music: string; instruments: string; games: string; brand: string; langSwitch: string };
  hero: { badge: string; titleLine1: string; titleLine2: string; subtitle: string; discover: string };
  mahadra: {
    subtitle: string; title: string; description: string; body: string; videoCaption: string;
    statYears: string; statHeritage: string;
    features: readonly { title: string; desc: string }[];
  };
  music: {
    subtitle: string; title: string; description: string;
    videoCaption1: string; videoCaption2: string; videoCaption3: string;
    artistsTitle: string; trackLabel: string;
    artists: readonly { name: string; role: string; desc: string }[];
  };
  instruments: {
    subtitle: string; title: string; description: string;
    videoCaption1: string; videoCaption2: string;
    tableHeaders: { instrument: string; type: string; origin: string; description: string };
    typeLabels: Record<string, string>;
    footerCount: string;
    list: readonly { name: string; type: string; origin: string; desc: string }[];
  };
  games: {
    subtitle: string; title: string; description: string; howToPlay: string;
    items: readonly {
      name: string; aka: string; image: string; description: string;
      occasion: string; players: string; rules: readonly string[];
    }[];
  };
  about: {
    subtitle: string; title: string; description: string;
    influences: readonly { name: string; icon: string; desc: string }[];
    influencePrefix: string; unescoTitle: string; unescoText: string;
    tags: readonly string[];
  };
  footer: {
    brand: string; desc: string; navTitle: string; sourcesTitle: string;
    copyright: string; republic: string; madeBy: string; espStudents: string; contact: string;
  };
};

export const translations: Record<Lang, Content> = { fr, ar };
