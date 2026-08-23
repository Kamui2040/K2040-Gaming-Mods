(() => {
  "use strict";
  const valueAt = (object, path) => path.split(".").reduce((value, key) => value && typeof value === "object" ? value[key] : null, object);
  const apply = () => {
    const titleKey = document.body?.dataset.pageTitleKey;
    const descriptionKey = document.body?.dataset.pageDescriptionKey;
    if (!titleKey && !descriptionKey) return;
    const language = document.documentElement.dataset.language || "en";
    const dictionary = window.K2040_TRANSLATIONS?.[language] || window.K2040_TRANSLATIONS?.en || {};
    const title = titleKey ? valueAt(dictionary, titleKey) : null;
    const description = descriptionKey ? valueAt(dictionary, descriptionKey) : null;
    if (typeof title === "string") document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && typeof description === "string") meta.content = description;
  };
  const init = () => {
    apply();
    document.querySelector("[data-language-select]")?.addEventListener("change", apply);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
