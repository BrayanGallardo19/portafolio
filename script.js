/* Keep the portfolio readable and navigable even without JavaScript. */
const filters = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".project-card")];
const projectCount = document.querySelector("#project-count");

if (filters && projectCount && cards.length) {
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button || !filters.contains(button)) return;
    const category = button.dataset.filter;
    let visibleCount = 0;
    cards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
      if (!card.hidden) visibleCount++;
    });
    filters.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? "proyecto" : "proyectos"}`;
  });
  filters.hidden = false;
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
if (menuButton && navigation) {
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    navigation.classList.toggle("is-open", open);
  };
  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  window
    .matchMedia("(max-width: 680px)")
    .addEventListener("change", () => setMenu(false));
  menuButton.hidden = false;
  document.documentElement.classList.add("js");
}
