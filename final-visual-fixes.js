(() => {
  "use strict";

  const ICONS = {
    home: "https://kamui2040.github.io/assets/icons/k2040-home.webp",
    android: "https://kamui2040.github.io/assets/icons/k2040-android.webp?v=20260826outline1",
    gaming: "https://kamui2040.github.io/assets/icons/k2040-gaming.webp?v=20260826outline1"
  };

  const labels = {
    en: { home: "Home", android: "Android Projects", gaming: "Gaming Mods", about: "About", eyebrow: "K2040 Projects", viewProjects: "View projects" },
    de: { home: "Home", android: "Android-Projekte", gaming: "Gaming Mods", about: "Info", eyebrow: "K2040 Projects", viewProjects: "Projekte ansehen" },
    "pt-PT": { home: "Início", android: "Projetos Android", gaming: "Gaming Mods", about: "Sobre", eyebrow: "K2040 Projects", viewProjects: "Ver projetos" },
    es: { home: "Inicio", android: "Proyectos Android", gaming: "Gaming Mods", about: "Acerca de", eyebrow: "K2040 Projects", viewProjects: "Ver proyectos" },
    fr: { home: "Accueil", android: "Projets Android", gaming: "Gaming Mods", about: "À propos", eyebrow: "K2040 Projects", viewProjects: "Voir les projets" }
  };

  const footerLinks = [
    { key: "home", href: "https://kamui2040.github.io/" },
    { key: "android", href: "https://kamui2040.github.io/K2040-Android-Releases/" },
    { key: "gaming", href: "https://kamui2040.github.io/K2040-Gaming-Mods/" },
    { key: "github", href: "https://github.com/Kamui2040", label: "GitHub" },
    { key: "nexus", href: "https://next.nexusmods.com/profile/kamui2040", label: "Nexus Mods" },
    { key: "kofi", href: "https://ko-fi.com/k2040", label: "Ko-fi" },
    { key: "instagram", href: "https://www.instagram.com/k2040.projects/", label: "Instagram" }
  ];

  const normalizeLanguage = (value) => {
    const language = (value || "").toLowerCase();
    if (language.startsWith("de")) return "de";
    if (language.startsWith("pt")) return "pt-PT";
    if (language.startsWith("es")) return "es";
    if (language.startsWith("fr")) return "fr";
    return "en";
  };

  const language = () => normalizeLanguage(document.documentElement.lang || navigator.language);
  const copy = () => labels[language()] || labels.en;
  const labelFor = (item) => item.label || copy()[item.key] || item.key;

  const familyFor = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return null; }
    const path = url.pathname.replace(/\/+$/, "/");
    if (url.hostname === "kamui2040.github.io" && path === "/") return "home";
    if (path.startsWith("/K2040-Android-Releases/")) return "android";
    if (path.startsWith("/K2040-Gaming-Mods/")) return "gaming";
    return null;
  };

  const ensureFamilyIcon = (link) => {
    const family = familyFor(link);
    if (!family) return;
    let icon = link.querySelector(":scope > .site-family-icon");
    if (!icon) {
      icon = document.createElement("img");
      icon.alt = "";
      icon.setAttribute("aria-hidden", "true");
      link.prepend(icon);
    }
    icon.className = `site-family-icon site-family-icon--${family}`;
    icon.src = ICONS[family];
    icon.decoding = "async";
    link.classList.add("site-family-link");
    link.dataset.siteFamilyIcon = "done";
  };

  const ensureNexusIcon = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return; }
    const host = url.hostname.toLowerCase();
    if (!(host === "nexusmods.com" || host.endsWith(".nexusmods.com"))) return;

    let icon = link.querySelector(":scope > .external-platform-icon");
    if (!icon) {
      const labelText = link.textContent.trim() || "Nexus Mods";
      link.textContent = "";
      icon = document.createElement("span");
      icon.setAttribute("aria-hidden", "true");
      const label = document.createElement("span");
      label.className = "external-platform-label";
      label.textContent = labelText;
      link.append(icon, label);
    }
    icon.className = "external-platform-icon external-platform-icon--nexus external-platform-icon--monogram";
    link.classList.add("external-platform-link");
    link.dataset.externalPlatform = "nexus";
  };

  const decorateLink = (link) => {
    if (!(link instanceof HTMLAnchorElement)) return;
    ensureFamilyIcon(link);
    ensureNexusIcon(link);
  };

  const decorate = (root = document) => {
    if (root instanceof HTMLAnchorElement) decorateLink(root);
    root.querySelectorAll?.("a[href]").forEach(decorateLink);
  };

  const pageDescription = () => {
    if (document.body.classList.contains("project-detail-page")) {
      return document.querySelector("[data-project-description]")?.textContent?.trim()
        || "Open Source game mods and tools with official download links and project-specific documentation.";
    }
    if (document.body.classList.contains("updates-page")) {
      return document.querySelector("#updates .lead")?.textContent?.trim()
        || "Published releases and important project changes. Newest first.";
    }
    return document.querySelector(".about-section .section-heading > p:not(.eyebrow)")?.textContent?.trim()
      || "Open Source game mods and tools with official download links and project-specific documentation.";
  };

  const ensureAbout = () => {
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
      const title = document.createElement("h2");
      const description = document.createElement("p");
      description.dataset.siteAboutDescription = "true";
      heading.append(eyebrow, title, description);
      section.append(heading);
      main.append(section);
    }

    section.querySelector(".about-links")?.remove();
    const heading = section.querySelector(".section-heading") || section;
    const eyebrow = heading.querySelector(".eyebrow");
    const title = heading.querySelector("h2");
    let description = heading.querySelector("[data-site-about-description]");
    if (!description) {
      description = [...heading.querySelectorAll(":scope > p")].find((paragraph) => !paragraph.classList.contains("eyebrow"));
      if (!description) {
        description = document.createElement("p");
        heading.append(description);
      }
      description.dataset.siteAboutDescription = "true";
    }

    if (eyebrow) {
      eyebrow.removeAttribute("data-i18n");
      eyebrow.textContent = copy().eyebrow;
    }
    if (title) {
      title.removeAttribute("data-i18n");
      title.textContent = copy().about;
    }
    description.removeAttribute("data-i18n");
    description.textContent = pageDescription();
  };

  const ensureFooter = () => {
    const shell = document.querySelector(".page-shell");
    const main = shell?.querySelector("main");
    if (!shell || !main) return null;

    let footer = shell.querySelector(":scope > .site-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "site-footer";
      main.after(footer);
    }

    let nav = footer.querySelector(":scope > .footer-links");
    if (!nav) {
      nav = document.createElement("nav");
      nav.className = "footer-links";
      nav.setAttribute("aria-label", "K2040 links");
      footer.replaceChildren(nav);
    }

    footerLinks.forEach((item) => {
      let link = nav.querySelector(`:scope > a[data-footer-key="${item.key}"]`);
      if (!link) {
        link = document.createElement("a");
        link.className = "text-link";
        link.dataset.footerKey = item.key;
        nav.append(link);
      }
      link.href = item.href;
      const platformLabel = link.querySelector(":scope > .external-platform-label");
      if (platformLabel) platformLabel.textContent = labelFor(item);
      else {
        const icon = link.querySelector(":scope > .site-family-icon, :scope > .external-platform-icon");
        if (icon) {
          [...link.childNodes].filter((node) => node !== icon).forEach((node) => node.remove());
          link.append(document.createTextNode(labelFor(item)));
        } else link.textContent = labelFor(item);
      }
      decorateLink(link);
    });

    return footer;
  };

  const selectGame = (menu, button) => {
    const game = button?.dataset.projectGameButton;
    const modsPanel = menu.querySelector(".project-menu-mods");
    if (!game || !modsPanel) return;

    const buttons = [...menu.querySelectorAll("[data-project-game-button]")];
    const panels = [...menu.querySelectorAll("[data-project-game-panel]")];
    menu.open = true;
    modsPanel.hidden = false;
    modsPanel.style.display = "block";
    buttons.forEach((entry) => entry.setAttribute("aria-selected", String(entry === button)));
    panels.forEach((panel) => {
      const selected = panel.dataset.projectGamePanel === game;
      panel.hidden = !selected;
      panel.style.display = selected ? "block" : "none";
    });
    requestAnimationFrame(() => {
      modsPanel.hidden = false;
      modsPanel.style.display = "block";
      panels.forEach((panel) => {
        const selected = panel.dataset.projectGamePanel === game;
        panel.hidden = !selected;
        panel.style.display = selected ? "block" : "none";
      });
      window.dispatchEvent(new Event("resize"));
    });
  };

  const initProjectMenu = (menu) => {
    if (menu.dataset.finalProjectMenu === "ready") return;
    menu.dataset.finalProjectMenu = "ready";
    menu.addEventListener("click", (event) => {
      const button = event.target.closest?.("[data-project-game-button]");
      if (!button || !menu.contains(button)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      selectGame(menu, button);
    }, true);
  };

  const normalizeUpdateLink = (link, force = false) => {
    if (!(link instanceof HTMLAnchorElement) || (!force && link.dataset.finalUpdateAction === "done")) return;
    let url;
    try { url = new URL(link.href, location.href); } catch { return; }
    const host = url.hostname.toLowerCase();
    let label = link.textContent.trim() || "Read more";
    if (host === "github.com" || host.endsWith(".github.com")) label = "GitHub";
    else if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) label = "Nexus Mods";
    else if (url.origin === location.origin && url.pathname.startsWith("/K2040-Gaming-Mods/")) label = copy().viewProjects;

    link.querySelectorAll(":scope > .brand-icon, :scope > .external-platform-icon").forEach((icon) => icon.remove());
    const wrapped = link.querySelector(":scope > .external-platform-label");
    if (wrapped) wrapped.textContent = label;
    else link.textContent = label;
    link.removeAttribute("data-brand");
    link.classList.remove("brand-link", "brand-link--github", "brand-link--nexus");
    link.dataset.finalUpdateAction = "done";
    if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) ensureNexusIcon(link);
  };

  const normalizeUpdateLinks = (root = document, force = false) => {
    if (root instanceof HTMLAnchorElement && root.matches("a[data-update-link]")) normalizeUpdateLink(root, force);
    root.querySelectorAll?.("a[data-update-link]").forEach((link) => normalizeUpdateLink(link, force));
  };

  const refreshChrome = () => {
    ensureAbout();
    const footer = ensureFooter();
    if (footer) decorate(footer);
    document.querySelectorAll("[data-project-menu]").forEach(initProjectMenu);
    normalizeUpdateLinks(document, true);
  };

  const init = () => {
    refreshChrome();
    decorate();

    new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        decorate(node);
        normalizeUpdateLinks(node);
      }));
    }).observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => requestAnimationFrame(refreshChrome));
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
