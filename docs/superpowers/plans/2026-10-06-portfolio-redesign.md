# Portafolio para reclutadores Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir el PR borrador #1 en un portafolio vivo y verificable que presente el perfil profesional de Brayan y cuatro casos de trabajo actuales a reclutadores.

**Architecture:** Migrar el HTML del PR a una SPA estática con componentes React y contenido tipado. Las capturas locales y los casos se almacenan en el repositorio; filtros y cambio de vistas son interacciones locales sin backend. Mantener el PR `feat/portfolio-refresh` y su despliegue de vista previa en Vercel.

**Tech Stack:** Vite, React, TypeScript, CSS, @playwright/test para navegación real; Vitest, jsdom y Testing Library para componentes con datos de prueba.

**Spec:** `docs/superpowers/specs/2026-10-06-portfolio-redesign-design.md`

## Global Constraints

- Fondo claro, tipografía oscura y acentos azul eléctrico, coral y violeta; movimiento discreto con `prefers-reduced-motion`.
- Portada centrada en «Analista Programador · Full Stack, datos y automatización»; experiencia y casos antes de listas de tecnologías.
- Cuatro casos prioritarios: Fusión Desktop, Newen Pintando, CertiMentor y automatización de datos. ZPages e Impresiones SYS siguen visibles.
- Sin backend, CMS, testimonios, cifras o estados no verificados; no publicar repositorios privados.
- Fusión solo con datos anonimizados; vistas conceptuales identificadas. Las ilustraciones de Newen pertenecen al cliente.
- El retrato aportado se utiliza únicamente si el recorte sin fondo se ve natural; si no, portada tipográfica.
- No alterar `main` ni publicar el dominio hasta la revisión de la vista previa.

## Review Focus

- Un proyecto sin enlaces debe mostrar su ficha sin botones vacíos (Task 2).
- Una categoría sin coincidencias debe mostrar un estado claro y permitir volver a «Todos» (Task 2).
- Una ficha con una sola imagen debe funcionar sin controles de cambio (Task 3).
- El cambio de captura por teclado debe conservar un foco visible y el texto alternativo correcto (Task 3).
- En anchos de 320 px y con movimiento reducido, portada, filtros y medios no deben desbordar ni imponer animación (Task 4).

## File Map

- `index.html`: metadatos y punto de montaje.
- `package.json`, `tsconfig*.json`, `vite.config.ts`: compilación, pruebas y despliegue Vercel.
- `src/main.tsx`, `src/App.tsx`, `src/styles.css`: montaje, estructura editorial y paleta.
- `src/data/projects.ts`: contratos y contenido comprobado, sin llamadas externas.
- `src/components/FeaturedCase.tsx`, `ProjectGallery.tsx`, `MediaFrame.tsx`: fichas, filtro y cambio de capturas.
- `public/assets/`: capturas optimizadas, retrato opcional, OG y favicon.
- `tests/portfolio.spec.ts`: navegación real; `src/components/ProjectGallery.test.tsx` y `MediaFrame.test.tsx`: estados con datos de prueba; `README.md`: mantenimiento y despliegue.
- Retirar `script.js`, `styles.css` y `tests/browser.cjs` anteriores una vez exista paridad; preservar las capturas existentes.

### Task 1: Migrar la estructura y fortalecer la portada

**Files:**
- Create: `package.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/styles.css`, `tests/portfolio.spec.ts`
- Modify: `index.html`, `.gitignore`
- Move: `favicon.svg` to `public/favicon.svg`; `assets/og-portfolio.png` to `public/assets/og-portfolio.png`

**Interfaces:**
- Produces: `App(): JSX.Element`, sections `#inicio`, `#experiencia`, `#proyectos`, `#perfil`, `#contacto`; navigation links to those IDs.
- Consumes: verified copy from the spec and the existing PR.

- [ ] **Step 1: Add test scripts and dependencies in `package.json`, then write failing browser tests** in `tests/portfolio.spec.ts`: portada contains the exact role headline, `#experiencia` precedes `#proyectos`, navigation reaches those IDs, mobile menu opens/closes with Escape and returns focus.
- [ ] **Step 2: Run** `npm run test:e2e -- --grep "portada|navegación"` and observe failure on the old branch.
- [ ] **Step 3: Add Vite/React/TS and implement `App(): JSX.Element`** with the approved hierarchy, reusable layout and responsive paleta in `src/styles.css`. Transfer only accurate copy and assets; do not place a broken CV link.
- [ ] **Step 4: Run** `npm run build` and `npm test -- --grep "portada|navegación"`; expect passes.
- [ ] **Step 5: Commit** `feat: migrate recruiter portfolio shell to React`.

### Task 2: Datos, casos y filtros

**Files:**
- Create: `src/data/projects.ts`, `src/components/FeaturedCase.tsx`, `src/components/ProjectGallery.tsx`
- Modify: `src/App.tsx`, `tests/portfolio.spec.ts`
- Test: `src/components/ProjectGallery.test.tsx`

