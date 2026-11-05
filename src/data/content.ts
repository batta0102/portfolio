export type Lang = 'fr' | 'en';

type Localized<T> = Record<Lang, T>;

export interface Experience {
  role: Localized<string>;
  company: string;
  period: Localized<string>;
  bullets: Localized<string[]>;
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: Localized<string>;
  meta: Localized<string>;
  summary: Localized<string>;
  problem: Localized<string>;
  built: Localized<string[]>;
  stack: string[];
  /** Personal takeaways. Left empty until written by Baya (see TODO list); the block is hidden when null. */
  learned: Localized<string[]> | null;
  /** Repo or demo link. null hides the button. */
  link: string | null;
}

export const profile = {
  name: 'Baya Khouini',
  role: 'Software Engineer · Full Stack & AI',
  email: 'baya.khouini@esprit.tn',
  github: 'https://github.com/batta0102',
  linkedin: 'https://www.linkedin.com/in/baya-khouini-5a0387255',
  siteUrl: 'https://batta0102.github.io/portfolio/',
};

export const ui = {
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    title: 'Baya Khouini — Software Engineer · Full Stack & AI',
    description:
      'En dernière année d’école d’ingénieur à ESPRIT (Tunis). Systèmes LLM fiables (multi-agents, RAG) et applications full stack en production. Recherche un stage PFE de 6 mois dès décembre 2026, en France ou en Europe.',
    skip: 'Aller au contenu',
    nav: {
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    switchLang: 'English',
    switchLangLabel: 'Read this page in English',
    themeLabel: 'Basculer le thème clair / sombre',
    intro:
      "En dernière année du cycle ingénieur à ESPRIT (Tunis), spécialité Software Architecture Engineering, diplôme en juin 2027. Je conçois des systèmes LLM fiables (multi-agents, RAG) et je livre des applications full stack en production.",
    badge: 'Ouvert à un stage PFE de 6 mois dès décembre 2026',
    badgeDetail: 'France & Europe · convention internationale via ESPRIT',
    cvFr: 'CV (français)',
    cvEn: 'CV (anglais)',
    contactCta: 'Me contacter',
    sections: {
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    caseStudy: "Voir l'étude de cas",
    problem: 'Problème',
    built: 'Ce que j’ai construit',
    stack: 'Stack',
    learned: 'Ce que j’ai appris',
    viewProject: 'Voir le projet',
    languagesTitle: 'Langues',
    contactText:
      'Je recherche un stage de fin d’études (PFE) de 6 mois à partir de décembre 2026, en France ou en Europe, avec une convention internationale via ESPRIT. Le plus simple : un e-mail.',
    footer: 'Site statique construit avec Astro et Tailwind CSS.',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Baya Khouini — Software Engineer · Full Stack & AI',
    description:
      'Final-year software engineering student at ESPRIT. Reliable LLM-powered systems (multi-agent, RAG) and full-stack apps shipped to production. Looking for a 6-month end-of-studies internship from December 2026 in France or Europe.',
    skip: 'Skip to content',
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    switchLang: 'Français',
    switchLangLabel: 'Lire cette page en français',
    themeLabel: 'Toggle light / dark theme',
    intro:
      'Final-year software engineering student at ESPRIT (Tunis), specializing in Software Architecture Engineering, graduating June 2027. I build reliable LLM-powered systems (multi-agent, RAG) and ship full-stack apps to production.',
    badge: 'Open to a 6-month PFE from Dec 2026',
    badgeDetail: 'France & Europe · international agreement via ESPRIT',
    cvFr: 'CV (French)',
    cvEn: 'CV (English)',
    contactCta: 'Get in touch',
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    caseStudy: 'Read the case study',
    problem: 'Problem',
    built: 'What I built',
    stack: 'Stack',
    learned: 'What I learned',
    viewProject: 'View project',
    languagesTitle: 'Languages',
    contactText:
      'I’m looking for a 6-month end-of-studies internship (PFE) starting December 2026, in France or Europe, under an international agreement via ESPRIT. Email is the easiest way to reach me.',
    footer: 'Static site built with Astro and Tailwind CSS.',
  },
} as const;

export const experiences: Experience[] = [
  {
    role: { fr: 'AI Engineer, temps partiel', en: 'AI Engineer, part-time' },
    company: 'Hypefury',
    period: { fr: 'Oct. 2026 – aujourd’hui', en: 'Oct 2026 – present' },
    bullets: {
      fr: [
        'Pipeline de génération de posts par IA (Gemini, Vercel AI SDK) pour Threads, Bluesky et LinkedIn, dans le style d’écriture propre à chaque utilisateur.',
        'Fiabilité des sorties LLM en production : validation Zod, retries guidés, file pgmq sur Supabase, traçage Sentry.',
      ],
      en: [
        'AI post-generation pipeline (Gemini, Vercel AI SDK) for Threads, Bluesky and LinkedIn, in each user’s own writing style.',
        'Reliable LLM outputs in production: Zod validation, guided retries, pgmq queue on Supabase, Sentry tracing.',
      ],
    },
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Supabase / Postgres', 'Gemini', 'Vercel AI SDK', 'Playwright'],
  },
  {
    role: {
      fr: 'Stage — Plateforme IA multi-agents de classification de tickets & suivi SLA',
      en: 'Intern — Multi-agent AI platform for ticket classification & SLA tracking',
    },
    company: 'BTAFC',
    period: { fr: 'Août – sept. 2026', en: 'Aug – Sept 2026' },
    bullets: {
      fr: [
        'Conception et développement en autonomie d’une architecture multi-agents (CrewAI, GPT-4o via Azure OpenAI) pour classifier, auditer et assigner des tickets ServiceNow.',
        'Pipeline de 4 agents avec score de confiance, couplé à un moteur de scoring Python déterministe.',
        'API Gateway (FastAPI, Keycloak PKCE/JWT) et tableau de bord React temps réel (Kanban, suivi des SLA).',
      ],
      en: [
        'Designed and built alone a multi-agent architecture (CrewAI, GPT-4o via Azure OpenAI) to classify, audit and assign ServiceNow tickets.',
        '4-agent pipeline with confidence scoring, alongside a deterministic Python scoring engine.',
        'API Gateway (FastAPI, Keycloak PKCE/JWT) and a real-time React dashboard (Kanban, SLA tracking).',
      ],
    },
    stack: ['CrewAI', 'Azure OpenAI (GPT-4o)', 'Python', 'FastAPI', 'Keycloak', 'React', 'ServiceNow'],
  },
];

export const projects: Project[] = [
  {
    id: 'go4it',
    name: 'Go4it',
    tagline: { fr: 'Application mobile sociale autour du sport', en: 'Sports social mobile app' },
    meta: { fr: 'Freelance · août 2025 – janv. 2026', en: 'Freelance · Aug 2025 – Jan 2026' },
    summary: {
      fr: 'Développée en solo en TypeScript et mise en production : jusqu’à 95 % de requêtes en moins par appel après correction d’un problème N+1.',
      en: 'Built alone in TypeScript and shipped to production: up to 95% fewer queries per request after fixing an N+1 problem.',
    },
    problem: {
      fr: 'Livrer en solo une application mobile sociale autour du sport, de bout en bout jusqu’à la production, avec des notifications temps réel et un backend qui reste efficace sur des événements de 10 à 30 participants.',
      en: 'Ship a sports social mobile app end to end, alone, all the way to production, with real-time notifications and a backend that stays efficient on events of 10–30 participants.',
    },
    built: {
      fr: [
        'Application React Native et API Node/Express sur MySQL, entièrement en TypeScript.',
        'Correction d’un problème de requêtes N+1 : jusqu’à 95 % de requêtes en moins par appel (événements de 10 à 30 participants).',
        'CI/CD Jenkins, Kafka pour les notifications temps réel, monitoring Prometheus/Grafana.',
        'Bascule en production : purge ordonnée de 14 tables et correction des notifications push iOS (APNs).',
      ],
      en: [
        'React Native app and Node/Express API on MySQL, fully in TypeScript.',
        'Fixed an N+1 query problem: up to 95% fewer queries per request (events of 10–30 participants).',
        'Jenkins CI/CD, Kafka for real-time notifications, Prometheus/Grafana monitoring.',
        'Production cutover: ordered purge of 14 tables and an iOS push notification (APNs) fix.',
      ],
    },
    stack: ['TypeScript', 'React Native', 'Node.js / Express', 'MySQL', 'Jenkins', 'Kafka', 'Prometheus', 'Grafana'],
    learned: null, // TODO(Baya): add 2–3 personal takeaways (FR + EN)
    link: null, // TODO(Baya): add repo or store link
  },
  {
    id: 'smart-campus-ai',
    name: 'Smart Campus AI',
    tagline: {
      fr: 'Gestion universitaire & matching de compétences',
      en: 'University management & skill matching',
    },
    meta: { fr: 'Projet d’équipe · sept. 2026 – aujourd’hui', en: 'Team project · Sept 2026 – present' },
    summary: {
      fr: 'Chatbot RAG aux réponses sourcées, matching compétences ↔ opportunités par embeddings et générateur de parcours d’apprentissage par LLM.',
      en: 'Grounded RAG chatbot, embedding-based skills ↔ opportunities matching and an LLM learning-path generator.',
    },
    problem: {
      fr: 'Une plateforme de gestion universitaire qui doit répondre aux questions à partir de sources fiables, rapprocher compétences et opportunités, et proposer des parcours d’apprentissage exploitables par le reste du système.',
      en: 'A university management platform that has to answer questions from trusted sources, match skills with opportunities, and generate learning paths the rest of the system can consume.',
    },
    built: {
      fr: [
        'Chatbot RAG : widget React, API Express/JWT, service FastAPI, recherche Chroma/FAISS, embeddings Ollama/OpenAI, réponses ancrées dans les sources.',
        'Matching compétences ↔ opportunités à base d’embeddings.',
        'Générateur de parcours d’apprentissage par LLM avec sortie JSON Schema stricte.',
      ],
      en: [
        'RAG chatbot: React widget, Express/JWT API, FastAPI service, Chroma/FAISS retrieval, Ollama/OpenAI embeddings, grounded answers.',
        'Skills ↔ opportunities matching with embeddings.',
        'LLM learning-path generator with strict JSON Schema output.',
      ],
    },
    stack: ['React', 'Express', 'JWT', 'FastAPI', 'Chroma', 'FAISS', 'Ollama', 'OpenAI', 'JSON Schema'],
    learned: null, // TODO(Baya): add 2–3 personal takeaways (FR + EN)
    link: null, // TODO(Baya): add repo link
  },
  {
    id: 'jungle-in-english',
    name: 'Jungle in English',
    tagline: { fr: 'Plateforme d’apprentissage avec IA', en: 'AI learning platform' },
    meta: { fr: 'Projet d’équipe · janv. – juin 2026', en: 'Team project · Jan – June 2026' },
    summary: {
      fr: 'Scrum Master d’une équipe de 7 ; recommandation de cours, optimisation PuLP et clustering k-means en Python, APIs Spring Boot sécurisées.',
      en: 'Scrum Master of a team of 7; course recommendation, PuLP optimization and k-means clustering in Python, secured Spring Boot APIs.',
    },
    problem: {
      fr: 'Coordonner une équipe de 7 personnes sur une plateforme d’apprentissage avec IA, tout en livrant recommandation de cours et APIs sécurisées dans une chaîne CI/CD commune.',
      en: 'Coordinate a team of 7 on an AI learning platform while delivering course recommendation and secured APIs through a shared CI/CD pipeline.',
    },
    built: {
      fr: [
        'Scrum Master de l’équipe : Jira relié à GitHub et Jenkins, notifications Slack.',
        'Recommandation de cours, optimisation avec PuLP et clustering k-means en Python.',
        'APIs REST Spring Boot sécurisées.',
        'CI/CD Jenkins, Docker, RabbitMQ, Prometheus/Grafana.',
      ],
      en: [
        'Scrum Master of the team: Jira linked to GitHub and Jenkins, Slack notifications.',
        'Course recommendation, PuLP optimization and k-means clustering in Python.',
        'Secured Spring Boot REST APIs.',
        'Jenkins CI/CD, Docker, RabbitMQ, Prometheus/Grafana.',
      ],
    },
    stack: ['Python', 'PuLP', 'k-means', 'Spring Boot', 'Jenkins', 'Docker', 'RabbitMQ', 'Prometheus', 'Grafana', 'Jira'],
    learned: null, // TODO(Baya): add 2–3 personal takeaways (FR + EN)
    link: null, // TODO(Baya): add repo link
  },
  {
    id: 'ride-with-me',
    name: 'Ride With Me',
    tagline: { fr: 'Application mobile de covoiturage', en: 'Carpooling mobile app' },
    meta: { fr: 'Projet d’équipe', en: 'Team project' },
    summary: {
      fr: 'Application Flutter avec réservation, paiement Flouci et suivi en temps réel ; responsable des modules utilisateurs, offres de trajet et avis.',
      en: 'Flutter app with booking, Flouci payment and real-time tracking; I owned the user, ride-offer and review modules.',
    },
    problem: {
      fr: 'Une application de covoiturage qui gère la réservation, le paiement et le suivi des trajets en temps réel.',
      en: 'A carpooling app that handles booking, payment and real-time ride tracking.',
    },
    built: {
      fr: [
        'Application Flutter avec réservation, paiement Flouci et suivi en temps réel sur PostgreSQL.',
        'Responsable des modules utilisateurs, offres de trajet et avis, côté front et back.',
      ],
      en: [
        'Flutter app with booking, Flouci payment and real-time tracking on PostgreSQL.',
        'Owned the user, ride-offer and review modules, front end and back end.',
      ],
    },
    stack: ['Flutter', 'PostgreSQL', 'Flouci'],
    learned: null, // TODO(Baya): add 2–3 personal takeaways (FR + EN)
    link: null, // TODO(Baya): add repo link
  },
];

export const skills: { label: Localized<string>; items: string[] }[] = [
  {
    label: { fr: 'Langages & backend', en: 'Languages & backend' },
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'Node.js / Express', 'FastAPI', 'Spring Boot', 'REST APIs'],
  },
  {
    label: { fr: 'Front & mobile', en: 'Front end & mobile' },
    items: ['React', 'Vue.js / Nuxt', 'React Native', 'Flutter', 'Angular'],
  },
  {
    label: { fr: 'IA', en: 'AI' },
    items: ['CrewAI', 'Gemini', 'Azure OpenAI / GPT-4o', 'OpenAI API', 'RAG', 'Embeddings', 'scikit-learn'],
  },
  {
    label: { fr: 'Données', en: 'Data' },
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    label: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Kafka', 'RabbitMQ', 'Prometheus', 'Grafana', 'Git', 'Jira', 'Agile (Scrum Master)'],
  },
];

export const languages: Localized<{ name: string; level: string }[]> = {
  fr: [
    { name: 'Arabe', level: 'langue maternelle' },
    { name: 'Français', level: 'courant' },
    { name: 'Anglais', level: 'courant' },
    { name: 'Turc', level: 'courant' },
    { name: 'Espagnol', level: 'notions' },
  ],
  en: [
    { name: 'Arabic', level: 'native' },
    { name: 'French', level: 'fluent' },
    { name: 'English', level: 'fluent' },
    { name: 'Turkish', level: 'fluent' },
    { name: 'Spanish', level: 'basic' },
  ],
};

export const certifications: { name: string; issuer: string; date: Localized<string> }[] = [
  {
    name: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'AWS Academy',
    date: { fr: 'Nov. 2026', en: 'Nov 2026' },
  },
  {
    name: 'Hedera Certified Developer Associate',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Nov. 2026', en: 'Nov 2026' },
  },
  {
    name: 'Hedera Certified Foundation',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Nov. 2026', en: 'Nov 2026' },
  },
  {
    name: 'Hedera Business Foundation',
    issuer: 'The Hashgraph Association',
    date: { fr: 'Nov. 2026', en: 'Nov 2026' },
  },
];
