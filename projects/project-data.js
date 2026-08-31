window.K2040_PROJECTS = {
  "dirde-ue-linux": {
    gameId: "dead-island",
    game: "Dead Island: Riptide DE",
    title: "DIRDE UE Linux 0.1.0",
    cardLabel: "Dead Island: Riptide",
    cardTitle: "DIRDE UE Linux",
    cardDescription: "Native Linux port with configurable gameplay options and safe restore support.",
    href: "projects/project.html?project=dirde-ue-linux",
    available: true,
    featured: false,
    cardImage: "assets/dirde-ue-linux-avatar.png",
    cardMeta: ["Linux", "Gameplay", "Released"],
    description: "Native Linux port of the Ultimate Edition Mod Menu.",
    image: "../assets/dirde-ue-linux-card.png",
    heroImage: "../assets/dirde-ue-linux-header.png",
    overview: "A native Linux port of FireEyeEian’s original mod menu, with released gameplay options, safe Data0 patching, and restore support.",
    nexus: "https://www.nexusmods.com/deadislandriptide/mods/31",
    originalNexus: "https://www.nexusmods.com/deadislandriptide/mods/3",
    github: "https://github.com/Kamui2040/DeadIsland-Riptide-Ultimate-edition-mod-menu/releases/tag/v0.1.0-dev0",
    changelog: [
      "0.1.0.dev0 — First public pre-release of the native Linux port of FireEyeEian’s Dead Island Riptide Ultimate Edition mod menu."
    ],
    features: [
      "Movement: reduced sprint and jump stamina, running with weapons, and better movement.",
      "Combat: bullet penetration and instant door breaking.",
      "Loot: improved loot, more ammo, deeper pockets, and increased durability.",
      "Comfort: 90% less sunflare, removed reverb and echo, and skipped intro videos.",
      "Vehicles: vehicle NoClip.",
      "Camera and firearms: 72/82 FOV options, improved weapon upgrades, and aiming adjustments.",
      "Zombies: One Hit, Hard, and Headshot Only difficulties, plus five zombie sizes.",
      "Forced spawns: Butchers, Rams, Bloaters, Thugs, Suiciders, and armed or melee bandits.",
      "Weather and time: night, rain, storms, and darker-night variants.",
      "Safe native Linux Data0 patching with backup and exact restore support, plus Flatpak and AppImage packages for x86-64 Linux."
    ],
    screenshots: [
      {
        src: "../assets/dirde-ue-linux-main-window.png",
        alt: "DIRDE UE Linux main application window showing the gameplay configuration options",
        caption: "Main application window"
      },
      {
        src: "../assets/dirde-ue-linux-about.png",
        alt: "DIRDE UE Linux About dialog with project and attribution details",
        caption: "About and attribution"
      }
    ]
  },

  "eco-quick-menu-additions": {
    gameId: "fallout-4",
    game: "Fallout 4",
    title: "ECO Quick Menu Additions",
    cardDescription: "AiO installer and individual Quick Menu compatibility patches.",
    href: "projects/project.html?project=eco-quick-menu-additions",
    available: true,
    featured: true,
    cardImage: "assets/eco-quick-menu-additions-avatar.png",
    cardMeta: ["AiO", "Single patches", "Released"],
    description: "Choose the all-in-one installer or individual optional compatibility patches.",
    overview: "A single home for K2040’s released ECO Quick Menu compatibility work. Choose the AiO installer for the complete collection, or install only the individual patches you need.",
    heroImage: "../assets/eco-quick-menu-additions-header.png",
    wideHero: true,
    githubRepo: "https://github.com/Kamui2040/K2040-ECO-QM",
    features: [
      "Adds quick-menu compatibility support for supported Fallout 4 weapon mods.",
      "All released patches are ESL-flagged ESP files.",
      "Uses streamlined edits and reorganized menus for a more consistent workflow.",
      "Includes conditions for attachment-dependent options to reduce invalid menu choices.",
      "Shows a notification after the quick-menu injection completes successfully."
    ],
    variants: [
      {
        id: "aio",
        title: "AiO installer",
        description: "Install the complete released compatibility-patch collection through one FOMOD installer.",
        nexus: "https://www.nexusmods.com/fallout4/mods/105461",
        github: "https://github.com/Kamui2040/K2040-ECO-QM/releases/tag/aio-v1.0.1.11",
        changelog: [
          "1.0.1.11 — Added AER15 support and its MEC-R7 variant; split DKS-501 and AER15 variants into separate groups.",
          "1.0.0.9 — Added a patch for the H&K 45C Mk24.",
          "1.0.0.8 — Added patches for AQUILA and the X12 Plasmacaster.",
          "1.0.0.6 — Added patches for DKS-501 Redux and ACR-W17.",
          "1.0.0.4 — Initial release with patches for the HK USP, DKS-501, .357 Cattleman Revolver, and MW19 FAL."
        ]
      },
      {
        id: "single-patches",
        title: "Single patches",
        description: "Install only the individual optional patches for the weapon mods you use.",
        nexus: "https://www.nexusmods.com/fallout4/mods/105464",
        github: "https://github.com/Kamui2040/K2040-ECO-QM/releases/tag/single-patches-v1.0",
        changelog: [
          "31 May 2026 — AER15 compatibility patch uploaded.",
          "29 May 2026 — MEC-R7 compatibility patch uploaded.",
          "29 May 2026 — HK 45C Mk24 compatibility patch uploaded.",
          "29 May 2026 — X12 Plasmacaster compatibility patch uploaded.",
          "29 May 2026 — Aquila compatibility patch uploaded.",
          "29 May 2026 — DKS-501 Redux compatibility patch uploaded.",
          "28 May 2026 — DKS-501 Unofficial Update Vanilla, DKS-501, .357 Cattleman Revolver, MW19 FAL, and HK USP compatibility patches uploaded."
        ]
      }
    ]
  },

  "xedit-json-exporter": {
    gameId: "fallout-4",
    game: "Fallout 4",
    title: "xEdit JSON Exporter 1.6",
    cardDescription: "Export xEdit/FO4Edit records and plugins to readable JSON.",
    href: "projects/project.html?project=xedit-json-exporter",
    available: true,
    featured: false,
    cardImage: "assets/fallout-4-xedit-json-exporter-avatar.png",
    cardMeta: ["Windows", "Tools", "Released"],
    description: "Export Fallout 4 plugin data from xEdit to structured JSON.",
    overview: "A generic xEdit/FO4Edit script that exports selected records or complete plugin trees to readable JSON.",
    image: "../assets/fallout-4-xedit-json-exporter-card.png",
    heroImage: "../assets/fallout-4-xedit-json-exporter-header.png",
    nexus: "https://www.nexusmods.com/fallout4/mods/105775",
    githubRepo: "https://github.com/Kamui2040/K2040_xEdit_JSON_Exporter",
    github: "https://github.com/Kamui2040/K2040_xEdit_JSON_Exporter/releases/tag/v1.6",
    features: [
      "Exports a complete plugin or selected records from xEdit to structured JSON.",
      "Read-only processing for ESP, ESL, and ESM files.",
      "Preserves the hierarchy shown in xEdit, including records, fields, subrecords, arrays, and nested elements.",
      "Creates filenames with exported record signatures when exporting selected records.",
      "Adds a summary of record types and counts for use by people and external tooling.",
      "Automatically names the output from the plugin and selected records when no filename is supplied."
    ],
    changelog: [
      "1.6 — Fixed data loss when xEdit contains multiple children with the same name. Repeated values are now preserved in order instead of later entries replacing earlier ones, fixing the reported MGEF Actor Value and repeated keyword loss.",
      "1.5 — Fixed full-plugin automatic naming so ESP, ESL, and ESM exports do not append every exported signature.",
      "1.4 — First public version."
    ]
  }
};
