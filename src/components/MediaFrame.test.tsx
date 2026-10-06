import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MediaFrame } from './MediaFrame';
import type { ProjectMedia } from '../data/projects';

afterEach(cleanup);

const pair: ProjectMedia[] = [
  { src: '/assets/uno.jpg', alt: 'Portada real de la web', kind: 'screenshot', label: 'Portada' },
  { src: '/assets/dos.jpg', alt: 'Catálogo real de la web', kind: 'screenshot', label: 'Catálogo' },
];

describe('medios de un caso', () => {
  it('cambia captura, texto alternativo y descripción con los controles', () => {
    render(<MediaFrame media={pair} />);
    expect(screen.getByRole('img', { name: 'Portada real de la web' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente vista' }));
    expect(screen.getByRole('img', { name: 'Catálogo real de la web' })).toBeTruthy();
    expect(screen.getByText('Catálogo')).toBeTruthy();
  });

  it('no muestra controles cuando hay una sola vista', () => {
    render(<MediaFrame media={[pair[0]]} />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('identifica las composiciones conceptuales', () => {
    render(<MediaFrame media={[{ src: '', alt: 'Flujo de Fusión', kind: 'concept', label: 'Caja y comandas' }]} />);
    expect(screen.getByText('Vista conceptual')).toBeTruthy();
    expect(screen.getByText('Caja y comandas')).toBeTruthy();
  });

  it('omite el marco sin contenido', () => {
    const { container } = render(<MediaFrame media={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
