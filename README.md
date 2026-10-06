# Brayan Gallardo — portafolio profesional

Portafolio para presentar experiencia profesional y casos de desarrollo, datos y automatización. El sitio público es [portafolio-brayangallardo.vercel.app](https://portafolio-brayangallardo.vercel.app/). Los cambios de esta rama se revisan primero en la vista previa del PR.

## Desarrollo

Se requiere Node.js compatible con Vite 7.

```sh
npm install
npm run dev
npm run build
npm run test:unit
npm run test:e2e
```

`npm run dev` sirve el sitio local. La prueba E2E requiere Chromium de Playwright (`npx playwright install chromium`). En Vercel, usar framework **Vite**, comando `npm run build` y directorio de salida `dist`. No hay variables de entorno ni backend.

## Mantener el contenido

- `src/App.tsx`: portada, experiencia, perfil, navegación y contacto.
- `src/data/projects.ts`: estados, aportes, tecnologías, enlaces y muestras de los proyectos. Mantener los casos destacados con `featured: true` y la galería con `featured: false`.
- `src/components/FeaturedCase.tsx`, `ProjectGallery.tsx`, `MediaFrame.tsx`: presentación de casos, filtros y vistas.
- `src/styles.css`: diseño y reglas responsive. `index.html`: título, descripción, URL canónica y Open Graph.
- `public/assets/`: imágenes locales. Una muestra debe indicar si es captura (`screenshot`), obra del cliente (`artwork`) o composición (`concept`); cada una necesita texto alternativo descriptivo. No usar datos internos en capturas públicas.

Los cuatro casos principales son Fusión Desktop, Newen Pintando, CertiMentor y una automatización profesional anonimizada. Fusión sigue en desarrollo y pruebas; su vista es conceptual y no se enlaza un repositorio privado. Newen incluye una captura de su portada pública y una obra que pertenece al cliente, procedente de su catálogo. CertiMentor e Impresiones SYS utilizan capturas del material previo de ZPages. El retrato de Brayan se recortó a fondo transparente a partir de la imagen proporcionada. No se publican cifras de ahorro, testimonios, credenciales adicionales ni CV sin fuente verificable.

## Verificación y publicación

Las pruebas de componentes cubren orden de casos, filtros, estados vacíos, vista conceptual y cambio de medios. `tests/portfolio.spec.ts` comprueba navegación, tamaños de pantalla, imágenes y preferencias de movimiento en Chromium. Ejecutar `git diff --check` y revisar visualmente la vista previa de Vercel en móvil y escritorio antes de publicar. Esta rama no cambia `main` ni el dominio definitivo.

Contacto: [correo](mailto:brayan.algallardo@gmail.com) · [LinkedIn](https://www.linkedin.com/in/brayan-gallardo-82617738a/) · [GitHub](https://github.com/BrayanGallardo19)
