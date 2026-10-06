import type { Project } from '../data/projects';
import { MediaFrame } from './MediaFrame';

export function FeaturedCase({ project }: { project: Project }) {
  return <article className={`featured-case case-${project.id}`} id={`caso-${project.id}`} data-featured-case>
    <div className="case-visual">{project.media.length ? <MediaFrame media={project.media} /> : <div className="case-artwork" aria-hidden="true"><span className="case-visual-label">{project.category === 'systems' ? 'SISTEMAS' : project.category === 'data' ? 'DATOS' : project.category === 'web' ? 'WEB' : 'FULL STACK'}</span><strong>{project.title}</strong><span className="case-visual-symbol">↗</span></div>}</div>
    <div className="case-body"><div className="case-meta"><span>{project.status}</span><span>{project.role}</span></div>
      <h3>{project.title}</h3><p className="case-problem">{project.problem}</p>
      <div className="case-detail"><div><h4>Mi aporte</h4><p>{project.contribution}</p></div><div><h4>Funciones</h4><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div></div>
      <ul className="case-tags" aria-label="Tecnologías y áreas">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      {project.links.length > 0 && <div className="case-links">{project.links.map(({ href, label }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>}
    </div>
  </article>;
}