**Interfaces:**
- Produces: `Category = "web" | "systems" | "data" | "fullstack"`; `ProjectMedia = { src: string; alt: string; kind: "screenshot" | "concept"; label?: string }`; `Project = { id: string; title: string; category: Category; featured: boolean; status: string; role: string; problem: string; contribution: string; features: string[]; technologies: string[]; links: { label: string; href: string }[]; media: ProjectMedia[] }`; `projects: Project[]`; `FeaturedCase({ project }: { project: Project })`; `ProjectGallery({ projects }: { projects: Project[] })`.
- Consumes: `App` and IDs from Task 1.

- [ ] **Step 1: Add failing tests**: four featured cases visible in the agreed order; case exposes role, problem and contribution; filter «Datos y automatización» changes visible count; «Todos» resets; an empty category in a component fixture shows a message; Fusión with `links: []` in a component fixture renders no external button; excluded repository exercises are absent.
- [ ] **Step 2: Run** `npm run test:e2e -- --grep "casos|filtros"` and `npm run test:unit -- ProjectGallery`; expect failures.
- [ ] **Step 3: Implement the typed dataset and components**. Verify Newen's actual public status and links before writing them; retain estimate qualifiers for Tanner. Put ZPages and Impresiones SYS in the gallery; do not attribute Newen artwork to Brayan or invent Fusión's technical stack.
- [ ] **Step 4: Run** `npm run build`, `npm run test:e2e -- --grep "casos|filtros"` and `npm run test:unit -- ProjectGallery`; expect passes.
- [ ] **Step 5: Commit** `feat: present verified experience and project cases`.

### Task 3: Muestras visuales y retrato opcional

**Files:**
- Create: `src/components/MediaFrame.tsx`, optimized files in `public/assets/`
- Modify: `src/components/FeaturedCase.tsx`, `src/components/ProjectGallery.tsx`, `src/data/projects.ts`, `src/styles.css`, `tests/portfolio.spec.ts`
- Test: `src/components/MediaFrame.test.tsx`

**Interfaces:**
- Produces: `MediaFrame({ media }: { media: ProjectMedia[] }): JSX.Element | null`; current image with caption, alt and optional next/previous controls.
- Consumes: `ProjectMedia` from Task 2.

- [ ] **Step 1: Add failing tests**: switching two real screenshots updates image alt and caption by click and keyboard; one image in a component fixture has no navigation controls; a `kind: "concept"` fixture visibly says «Vista conceptual»; an empty media fixture renders nothing.
- [ ] **Step 2: Run** `npm run test:unit -- MediaFrame` and `npm run test:e2e -- --grep "medios"`; expect failures.
- [ ] **Step 3: Implement `MediaFrame`** with buttons, stable aspect ratio, lazy loading, and no autoplay. Reuse existing certified screenshots; capture current public Newen layout if accessible, compress and credit the client's artwork. Use only anonymized Fusión captures; otherwise create a labeled conceptual frame.
- [ ] **Step 4: Edit the supplied portrait with imagegen** to remove the artificial background while keeping face and clothing. Visually inspect at desktop/mobile sizes; include an optimized transparent asset only if natural, otherwise omit the portrait and keep the typographic hero.
- [ ] **Step 5: Run** both media test suites and `npm run build`; expect passes.
- [ ] **Step 6: Commit** `feat: add accessible project previews`.

### Task 4: Accesibilidad, SEO, documentación y vista previa

**Files:**
- Modify: `src/styles.css`, `index.html`, `README.md`, `tests/portfolio.spec.ts`
- Delete after parity: `script.js`, root `styles.css`, `tests/browser.cjs`

**Interfaces:**
- Consumes: App, cases, gallery and media from Tasks 1–3.
- Produces: buildable Vercel project and documented content editing path.

- [ ] **Step 1: Add failing integration tests**: no horizontal scroll at 320/390/768/1440 px; reduced motion disables nonessential animation; all local images load; contact and project links have valid hrefs; keyboard focus is visible; title, description and OG reference the definitive portfolio URL.
- [ ] **Step 2: Run** `npm run test:unit` and `npm run test:e2e`; note remaining failures.
- [ ] **Step 3: Fix responsive/accessibility and metadata issues** and update README with `npm install`, `npm run dev`, `npm run build`, Vercel settings, project editing, media provenance and known omissions.
- [ ] **Step 4: Run** `npm run build`, `npm test`, `git diff --check`; expect success. Inspect screenshots of hero and all four cases at mobile and desktop; record unresolved content/asset limits.
- [ ] **Step 5: Commit** `docs: complete portfolio preview and maintenance guide`; verify the PR preview URL loads the new build. Leave PR draft until Brayan reviews it; do not merge into `main`.
