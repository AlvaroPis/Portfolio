# Portfolio · Alvaro Pistelli

Sitio personal donde me presento como desarrollador: quién soy, qué tecnologías manejo, en qué proyectos trabajé y cómo contactarme.

## Stack

- [Astro](https://astro.build/) 7: sitio estático, sin framework de UI en el cliente.
- [Tailwind CSS](https://tailwindcss.com/) 4, integrado con el plugin de Vite.
- TypeScript para los datos y los scripts del cliente.
- Tipografía Space Grotesk servida desde el propio sitio (Fontsource).
- Deploy como sitio estático en [Render](https://render.com/).

## Estructura

```
src/
├── components/   Header, Hero, About, Projects, Contact, Footer, ThemeToggle
├── data/         portfolio.ts: todo el contenido del sitio
├── layouts/      Layout.astro: <head>, tema y animaciones
├── pages/        index.astro
└── styles/       global.css: Tailwind y estilos base
```

Para actualizar textos, habilidades, proyectos o links alcanza con editar `src/data/portfolio.ts`.

## Características

- Secciones: hero, sobre mí, proyectos y contacto, con navbar fija y menú para mobile.
- Responsive desde 360px, sin scroll horizontal.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`) y un único `h1`.
- Modo claro y oscuro: respeta la preferencia del sistema y recuerda la elección.
- Animaciones de aparición que se desactivan con `prefers-reduced-motion`.
- Formulario de contacto con validación en el cliente y mensajes de error accesibles. Al enviarlo abre el cliente de correo con el mensaje armado, así no necesita backend.
- Navegable con teclado, con foco visible y link para saltar al contenido.

## Deploy en Render

El repositorio incluye `render.yaml`, así que se puede crear el servicio como Blueprint. Para hacerlo a mano:

1. En Render: **New → Static Site** y conectar este repositorio.
2. Build command: `npm ci && npm run build`
3. Publish directory: `dist`
4. Variable de entorno `NODE_VERSION` = `22.12.0`
