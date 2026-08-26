(() => {
  "use strict";

  const ROOT = `${location.origin}/K2040-Gaming-Mods/`;
  const ICON_SIZE_STYLES = "20260826b";
  const FINAL_QA_STYLES = "20260826a";

  const ensureStyles = () => {
    if (!document.querySelector(`link[data-k2040-gaming-icons="${ICON_SIZE_STYLES}"]`)) {
      const icons = document.createElement("link");
      icons.rel = "stylesheet";
      icons.href = `${ROOT}external-link-icons.css?v=${ICON_SIZE_STYLES}`;
      icons.dataset.k2040GamingIcons = ICON_SIZE_STYLES;
      document.head.append(icons);
    }

    if (!document.querySelector(`link[data-k2040-final-qa="${FINAL_QA_STYLES}"]`)) {
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = `${ROOT}final-qa.css?v=${FINAL_QA_STYLES}`;
      styles.dataset.k2040FinalQa = FINAL_QA_STYLES;
      document.head.append(styles);
    }
  };

  const normalizeLanguage = (value) => {
    const language = (value || "en").toLowerCase();
    if (language.startsWith("de")) return "de";
    if (language.startsWith("pt")) return "pt-PT";
    if (language.startsWith("es")) return "es";
    if (language.startsWith("fr")) return "fr";
    return "en";
  };

  const language = () => normalizeLanguage(document.documentElement.lang || navigator.language);
  const translated = (path, fallback = "") => {
    let value = window.K2040_TRANSLATIONS?.[language()] || window.K2040_TRANSLATIONS?.en || {};
    for (const part of path.split(".")) {
      if (!value || typeof value !== "object" || !(part in value)) return fallback;
      value = value[part];
    }
    return typeof value === "string" ? value : fallback;
  };

  const initMenu = (menu) => {
    if (menu.dataset.projectMenuFallback === "ready") return;
    const modsPanel = menu.querySelector(".project-menu-mods");
    const buttons = [...menu.querySelectorAll("[data-project-game-button]")];
    const panels = [...menu.querySelectorAll("[data-project-game-panel]")];
    if (!modsPanel || buttons.length === 0 || panels.length === 0) return;

    const selectGame = (button) => {
      const game = button.dataset.projectGameButton;
      if (!game) return;
      modsPanel.hidden = false;
      buttons.forEach((entry) => entry.setAttribute("aria-selected", String(entry === button)));
      panels.forEach((panel) => { panel.hidden = panel.dataset.projectGamePanel !== game; });

      requestAnimationFrame(() => {
        modsPanel.hidden = false;
        panels.forEach((panel) => { panel.hidden = panel.dataset.projectGamePanel !== game; });
        window.dispatchEvent(new Event("resize"));
      });
    };

    menu.addEventListener("click", (event) => {
      const button = event.target.closest?.("[data-project-game-button]");
      if (!button || !menu.contains(button)) return;
      event.preventDefault();
      event.stopPropagation();
      selectGame(button);
    }, true);

    menu.dataset.projectMenuFallback = "ready";
  };

  const neutralUpdateLabels = {
    en: "View projects",
    de: "Projekte ansehen",
    "pt-PT": "Ver projetos",
    es: "Ver proyectos",
    fr: "Voir les projets"
  };

  const normalizeUpdateLinks = (root = document) => {
    root.querySelectorAll?.("a[data-update-link]:not([data-update-action-normalized])").forEach((link) => {
      let url;
      try { url = new URL(link.href, location.href); } catch { return; }

      const host = url.hostname.toLowerCase();
      let label = link.textContent.trim() || "Read more";
      if (host === "github.com" || host.endsWith(".github.com")) label = "GitHub";
      else if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) label = "Nexus Mods";
      else if (url.origin === location.origin && url.pathname.startsWith("/K2040-Gaming-Mods/")) {
        label = neutralUpdateLabels[language()] || neutralUpdateLabels.en;
      }

      const replacement = link.cloneNode(false);
      replacement.removeAttribute("data-brand");
      replacement.classList.remove("brand-link", "brand-link--github", "brand-link--nexus", "external-platform-link");
      replacement.dataset.updateActionNormalized = "true";
      replacement.textContent = label;
      link.replaceWith(replacement);
    });
  };

  const updateObserver = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.matches?.("a[data-update-link]")) normalizeUpdateLinks(node.parentElement || document);
      else normalizeUpdateLinks(node);
    }));
  });

  const pageDescription = () => {
    if (document.body.classList.contains("project-detail-page")) {
      return document.querySelector("[data-project-description]")?.textContent?.trim()
        || translated("landing.aboutDescription", "Open Source game mods and tools with official download links and project-specific documentation.");
    }
    if (document.body.classList.contains("updates-page")) {
      return translated("pages.updates.description", "Published releases and important project changes. Newest first.");
    }
    return translated("landing.aboutDescription", "Open Source game mods and tools with official download links and project-specific documentation.");
  };

  const ensureAboutSection = () => {
    const main = document.querySelector("main");
    if (!main) return;

    let section = main.querySelector(":scope > .about-section");
    if (!section) {
      section = document.createElement("section");
      section.className = "content-section about-section";
      section.id = "about";

      const heading = document.createElement("div");
      heading.className = "section-heading";
      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow";
      eyebrow.textContent = translated("landing.aboutEyebrow", "K2040 Projects");
      const title = document.createElement("h2");
      title.textContent = translated("landing.aboutTitle", "About");
      const description = document.createElement("p");
      description.dataset.siteAboutDescription = "true";
      description.textContent = pageDescription();
      heading.append(eyebrow, title, description);
      section.append(heading);
      main.append(section);
    } else {
      section.querySelector(".about-links")?.remove();
      const description = section.querySelector("[data-site-about-description]");
      if (description) description.textContent = pageDescription();
    }
  };

  const footerLinks = () => [
    { href: "https://kamui2040.github.io/", label: translated("global.home", "Home") },
    { href: "https://kamui2040.github.io/K2040-Android-Releases/", label: translated("global.android", "Android Projects") },
    { href: "https://kamui2040.github.io/K2040-Gaming-Mods/", label: translated("global.gaming", "Gaming Mods") },
    { href: "https://github.com/Kamui2040", label: "GitHub", brand: "github" },
    { href: "https://next.nexusmods.com/profile/kamui2040", label: "Nexus Mods" },
    { href: "https://ko-fi.com/k2040", label: "Ko-fi" },
    { href: "https://www.instagram.com/k2040.projects/", label: "Instagram" }
  ];

  const ensureFooter = () => {
    const shell = document.querySelector(".page-shell");
    const main = shell?.querySelector("main");
    if (!shell || !main) return;

    let footer = shell.querySelector(":scope > .site-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "site-footer";
      main.after(footer);
    }

    const nav = document.createElement("nav");
    nav.className = "footer-links";
    nav.setAttribute("aria-label", translated("footer.linksLabel", "K2040 links"));
    footerLinks().forEach(({ href, label, brand }) => {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = href;
      link.textContent = label;
      if (brand) link.dataset.brand = brand;
      nav.append(link);
    });
    footer.replaceChildren(nav);
  };

  const refreshSharedChrome = () => {
    ensureAboutSection();
    ensureFooter();
    normalizeUpdateLinks();
  };

  const init = () => {
    ensureStyles();
    document.querySelectorAll("[data-project-menu]").forEach(initMenu);

    const list = document.querySelector("[data-update-list]");
    if (list) updateObserver.observe(list, { childList: true, subtree: true });

    requestAnimationFrame(refreshSharedChrome);

    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => requestAnimationFrame(refreshSharedChrome));
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
