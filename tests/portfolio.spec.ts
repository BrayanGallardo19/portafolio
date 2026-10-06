import { test, expect } from '@playwright/test';

test('portada presenta el rol profesional', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Analista Programador');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Full Stack, datos y automatización');
});

test('navegación prioriza experiencia antes de proyectos', async ({ page }) => {
  await page.goto('/');
  const sections = await page.locator('main > section[id]').evaluateAll((nodes) => nodes.map((node) => node.id));
  expect(sections.indexOf('experiencia')).toBeGreaterThanOrEqual(0);
  expect(sections.indexOf('experiencia')).toBeLessThan(sections.indexOf('proyectos'));
  for (const id of ['inicio', 'experiencia', 'proyectos', 'perfil', 'contacto']) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test('navegación móvil cierra con Escape y devuelve el foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Abrir menú' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});

test('casos destacados muestran el rol y aporte en el orden profesional', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-featured-case] h3')).toHaveText(['Fusión Desktop', 'Newen Pintando', 'CertiMentor', 'Automatización de datos']);
  const fusion = page.locator('#caso-fusion');
  await expect(fusion.getByText('Mi aporte')).toBeVisible();
  await expect(fusion.getByText('Análisis funcional y desarrollo')).toBeVisible();
});

test('filtros cambian la galería y Todos restaura los proyectos', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Datos y automatización' }).click();
  await expect(page.locator('.gallery-card')).toHaveCount(1);
  await page.getByRole('button', { name: 'Todos' }).click();
  await expect(page.locator('.gallery-card')).toHaveCount(4);
});

for (const width of [320, 390, 768, 1440]) {
  test(`portafolio sin desbordamiento horizontal a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  });
}

test('medios, teclado y enlaces del portafolio', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#caso-fusion')).toContainText('Vista conceptual');
  for (const img of await page.locator('img').all()) {
    await expect(img).toHaveAttribute('alt', /.+/);
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
  const links = await page.locator('a[href]').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')));
  expect(links.every((href) => href && /^(#|mailto:|https:\/\/)/.test(href))).toBe(true);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  const next = page.locator('#caso-newen').getByRole('button', { name: 'Siguiente vista' });
  await next.focus();
  expect(await next.evaluate((el) => getComputedStyle(el).outlineStyle)).not.toBe('none');
  await page.keyboard.press('Enter');
  await expect(page.locator('#caso-newen').getByRole('img', { name: /obra del cliente/i })).toBeVisible();
});

test('movimiento reducido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.locator('html').evaluate((el) => getComputedStyle(el).scrollBehavior)).toBe('auto');
});
