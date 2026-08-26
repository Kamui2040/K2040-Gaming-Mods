(() => {
  "use strict";

  const script = document.currentScript;
  if (script?.src && !document.querySelector('script[data-project-menu-fallback]')) {
    const fallback = document.createElement("script");
    fallback.src = new URL("project-menu-fallback.js?v=20260826b", script.src).href;
    fallback.dataset.projectMenuFallback = "true";
    document.head.append(fallback);
  }

  const content = window.K2040_CONTENT || (window.K2040_CONTENT = { projects: [], updates: [] });
  const allUpdates = Array.isArray(window.K2040_GAMING_UPDATES) ? window.K2040_GAMING_UPDATES : [];
  const limit = Number.parseInt(script?.dataset.limit || "", 10);
  content.updates = Number.isFinite(limit) && limit > 0 ? allUpdates.slice(0, limit) : [...allUpdates];
})();
