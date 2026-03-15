/** Contenu du site — français uniquement (rebuild from 0) */
export const content = {
  nav: {
    mahadra: "La Mahadra",
    music: "Musique",
    instruments: "Instruments",
    games: "Jeux",
    brand: "ESP Culturelle",
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
      "L'azawan maure, interprété par les iggawin (griots), est classé en 5 modes musicaux pour poèmes, éloges, danses ou psalmodies religieuses.",
    videoCaption1: "La musique traditionnelle mauritanienne",
    videoCaption2: "Performance musicale maure",
    videoCaption3: "Chants et rythmes traditionnels",
    artistsTitle: "Artistes Emblématiques",
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
    list: [
      { name: "Tidinit", type: "Cordes", origin: "Maure", desc: "Luth à 4 cordes joué par les hommes griots (iggawin), instrument principal de la musique azawan." },
      { name: "Ardine", type: "Cordes", origin: "Maure", desc: "Harpe à 10-14 cordes jouée exclusivement par les femmes griotes (tigiwatin)." },
      { name: "Tbal", type: "Percussion", origin: "Arabo-Berbere", desc: "Grand tambour hémisphérique joué par les femmes, rythme central des cérémonies." },
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
        aka: "Jeu Broche",
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
      {
        name: "Dhamet",
        aka: "Jeu de Mancala",
        image: "/dhamet.jpg",
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
    ],
  },
} as const;
