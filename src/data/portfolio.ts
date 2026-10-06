// Todo el contenido del sitio vive acá: para actualizar el portfolio alcanza con editar este archivo.

export const profile = {
  name: 'Alvaro Pistelli',
  role: 'Desarrollador Full Stack',
  tagline:
    'Construyo aplicaciones de escritorio y web con C#, TypeScript y SQL, cuidando que el código sea tan claro como la interfaz.',
  bio: [
    'Soy estudiante de sistemas y desarrollador. Empecé programando aplicaciones de escritorio en C# y con el tiempo sumé el desarrollo web con JavaScript y TypeScript.',
    'Me gusta entender el problema antes de escribir código: modelar bien los datos, separar responsabilidades y dejar una base que otra persona pueda mantener.',
    'Hoy estoy enfocado en mi trabajo final de carrera, un sistema de gestión para una empresa de fabricación, y en seguir creciendo como desarrollador full stack.',
  ],
  email: 'pistellialvaro@gmail.com',
  github: 'https://github.com/AlvaroPis',
  // Completar con la URL del perfil para que aparezca el link en Contacto y en el footer.
  linkedin: '',
};

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Astro', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['C#', '.NET Framework', 'Entity Framework', 'SQL Server', 'T-SQL'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Render'],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Sistema de gestión para fabricación',
    description:
      'Trabajo de Campo y Diploma: aplicación de escritorio para administrar clientes, presupuestos, pedidos y órdenes de fabricación. Incluye login y un esquema de usuarios, grupos y permisos modelado con el patrón Composite.',
    tech: ['C#', 'Windows Forms', 'Entity Framework 6', 'SQL Server'],
    repo: 'https://github.com/AlvaroPis/TCyD',
  },
  {
    title: 'Simon',
    description:
      'Versión web del clásico juego de memoria. Suma puntaje por acierto, penaliza por tiempo, muestra el nivel actual y guarda un ranking de partidas en LocalStorage que se puede ordenar por puntaje o fecha.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Flexbox', 'LocalStorage'],
    repo: 'https://github.com/AlvaroPis/Simon',
    demo: 'https://alvaropis.github.io/Simon/',
  },
  {
    title: 'Gestión académica',
    description:
      'Aplicación de escritorio para llevar el registro de una institución educativa, con pantallas separadas para alumnos, profesores, materias y cursos a las que se llega desde un menú principal.',
    tech: ['C#', 'Windows Forms', '.NET Framework'],
    repo: 'https://github.com/AlvaroPis/TPFinalMarzo2023',
  },
  {
    title: 'Portfolio personal',
    description:
      'Este sitio. Estático, con modo claro y oscuro, animaciones que respetan prefers-reduced-motion y un formulario de contacto validado en el cliente.',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript', 'Render'],
    repo: 'https://github.com/AlvaroPis/Portfolio',
  },
];

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];
