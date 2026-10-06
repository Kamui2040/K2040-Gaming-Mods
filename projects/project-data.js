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

  "quick-attach-menu": {
    gameId: "fallout-4",
    game: "Fallout 4",
    title: "K2040's Quick Attach Menu 0.5.198",
    cardTitle: "K2040's Quick Attach Menu",
    cardDescription: "Change compatible weapon attachments from a fast in-game menu.",
    href: "projects/project.html?project=quick-attach-menu",
    available: true,
    featured: true,
    cardImage: "assets/quick-attach-menu-card.webp?v=20260930fo4card1",
    cardMeta: ["Windows", "F4SE", "Released"],
    description: "Change compatible weapon attachments from a fast in-game menu.",
    overview: "A Fallout 4 attachment menu for runtimes 1.10.163 and 1.11.240. Version 0.5.198 improves Tactical Reload compatibility and adds a per-weapon Force Unsafe Swaps option that stays off by default. It requires the matching F4SE release and compatible PrismaUI_F4; ECO and Mod Configuration Menu are optional.",
    image: "../assets/quick-attach-menu-card.webp?v=20260930fo4card1",
    heroImage: "../assets/quick-attach-menu-hero.webp?v=20260930fo4shared1",
    wideHero: true,
    nexus: "https://www.nexusmods.com/fallout4/mods/109575",
    githubRepo: "https://github.com/Kamui2040/K2040-Quick-Attach-Menu",
    features: [
      "Change compatible weapon attachments from an in-game quick menu instead of returning to a workbench.",
      "Choose Cascade, Radial Wheel, Compact Hybrid, or Horizontal Bar presentations.",
      "Use ECO-authored weapon menus when available or generate compatible menus at runtime; ECO is optional.",
      "Configure each weapon's visibility, order, labels, menu source, and bracketed-text handling through the Builder.",
      "Customize keybindings, scale, position, opacity, themes, colors, hints, close-after-apply behavior, gameplay slowdown, and diagnostic logging.",
      "Export and import distributable per-weapon menu profiles.",
      "Enable Force Unsafe Swaps for individual weapons when needed; normal safety checks remain on by default.",
      "Use live attachment validation, inventory verification, provider/child ordering, and rollback for supported changes."
    ],
    changelog: [
      "0.5.198 — Fixed false “Attachment unable to swap safely” errors with Tactical Reload, improved internal/provider OMOD dependency handling, and added a per-weapon Force Unsafe Swaps option. Safe swapping remains enabled by default.",
      "0.5.197 — Added logging and menu-slowdown controls, kept hidden Cascade entries filtered after attachment changes, and fixed restricted cursor movement in all three views.",
      "0.5.192 — Fixed Fallout 4 1.11.x crashes, MODCOL weapons, valid no-MISC attachments, Mouse 4/5 menu toggles and switching, and dialogue-related input/focus problems.",
      "0.5.181 — Fixed generated attachment compatibility, false unsafe replacement errors, Prisma Dock registration, and filtering of internal helper OMODs.",
      "0.5.180 — First public release with four menu presentations, per-weapon Builder controls, configurable settings, export/import profiles, and validated attachment changes."
    ]
  },

  "eco-quick-menu-additions": {
    gameId: "fallout-4",
    game: "Fallout 4",
    title: "ECO Quick Menu Additions",
    cardDescription: "AiO installer and individual Quick Menu compatibility patches.",
    href: "projects/project.html?project=eco-quick-menu-additions",
    available: true,
    featured: false,
    cardImage: "assets/quick-attach-menu-card.webp?v=20260930fo4card1",
    cardMeta: ["AiO", "Single patches", "Released"],
    description: "Choose the all-in-one installer or individual optional compatibility patches.",
    overview: "A single home for K2040’s released ECO Quick Menu compatibility work. Choose the AiO installer for the complete collection, or install only the individual patches you need.",
    heroImage: "../assets/quick-attach-menu-hero.webp?v=20260930fo4shared1",
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
    cardImage: "assets/quick-attach-menu-card.webp?v=20260930fo4card1",
    cardMeta: ["Windows", "Tools", "Released"],
    description: "Export Fallout 4 plugin data from xEdit to structured JSON.",
    overview: "A generic xEdit/FO4Edit script that exports selected records or complete plugin trees to readable JSON.",
    image: "../assets/quick-attach-menu-card.webp?v=20260930fo4card1",
    heroImage: "../assets/quick-attach-menu-hero.webp?v=20260930fo4shared1",
    wideHero: true,
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
  },

  "wow-wotlk-addons": {
    gameId: "world-of-warcraft-wotlk",
    game: "World of Warcraft: Wrath of the Lich King",
    title: "WoW WotLK Addons",
    cardLabel: "World of Warcraft",
    cardTitle: "WoW WotLK Addons",
    cardDescription: "A consolidated home for K2040 addons for Wrath of the Lich King 3.3.5a.",
    href: "/K2040-Gaming-Mods/projects/wow-wotlk.html",
    available: true,
    featured: false,
    cardImage: "/K2040-Gaming-Mods/assets/wow-wotlk-addons-card.svg?v=20260924card2",
    cardMeta: ["3.3.5a", "AzerothCore", "Addons"],
    description: "K2040 addons for World of Warcraft: Wrath of the Lich King 3.3.5a."
  },

  "loot-and-salvage": {
    gameId: "world-of-warcraft-wotlk",
    game: "World of Warcraft: Wrath of the Lich King",
    title: "Loot & Salvage 0.2.0",
    cardLabel: "World of Warcraft",
    cardTitle: "Loot & Salvage",
    cardDescription: "Manage junk, protected items, vendor sales, and profession materials with less bag cleanup.",
    href: "/K2040-Gaming-Mods/projects/project.html?project=loot-and-salvage",
    available: true,
    featured: false,
    showOnLanding: false,
    cardImage: "/K2040-Gaming-Mods/assets/wow-wotlk-addons-card.svg?v=20260924card2",
    cardMeta: ["3.3.5a", "Gameplay", "Released"],
    description: "Quality-of-life addon for Wrath of the Lich King 3.3.5a that helps manage unwanted items and profession materials.",
    overview: "Loot & Salvage reduces repetitive bag cleanup while keeping you in control. It can sell or carefully destroy unwanted items, protect items you want to keep, and help process eligible profession materials.",
    heroImage: "../assets/wow-wotlk-hero.webp",
    wideHero: true,
    nexus: "https://www.nexusmods.com/worldofwarcraft/mods/906",
    githubRepo: "https://github.com/Kamui2040/K2040-WotLK-Addons",
    github: "https://github.com/Kamui2040/K2040-WotLK-Addons/releases/tag/v0.2.0",
    features: [
      "Unlimited Always Keep and Always Crap lists.",
      "Rules for quality, vendor value, food, water, potions, cloth, scrolls, and trade goods.",
      "Optional merchant selling and carefully limited automatic destruction.",
      "Quick bag-item classification and a compact two-pane list window.",
      "User-initiated Disenchant, Milling, and Prospecting processing.",
      "Optional AdiBags Junk classification.",
      "Built-in Automatic, Vanilla, Modern Dark, Blue, and ElvUI presentation choices; AddOnSkins is needed only for the ElvUI presentation.",
      "Minimap button support for common button collectors."
    ],
    changelog: [
      "0.2.0 — Added built-in selectable presentation modes and retired the separate bridge. This GitHub pre-release remains standalone; AddOnSkins is needed only for the ElvUI presentation.",
      "0.1.0 — First public preview release on Nexus Mods and GitHub."
    ]
  },

  "gm-genie": {
    gameId: "world-of-warcraft-wotlk",
    game: "World of Warcraft: Wrath of the Lich King",
    title: "GM Genie 1.1",
    cardLabel: "World of Warcraft",
    cardTitle: "GM Genie",
    cardDescription: "Game Master utility with GM controls, tickets, player tools, and builder helpers.",
    href: "/K2040-Gaming-Mods/projects/project.html?project=gm-genie",
    available: true,
    featured: false,
    showOnLanding: false,
    cardImage: "/K2040-Gaming-Mods/assets/wow-wotlk-addons-card.svg?v=20260924card2",
    cardMeta: ["3.3.5a", "AzerothCore", "Released"],
    description: "Game Master utility addon for Wrath of the Lich King 3.3.5a, focused on AzerothCore servers.",
    overview: "GM Genie puts commonly used Game Master functions into an in-game interface, including GM controls, ticket handling, player inspection, builder tools, and compatibility improvements for ElvUI-based setups.",
    heroImage: "../assets/wow-wotlk-hero.webp",
    wideHero: true,
    nexus: "https://www.nexusmods.com/worldofwarcraft/mods/905",
    features: [
      "Game Master HUD with frequently used controls.",
      "Ticket management tools.",
      "Player lookup and Spy tools for selected players.",
      "Builder tools for moving, adding, and deleting objects and NPCs.",
      "Visibility, whisper, flight, and speed controls.",
      "Macro and advanced command menus.",
      "Persistent addon settings with Lua 5.1 and WoW 3.3.5a compatibility.",
      "Built-in skin selector with an optional ElvUI / AddOnSkins presentation."
    ],
    changelog: [
      "1.1 — Added the built-in skin selector and optional ElvUI / AddOnSkins presentation.",
      "1.0 — First public release on Nexus Mods."
    ],
    screenshots: [
      {
        src: "../assets/gm-genie-main.webp",
        alt: "GM Genie main HUD with Game Master controls, ticket access, Spy, and Builder buttons",
        caption: "Main HUD"
      },
      {
        src: "../assets/gm-genie-main-elvui.webp",
        alt: "GM Genie main HUD styled alongside an ElvUI and AddOnSkins setup",
        caption: "Main HUD with ElvUI / AddOnSkins"
      },
      {
        src: "../assets/gm-genie-tickets.webp?v=20260926fix1",
        alt: "GM Genie ticket browser with ticket list columns and status summary",
        caption: "Ticket browser"
      },
      {
        src: "../assets/gm-genie-tickets-elvui.webp",
        alt: "GM Genie ticket browser displayed with the ElvUI-compatible styling",
        caption: "Ticket browser with ElvUI / AddOnSkins"
      },
      {
        src: "../assets/gm-genie-spy.webp",
        alt: "GM Genie Spy Player dialog",
        caption: "Spy Player"
      },
      {
        src: "../assets/gm-genie-builder.webp",
        alt: "GM Genie Builder panel with movement, object, NPC, and macro controls",
        caption: "Builder tools"
      }
    ]
  }
};
