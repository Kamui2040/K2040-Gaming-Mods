window.K2040_PROJECT_TRANSLATIONS = {
  de: {
    "dirde-ue-linux": {
      description: "Native Linux Port des Ultimate Edition Mod Menu.",
      overview: "Ein nativer Linux Port des ursprünglichen Mod Menu von FireEyeEian – mit veröffentlichten Gameplay-Optionen, sicherem Data0-Patching und Wiederherstellung.",
      features: [
        "Bewegung: weniger Ausdauerverbrauch beim Sprinten und Springen, Laufen mit Waffen und verbesserte Bewegung.",
        "Kampf: Geschosse durchdringen Ziele und Türen lassen sich sofort aufbrechen.",
        "Loot: bessere Beute, mehr Munition, größeres Inventar und höhere Haltbarkeit.",
        "Komfort: 90 % weniger Sonnenblendung, kein Hall oder Echo und übersprungene Intro-Videos.",
        "Fahrzeuge: NoClip für Fahrzeuge.",
        "Kamera und Schusswaffen: FOV-Optionen mit 72/82, bessere Waffen-Upgrades und Anpassungen beim Zielen.",
        "Zombies: One Hit, Hard und Headshot Only sowie fünf Zombiegrößen.",
        "Erzwungene Spawns: Butchers, Rams, Bloaters, Thugs, Suiciders sowie bewaffnete Banditen und Nahkämpfer.",
        "Wetter und Zeit: Nacht, Regen, Stürme und besonders dunkle Nächte.",
        "Sicheres natives Data0-Patching unter Linux mit Backup und exakter Wiederherstellung sowie Flatpak- und AppImage-Paketen für x86-64 Linux."
      ],
      changelog: [
        "0.1.0.dev0 — Erste öffentliche Vorabversion des nativen Linux Ports von FireEyeEians Dead Island Riptide Ultimate Edition Mod Menu."
      ],
      screenshots: [
        { caption: "Hauptfenster", alt: "Hauptfenster von DIRDE UE Linux mit den Gameplay-Einstellungen" },
        { caption: "Info und Mitwirkende", alt: "Info-Dialog von DIRDE UE Linux mit Projekt- und Urheberangaben" }
      ]
    },
    "eco-quick-menu-additions": {
      description: "Wähle den AiO-Installer oder einzelne optionale Kompatibilitätspatches.",
      overview: "Die zentrale Seite für K2040s veröffentlichte ECO Quick Menu Patches. Nutze den AiO-Installer für die komplette Sammlung oder installiere nur die Einzelpatches, die du brauchst.",
      features: [
        "Erweitert unterstützte Fallout 4 Waffenmods um Quick-Menu-Kompatibilität.",
        "Alle veröffentlichten Patches sind ESL-gekennzeichnete ESP-Dateien.",
        "Schlankere Änderungen und neu geordnete Menüs sorgen für einen einheitlicheren Ablauf.",
        "Bedingungen für aufsatzabhängige Optionen vermeiden ungültige Menüeinträge.",
        "Nach erfolgreicher Quick-Menu-Einbindung erscheint eine Bestätigung."
      ],
      variants: [
        {
          title: "AiO-Installer",
          description: "Installiere die komplette veröffentlichte Patch-Sammlung mit einem einzigen FOMOD-Installer.",
          changelog: [
            "1.0.1.11 — Unterstützung für AER15 und die MEC-R7-Variante hinzugefügt; DKS-501- und AER15-Varianten in getrennte Gruppen aufgeteilt.",
            "1.0.0.9 — Patch für H&K 45C Mk24 hinzugefügt.",
            "1.0.0.8 — Patches für AQUILA und X12 Plasmacaster hinzugefügt.",
            "1.0.0.6 — Patches für DKS-501 Redux und ACR-W17 hinzugefügt.",
            "1.0.0.4 — Erster Release mit Patches für HK USP, DKS-501, .357 Cattleman Revolver und MW19 FAL."
          ]
        },
        {
          title: "Einzelpatches",
          description: "Installiere nur die optionalen Patches für die Waffenmods, die du verwendest.",
          changelog: [
            "31. Mai 2026 — Kompatibilitätspatch für AER15 hochgeladen.",
            "29. Mai 2026 — Kompatibilitätspatch für MEC-R7 hochgeladen.",
            "29. Mai 2026 — Kompatibilitätspatch für HK 45C Mk24 hochgeladen.",
            "29. Mai 2026 — Kompatibilitätspatch für X12 Plasmacaster hochgeladen.",
            "29. Mai 2026 — Kompatibilitätspatch für Aquila hochgeladen.",
            "29. Mai 2026 — Kompatibilitätspatch für DKS-501 Redux hochgeladen.",
            "28. Mai 2026 — Kompatibilitätspatches für DKS-501 Unofficial Update Vanilla, DKS-501, .357 Cattleman Revolver, MW19 FAL und HK USP hochgeladen."
          ]
        }
      ]
    },
    "quick-attach-menu": {
      description: "Wechsle kompatible Waffenaufsätze über ein schnelles Menü direkt im Spiel.",
      overview: "Ein Aufsatzmenü für Fallout 4 1.10.163 und 1.11.240. Version 0.5.199 verbessert die Kompatibilität mit Tactical Reload und SREP, einschließlich der sicheren Installation eines Mündungsaufsatzes nach dem Wechsel zurück von einem M203-Lauf. Force Unsafe Swaps bleibt waffenbezogen und standardmäßig deaktiviert. Benötigt die passende F4SE-Version und eine kompatible PrismaUI_F4-Version; ECO und Mod Configuration Menu sind optional.",
      features: [
        "Wechsle kompatible Waffenaufsätze direkt im Spiel, ohne zur Werkbank zurückzugehen.",
        "Vier Darstellungen: Cascade, Radial Wheel, Compact Hybrid und Horizontal Bar.",
        "Nutzt vorhandene ECO-Waffenmenüs oder erzeugt kompatible Menüs zur Laufzeit; ECO ist optional.",
        "Konfiguriere Sichtbarkeit, Reihenfolge, Bezeichnungen, Menüquelle und Klammertext jeder Waffe im Builder.",
        "Passe Tastenbelegung, Größe, Position, Deckkraft, Designs, Farben, Hinweise, das Verhalten nach dem Anwenden, die Spielverlangsamung und Diagnoseprotokolle an.",
        "Exportiere und importiere verteilbare Menüprofile für einzelne Waffen.",
        "Aktiviere Force Unsafe Swaps bei Bedarf für einzelne Waffen; die normalen Sicherheitsprüfungen bleiben standardmäßig aktiv.",
        "Validiert Aufsatzänderungen live mit Inventarprüfung, Provider-/Child-Reihenfolge und Rollback für unterstützte Änderungen."
      ],
      changelog: [
        "0.5.199 — Die sichere Installation von Mündungs- und anderen Provider-Aufsätzen wurde behoben, nachdem ihre zuvor nicht verfügbare Aufsatzposition wiederhergestellt wurde, einschließlich des gemeldeten SREP-M203-Laufwechsels.",
        "0.5.198 — Falsche „Attachment unable to swap safely“-Fehler mit Tactical Reload behoben, die Abhängigkeitsverarbeitung interner/Provider-OMODs verbessert und eine waffenbezogene Force-Unsafe-Swaps-Option hinzugefügt. Sichere Wechsel bleiben standardmäßig aktiviert.",
        "0.5.197 — Schalter für Diagnoseprotokolle und Menüverlangsamung hinzugefügt, ausgeblendete Cascade-Einträge nach Aufsatzwechseln weiter gefiltert und die eingeschränkte Mausbewegung in allen drei Ansichten behoben.",
        "0.5.192 — Abstürze mit Fallout 4 1.11.x, MODCOL-Waffen, gültige Aufsätze ohne MISC-Eintrag, Mouse-4/5-Umschaltung und dialogbedingte Eingabe- und Fokusprobleme behoben.",
        "0.5.181 — Kompatibilitätsfilter für erzeugte Aufsatzmenüs korrigiert, falsche Ersetzungsblockaden behoben, Prisma-Dock-Registrierung repariert und interne Hilfs-OMODs ausgeblendet.",
        "0.5.180 — Erste öffentliche Version mit vier Menü-Darstellungen, Builder-Einstellungen pro Waffe, konfigurierbaren Optionen, Profil-Export/-Import und validierten Aufsatzänderungen."
      ]
    },
    "xedit-json-exporter": {
      description: "Exportiert Fallout 4 Plugin-Daten aus xEdit in strukturiertes JSON.",
      overview: "Ein allgemeines xEdit-/FO4Edit-Skript, das ausgewählte Records oder vollständige Plugin-Strukturen in gut lesbares JSON exportiert.",
      features: [
        "Exportiert ein vollständiges Plugin oder ausgewählte Records aus xEdit in strukturiertes JSON.",
        "Liest ESP-, ESL- und ESM-Dateien ohne sie zu verändern.",
        "Behält die in xEdit sichtbare Struktur mit Records, Feldern, Subrecords, Arrays und verschachtelten Elementen bei.",
        "Ergänzt Dateinamen beim Export ausgewählter Records um deren Signaturen.",
        "Erstellt eine Übersicht der Record-Typen und Mengen für Menschen und externe Tools.",
        "Erzeugt automatisch einen Dateinamen aus Plugin und Auswahl, wenn keiner angegeben wurde."
      ],
      changelog: [
        "1.6 — Datenverlust bei mehreren gleichnamigen untergeordneten xEdit-Einträgen behoben. Wiederholte Werte bleiben jetzt in ihrer Reihenfolge erhalten, statt durch spätere Einträge überschrieben zu werden; damit sind der gemeldete MGEF-Actor-Value-Fehler und der Verlust wiederholter Keywords behoben.",
        "1.5 — Automatische Benennung kompletter Plugins korrigiert, damit ESP-, ESL- und ESM-Exporte nicht mehr jede exportierte Signatur anhängen.",
        "1.4 — Erste öffentliche Version."
      ]
    },
    "loot-and-salvage": {
      description: "Komfort-Addon für Wrath of the Lich King 3.3.5a zur Verwaltung unerwünschter Gegenstände und Berufsmaterialien.",
      overview: "Loot & Salvage reduziert wiederkehrende Taschenarbeit, ohne dir die Kontrolle abzunehmen. Das Addon kann unerwünschte Gegenstände verkaufen oder vorsichtig automatisch zerstören, wichtige Gegenstände schützen und geeignete Berufsmaterialien verarbeiten.",
      features: [
        "Unbegrenzte Listen für Immer behalten und Immer Plunder.",
        "Regeln für Qualität, Händlerwert, Essen, Wasser, Tränke, Stoff, Schriftrollen und Handelswaren.",
        "Optionaler Händlerverkauf und vorsichtig begrenzte automatische Zerstörung.",
        "Schnelle Klassifizierung von Taschengegenständen und ein kompaktes Listenfenster mit zwei Bereichen.",
        "Vom Spieler gestartete Verarbeitung durch Entzaubern, Mahlen und Sondieren.",
        "Optionale AdiBags-Plunderkategorie.",
        "Integrierte Darstellungsoptionen Automatisch, Vanilla, Modern Dark, Blau und ElvUI; AddOnSkins wird nur für die ElvUI-Darstellung benötigt.",
        "Minikarten-Button mit Unterstützung gängiger Button-Sammler."
      ],
      changelog: [
        "0.2.0 — Integrierte auswählbare Darstellungen hinzugefügt und die separate Bridge eingestellt. Diese GitHub-Vorabversion bleibt eigenständig; AddOnSkins wird nur für die ElvUI-Darstellung benötigt.",
        "0.1.0 — Erste öffentliche Vorschauversion auf Nexus Mods und GitHub."
      ]
    },
    "gm-genie": {
      description: "Game-Master-Werkzeug für Wrath of the Lich King 3.3.5a mit Schwerpunkt auf AzerothCore-Servern.",
      overview: "GM Genie bündelt häufig genutzte Game-Master-Funktionen in einer Ingame-Oberfläche, darunter GM-Steuerung, Ticketverwaltung, Spielerprüfung, Builder-Werkzeuge und Verbesserungen für ElvUI-basierte Setups.",
      features: [
        "Game-Master-HUD mit häufig verwendeten Steuerungen.",
        "Werkzeuge zur Ticketverwaltung.",
        "Spielersuche und Spy-Werkzeuge für ausgewählte Spieler.",
        "Builder-Werkzeuge zum Bewegen, Hinzufügen und Löschen von Objekten und NPCs.",
        "Steuerungen für Sichtbarkeit, Flüstern, Flug und Geschwindigkeit.",
        "Makro- und erweiterte Befehlsmenüs.",
        "Persistente Addon-Einstellungen mit Lua 5.1- und WoW-3.3.5a-Kompatibilität.",
        "Integrierter Skin-Wähler mit einer optionalen ElvUI-/AddOnSkins-Darstellung."
      ],
      changelog: [
        "1.1 — Integrierten Skin-Wähler und eine optionale ElvUI-/AddOnSkins-Darstellung hinzugefügt.",
        "1.0 — Erste öffentliche Veröffentlichung auf Nexus Mods."
      ],
      screenshots: [
        { caption: "Haupt-HUD", alt: "GM Genie Haupt-HUD mit Game-Master-Steuerung, Ticketzugriff, Spy und Builder" },
        { caption: "Haupt-HUD mit ElvUI / AddOnSkins", alt: "GM Genie Haupt-HUD mit ElvUI- und AddOnSkins-Styling" },
        { caption: "Ticket-Browser", alt: "GM Genie Ticket-Browser mit Ticketspalten und Statusübersicht" },
        { caption: "Ticket-Browser mit ElvUI / AddOnSkins", alt: "GM Genie Ticket-Browser mit ElvUI-kompatiblem Styling" },
        { caption: "Spy Player", alt: "GM Genie Dialog Spy Player" },
        { caption: "Builder-Werkzeuge", alt: "GM Genie Builder mit Bewegungs-, Objekt-, NPC- und Makrosteuerung" }
      ]
    }
  },

  "pt-PT": {
    "dirde-ue-linux": {
      description: "Port nativo para Linux do Ultimate Edition Mod Menu.",
      overview: "Port nativo para Linux do mod menu original de FireEyeEian, com opções de gameplay publicadas, patching seguro de Data0 e reposição.",
      features: [
        "Movimento: menos stamina ao correr e saltar, corrida com armas e movimento melhorado.",
        "Combate: penetração de balas e abertura instantânea de portas.",
        "Loot: loot melhorado, mais munições, inventário maior e durabilidade aumentada.",
        "Conforto: menos 90% de brilho solar, sem reverberação ou eco e vídeos iniciais ignorados.",
        "Veículos: NoClip para veículos.",
        "Câmara e armas: opções FOV 72/82, upgrades de armas melhorados e ajustes de mira.",
        "Zombies: dificuldades One Hit, Hard e Headshot Only, além de cinco tamanhos.",
        "Spawns forçados: Butchers, Rams, Bloaters, Thugs, Suiciders e bandidos armados ou corpo a corpo.",
        "Clima e hora: noite, chuva, tempestades e variantes de noite mais escura.",
        "Patching nativo seguro de Data0 em Linux, com backup e reposição exata, mais pacotes Flatpak e AppImage para Linux x86-64."
      ],
      changelog: [
        "0.1.0.dev0 — Primeira pré-release pública do port nativo para Linux do Dead Island Riptide Ultimate Edition Mod Menu de FireEyeEian."
      ],
      screenshots: [
        { caption: "Janela principal", alt: "Janela principal do DIRDE UE Linux com as opções de gameplay" },
        { caption: "Informação e créditos", alt: "Janela Sobre do DIRDE UE Linux com dados do projeto e créditos" }
      ]
    },
    "eco-quick-menu-additions": {
      description: "Escolha o instalador AiO ou patches de compatibilidade opcionais individuais.",
      overview: "A página central para os patches ECO Quick Menu publicados por K2040. Use o instalador AiO para a coleção completa ou instale apenas os patches individuais de que precisa.",
      features: [
        "Adiciona suporte de quick menu a mods de armas compatíveis com Fallout 4.",
        "Todos os patches publicados são ficheiros ESP com flag ESL.",
        "Edições simplificadas e menus reorganizados tornam o processo mais consistente.",
        "As condições para opções dependentes de acessórios evitam escolhas inválidas.",
        "Apresenta uma confirmação quando a integração no quick menu termina."
      ],
      variants: [
        {
          title: "Instalador AiO",
          description: "Instale toda a coleção de patches publicada com um único instalador FOMOD.",
          changelog: [
            "1.0.1.11 — Adicionado suporte para AER15 e a variante MEC-R7; variantes DKS-501 e AER15 separadas em grupos próprios.",
            "1.0.0.9 — Adicionado um patch para H&K 45C Mk24.",
            "1.0.0.8 — Adicionados patches para AQUILA e X12 Plasmacaster.",
            "1.0.0.6 — Adicionados patches para DKS-501 Redux e ACR-W17.",
            "1.0.0.4 — Release inicial com patches para HK USP, DKS-501, .357 Cattleman Revolver e MW19 FAL."
          ]
        },
        {
          title: "Patches individuais",
          description: "Instale apenas os patches opcionais para os mods de armas que utiliza.",
          changelog: [
            "31 mai 2026 — Patch de compatibilidade para AER15 publicado.",
            "29 mai 2026 — Patch de compatibilidade para MEC-R7 publicado.",
            "29 mai 2026 — Patch de compatibilidade para HK 45C Mk24 publicado.",
            "29 mai 2026 — Patch de compatibilidade para X12 Plasmacaster publicado.",
            "29 mai 2026 — Patch de compatibilidade para Aquila publicado.",
            "29 mai 2026 — Patch de compatibilidade para DKS-501 Redux publicado.",
            "28 mai 2026 — Patches para DKS-501 Unofficial Update Vanilla, DKS-501, .357 Cattleman Revolver, MW19 FAL e HK USP publicados."
          ]
        }
      ]
    },
    "quick-attach-menu": {
      description: "Troque acessórios de armas compatíveis através de um menu rápido dentro do jogo.",
      overview: "Um menu de acessórios para Fallout 4 1.10.163 e 1.11.240. A versão 0.5.199 melhora a compatibilidade com o Tactical Reload e o SREP, incluindo a instalação segura de um acessório de boca do cano depois de voltar de um cano M203. A opção Force Unsafe Swaps continua a ser específica por arma e desativada por predefinição. Requer a versão correspondente do F4SE e uma versão compatível do PrismaUI_F4; ECO e Mod Configuration Menu são opcionais.",
      features: [
        "Troque acessórios de armas compatíveis dentro do jogo sem voltar à bancada.",
        "Quatro apresentações: Cascade, Radial Wheel, Compact Hybrid e Horizontal Bar.",
        "Utiliza menus de armas ECO quando disponíveis ou gera menus compatíveis em tempo de execução; ECO é opcional.",
        "Configure visibilidade, ordem, etiquetas, origem do menu e tratamento de texto entre parênteses retos para cada arma no Builder.",
        "Personalize teclas, escala, posição, opacidade, temas, cores, dicas, o comportamento após aplicar uma alteração, o abrandamento do jogo e o registo de diagnóstico.",
        "Exporte e importe perfis de menu distribuíveis por arma.",
        "Ative Force Unsafe Swaps para armas individuais quando necessário; as verificações de segurança normais permanecem ativas por predefinição.",
        "Valida alterações de acessórios em tempo real, com verificação de inventário, ordem provider/child e rollback para alterações suportadas."
      ],
      changelog: [
        "0.5.199 — Corrigida a instalação segura de acessórios de boca do cano e outros acessórios provider depois de o respetivo ponto de montagem voltar a ficar disponível, incluindo a mudança de cano SREP M203 comunicada.",
        "0.5.198 — Corrigidos falsos erros “Attachment unable to swap safely” com o Tactical Reload, melhorado o tratamento de dependências de OMODs internos/provider e adicionada a opção Force Unsafe Swaps por arma. As trocas seguras permanecem ativas por predefinição.",
        "0.5.197 — Adicionados controlos para o registo de diagnóstico e o abrandamento dos menus, mantidos os itens ocultos do Cascade após mudanças de acessórios e corrigido o movimento limitado do cursor nas três vistas.",
        "0.5.192 — Corrigidos crashes no Fallout 4 1.11.x, armas MODCOL, acessórios válidos sem item MISC, atalhos Mouse 4/5 para abrir, fechar e alternar menus, e problemas de input/foco durante diálogos.",
        "0.5.181 — Corrigidos os filtros de compatibilidade dos menus gerados, falsos bloqueios de substituição, o registo no Prisma Dock e a apresentação de OMODs internos.",
        "0.5.180 — Primeira versão pública com quatro apresentações, controlos Builder por arma, definições configuráveis, exportação/importação de perfis e alterações de acessórios validadas."
      ]
    },
    "xedit-json-exporter": {
      description: "Exporta dados de plugins de Fallout 4 do xEdit para JSON estruturado.",
      overview: "Script genérico para xEdit/FO4Edit que exporta registos selecionados ou estruturas completas de plugins para JSON legível.",
      features: [
        "Exporta um plugin completo ou registos selecionados do xEdit para JSON estruturado.",
        "Processa ficheiros ESP, ESL e ESM sem os alterar.",
        "Mantém a hierarquia apresentada no xEdit, incluindo registos, campos, subregistos, arrays e elementos aninhados.",
        "Inclui as assinaturas dos registos nos nomes dos ficheiros ao exportar uma seleção.",
        "Cria um resumo dos tipos e quantidades de registos para pessoas e ferramentas externas.",
        "Gera automaticamente o nome do ficheiro a partir do plugin e da seleção quando não é indicado um nome."
      ],
      changelog: [
        "1.6 — Corrigida a perda de dados quando o xEdit contém vários elementos filhos com o mesmo nome. Os valores repetidos são agora preservados pela ordem original, em vez de entradas posteriores substituírem as anteriores, corrigindo o problema reportado de Actor Value em MGEF e a perda de keywords repetidas.",
        "1.5 — Corrigida a criação automática de nomes para plugins completos; as exportações ESP, ESL e ESM deixam de acrescentar todas as assinaturas.",
        "1.4 — Primeira versão pública."
      ]
    },
    "loot-and-salvage": {
      description: "Addon de qualidade de vida para Wrath of the Lich King 3.3.5a que ajuda a gerir itens indesejados e materiais de profissão.",
      overview: "Loot & Salvage reduz a limpeza repetitiva dos sacos sem retirar o controlo ao jogador. Pode vender ou destruir cuidadosamente itens indesejados, proteger os itens que pretende guardar e ajudar a processar materiais de profissão elegíveis.",
      features: [
        "Listas ilimitadas de Manter sempre e Lixo sempre.",
        "Regras para qualidade, valor de venda, comida, água, poções, tecido, pergaminhos e mercadorias.",
        "Venda opcional a comerciantes e destruição automática cuidadosamente limitada.",
        "Classificação rápida de itens dos sacos e uma janela compacta de listas com dois painéis.",
        "Processamento iniciado pelo jogador para Desencantamento, Moagem e Prospeção.",
        "Classificação opcional de lixo no AdiBags.",
        "Opções de apresentação integradas Automático, Vanilla, Modern Dark, Azul e ElvUI; o AddOnSkins só é necessário para a apresentação ElvUI.",
        "Botão do minimapa compatível com coletores de botões comuns."
      ],
      changelog: [
        "0.2.0 — Adicionadas apresentações selecionáveis integradas e retirada a ponte separada. Esta pré-release do GitHub continua independente; o AddOnSkins só é necessário para a apresentação ElvUI.",
        "0.1.0 — Primeira versão pública de pré-visualização no Nexus Mods e GitHub."
      ]
    },
    "gm-genie": {
      description: "Addon utilitário de Game Master para Wrath of the Lich King 3.3.5a, focado em servidores AzerothCore.",
      overview: "O GM Genie reúne funções comuns de Game Master numa interface dentro do jogo, incluindo controlos GM, gestão de tickets, inspeção de jogadores, ferramentas Builder e melhorias de compatibilidade para configurações com ElvUI.",
      features: [
        "HUD de Game Master com controlos usados frequentemente.",
        "Ferramentas de gestão de tickets.",
        "Pesquisa de jogadores e ferramentas Spy para jogadores selecionados.",
        "Ferramentas Builder para mover, adicionar e eliminar objetos e NPCs.",
        "Controlos de visibilidade, whispers, voo e velocidade.",
        "Menus de macros e comandos avançados.",
        "Definições persistentes do addon com compatibilidade Lua 5.1 e WoW 3.3.5a.",
        "Seletor de temas integrado com uma apresentação opcional para ElvUI / AddOnSkins."
      ],
      changelog: [
        "1.1 — Adicionado o seletor de temas integrado e uma apresentação opcional para ElvUI / AddOnSkins.",
        "1.0 — Primeira versão pública no Nexus Mods."
      ],
      screenshots: [
        { caption: "HUD principal", alt: "HUD principal do GM Genie com controlos de Game Master, tickets, Spy e Builder" },
        { caption: "HUD principal com ElvUI / AddOnSkins", alt: "HUD principal do GM Genie com estilo ElvUI e AddOnSkins" },
        { caption: "Gestor de tickets", alt: "Gestor de tickets do GM Genie com colunas e resumo de estado" },
        { caption: "Gestor de tickets com ElvUI / AddOnSkins", alt: "Gestor de tickets do GM Genie com estilo compatível com ElvUI" },
        { caption: "Spy Player", alt: "Janela Spy Player do GM Genie" },
        { caption: "Ferramentas Builder", alt: "Painel Builder do GM Genie com controlos de movimento, objetos, NPCs e macros" }
      ]
    }
  },

  es: {
    "dirde-ue-linux": {
      description: "Port nativo para Linux del Ultimate Edition Mod Menu.",
      overview: "Port nativo para Linux del mod menu original de FireEyeEian, con opciones de gameplay publicadas, parcheado seguro de Data0 y restauración.",
      features: [
        "Movimiento: menos resistencia al correr y saltar, carrera con armas y movimiento mejorado.",
        "Combate: penetración de balas y rotura instantánea de puertas.",
        "Loot: mejor loot, más munición, inventario más amplio y mayor durabilidad.",
        "Comodidad: 90% menos resplandor solar, sin reverberación ni eco y vídeos de introducción omitidos.",
        "Vehículos: NoClip para vehículos.",
        "Cámara y armas: opciones FOV 72/82, mejores upgrades y ajustes de apuntado.",
        "Zombis: dificultades One Hit, Hard y Headshot Only, además de cinco tamaños.",
        "Spawns forzados: Butchers, Rams, Bloaters, Thugs, Suiciders y bandidos armados o cuerpo a cuerpo.",
        "Clima y hora: noche, lluvia, tormentas y variantes de noche más oscura.",
        "Parcheado nativo seguro de Data0 en Linux, con backup y restauración exacta, más paquetes Flatpak y AppImage para Linux x86-64."
      ],
      changelog: [
        "0.1.0.dev0 — Primera pre-release pública del port nativo para Linux del Dead Island Riptide Ultimate Edition Mod Menu de FireEyeEian."
      ],
      screenshots: [
        { caption: "Ventana principal", alt: "Ventana principal de DIRDE UE Linux con las opciones de gameplay" },
        { caption: "Información y créditos", alt: "Ventana Acerca de de DIRDE UE Linux con información del proyecto y créditos" }
      ]
    },
    "eco-quick-menu-additions": {
      description: "Elige el instalador AiO o parches de compatibilidad opcionales individuales.",
      overview: "La página central para los parches ECO Quick Menu publicados por K2040. Usa el instalador AiO para la colección completa o instala solo los parches individuales que necesites.",
      features: [
        "Añade compatibilidad con el quick menu a mods de armas compatibles con Fallout 4.",
        "Todos los parches publicados son archivos ESP con flag ESL.",
        "Los cambios simplificados y los menús reorganizados ofrecen un proceso más coherente.",
        "Las condiciones para opciones que dependen de accesorios evitan elecciones no válidas.",
        "Muestra una confirmación cuando termina la integración en el quick menu."
      ],
      variants: [
        {
          title: "Instalador AiO",
          description: "Instala toda la colección de parches publicada con un único instalador FOMOD.",
          changelog: [
            "1.0.1.11 — Añadido soporte para AER15 y su variante MEC-R7; variantes DKS-501 y AER15 separadas en grupos propios.",
            "1.0.0.9 — Añadido un parche para H&K 45C Mk24.",
            "1.0.0.8 — Añadidos parches para AQUILA y X12 Plasmacaster.",
            "1.0.0.6 — Añadidos parches para DKS-501 Redux y ACR-W17.",
            "1.0.0.4 — Lanzamiento inicial con parches para HK USP, DKS-501, .357 Cattleman Revolver y MW19 FAL."
          ]
        },
        {
          title: "Parches individuales",
          description: "Instala solo los parches opcionales para los mods de armas que uses.",
          changelog: [
            "31 may 2026 — Publicado el parche de compatibilidad para AER15.",
            "29 may 2026 — Publicado el parche de compatibilidad para MEC-R7.",
            "29 may 2026 — Publicado el parche de compatibilidad para HK 45C Mk24.",
            "29 may 2026 — Publicado el parche de compatibilidad para X12 Plasmacaster.",
            "29 may 2026 — Publicado el parche de compatibilidad para Aquila.",
            "29 may 2026 — Publicado el parche de compatibilidad para DKS-501 Redux.",
            "28 may 2026 — Publicados parches para DKS-501 Unofficial Update Vanilla, DKS-501, .357 Cattleman Revolver, MW19 FAL y HK USP."
          ]
        }
      ]
    },
    "quick-attach-menu": {
      description: "Cambia accesorios de armas compatibles desde un menú rápido dentro del juego.",
      overview: "Un menú de accesorios para Fallout 4 1.10.163 y 1.11.240. La versión 0.5.199 mejora la compatibilidad con Tactical Reload y SREP, incluida la instalación segura de un accesorio de boca de cañón después de volver de un cañón M203. Force Unsafe Swaps sigue siendo una opción por arma y está desactivada de forma predeterminada. Requiere la versión correspondiente de F4SE y una versión compatible de PrismaUI_F4; ECO y Mod Configuration Menu son opcionales.",
      features: [
        "Cambia accesorios de armas compatibles dentro del juego sin volver al banco de trabajo.",
        "Cuatro presentaciones: Cascade, Radial Wheel, Compact Hybrid y Horizontal Bar.",
        "Usa menús de armas de ECO cuando están disponibles o genera menús compatibles en tiempo de ejecución; ECO es opcional.",
        "Configura la visibilidad, el orden, las etiquetas, el origen del menú y el tratamiento del texto entre corchetes de cada arma desde el Builder.",
        "Personaliza teclas, escala, posición, opacidad, temas, colores, ayudas, el comportamiento después de aplicar un cambio, la ralentización del juego y el registro de diagnóstico.",
        "Exporta e importa perfiles de menú distribuibles para cada arma.",
        "Activa Force Unsafe Swaps para armas individuales cuando sea necesario; las comprobaciones de seguridad normales permanecen activadas de forma predeterminada.",
        "Valida los cambios de accesorios en tiempo real, con verificación de inventario, orden de provider/child y rollback para cambios compatibles."
      ],
      changelog: [
        "0.5.199 — Corregida la instalación segura de accesorios de boca de cañón y otros accesorios provider después de que su punto de montaje volviera a estar disponible, incluido el cambio de cañón SREP M203 comunicado.",
        "0.5.198 — Corregidos falsos errores “Attachment unable to swap safely” con Tactical Reload, mejorado el tratamiento de dependencias de OMOD internos/provider y añadida la opción Force Unsafe Swaps por arma. Los cambios seguros permanecen activados de forma predeterminada.",
        "0.5.197 — Añadidos controles para el registro de diagnóstico y la ralentización de los menús, mantenidos ocultos los elementos filtrados de Cascade tras cambiar accesorios y corregido el movimiento limitado del cursor en las tres vistas.",
        "0.5.192 — Corregidos bloqueos en Fallout 4 1.11.x, armas MODCOL, accesorios válidos sin objeto MISC, los atajos Mouse 4/5 para abrir, cerrar y cambiar de menú, y problemas de entrada/foco durante diálogos.",
        "0.5.181 — Corregidos los filtros de compatibilidad de los menús generados, falsos bloqueos de reemplazo, el registro en Prisma Dock y la aparición de OMOD internos.",
        "0.5.180 — Primera versión pública con cuatro presentaciones, controles Builder por arma, ajustes configurables, exportación/importación de perfiles y cambios de accesorios validados."
      ]
    },
    "xedit-json-exporter": {
      description: "Exporta datos de plugins de Fallout 4 desde xEdit a JSON estructurado.",
      overview: "Script genérico para xEdit/FO4Edit que exporta registros seleccionados o estructuras completas de plugins a JSON legible.",
      features: [
        "Exporta un plugin completo o registros seleccionados desde xEdit a JSON estructurado.",
        "Procesa archivos ESP, ESL y ESM sin modificarlos.",
        "Conserva la jerarquía que muestra xEdit, incluidos registros, campos, subregistros, arrays y elementos anidados.",
        "Añade las firmas de los registros a los nombres de archivo al exportar una selección.",
        "Crea un resumen de tipos y cantidades de registros para personas y herramientas externas.",
        "Genera automáticamente el nombre del archivo a partir del plugin y la selección si no se indica uno."
      ],
      changelog: [
        "1.6 — Corregida la pérdida de datos cuando xEdit contiene varios elementos secundarios con el mismo nombre. Los valores repetidos se conservan ahora en su orden original, en lugar de que las entradas posteriores reemplacen a las anteriores, solucionando el Actor Value de MGEF reportado y la pérdida de keywords repetidas.",
        "1.5 — Corregido el nombre automático de plugins completos; las exportaciones ESP, ESL y ESM ya no añaden todas las firmas.",
        "1.4 — Primera versión pública."
      ]
    },
    "loot-and-salvage": {
      description: "Addon de calidad de vida para Wrath of the Lich King 3.3.5a que ayuda a gestionar objetos no deseados y materiales de profesión.",
      overview: "Loot & Salvage reduce la limpieza repetitiva de las bolsas sin quitarte el control. Puede vender o destruir con cuidado objetos no deseados, proteger los objetos que quieras conservar y ayudar a procesar materiales de profesión compatibles.",
      features: [
        "Listas ilimitadas de Conservar siempre y Basura siempre.",
        "Reglas de calidad, valor de venta, comida, agua, pociones, tela, pergaminos y mercancías.",
        "Venta opcional a mercaderes y destrucción automática cuidadosamente limitada.",
        "Clasificación rápida de objetos de las bolsas y una ventana compacta de listas con dos paneles.",
        "Procesamiento iniciado por el jugador para Desencantamiento, Molienda y Prospección.",
        "Clasificación opcional de basura en AdiBags.",
        "Opciones de presentación integradas Automático, Vanilla, Modern Dark, Azul y ElvUI; AddOnSkins solo es necesario para la presentación ElvUI.",
        "Botón del minimapa compatible con recopiladores de botones habituales."
      ],
      changelog: [
        "0.2.0 — Se añadieron presentaciones seleccionables integradas y se retiró el puente separado. Esta versión preliminar de GitHub sigue siendo independiente; AddOnSkins solo es necesario para la presentación ElvUI.",
        "0.1.0 — Primera versión pública preliminar en Nexus Mods y GitHub."
      ]
    },
    "gm-genie": {
      description: "Addon de utilidad para Game Masters de Wrath of the Lich King 3.3.5a, centrado en servidores AzerothCore.",
      overview: "GM Genie reúne funciones habituales de Game Master en una interfaz dentro del juego, incluidos controles GM, gestión de tickets, inspección de jugadores, herramientas Builder y mejoras de compatibilidad para configuraciones con ElvUI.",
      features: [
        "HUD de Game Master con controles de uso frecuente.",
        "Herramientas de gestión de tickets.",
        "Búsqueda de jugadores y herramientas Spy para jugadores seleccionados.",
        "Herramientas Builder para mover, añadir y eliminar objetos y NPC.",
        "Controles de visibilidad, susurros, vuelo y velocidad.",
        "Menús de macros y comandos avanzados.",
        "Ajustes persistentes del addon con compatibilidad con Lua 5.1 y WoW 3.3.5a.",
        "Selector de apariencias integrado con una presentación opcional para ElvUI / AddOnSkins."
      ],
      changelog: [
        "1.1 — Se añadió el selector de apariencias integrado y una presentación opcional para ElvUI / AddOnSkins.",
        "1.0 — Primer lanzamiento público en Nexus Mods."
      ],
      screenshots: [
        { caption: "HUD principal", alt: "HUD principal de GM Genie con controles de Game Master, tickets, Spy y Builder" },
        { caption: "HUD principal con ElvUI / AddOnSkins", alt: "HUD principal de GM Genie con estilo ElvUI y AddOnSkins" },
        { caption: "Navegador de tickets", alt: "Navegador de tickets de GM Genie con columnas y resumen de estado" },
        { caption: "Navegador de tickets con ElvUI / AddOnSkins", alt: "Navegador de tickets de GM Genie con estilo compatible con ElvUI" },
        { caption: "Spy Player", alt: "Diálogo Spy Player de GM Genie" },
        { caption: "Herramientas Builder", alt: "Panel Builder de GM Genie con controles de movimiento, objetos, NPC y macros" }
      ]
    }
  },

  fr: {
    "dirde-ue-linux": {
      description: "Portage Linux natif de l’Ultimate Edition Mod Menu.",
      overview: "Portage Linux natif du mod menu original de FireEyeEian, avec les options de gameplay publiées, un patch Data0 sécurisé et la restauration.",
      features: [
        "Déplacement : coût d’endurance réduit pour la course et le saut, course avec une arme et déplacements améliorés.",
        "Combat : pénétration des balles et portes brisées instantanément.",
        "Loot : loot amélioré, plus de munitions, inventaire agrandi et durabilité accrue.",
        "Confort : éblouissement solaire réduit de 90 %, suppression de la réverbération et de l’écho, vidéos d’introduction ignorées.",
        "Véhicules : NoClip pour les véhicules.",
        "Caméra et armes : options FOV 72/82, upgrades d’armes améliorés et réglages de visée.",
        "Zombies : difficultés One Hit, Hard et Headshot Only, plus cinq tailles.",
        "Spawns forcés : Butchers, Rams, Bloaters, Thugs, Suiciders et bandits armés ou au corps à corps.",
        "Météo et heure : nuit, pluie, tempêtes et variantes de nuit plus sombre.",
        "Patch Data0 natif et sécurisé sous Linux, avec backup et restauration exacte, plus des paquets Flatpak et AppImage pour Linux x86-64."
      ],
      changelog: [
        "0.1.0.dev0 — Première préversion publique du portage Linux natif du Dead Island Riptide Ultimate Edition Mod Menu de FireEyeEian."
      ],
      screenshots: [
        { caption: "Fenêtre principale", alt: "Fenêtre principale de DIRDE UE Linux avec les options de gameplay" },
        { caption: "Informations et crédits", alt: "Fenêtre À propos de DIRDE UE Linux avec les informations du projet et les crédits" }
      ]
    },
    "eco-quick-menu-additions": {
      description: "Choisissez l’installateur AiO ou des patchs de compatibilité individuels facultatifs.",
      overview: "La page centrale des patchs ECO Quick Menu publiés par K2040. Utilisez l’installateur AiO pour la collection complète ou installez uniquement les patchs individuels dont vous avez besoin.",
      features: [
        "Ajoute la compatibilité quick menu aux mods d’armes Fallout 4 pris en charge.",
        "Tous les patchs publiés sont des fichiers ESP marqués ESL.",
        "Des modifications allégées et des menus réorganisés rendent le processus plus cohérent.",
        "Les conditions liées aux accessoires évitent les choix de menu non valides.",
        "Affiche une confirmation lorsque l’intégration au quick menu est terminée."
      ],
      variants: [
        {
          title: "Installateur AiO",
          description: "Installez toute la collection de patchs publiée avec un seul installateur FOMOD.",
          changelog: [
            "1.0.1.11 — Ajout de la prise en charge d’AER15 et de sa variante MEC-R7 ; séparation des variantes DKS-501 et AER15 en groupes distincts.",
            "1.0.0.9 — Ajout d’un patch pour H&K 45C Mk24.",
            "1.0.0.8 — Ajout de patchs pour AQUILA et X12 Plasmacaster.",
            "1.0.0.6 — Ajout de patchs pour DKS-501 Redux et ACR-W17.",
            "1.0.0.4 — Première version avec des patchs pour HK USP, DKS-501, .357 Cattleman Revolver et MW19 FAL."
          ]
        },
        {
          title: "Patchs individuels",
          description: "Installez uniquement les patchs facultatifs correspondant aux mods d’armes utilisés.",
          changelog: [
            "31 mai 2026 — Publication du patch de compatibilité AER15.",
            "29 mai 2026 — Publication du patch de compatibilité MEC-R7.",
            "29 mai 2026 — Publication du patch de compatibilité HK 45C Mk24.",
            "29 mai 2026 — Publication du patch de compatibilité X12 Plasmacaster.",
            "29 mai 2026 — Publication du patch de compatibilité Aquila.",
            "29 mai 2026 — Publication du patch de compatibilité DKS-501 Redux.",
            "28 mai 2026 — Publication des patchs DKS-501 Unofficial Update Vanilla, DKS-501, .357 Cattleman Revolver, MW19 FAL et HK USP."
          ]
        }
      ]
    },
    "quick-attach-menu": {
      description: "Changez les accessoires d’armes compatibles depuis un menu rapide en jeu.",
      overview: "Un menu d’accessoires pour Fallout 4 1.10.163 et 1.11.240. La version 0.5.199 améliore la compatibilité avec Tactical Reload et SREP, notamment l’installation sûre d’un accessoire de bouche après être revenu d’un canon M203. Force Unsafe Swaps reste une option par arme, désactivée par défaut. Il nécessite la version F4SE correspondante et une version compatible de PrismaUI_F4 ; ECO et Mod Configuration Menu sont facultatifs.",
      features: [
        "Changez les accessoires d’armes compatibles directement en jeu sans retourner à l’établi.",
        "Quatre présentations : Cascade, Radial Wheel, Compact Hybrid et Horizontal Bar.",
        "Utilise les menus d’armes ECO lorsqu’ils sont disponibles ou génère des menus compatibles à l’exécution ; ECO est facultatif.",
        "Configurez la visibilité, l’ordre, les libellés, la source du menu et le traitement du texte entre crochets de chaque arme dans le Builder.",
        "Personnalisez les raccourcis, l’échelle, la position, l’opacité, les thèmes, les couleurs, les aides, le comportement après application, le ralentissement du jeu et la journalisation de diagnostic.",
        "Exportez et importez des profils de menu distribuables pour chaque arme.",
        "Activez Force Unsafe Swaps pour certaines armes si nécessaire ; les contrôles de sécurité normaux restent activés par défaut.",
        "Valide les changements d’accessoires en direct avec vérification d’inventaire, ordre provider/child et rollback pour les changements pris en charge."
      ],
      changelog: [
        "0.5.199 — Correction de l’installation sûre des accessoires de bouche et autres accessoires provider après le rétablissement de leur point de montage, notamment lors du changement de canon SREP M203 signalé.",
        "0.5.198 — Correction des faux messages « Attachment unable to swap safely » avec Tactical Reload, amélioration de la gestion des dépendances des OMOD internes/provider et ajout de l’option Force Unsafe Swaps par arme. Les changements sécurisés restent activés par défaut.",
        "0.5.197 — Ajout de commandes pour la journalisation de diagnostic et le ralentissement des menus, maintien du filtrage des éléments Cascade masqués après un changement d’accessoire et correction du déplacement limité du curseur dans les trois vues.",
        "0.5.192 — Correction des plantages avec Fallout 4 1.11.x, des armes MODCOL, des accessoires valides sans objet MISC, des raccourcis Mouse 4/5 pour ouvrir, fermer et changer de menu, ainsi que des problèmes d’entrée/focus pendant les dialogues.",
        "0.5.181 — Correction du filtrage de compatibilité des menus générés, des faux blocages de remplacement, de l’enregistrement dans Prisma Dock et de l’affichage d’OMOD internes.",
        "0.5.180 — Première version publique avec quatre présentations, réglages Builder par arme, options configurables, export/import de profils et changements d’accessoires validés."
      ]
    },
    "xedit-json-exporter": {
      description: "Exporte les données des plugins Fallout 4 de xEdit vers un JSON structuré.",
      overview: "Script générique pour xEdit/FO4Edit qui exporte des enregistrements sélectionnés ou des structures complètes de plugins vers un JSON lisible.",
      features: [
        "Exporte un plugin complet ou des enregistrements sélectionnés depuis xEdit vers un JSON structuré.",
        "Traite les fichiers ESP, ESL et ESM sans les modifier.",
        "Conserve la hiérarchie affichée dans xEdit, y compris les enregistrements, champs, sous-enregistrements, tableaux et éléments imbriqués.",
        "Ajoute les signatures des enregistrements aux noms de fichiers lors de l’export d’une sélection.",
        "Crée un résumé des types et du nombre d’enregistrements pour les personnes et les outils externes.",
        "Génère automatiquement le nom du fichier à partir du plugin et de la sélection si aucun nom n’est indiqué."
      ],
      changelog: [
        "1.6 — Correction de la perte de données lorsque xEdit contient plusieurs éléments enfants portant le même nom. Les valeurs répétées sont désormais conservées dans leur ordre d’origine au lieu d’être remplacées par les entrées suivantes, ce qui corrige l’Actor Value MGEF signalé et la perte de keywords répétés.",
        "1.5 — Correction du nom automatique des plugins complets ; les exports ESP, ESL et ESM n’ajoutent plus toutes les signatures.",
        "1.4 — Première version publique."
      ]
    },
    "loot-and-salvage": {
      description: "Addon de confort pour Wrath of the Lich King 3.3.5a qui facilite la gestion des objets indésirables et des composants de métier.",
      overview: "Loot & Salvage réduit le rangement répétitif des sacs sans vous retirer le contrôle. Il peut vendre ou détruire prudemment les objets indésirables, protéger ceux que vous souhaitez conserver et aider à traiter les composants de métier compatibles.",
      features: [
        "Listes illimitées Toujours conserver et Toujours indésirable.",
        "Règles de qualité, valeur marchande, nourriture, eau, potions, étoffes, parchemins et marchandises.",
        "Vente facultative aux marchands et destruction automatique soigneusement limitée.",
        "Classement rapide des objets des sacs et fenêtre de listes compacte à deux panneaux.",
        "Traitement lancé par le joueur pour le Désenchantement, la Mouture et la Prospection.",
        "Classement facultatif des objets indésirables dans AdiBags.",
        "Modes de présentation intégrés Automatique, Vanilla, Modern Dark, Bleu et ElvUI ; AddOnSkins n’est nécessaire que pour la présentation ElvUI.",
        "Bouton de minicarte compatible avec les collecteurs de boutons courants."
      ],
      changelog: [
        "0.2.0 — Ajout de présentations intégrées sélectionnables et retrait du pont séparé. Cette préversion GitHub reste autonome ; AddOnSkins n’est nécessaire que pour la présentation ElvUI.",
        "0.1.0 — Première préversion publique sur Nexus Mods et GitHub."
      ]
    },
    "gm-genie": {
      description: "Addon utilitaire pour Game Masters de Wrath of the Lich King 3.3.5a, principalement destiné aux serveurs AzerothCore.",
      overview: "GM Genie regroupe les fonctions Game Master courantes dans une interface en jeu, notamment les commandes GM, la gestion des tickets, l’inspection des joueurs, les outils Builder et des améliorations de compatibilité pour les configurations ElvUI.",
      features: [
        "HUD Game Master avec les commandes les plus utilisées.",
        "Outils de gestion des tickets.",
        "Recherche de joueurs et outils Spy pour les joueurs sélectionnés.",
        "Outils Builder pour déplacer, ajouter et supprimer des objets et des PNJ.",
        "Commandes de visibilité, whispers, vol et vitesse.",
        "Menus de macros et de commandes avancées.",
        "Réglages persistants de l’addon avec compatibilité Lua 5.1 et WoW 3.3.5a.",
        "Sélecteur d’apparence intégré avec une présentation ElvUI / AddOnSkins facultative."
      ],
      changelog: [
        "1.1 — Ajout du sélecteur d’apparence intégré et d’une présentation ElvUI / AddOnSkins facultative.",
        "1.0 — Première version publique sur Nexus Mods."
      ],
      screenshots: [
        { caption: "HUD principal", alt: "HUD principal de GM Genie avec commandes Game Master, tickets, Spy et Builder" },
        { caption: "HUD principal avec ElvUI / AddOnSkins", alt: "HUD principal de GM Genie avec style ElvUI et AddOnSkins" },
        { caption: "Gestionnaire de tickets", alt: "Gestionnaire de tickets de GM Genie avec colonnes et résumé d’état" },
        { caption: "Gestionnaire de tickets avec ElvUI / AddOnSkins", alt: "Gestionnaire de tickets de GM Genie avec style compatible ElvUI" },
        { caption: "Spy Player", alt: "Fenêtre Spy Player de GM Genie" },
        { caption: "Outils Builder", alt: "Panneau Builder de GM Genie avec commandes de mouvement, objets, PNJ et macros" }
      ]
    }
  }
};
