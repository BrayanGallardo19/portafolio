export type Category = 'web' | 'systems' | 'data' | 'fullstack';
export type ProjectMedia = { src: string; alt: string; kind: 'screenshot' | 'artwork' | 'concept'; label?: string };
export type Project = {
  id: string; title: string; category: Category; featured: boolean;
  status: string; role: string; problem: string; contribution: string;
  features: string[]; technologies: string[];
  links: { label: string; href: string }[]; media: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: 'fusion', title: 'Fusión Desktop', category: 'systems', featured: true,
    status: 'En desarrollo y pruebas', role: 'Análisis funcional y desarrollo',
    problem: 'Un negocio gastronómico necesita coordinar caja, pedidos, inventario y preparación entre distintas estaciones sin depender de una conexión permanente.',
    contribution: 'Diseñé los flujos de venta, gestión de menú y comandas; trabajé en la operación local, la configuración de estaciones y el control de stock.',
    features: ['Caja y modalidades de cobro', 'Menú con ingredientes, agregados y conjuntos', 'Comandas por estación', 'Inventario y reportes'],
    technologies: ['Punto de venta', 'Operación local', 'Impresión', 'Inventario'], links: [],
    media: [{ src: '', alt: 'Vista conceptual del flujo de caja y comandas de Fusión Desktop', kind: 'concept', label: 'Flujo de venta · vista conceptual' }],
  },
  {
    id: 'newen', title: 'Newen Pintando', category: 'web', featured: true,
    status: 'Sitio publicado', role: 'Diseño y desarrollo web',
    problem: 'Crear una galería que dé protagonismo a las ilustraciones y permita explorar obras, variantes y videos sin perder claridad en móvil.',
    contribution: 'Desarrollé el catálogo, los recorridos visuales y la edición de contenido mediante Pages CMS. Las ilustraciones son obras del cliente.',
    features: ['Galería y catálogo con filtros', 'Variantes y fichas de obras', 'Videos y recorridos visuales', 'Edición de contenido con Pages CMS'],
    technologies: ['React', 'TypeScript', 'Vite', 'Cloudflare Pages'],
    links: [{ label: 'Visitar sitio', href: 'https://newenpintando.cl/' }],
    media: [
      { src: '/assets/newen-site.jpg', alt: 'Captura real de la portada del sitio Newen Pintando, con navegación y galería de ilustraciones', kind: 'screenshot', label: 'Sitio publicado · portada' },
      { src: '/assets/newen-art.webp', alt: 'Ilustración de Gyarados en Valdivia en el catálogo de Newen Pintando, obra del cliente', kind: 'artwork', label: 'Obra del cliente · catálogo Newen Pintando' },
    ],
  },
  {
    id: 'certimentor', title: 'CertiMentor', category: 'fullstack', featured: true,
    status: 'Proyecto de título', role: 'Product Owner y desarrollador Full Stack',
    problem: 'Conectar estudiantes con mentores y gestionar la contratación de sesiones desde una misma plataforma.',
    contribution: 'Participé en el diseño y desarrollo de la solución y coordiné el trabajo de un equipo de tres personas en cuatro sprints.',
    features: ['Interfaz React', 'APIs con Spring Boot', 'Autenticación JWT', 'Integración de Mercado Pago'],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
    links: [{ label: 'Ver demo', href: 'https://certimentor.vercel.app/' }, { label: 'Repositorio', href: 'https://github.com/BrayanGallardo19/Certimentor' }],
    media: [{ src: '/assets/certimentor.jpg', alt: 'Captura real de la plataforma CertiMentor', kind: 'screenshot', label: 'Plataforma de mentorías' }],
  },
  {
    id: 'automatizacion', title: 'Automatización de datos', category: 'data', featured: true,
    status: 'Caso profesional anonimizado', role: 'Desarrollo de automatización y análisis de datos',
    problem: 'Consolidar información de distintas fuentes, detectar discrepancias y reducir pasos manuales en un proceso operativo.',
    contribution: 'Construí flujos de extracción, transformación y consolidación histórica con Python, Office Scripts y Power Automate sobre Excel y SharePoint.',
    features: ['Extracción y limpieza', 'Consolidación incremental', 'Detección de discrepancias', 'Datos colaborativos en SharePoint'],
    technologies: ['Python', 'pandas', 'Power Automate', 'Office Scripts', 'SQL'],
    links: [{ label: 'Caso público anonimizado', href: 'https://github.com/BrayanGallardo19/data-consolidation-pipeline' }], media: [],
  },
  {
    id: 'zpages', title: 'ZPages', category: 'web', featured: false,
    status: 'Emprendimiento propio', role: 'Fundador y desarrollador',
    problem: 'Ayudar a pequeños negocios a presentar servicios y recibir consultas desde sitios claros y adaptables.',
    contribution: 'Levanto requerimientos, diseño interfaces y desarrollo sitios y catálogos con seguimiento hasta la publicación.',
    features: ['Sitios de presentación', 'Catálogos con cotizador', 'Implementación y despliegue'],
    technologies: ['React', 'TypeScript', 'WordPress', 'Cloudflare'],
    links: [{ label: 'Visitar ZPages', href: 'https://www.zpages.cl/' }], media: [],
  },
  {
    id: 'impresiones', title: 'Impresiones SYS', category: 'web', featured: false,
    status: 'Proyecto para cliente', role: 'Diseño y desarrollo web',
    problem: 'Mostrar productos personalizados, variantes e información de compra en una experiencia fácil de recorrer.',
    contribution: 'Desarrollé un catálogo responsive con selección de productos para solicitar cotizaciones por WhatsApp.',
    features: ['Fichas y variantes', 'Selección para cotizar', 'Adaptación móvil'],
    technologies: ['React', 'TypeScript', 'Vite'], links: [],
    media: [{ src: '/assets/impresiones-sys.jpg', alt: 'Captura real del catálogo de Impresiones SYS', kind: 'screenshot', label: 'Catálogo comercial' }],
  },
  {
    id: 'agrotech', title: 'AgroTech Platform', category: 'fullstack', featured: false,
    status: 'Proyecto técnico', role: 'Desarrollo backend',
    problem: 'Separar las responsabilidades de una plataforma de venta y arriendo de maquinaria agrícola.',
    contribution: 'Implementé servicios REST para usuarios, inventario, pedidos y otros flujos con seguridad y comunicación entre servicios.',
    features: ['Microservicios', 'Autenticación', 'Documentación API'],
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    links: [{ label: 'Repositorio', href: 'https://github.com/BrayanGallardo19/spring-boot-agrotech-platform' }], media: [],
  },
  {
    id: 'cyclistic', title: 'Cyclistic Bike-Share', category: 'data', featured: false,
    status: 'Caso de estudio', role: 'Análisis y visualización de datos',
    problem: 'Comprender diferencias de uso entre usuarios ocasionales y miembros anuales.',
    contribution: 'Analicé más de 5,5 millones de viajes con SQL y visualizaciones para elaborar recomendaciones.',
    features: ['Preparación de datos', 'Consultas BigQuery', 'Visualización Tableau'],
    technologies: ['SQL', 'BigQuery', 'Tableau'],
    links: [{ label: 'Código e informe', href: 'https://github.com/BrayanGallardo19/cyclistic-bike-share-analysis' }], media: [],
  },
];
