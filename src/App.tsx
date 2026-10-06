import { useEffect, useRef, useState } from 'react';
import { FeaturedCase } from './components/FeaturedCase';
import { ProjectGallery } from './components/ProjectGallery';
import { projects } from './data/projects';

const navLinks = [
  ['#experiencia', 'Experiencia'], ['#proyectos', 'Proyectos'],
  ['#perfil', 'Perfil'], ['#contacto', 'Contacto'],
];

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header"><div className="container nav-inner">
      <a className="wordmark" href="#inicio" aria-label="Brayan Gallardo, inicio">bg<span>.</span></a>
      <button ref={menuButton} className="menu-toggle" type="button" aria-controls="main-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Cerrar menú' : 'Abrir menú'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
      <nav id="main-nav" className={menuOpen ? 'nav-open' : ''} aria-label="Principal">
        {navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="mailto:brayan.algallardo@gmail.com">Escríbeme ↗</a>
      </nav>
    </div></header>
    <main id="contenido">
      <section id="inicio" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BRAYAN GALLARDO · SANTIAGO, CHILE</p>
          <h1>Analista Programador<span className="hero-divider">/</span><strong>Full Stack, datos y automatización<span className="period">.</span></strong></h1>
          <p className="hero-lead">Construyo software, conecto datos y automatizo procesos para resolver problemas reales. Combino desarrollo técnico con análisis, criterio de producto y atención a las personas que usarán la solución.</p>
          <div className="hero-actions"><a className="button button-primary" href="#proyectos">Explorar proyectos ↗</a><a className="button button-outline" href="https://www.linkedin.com/in/brayan-gallardo-82617738a/" target="_blank" rel="noopener noreferrer">Ver LinkedIn ↗</a><a className="button button-text" href="#contacto">Contacto ↗</a></div>
          <p className="hero-aside">DESARROLLO WEB <span>✳</span> DATOS Y BI <span>✳</span> AUTOMATIZACIÓN</p>
        </div>
        <div className="hero-visual"><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" /><span className="visual-top">DE LA IDEA A LA SOLUCIÓN</span><img className="hero-portrait" src="/assets/brayan-portrait.webp" alt="Retrato de Brayan Gallardo" fetchPriority="high" /><span className="visual-card visual-card-one">{'{ problema: solución }'}</span><span className="visual-card visual-card-two">datos → decisiones</span><span className="visual-bottom">CÓDIGO CON PROPÓSITO ↗</span></div>
      </section>
      <div className="capability-strip" aria-label="Áreas de trabajo"><div className="container">React & TypeScript <span>✳</span> Java & Spring Boot <span>✳</span> Python & SQL <span>✳</span> Power BI & Automatización</div></div>
      <section id="experiencia" className="section container experience-section">
        <div className="section-heading"><p className="eyebrow">01 / EXPERIENCIA</p><h2>Trabajo que genera <em>impacto.</em></h2><p>Una combinación de desarrollo, datos y visión de negocio aplicada a problemas concretos.</p></div>
        <div className="experience-grid"><article className="experience-feature"><div className="experience-meta"><span>EXPERIENCIA PROFESIONAL</span><span>2026</span></div><h3>Tanner Servicios Financieros</h3><p className="job-title">Datos, automatización y Business Intelligence</p><p>Desarrollé flujos de extracción y consolidación, mejoré la calidad de datos y conecté herramientas como Python, SQL Server, Power Automate y Power BI para apoyar procesos operativos y decisiones.</p><a href="#caso-automatizacion">Ver caso de automatización ↗</a></article><div className="experience-side"><article><span className="index">02 / PRODUCTO Y DESARROLLO</span><h3>CertiMentor</h3><p>Product Owner y desarrollador Full Stack en una plataforma de mentorías creada como proyecto de título.</p></article><article><span className="index">03 / PROYECTOS ACTUALES</span><h3>ZPages y Fusión Desktop</h3><p>Diseño y desarrollo de sitios para clientes y un sistema de gestión local para un negocio gastronómico.</p></article></div></div>
      </section>
      <section id="proyectos" className="section container projects-section"><div className="section-heading"><p className="eyebrow">02 / PROYECTOS</p><h2>Del problema a la <em>solución.</em></h2><p>Casos que muestran mi participación, las decisiones técnicas y el resultado visible.</p></div><div className="featured-list">{projects.filter((project) => project.featured).map((project) => <FeaturedCase key={project.id} project={project} />)}</div><ProjectGallery projects={projects.filter((project) => !project.featured)} /></section>
      <section id="perfil" className="section profile-section"><div className="container profile-grid"><div><p className="eyebrow">03 / PERFIL</p><h2>Curiosidad técnica.<br /><em>Criterio práctico.</em></h2></div><div><p>Soy Analista Programador titulado de Duoc UC. Trabajo entre el desarrollo Full Stack, el análisis de datos y la automatización: entiendo el proceso, construyo la solución y compruebo que sirva a quienes la usan.</p><p>Me interesa colaborar en equipos que valoren aprender, explicar con claridad y resolver problemas reales.</p><div className="profile-tags"><span>React / TypeScript</span><span>Java / Spring Boot</span><span>SQL / Python</span><span>Power BI</span><span>Power Automate</span><span>Git</span></div></div></div></section>
      <section id="contacto" className="contact-section"><div className="container"><p className="eyebrow">04 / CONTACTO</p><div className="contact-grid"><h2>¿Hablamos de tu <em>equipo?</em></h2><div><p>Estoy abierto a oportunidades en desarrollo, datos y automatización. Conversemos sobre el problema que necesitas resolver.</p><a className="button button-light" href="mailto:brayan.algallardo@gmail.com">Escríbeme ↗</a></div></div><div className="contact-bottom"><a href="mailto:brayan.algallardo@gmail.com">brayan.algallardo@gmail.com</a><a href="https://github.com/BrayanGallardo19" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/brayan-gallardo-82617738a/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></section>
    </main>
    <footer className="footer container"><a className="wordmark" href="#inicio" aria-label="Volver al inicio">bg<span>.</span></a><p>© 2026 Brayan Gallardo</p><a href="#inicio">Volver arriba ↑</a></footer>
  </>;
}
