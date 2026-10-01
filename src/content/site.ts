export const profile = {
  name: "Samah Samit",
  email: "samahsamitt@gmail.com",
  linkedin: "https://www.linkedin.com/in/samah-samit",
  github: "https://github.com/samahsamit",
};

export const education = [
  {
    when: "2023 – 2027",
    title: "Laurea triennale in Innovazione Sociale, Comunicazione e Nuove Tecnologie",
    where: "Università di Torino · mi laureo a marzo 2027",
  },
  {
    when: "2026",
    title: "Workshop «AI in Education»",
    where: "Università di Torino",
  },
  {
    when: "2022",
    title: "Diploma di liceo scientifico, scienze applicate",
    where: "I.I.S. Biagio Pascal, Romentino",
  },
];

export const experience = [
  {
    when: "2025 – 2026",
    title: "Aiuto cuoca",
    where: "Wokoza",
    note: "Tempi stretti, procedure da rispettare, lavoro di squadra durante il servizio.",
  },
  {
    when: "2024 – 2025",
    title: "Addetta alle vendite",
    where: "Nido del Corvo",
    note: "Vendita assistita e cassa. Raccoglievo i feedback dei clienti abituali.",
  },
  {
    when: "2022 – 2023",
    title: "Cameriera di sala",
    where: "Fradiavolo",
    note: "Accoglienza e comande nelle sere più piene.",
  },
  {
    when: "2022",
    title: "Tirocinio amministrativo",
    where: "Polizia Municipale di Cerano",
    note: "Protocollo, PEC e archivio degli atti.",
  },
];

export const skills = [
  {
    title: "UX e product design",
    items: "Interviste e survey, personas, scenari, requisiti, user flow, wireframe, prototipi hi-fi, design system, piani di test, UX writing",
  },
  {
    title: "Dati",
    items: "SQL e MySQL, modellazione e data warehouse, tabelle pivot, clustering, alberi decisionali, segmentazione",
  },
  {
    title: "Marketing e comunicazione",
    items: "Basi di marketing digitale, comunicazione visiva, testi chiari per chi non è tecnico, documentazione",
  },
];

export const tools = [
  "Figma",
  "MySQL",
  "Excel",
  "Weka",
  "Canva",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "PHP",
  "Git",
  "Docker",
  "Linux",
];

export const languages = [
  { name: "Italiano", level: "madrelingua" },
  { name: "Arabo", level: "" },
  { name: "Inglese", level: "C1" },
];

export const projects = {
  learnow: {
    href: "/lavori/learnow/",
    title: "LearNow",
    kind: "UX/UI",
    year: "2025",
    summary: "Un'app dove artigiani e creativi vendono i propri corsi senza sparire in un catalogo anonimo.",
    figma: "https://www.figma.com/design/pNXOK6C6ad0Hblr34NL6T5/LearnNow?node-id=0-1",
    repo: "https://github.com/samahsamit/learnow-interaction-design",
    report: "https://github.com/samahsamit/learnow-interaction-design/blob/main/docs/learnow-relazione.pdf",
  },
  dentistico: {
    href: "/lavori/studio-dentistico/",
    title: "Studio dentistico",
    kind: "Dati",
    year: "2026",
    summary: "Perché i pazienti saltano gli appuntamenti? Database, data warehouse e due modelli in Weka su 496 visite.",
    repo: "https://github.com/samahsamit/studio-dentistico-data-mining",
    report: "https://github.com/samahsamit/studio-dentistico-data-mining/blob/main/docs/relazione.pdf",
  },
};
