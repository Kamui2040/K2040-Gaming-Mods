(() => {
  "use strict";

  const initMenu = (menu) => {
    const items = [...menu.querySelectorAll("[data-global-menu-item]")];
    const reposition = (item) => {
      item.classList.remove("global-menu-item--flip");
      if (!item.open || window.innerWidth <= 760) return;
      requestAnimationFrame(() => {
        const panel = menu.querySelector(".global-menu-panel");
        const submenu = item.querySelector(".global-menu-submenu");
        if (!panel || !submenu) return;
        const panelRect = panel.getBoundingClientRect();
        const submenuWidth = submenu.offsetWidth || 240;
        const gap = 9;
        const margin = 16;
        const fitsRight = panelRect.right + gap + submenuWidth <= window.innerWidth - margin;
        const fitsLeft = panelRect.left - gap - submenuWidth >= margin;
        item.classList.toggle("global-menu-item--flip", !fitsRight && fitsLeft);
      });
    };

    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
          reposition(item);
        }
      });
    });

    menu.addEventListener("toggle", () => {
      if (!menu.open) items.forEach((item) => { item.open = false; });
    });

    window.addEventListener("resize", () => {
      items.forEach(reposition);
    }, { passive: true });
  };

  const alignLandingNavigation = () => {
    if (!document.body.classList.contains("gaming-mods-page")) return;
    const oldGithub = document.querySelector(".site-nav .nav-github");
    if (!oldGithub) return;
    oldGithub.classList.remove("nav-github");
    oldGithub.classList.add("nav-downloads");
    oldGithub.href = "#projects";
    oldGithub.removeAttribute("data-brand");
    oldGithub.dataset.i18n = "nav.downloads";
    oldGithub.textContent = "Downloads";
  };

  const init = () => {
    alignLandingNavigation();
    const menus = [...document.querySelectorAll("[data-global-menu]")];
    menus.forEach(initMenu);
    document.addEventListener("click", (event) => {
      menus.forEach((menu) => {
        if (menu.open && !menu.contains(event.target)) menu.open = false;
      });
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
