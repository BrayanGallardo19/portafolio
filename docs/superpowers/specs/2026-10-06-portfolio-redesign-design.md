# Rediseño del portafolio de Brayan Gallardo

Fecha: 2026-10-06  
Destino: `BrayanGallardo19/portafolio`, PR borrador #1 (`feat/portfolio-refresh`).

## Intención y resultado esperado

El portafolio debe ayudar a Brayan Gallardo, Analista Programador titulado de Duoc UC, a conseguir entrevistas para puestos de desarrollo Full Stack, análisis de datos/automatización y soporte TI. Un reclutador debe comprender en los primeros segundos su perfil y encontrar pruebas concretas de experiencia profesional y proyectos actuales. La página presentará a la persona y su trabajo; ZPages aparecerá como un proyecto, no como la identidad del sitio.

La dirección visual aprobada es fondo claro, tipografía oscura y acentos azul eléctrico, coral y violeta, con una experiencia más viva y adaptable. El contenido dará prioridad a experiencia y casos reales antes de listas extensas de tecnologías.

## Estado de partida y elección

`main` sirve la versión anterior en Vercel. El PR borrador #1 ya contiene diez proyectos, filtros, fichas ampliables, estilos responsive y recursos de Impresiones SYS y CertiMentor. Se reutilizarán sus textos comprobados, enlaces y activos que sean pertinentes, y se trabajará en la misma rama del PR. La nueva versión usará Vite + React + TypeScript, conforme al estándar de presentaciones de ZPages. No se agregará backend, CMS ni dependencias de animación si CSS y APIs nativas resuelven la interacción.

Alternativas consideradas: ampliar el HTML actual permite un cambio rápido, pero mantiene 43 KB de contenido e interacciones mezclados en un solo documento; reconstruir visualmente desde cero perdería trabajo útil del PR. La migración enfocada conserva el diseño aprobado y ordena los proyectos en datos tipados y componentes.

## Estructura editorial

1. **Portada:** nombre, título «Analista Programador · Full Stack, datos y automatización», resumen de dos o tres frases, ubicación Santiago de Chile y acciones a proyectos, LinkedIn y contacto. La portada evita cifras no verificadas y promesas de disponibilidad no confirmadas.
2. **Experiencia:** Tanner y trabajo de producto/desarrollo, con responsabilidades específicas; los resultados cuantificados solo aparecerán cuando su fuente y contexto estén confirmados, siempre marcando estimaciones.
3. **Casos destacados:** Fusión Desktop / Fusión Sobre Ruedas, Newen Pintando, CertiMentor y un caso anonimizado de automatización de datos. Cada caso expone problema, rol personal, decisiones técnicas, funciones observables, estado y enlaces realmente disponibles. ZPages e Impresiones SYS se mantienen visibles en proyectos adicionales.
4. **Otros proyectos:** galería filtrable con ZPages, Impresiones SYS, AgroTech, Cyclistic y otros proyectos vigentes que aporten variedad sin repetir capacidades. Se respetan las exclusiones anteriores: Android/Kotlin, Python DSA, Kotlin Syntax Notes y freeCodeCampEx no se publican como proyectos visibles.
5. **Perfil, formación y contacto:** síntesis personal, Duoc UC, credenciales verificadas, capacidades agrupadas por uso y enlaces GitHub, LinkedIn y correo. La sección no se convierte en un inventario de herramientas.

El primer grupo de casos contará una historia de ingeniería y resultados; los proyectos secundarios permiten explorar amplitud técnica. La selección y el orden podrán cambiarse en un archivo de datos, sin reescribir el diseño.

## Experiencia visual y contenido multimedia

La portada usará un retrato personal solo si una edición sin fondo de la imagen aportada queda natural. Se conserva la identidad facial y la ropa; no se inventa una oficina u otro entorno. Si el recorte no resulta convincente, se omite la foto y se utiliza una composición tipográfica. La foto no tendrá un fondo artificial.

Los casos destacados usarán capturas reales optimizadas, vistas de escritorio y móvil cuando existan, y una interacción ligera de cambio entre vistas. Newen mostrará capturas del sitio y no atribuirá la autoría de las ilustraciones del cliente a Brayan. Fusión mostrará únicamente pantallas anonimizadas y sin datos de ventas, clientes, inventario sensible ni credenciales; si faltan capturas autorizadas, se usará una composición etiquetada «vista conceptual» y se evitará presentarla como captura real. El movimiento será discreto, sin autoplay esencial y con soporte para `prefers-reduced-motion`.

## Componentes y datos

- `App` reúne navegación, portada, experiencia, casos destacados, galería, perfil y contacto.
- `projects.ts` declara un tipo `Project` con título, categoría, estado, rol, problema, aporte, funciones, tecnologías, enlaces y medios con descripción y procedencia. Las categorías y estados son valores controlados; los enlaces opcionales no producen botones vacíos.
- `FeaturedCase` presenta una historia legible sin interacción; las vistas opcionales amplían la muestra.
- `ProjectGallery` filtra categorías sin ocultar el contenido indispensable a lectores de pantalla y sin depender de una API externa.
- `MediaFrame` adapta capturas reales a proporciones estables, carga diferida y texto alternativo; «vista conceptual» se identifica visualmente y en el texto alternativo.
- La navegación y los enlaces usan HTML semántico; el sitio mantiene contenido útil si falla una interacción no esencial.

Los textos y medios pertenecen al repositorio. No se incorporan testimonios, cargos, métricas, tecnologías de Fusión ni estados de publicación sin comprobarlos. El estado de Newen se revisará contra su despliegue actual antes de redactar la ficha definitiva. Un proyecto privado puede mostrarse como caso sin enlazar su repositorio.

## Entrega y comprobaciones

El trabajo continuará en el PR borrador #1. Vercel generará una vista previa de la rama; `main` y el dominio público no se modificarán hasta revisar el resultado. Se actualizará el README con desarrollo, despliegue, edición de proyectos, origen de capturas y límites. Se comprobarán compilación y tipos, enlaces y medios, filtros y vistas, navegación por teclado, contraste, anchos móvil/escritorio, movimiento reducido y ausencia de desbordamiento. Se revisará visualmente la portada y al menos los cuatro casos destacados. La entrega incluirá enlace al PR, vista previa verificable y pendientes de material que impidan mostrar una captura real.
