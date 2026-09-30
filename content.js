(() => {
  "use strict";

  const cardDescriptions = {
    "dirde-ue-linux": {
      de: "Nativer Linux-Port mit konfigurierbaren Gameplay-Optionen und sicherer Wiederherstellung.",
      "pt-PT": "Port nativo para Linux com opções de jogo configuráveis e reposição segura.",
      es: "Port nativo para Linux con opciones de juego configurables y restauración segura.",
      fr: "Portage Linux natif avec des options de jeu configurables et une restauration sûre."
    },
    "quick-attach-menu": {
      de: "Wechsle kompatible Waffenaufsätze über ein schnelles Menü direkt im Spiel.",
      "pt-PT": "Troque acessórios de armas compatíveis através de um menu rápido dentro do jogo.",
      es: "Cambia accesorios de armas compatibles desde un menú rápido dentro del juego.",
      fr: "Changez les accessoires d’armes compatibles depuis un menu rapide en jeu."
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
    },
    "wow-wotlk-addons": {
      de: "Zentrale Seite für K2040-Addons für Wrath of the Lich King 3.3.5a.",
      "pt-PT": "Página central dos addons K2040 para Wrath of the Lich King 3.3.5a.",
      es: "Página central de los addons K2040 para Wrath of the Lich King 3.3.5a.",
      fr: "Page centrale des addons K2040 pour Wrath of the Lich King 3.3.5a."
    },
    "gm-genie": {
      de: "Game-Master-Werkzeug mit GM-Steuerung, Tickets, Spielerwerkzeugen und Builder-Hilfen.",
      "pt-PT": "Utilitário de Game Master com controlos de GM, tickets, ferramentas de jogador e Builder.",
      es: "Utilidad de Game Master con controles de GM, tickets, herramientas de jugador y Builder.",
      fr: "Utilitaire Game Master avec commandes GM, tickets, outils joueur et Builder."
    },
    "loot-and-salvage": {
      de: "Verwalte Plunder, geschützte Gegenstände, Händlerverkäufe und Berufsmaterialien mit weniger Taschenarbeit.",
      "pt-PT": "Gira lixo, itens protegidos, vendas a comerciantes e materiais de profissão com menos trabalho nos sacos.",
      es: "Gestiona objetos basura, objetos protegidos, ventas a mercaderes y materiales de profesión con menos limpieza de bolsas.",
      fr: "Gérez les objets inutiles ou protégés, les ventes aux marchands et les composants de métier avec moins de rangement."
    }
  };

  const githubReleaseDestination = (project) => {
    if (project.github) return project.github;
    if (project.githubRepo) return `${project.githubRepo.replace(/\/$/, "")}/releases`;
    return project.variants?.[0]?.github || null;
  };

  const languages = ["en", "de", "pt-PT", "es", "fr"];
  const allProjects = Object.entries(window.K2040_PROJECTS || {}).map(([id, project]) => ({
    id,
    gameId: project.gameId,
    game: project.game,
    href: project.href,
    available: project.available === true,
    featured: project.featured === true,
    showOnLanding: project.showOnLanding !== false,
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

  const projectById = new Map(allProjects.map((project) => [project.id, project]));
  window.K2040_BUILD_PROJECT_CONTENT = (ids = []) => ids
    .map((id) => projectById.get(id))
    .filter(Boolean);

  const projects = allProjects.filter((project) => project.showOnLanding);
  window.K2040_CONTENT = { projects, updates: [] };
})();
