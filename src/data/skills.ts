export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Diseño de aplicativos CRUD",
    description: "Habilidades para el desarrollo de aplicativos CRUD eficientes e intuitivos a través de la herramienta SpringBoot",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Gestión de autenticación para apps web",
    description: "Manejo y gestión segura de información sensible a través de autenticación con JWT",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Diseño de Front-End intuitivos y agradables",
    description: "A través de React y TypeScript, creo interfaces modernas y agradables visualmente, que así mismo brindan una experiencia intuituva y fácil al usuario",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Gestión eficiente de Bases de Datos",
    description: "Gestión profesional y optimizada de bases de datos, conocimientos avanzados en sentencias SQL para la consulta y modificación de datos, manejo motores de bases de datos relacionales como Oracle y MySQL",
  },
];

export type Skill = (typeof skills)[number];

