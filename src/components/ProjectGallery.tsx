import { useState } from 'react';
import type { Category, Project } from '../data/projects';

const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' }, { id: 'web', label: 'Desarrollo web' },
  { id: 'systems', label: 'Sistemas' }, { id: 'data', label: 'Datos y automatización' },
  { id: 'fullstack', label: 'Full Stack y backend' },
];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const visible = projects.filter((project) => category === 'all' || project.category === category);
  return <div className="gallery">
    <div className="gallery-head"><h3>Más proyectos</h3><p>Explora otras áreas de mi trabajo.</p></div>
    <div className="gallery-filters" role="group" aria-label="Filtrar proyectos">{categories.map(({ id, label }) => <button key={id} type="button" aria-pressed={id === category} onClick={() => setCategory(id)}>{label}</button>)}</div>
    <p className="gallery-count" role="status">{visible.length} {visible.length === 1 ? 'proyecto' : 'proyectos'}</p>
    {visible.length ? <div className="gallery-grid">{visible.map((project) => <article className={`gallery-card card-${project.category}`} key={project.id} aria-label={project.title}>
      <div className="gallery-art">{project.media[0]?.src && <img src={project.media[0].src} alt={project.media[0].alt} loading="lazy" />}<span>{project.category.toUpperCase()}</span><strong>{project.title}</strong><b aria-hidden="true">↗</b></div>
      <div className="gallery-content"><p className="gallery-status">{project.status}</p><h4>{project.title}</h4><p>{project.contribution}</p><div className="gallery-tech">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>{project.links.length > 0 && <div className="gallery-links">{project.links.map(({ href, label }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>}</div>
    </article>)}</div> : <p className="gallery-empty">No hay proyectos en esta categoría.</p>}
  </div>;
}
