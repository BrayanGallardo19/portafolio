// Run against: python -m http.server 8000
const { chromium } = require("playwright");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined,
    args: ["--no-sandbox"],
  });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(process.env.TEST_URL || "http://127.0.0.1:8000");
    // Catches broken category selection, including inability to reset the list.
    assert.equal(
      await page
        .getByRole("button", { name: "Datos y automatización", exact: true })
        .count(),
      1,
      "Project category filter must be available",
    );
    await page
      .getByRole("button", { name: "Datos y automatización", exact: true })
      .click();
    assert.equal(await page.locator(".project-card:visible").count(), 2);
    assert.equal(
      await page
        .locator(".project-card:visible")
        .filter({ hasText: "ZPages" })
        .count(),
      0,
    );
    await page.getByRole("button", { name: "Todos", exact: true }).click();
    assert.equal(await page.locator(".project-card:visible").count(), 10);
    await page.locator("#project-zpages summary").click();
    assert.equal(
      await page.locator("#project-zpages details").getAttribute("open"),
      "",
    );
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Horizontal overflow at ${width}px`,
      );
    }
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Abrir menú" })
        .getAttribute("aria-expanded"),
      "false",
    );
    assert.equal(
      await page
        .getByRole("button", { name: "Abrir menú" })
        .evaluate((el) => el === document.activeElement),
      true,
    );
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Proyectos", exact: true })
      .click();
    assert.equal(
      await page
        .getByRole("button", { name: "Abrir menú" })
        .getAttribute("aria-expanded"),
      "false",
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: filters, project details, mobile menu, 4 viewport widths, no JS errors",
    );
    const noJS = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const fallback = await noJS.newPage();
    await fallback.goto(process.env.TEST_URL || "http://127.0.0.1:8000");
    assert.equal(await fallback.locator(".project-card:visible").count(), 10);
    assert.equal(
      await fallback.locator('nav a[href="#proyectos"]:visible').count(),
      1,
    );
    console.log("PASS: content and navigation without JavaScript");
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
