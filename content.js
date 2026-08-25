(() => {
  "use strict";

  const loaderScript = document.currentScript;
  if (loaderScript?.src && !document.querySelector('link[data-project-card-actions]')) {
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = new URL("project-card-actions.css?v=20260825a", loaderScript.src).href;
    styles.dataset.projectCardActions = "true";
    document.head.append(styles);
  }

  const cardDescriptions = {
    "dirde-ue-linux": {
      de: "Nativer Linux-Port mit konfigurierbaren Gameplay-Optionen und sicherer Wiederherstellung.",
      "pt-PT": "Port nativo para Linux com opções de jogo configuráveis e reposição segura.",
      es: "Port nativo para Linux con opciones de juego configurables y restauración segura.",
      fr: "Portage Linux natif avec des options de jeu configurables et une restauration sûre."
    },
    "eco-quick-menu-additions": {
      de: "AiO-Installer und einzelne Quick-Menu-Kompatibilitätspatches.",
      "pt-PT": "Instalador AiO e patches individuais de compatibilidade para o Quick Menu.",
      es: "Instalador AiO y parches individuales de compatibilidad para el Quick Menu.",
      fr: "Installateur AiO et patchs individuels de compatibilité pour le Quick Menu."
    },
    "xedit-json-exporter": {
      de: "Exportiert xEdit-/FO4Edit-Datensätze und Plugins als lesbares JSON.",
      "pt-PT": "Exporta registos e plugins do xEdit/FO4Edit para JSON legível.",
      es: "Exporta registros y plugins de xEdit/FO4Edit a JSON legible.",
      fr: "Exporte les enregistrements et plugins xEdit/FO4Edit en JSON lisible."
    }
  };

  const languages = ["en", "de", "pt-PT", "es", "fr"];
  const projects = Object.entries(window.K2040_PROJECTS || {}).map(([id, project]) => {
    const strings = Object.fromEntries(languages.map((language) => [
      language,
      {
        label: project.cardLabel || project.game || "",
        title: project.cardTitle || project.title || "",
        description: language === "en"
          ? project.cardDescription || project.description || ""
          : cardDescriptions[id]?.[language] || project.cardDescription || project.description || ""
      }
    ]));

    return {
      id,
      gameId: project.gameId,
      game: project.game,
      href: project.href,
      available: project.available === true,
      featured: project.featured === true,
      image: project.cardImage,
      cardMeta: Array.isArray(project.cardMeta) ? [...project.cardMeta] : [],
      cardGithub: project.github || project.variants?.[0]?.github || project.githubRepo || null,
      cardNexus: project.nexus || project.variants?.[0]?.nexus || null,
      strings
    };
  });

  window.K2040_CONTENT = { projects, updates: [] };

  const projectForCard = (card) => {
    const href = card.href;
    return projects.find((project) => {
      try { return new URL(project.href, location.href).href === href; }
      catch { return false; }
    }) || null;
  };

  const createAction = (label, href, brand, title, external = false) => {
    const link = document.createElement("a");
    link.className = "project-action";
    link.href = href;
    link.textContent = label;
    if (brand) link.dataset.brand = brand;
    if (external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.setAttribute("aria-label", `${label}: ${title}`);
    return link;
  };

  const decorateCards = () => {
    const grid = document.querySelector("[data-project-grid]");
    if (!grid) return;
    [...grid.querySelectorAll(":scope > a.project-card")].forEach((card) => {
      const project = projectForCard(card);
      if (!project) return;
      const article = document.createElement("article");
      for (const attribute of card.attributes) {
        if (attribute.name !== "href" && attribute.name !== "aria-label") article.setAttribute(attribute.name, attribute.value);
      }
      article.dataset.cardActionsDone = "true";
      article.append(...card.childNodes);

      const footer = article.querySelector(".card-footer");
      if (footer) {
        const openLabel = footer.querySelector("[data-project-action]")?.textContent?.trim() || "Open project";
        const actions = document.createElement("div");
        actions.className = "project-card-actions";
        if (project.cardGithub) actions.append(createAction("GitHub", project.cardGithub, "github", project.strings.en.title));
        if (project.cardNexus) actions.append(createAction("Nexus", project.cardNexus, "nexus", project.strings.en.title, true));
        if (project.href) actions.append(createAction(openLabel, project.href, null, project.strings.en.title));
        footer.replaceChildren(actions);
      }

      card.replaceWith(article);
    });
  };

  let scheduled = false;
  const scheduleDecorate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateCards();
    });
  };

  const initCardActions = () => {
    const grid = document.querySelector("[data-project-grid]");
    if (!grid) return;
    scheduleDecorate();
    new MutationObserver(scheduleDecorate).observe(grid, { childList: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initCardActions, { once: true });
  else initCardActions();
})();
