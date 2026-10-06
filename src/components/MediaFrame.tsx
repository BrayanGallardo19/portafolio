import { useState } from 'react';
import type { ProjectMedia } from '../data/projects';

export function MediaFrame({ media }: { media: ProjectMedia[] }) {
  const [index, setIndex] = useState(0);
  if (media.length === 0) return null;
  const current = media[index % media.length];
  return <figure className={`media-frame media-${current.kind}`}>
    <div className="media-window">
      <div className="media-bar" aria-hidden="true"><span /><span /><span /><i>vista del proyecto</i></div>
      {current.kind !== 'concept' ?
        <img src={current.src} alt={current.alt} loading="lazy" /> :
        <div className="concept-screen" role="img" aria-label={current.alt}>
          <div className="concept-side"><span /><span /><span /><span /></div>
          <div className="concept-content"><div className="concept-top"><b /><b /></div><div className="concept-grid"><i /><i /><i /></div><div className="concept-lines"><span /><span /><span /></div></div>
        </div>}
    </div>
    <figcaption><span>{current.kind === 'concept' && <small>Vista conceptual</small>}{current.label}</span>{media.length > 1 && <span className="media-controls"><button type="button" aria-label="Vista anterior" onClick={() => setIndex((value) => (value - 1 + media.length) % media.length)}>←</button><span aria-live="polite">{index + 1} / {media.length}</span><button type="button" aria-label="Siguiente vista" onClick={() => setIndex((value) => (value + 1) % media.length)}>→</button></span>}</figcaption>
  </figure>;
}
