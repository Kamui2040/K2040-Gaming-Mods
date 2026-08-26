(() => {
  "use strict";

  const loaderScript = document.currentScript;
  if (loaderScript?.src && !document.querySelector('script[data-project-menu-fallback]')) {
    const fallback = document.createElement("script");
    fallback.src = new URL("../project-menu-fallback.js?v=20260826a", loaderScript.src).href;
    fallback.dataset.projectMenuFallback = "true";
    document.head.append(fallback);
  }

  const projects = window.K2040_PROJECTS || {};
  const projectTranslations = window.K2040_PROJECT_TRANSLATIONS || {};
  const supportedLanguages = ["en", "de", "pt-PT", "es", "fr"];
  const aliases = {
    "eco-aio": "eco-quick-menu-additions",
    "eco-single": "eco-quick-menu-additions"
  };
  const sourceLabels = {
    en: { nexus: "Nexus Mods", github: "GitHub Releases", githubRepo: "GitHub", original: "Original mod · Nexus Mods" },
    de: { nexus: "Nexus Mods", github: "GitHub Releases", githubRepo: "GitHub", original: "Original-Mod · Nexus Mods" },
    "pt-PT": { nexus: "Nexus Mods", github: "GitHub Releases", githubRepo: "GitHub", original: "Mod original · Nexus Mods" },
    es: { nexus: "Nexus Mods", github: "GitHub Releases", githubRepo: "GitHub", original: "Mod original · Nexus Mods" },
    fr: { nexus: "Nexus Mods", github: "GitHub Releases", githubRepo: "GitHub", original: "Mod original · Nexus Mods" }
  };

  const requestedId = new URLSearchParams(location.search).get("project");
  const id = aliases[requestedId] || requestedId || "eco-quick-menu-additions";
  const fallbackProject = projects["eco-quick-menu-additions"];
  const baseProject = projects[id] || fallbackProject;

  if (!baseProject) return;

  const storedLanguage = (() => {
    const hashLanguage = location.hash.slice(1);
    if (supportedLanguages.includes(hashLanguage)) return hashLanguage;
    try {
      const saved = localStorage.getItem("k2040-language");
      return supportedLanguages.includes(saved) ? saved : "en";
    } catch {
      return "en";
    }
  })();

  const translated = projectTranslations[storedLanguage]?.[id] || {};
  const project = { ...baseProject, ...translated };

  if (translated.variants && baseProject.variants) {
    project.variants = baseProject.variants.map((variant, index) => ({
      ...variant,
      ...translated.variants[index]
    }));
  }

  if (translated.screenshots && baseProject.screenshots) {
    project.screenshots = baseProject.screenshots.map((screenshot, index) => ({
      ...screenshot,
      ...translated.screenshots[index]
    }));
  }

  window.K2040_PROJECT = { screenshots: project.screenshots || [] };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || "";
  };

  const renderList = (selector, items) => {
    const list = document.querySelector(selector);
    if (!list) return;
    const entries = Array.isArray(items) ? items : [];
    list.replaceChildren(...entries.map((item) => {
      const entry = document.createElement("li");
      entry.textContent = item;
      return entry;
    }));
  };

  const addLink = (container, href, label, brand) => {
    if (!container || !href) return;
    const link = document.createElement("a");
    link.className = "text-link";
    link.href = href;
    link.textContent = label;
    if (brand) link.dataset.brand = brand;
    container.append(link);
  };

  const renderHero = (detailStrings) => {
    const hero = document.querySelector(".project-detail-hero");
    const art = document.querySelector("[data-project-hero-art]");
    const heroArtwork = project.heroImage || project.image;

    if (hero && (project.heroImage || project.wideHero)) {
      hero.classList.add("project-detail-hero--wide-art");
    }

    if (art && heroArtwork) {
      const image = document.createElement("img");
      image.src = heroArtwork;
      image.alt = `${project.title} ${detailStrings.projectArtworkSuffix || "project artwork"}`;
      image.decoding = "async";
      art.replaceChildren(image);
    }
  };

  const appendProjectLinks = (container, labels) => {
    if (!container) return;
    container.replaceChildren();
    addLink(container, project.githubRepo, labels.githubRepo, "github");
    addLink(container, project.github, labels.github, "github");
    addLink(container, project.nexus, labels.nexus, "nexus");
    addLink(container, project.originalNexus, labels.original, "nexus");
  };

  const renderVariants = (detailStrings, labels) => {
    const single = document.querySelector("[data-project-single-release]");
    const list = document.querySelector("[data-project-variants]");
    if (!list || !project.variants?.length) return false;

    if (single) single.hidden = true;
    list.replaceChildren(...project.variants.map((variant) => {
      const item = document.createElement("article");
      item.className = "project-variant";
      item.id = variant.id;

      const title = document.createElement("h3");
      title.textContent = variant.title;

      const description = document.createElement("p");
      description.textContent = variant.description;

      const actions = document.createElement("div");
      actions.className = "featured-project-actions";
      addLink(actions, variant.githubRepo, labels.githubRepo, "github");
      addLink(actions, variant.github, labels.github, "github");
      addLink(actions, variant.nexus, labels.nexus, "nexus");

      const heading = document.createElement("h4");
      heading.textContent = detailStrings.changelogTitle || "Changelog";

      const changelog = document.createElement("ul");
      changelog.className = "detail-list";
      const entries = Array.isArray(variant.changelog) ? variant.changelog : [];
      changelog.replaceChildren(...entries.map((entry) => {
        const line = document.createElement("li");
        line.textContent = entry;
        return line;
      }));

      item.append(title, description, actions, heading, changelog);
      return item;
    }));
    list.hidden = false;
    return true;
  };

  const renderSingleRelease = (labels) => {
    const single = document.querySelector("[data-project-single-release]");
    const links = document.querySelector("[data-project-links]");
    if (single) single.hidden = false;
    appendProjectLinks(links, labels);
    renderList("[data-project-changelog]", project.changelog);
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("[data-language-select]")?.addEventListener("change", () => {
      setTimeout(() => location.reload(), 0);
    });

    const detailStrings = window.K2040_TRANSLATIONS?.[storedLanguage]?.detail
      || window.K2040_TRANSLATIONS?.en?.detail
      || {};
    const labels = sourceLabels[storedLanguage] || sourceLabels.en;

    document.title = `${project.title} · K2040 Gaming Mods`;
    setText("[data-project-game]", project.game);
    setText("[data-project-title]", project.title);
    setText("[data-project-description]", project.description);
    setText("[data-project-overview]", project.overview);

    const features = document.querySelector("[data-project-features-section]");
    if (features && project.features?.length) {
      renderList("[data-project-features]", project.features);
      features.hidden = false;
    }

    renderHero(detailStrings);

    if (!renderVariants(detailStrings, labels)) {
      renderSingleRelease(labels);
    }

    const downloadsNav = document.querySelector("[data-project-downloads-nav]");
    if (downloadsNav) downloadsNav.href = "#project-downloads";
  });
})();
