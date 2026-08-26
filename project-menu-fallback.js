(() => {
  "use strict";

  const ensureLatestIcons = () => {
    if (document.querySelector('link[data-k2040-gaming-icons="20260826a"]')) return;
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = `${location.origin}/K2040-Gaming-Mods/external-link-icons.css?v=20260826a`;
    styles.dataset.k2040GamingIcons = "20260826a";
    document.head.append(styles);
  };

  const initMenu = (menu) => {
    if (menu.dataset.projectMenuFallback === "ready") return;
    const modsPanel = menu.querySelector(".project-menu-mods");
    const buttons = [...menu.querySelectorAll("[data-project-game-button]")];
    const panels = [...menu.querySelectorAll("[data-project-game-panel]")];
    if (!modsPanel || buttons.length === 0 || panels.length === 0) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const game = button.dataset.projectGameButton;
        modsPanel.hidden = false;
        buttons.forEach((entry) => entry.setAttribute("aria-selected", String(entry === button)));
        panels.forEach((panel) => { panel.hidden = panel.dataset.projectGamePanel !== game; });
      });
    });

    menu.dataset.projectMenuFallback = "ready";
  };

  const init = () => {
    ensureLatestIcons();
    document.querySelectorAll("[data-project-menu]").forEach(initMenu);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
