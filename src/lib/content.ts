// Contenu éditorial du site Storycast.
// Pour mettre à jour une émission, un chiffre clé ou un texte, il suffit
// de modifier les valeurs ci-dessous — aucune autre partie du code n'a
// besoin d'être touchée.

export const stats = [
  { value: "2 000+", label: "émissions produites et réalisées en podcast" },
  { value: "10 M+", label: "écoutes cumulées depuis 2021" },
  { value: "86", label: "pays où Timeline est écouté" },
  { value: "23ᵉ", label: "podcast le plus écouté en France, tous formats confondus (ACPM)" },
];

export type Show = {
  title: string;
  description: string;
  href: string;
  tag: "Grand public" | "BtoB";
};

export const shows: Show[] = [
  {
    title: "Timeline, 5 000 ans d'Histoire",
    description:
      "Premier podcast natif d'Histoire en France : 350 000 écoutes en juin 2025, 1ʳᵉ place des podcasts d'Histoire.",
    href: "https://www.timeline-story.fr/emission.html?id=362011abd129805e9cbecf244b0ae2f1&db=313011abd129808da0facfbe4684e31c&type=audio",
    tag: "Grand public",
  },
  {
    title: "Vivement Demain ?",
    description:
      "L'émission Grand Public qui décrypte l'avenir des plus de 45 ans.",
    href: "https://podcasts.apple.com/fr/podcast/1-les-vieux-de-plus-en-plus-jeunes/id1824407695?i=1000715574264",
    tag: "Grand public",
  },
  {
    title: "Time Shot",
    description:
      "Chaque jour, une minute pour comprendre l'Histoire du Monde.",
    href: "https://podcasts.apple.com/fr/podcast/time-shot-une-minute-pour-comprendre-lhistoire-du-monde/id1823199865",
    tag: "Grand public",
  },
  {
    title: "La Planète des Hommes",
    description:
      "Le premier docu-fiction historique audio de France, qui reprend tout le programme d'Histoire de la 6ᵉ au Brevet.",
    href: "https://www.timeline-story.fr/emission.html?id=362011abd12980dba7b8d18705bdfd00&db=361011abd12980ee8501dde3e8243aeb&type=audio",
    tag: "Grand public",
  },
  {
    title: "Déclic d'avenir",
    description:
      "Le podcast BtoB d'Arche MC2 sur la digitalisation du service aux personnes.",
    href: "https://arche-mc2.fr/declic-davenir-le-podcast-darche-mc2/",
    tag: "BtoB",
  },
  {
    title: "La Santé, ça s'écoute",
    description: "Le podcast MGC qui donne envie de prendre soin de sa santé.",
    href: "https://www.mgc-prevention.fr/podcast-la-sante-ca-secoute/",
    tag: "BtoB",
  },
  {
    title: "HRD Radio",
    description: "La radio des Directeurs des Ressources Humaines.",
    href: "https://btobradio.tv/radios/hrd-radio",
    tag: "BtoB",
  },
  {
    title: "CFO Radio",
    description: "La radio des Directeurs Financiers.",
    href: "https://btobradio.tv/radios/cfo-radio",
    tag: "BtoB",
  },
  {
    title: "Upcoop au service des commerçants",
    description: "Le podcast BtoB qui facilite le quotidien des commerçants.",
    href: "https://open.spotify.com/show/29ihr6g9UwdiZIpgjzxweb",
    tag: "BtoB",
  },
  {
    title: "Micro-entrepreneurs, Prêts ? Partez !",
    description:
      "Le podcast du Crédit Agricole sur la création d'entreprise et l'entrepreneuriat.",
    href: "https://shows.acast.com/micro-entrepreneurs-prets-partez",
    tag: "BtoB",
  },
  {
    title: "LAVIE est belle",
    description:
      "Chaque semaine, une bonne nouvelle venue du monde scientifique, artistique et numérique.",
    href: "https://podcasts.audiomeans.fr/lavie-est-belle-45f1d5cd67bb",
    tag: "BtoB",
  },
];

export const offerCategories = [
  {
    title: "Assistance technique",
    items: ["Enregistrement", "Montage", "Diffusion"],
    description:
      "Notre studio parisien prend en charge l'enregistrement jusqu'à 4 voix face à l'animateur, le montage et la post-production, pour une émission prête à diffuser sur toutes les plateformes.",
  },
  {
    title: "Une émission sur mesure",
    items: ["Table ronde", "Magazine", "Interview"],
    description:
      "Un format pensé pour un objectif précis : lancement, événement, campagne — conçu, écrit et réalisé pour votre cible.",
  },
  {
    title: "Un programme régulier",
    items: ["Programme", "Documentaire", "Conférence"],
    description:
      "Une émission récurrente qui installe votre marque dans la durée et fidélise votre audience, épisode après épisode.",
  },
];

export const founder = {
  name: "Richard Fremder",
  role: "Historien, chroniqueur radio et CEO de Storycast",
  bio: "Depuis presque 15 ans, Richard anime et prête sa voix au programme d'Histoire « Timeline, l'Histoire en Podcast », avec un objectif simple : rendre l'Histoire du Monde accessible au plus grand nombre, petits et grands.",
  photo: "/images/richard-fremder.png",
};

export const studioPhotos: { src?: string; alt: string; caption: string }[] = [
  {
    src: "/images/studio-cabine.jpg",
    alt: "Cabine d'enregistrement Storycast, quatre places face à l'animateur",
    caption: "La cabine d'enregistrement",
  },
  {
    src: "/images/sylvain-co-animateur.jpg",
    alt: "Sylvain, co-animateur, au micro dans le studio Storycast",
    caption: "Sylvain, co-animateur",
  },
  {
    src: "/images/regie-montage.jpg",
    alt: "Table de mixage de la régie Storycast",
    caption: "La régie de montage",
  },
];

export const contactInfo = {
  city: "Paris",
  intro:
    "Une question, un devis, une idée d'émission ? Nous revenons vers vous rapidement.",
};
