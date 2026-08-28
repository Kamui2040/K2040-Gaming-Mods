(() => {
  "use strict";

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

  const githubReleaseDestination = (project) => {
    if (project.github) return project.github;
    if (project.githubRepo) return `${project.githubRepo.replace(/\/$/, "")}/releases`;
    return project.variants?.[0]?.github || null;
  };

  const languages = ["en", "de", "pt-PT", "es", "fr"];
  const projects = Object.entries(window.K2040_PROJECTS || {}).map(([id, project]) => ({
    id,
    gameId: project.gameId,
    game: project.game,
    href: project.href,
    available: project.available === true,
    featured: project.featured === true,
    image: project.cardImage,
    cardMeta: Array.isArray(project.cardMeta) ? [...project.cardMeta] : [],
    cardGithub: githubReleaseDestination(project),
    cardNexus: project.nexus || project.variants?.[0]?.nexus || null,
    strings: Object.fromEntries(languages.map((language) => [
      language,
      {
        label: project.cardLabel || project.game || "",
        title: project.cardTitle || project.title || "",
        description: language === "en"
          ? project.cardDescription || project.description || ""
          : cardDescriptions[id]?.[language] || project.cardDescription || project.description || ""
      }
    ]))
  }));

  window.K2040_CONTENT = { projects, updates: [] };
})();
