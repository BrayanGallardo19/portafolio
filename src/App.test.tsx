import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { App } from './App';

afterEach(cleanup);

describe('portada y jerarquía', () => {
  it('presenta el perfil profesional de Brayan', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Analista Programador');
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Full Stack, datos y automatización');
  });

  it('presenta un retrato accesible sin fondo en la portada', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: 'Retrato de Brayan Gallardo' }).getAttribute('src')).toBe('/assets/brayan-portrait.webp');
  });

  it('ofrece una acción directa de contacto en portada', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.hero-actions a[href="#contacto"]')).not.toBeNull();
  });

  it('presenta experiencia antes de proyectos y conserva anclas', () => {
    const { container } = render(<App />);
    const ids = Array.from(container.querySelectorAll('main section[id]')).map((section) => section.id);
    expect(ids.indexOf('experiencia')).toBeLessThan(ids.indexOf('proyectos'));
    for (const id of ['inicio', 'experiencia', 'proyectos', 'perfil', 'contacto']) {
      expect(ids, `sección ${id}`).toContain(id);
    }
  });

  it('destaca cuatro casos en el orden acordado y excluye ejercicios descartados', () => {
    const { container } = render(<App />);
    const names = Array.from(container.querySelectorAll('[data-featured-case] h3')).map((node) => node.textContent);
    expect(names).toEqual(['Fusión Desktop', 'Newen Pintando', 'CertiMentor', 'Automatización de datos']);
    expect(container.textContent).not.toMatch(/Kotlin Syntax Notes|freeCodeCampEx|Python DSA/);
  });
});
