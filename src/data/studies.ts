export const studies = [
  {
    title: "Grado de Bachillerato",
    institution: "Summerhill School",
    description:
      "Educación básica de bachillerato en el colegio trilingüe Summerhill School, ubicado en Cota, Cundinamarca, el cual me dió muchas de las bases que me llevaron a apasionarme por el mundo de la tecnología y así decantarme finalmente por mi carreara actual.",
    tags: [
      "Inglés",
      "Habilidades investigativas",
      "Habilidades sociales",
    ],
  },
  {
    title: "Pregrado de Ingeniería de Sistemas (actualmente en quinto semestre)",
    institution: "Universidad El Bosque",
    description:
      "Enfoque en el desarrollo de soluciones tecnológicas a través de aplicativos, páginas web y sistemas de información que satisfagan las exigencias del cliente.",
    tags: [
      "Algoritmos",
      "Desarrollo Web",
      "Lógica de Negocio",
      "Bases de Datos",
      "Gestión de Proyectos",
      "Trabajo en Equipo",
      "Pensamiento Lógico-Matemático",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

