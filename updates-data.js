(() => {
  "use strict";

  const script = document.currentScript;
  const content = window.K2040_CONTENT || (window.K2040_CONTENT = { projects: [], updates: [] });
  const allUpdates = Array.isArray(window.K2040_GAMING_UPDATES) ? window.K2040_GAMING_UPDATES : [];
  const limit = Number.parseInt(script?.dataset.limit || "", 10);
  content.updates = Number.isFinite(limit) && limit > 0 ? allUpdates.slice(0, limit) : [...allUpdates];
})();
