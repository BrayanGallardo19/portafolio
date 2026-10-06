import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { ProjectGallery } from './ProjectGallery';
import type { Project } from '../data/projects';

afterEach(cleanup);

const fusion: Project = {
  id: 'fusion', title: 'Fusión Desktop', category: 'systems', featured: true,
  status: 'En desarrollo', role: 'Análisis funcional y desarrollo',
  problem: 'Coordinar ventas y cocina', contribution: 'Diseñé el flujo de venta',
  features: ['Caja local'], technologies: ['Punto de venta'], links: [], media: [],
};
const data: Project = { ...fusion, id: 'datos', title: 'Automatización de datos', category: 'data', featured: false,
  links: [{ label: 'Código', href: 'https://github.com/BrayanGallardo19/data-consolidation-pipeline' }] };

describe('galería de proyectos', () => {
  it('filtra y permite volver a todos', () => {
    render(<ProjectGallery projects={[fusion, data]} />);
    fireEvent.click(screen.getByRole('button', { name: 'Datos y automatización' }));
    expect(screen.queryByRole('heading', { name: 'Fusión Desktop' })).toBeNull();
    expect(screen.getByRole('heading', { name: 'Automatización de datos' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Todos' }));
    expect(screen.getByRole('heading', { name: 'Fusión Desktop' })).toBeTruthy();
  });

  it('explica una categoría sin resultados', () => {
    render(<ProjectGallery projects={[fusion]} />);
    fireEvent.click(screen.getByRole('button', { name: 'Datos y automatización' }));
    expect(screen.getByText('No hay proyectos en esta categoría.')).toBeTruthy();
  });

  it('no presenta enlaces vacíos en un caso privado', () => {
    render(<ProjectGallery projects={[fusion]} />);
    const card = screen.getByRole('article', { name: 'Fusión Desktop' });
    expect(within(card).queryByRole('link')).toBeNull();
  });

  it('muestra la captura disponible en una tarjeta de cliente', () => {
    render(<ProjectGallery projects={[{ ...fusion, id: 'cliente', title: 'Cliente', media: [{ src: '/assets/cliente.jpg', alt: 'Catálogo del cliente', kind: 'screenshot' }] }]} />);
    expect(screen.getByRole('img', { name: 'Catálogo del cliente' }).getAttribute('src')).toBe('/assets/cliente.jpg');
  });
});
