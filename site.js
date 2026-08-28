(() => {
  "use strict";

  const root = document.documentElement;
  const themeKey = "k2040-theme";
  const languageKey = "k2040-language";
  const languages = ["en", "de", "pt-PT", "es", "fr"];
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const read = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };

  const write = (key, value) => {
    try { localStorage.setItem(key, value); } catch {}
  };

  const storedTheme = read(themeKey);
  if (storedTheme === "light" || storedTheme === "dark") root.dataset.theme = storedTheme;

  const normalizeLanguage = (value) => {
    if (typeof value !== "string") return null;
    const tag = value.trim().toLowerCase();
    if (tag === "en" || tag.startsWith("en-")) return "en";
    if (tag === "de" || tag.startsWith("de-")) return "de";
    if (tag === "pt" || tag.startsWith("pt-")) return "pt-PT";
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "fr" || tag.startsWith("fr-")) return "fr";
    return null;
  };

  const detectLanguage = () => {
    const hash = normalizeLanguage(location.hash.slice(1));
    if (hash) return hash;

    const stored = read(languageKey);
    if (languages.includes(stored)) return stored;

    const candidates = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    for (const candidate of candidates) {
      const supported = normalizeLanguage(candidate);
      if (supported) return supported;
    }
    return "en";
  };

  let language = detectLanguage();
  const dictionary = () => window.K2040_TRANSLATIONS?.[language] || window.K2040_TRANSLATIONS?.en || {};
  const t = (path) => {
    let value = dictionary();
    for (const part of path.split(".")) {
      if (!value || typeof value !== "object" || !(part in value)) return null;
      value = value[part];
    }
    return typeof value === "string" ? value : null;
  };

  const localStrings = (entry) => entry?.strings?.[language] || entry?.strings?.en || {};
  const theme = () => root.dataset.theme === "light" || root.dataset.theme === "dark"
    ? root.dataset.theme
    : (darkQuery.matches ? "dark" : "light");

  const translateStatic = () => {
    root.lang = language;
    root.dataset.language = language;

    const titleKey = document.body?.dataset.pageTitleKey;
    const descriptionKey = document.body?.dataset.pageDescriptionKey;
    if (!document.body.classList.contains("project-detail-page")) {
      document.title = (titleKey && t(titleKey)) || t("meta.title") || "K2040 Gaming Mods";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.content = (descriptionKey && t(descriptionKey)) || t("meta.description") || meta.content;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = t(element.dataset.i18nAriaLabel);
      if (value) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = t(element.dataset.i18nAlt);
      if (value) element.setAttribute("alt", value);
    });

    const select = document.querySelector("[data-language-select]");
    if (select) select.value = language;
  };

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const tagKeys = {
    Linux: "linux",
    Gameplay: "gameplay",
    Windows: "windows",
    Tools: "tools",
    AiO: "aio",
    "Single patches": "singlePatches",
    Released: "released"
  };

  const createProjectDestination = (label, href, brand, title) => {
    const link = createElement("a", "text-link project-card-destination", label);
    link.href = href;
    link.dataset.brand = brand;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = label;
    link.setAttribute("aria-label", `${label}: ${title}`);
    return link;
  };

  const renderProjects = () => {
    const grid = document.querySelector("[data-project-grid]");
    if (!grid) return;
    grid.replaceChildren();

    for (const project of window.K2040_CONTENT?.projects || []) {
      const strings = localStrings(project);
      const card = createElement("article", "project-card project-card--visual");
      if (!project.available) card.setAttribute("aria-disabled", "true");

      const art = createElement("div", "project-card-art");
      art.setAttribute("aria-hidden", "true");
      if (project.image) {
        const image = document.createElement("img");
        image.src = project.image;
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        art.append(image);
      }

      const copy = createElement("div", "project-card-copy");
      copy.append(
        createElement("p", "card-label", strings.label || ""),
        createElement("h3", "", strings.title || ""),
        createElement("p", "", strings.description || "")
      );

      if (project.cardMeta?.length) {
        const meta = createElement("div", "project-card-meta");
        project.cardMeta.forEach((item) => {
          meta.append(createElement("span", "", t(`tags.${tagKeys[item] || ""}`) || item));
        });
        copy.append(meta);
      }

      const footer = createElement("div", "card-footer");
      const destinations = createElement("div", "project-card-destinations");
      if (project.cardGithub) destinations.append(createProjectDestination("GitHub", project.cardGithub, "github", strings.title || "Project"));
      if (project.cardNexus) destinations.append(createProjectDestination("Nexus Mods", project.cardNexus, "nexus", strings.title || "Project"));
      if (destinations.childElementCount) footer.append(destinations);

      if (project.available && project.href) {
        const open = createElement("a", "text-link project-card-open", t("actions.open") || "Open project");
        open.href = project.href;
        open.setAttribute("aria-label", `${open.textContent}: ${strings.title || "Project"}`);
        footer.append(open);
      }

      if (footer.childElementCount) copy.append(footer);
      card.append(art, copy);
      grid.append(card);
    }
  };

  const updateTime = (update) => {
    const value = Date.parse(`${update?.date || ""}T00:00:00Z`);
    return Number.isNaN(value) ? null : value;
  };

  const sortedUpdates = () => [...(window.K2040_CONTENT?.updates || [])]
    .map((update, index) => ({ update, index, time: updateTime(update) }))
    .sort((left, right) => {
      if (left.time === null && right.time === null) return left.index - right.index;
      if (left.time === null) return 1;
      if (right.time === null) return -1;
      if (left.time !== right.time) return right.time - left.time;
      return left.index - right.index;
    })
    .map(({ update }) => update);

  const updateDestination = (href) => {
    try {
      const url = new URL(href, location.href);
      const host = url.hostname.toLowerCase();
      if (host === "github.com" || host.endsWith(".github.com")) return { label: "GitHub", brand: "github" };
      if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) return { label: "Nexus Mods", brand: "nexus" };
      if (url.origin === location.origin && url.pathname.startsWith("/K2040-Gaming-Mods/")) {
        return { label: t("landing.viewProject") || "View project", brand: null };
      }
    } catch {}
    return { label: t("actions.readMore") || "Read more", brand: null };
  };

  const renderUpdates = () => {
    const list = document.querySelector("[data-update-list]");
    if (!list) return;
    list.replaceChildren();

    for (const update of sortedUpdates()) {
      const strings = localStrings(update);
      const card = createElement("article", "update-card");
      const meta = createElement("div", "update-meta");
      const time = document.createElement("time");
      time.dateTime = update.date;
      time.textContent = new Intl.DateTimeFormat(language, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC"
      }).format(new Date(`${update.date}T00:00:00Z`));

      meta.append(time, createElement("span", "", strings.category || ""));
      card.append(meta, createElement("h3", "", strings.title || ""), createElement("p", "", strings.summary || ""));

      if (update.href) {
        const destination = updateDestination(update.href);
        const link = createElement("a", "text-link", destination.label);
        link.href = update.href;
        link.dataset.updateLink = "";
        if (destination.brand) link.dataset.brand = destination.brand;
        card.append(link);
      }
      list.append(card);
    }
  };

  let screenshotDialog;
  let screenshotTrigger;

  const openScreenshot = (screenshot, trigger) => {
    if (!screenshotDialog) {
      screenshotDialog = document.createElement("dialog");
      screenshotDialog.className = "screenshot-dialog";

      const close = createElement("button", "screenshot-dialog-close", "×");
      close.type = "button";
      close.setAttribute("aria-label", t("detail.closeScreenshot") || "Close full-screen screenshot");

      const image = createElement("img", "screenshot-dialog-image");
      screenshotDialog.append(close, image);
      close.addEventListener("click", () => screenshotDialog.close());
      screenshotDialog.addEventListener("click", (event) => {
        if (event.target === screenshotDialog) screenshotDialog.close();
      });
      screenshotDialog.addEventListener("close", () => {
        screenshotTrigger?.focus();
        screenshotTrigger = null;
      });
      document.body.append(screenshotDialog);
    }

    const image = screenshotDialog.querySelector("img");
    image.src = screenshot.src;
    image.alt = screenshot.alt || "Project screenshot";
    screenshotTrigger = trigger;
    screenshotDialog.showModal();
    screenshotDialog.querySelector("button")?.focus();
  };

  const renderScreenshots = () => {
    const section = document.querySelector("[data-project-screenshots]");
    const grid = document.querySelector("[data-screenshot-grid]");
    const screenshots = window.K2040_PROJECT?.screenshots;
    if (!section || !grid || !Array.isArray(screenshots) || screenshots.length === 0) return;

    grid.replaceChildren();
    for (const screenshot of screenshots) {
      if (!screenshot?.src) continue;

      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = screenshot.src;
      image.alt = screenshot.alt || "Project screenshot";
      image.loading = "lazy";
      image.decoding = "async";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "screenshot-open";
      button.setAttribute("aria-label", `${t("detail.openFullSize") || "Open full size"}: ${screenshot.caption || image.alt}`);
      button.append(image);
      button.addEventListener("click", () => openScreenshot(screenshot, button));
      figure.append(button);
      if (screenshot.caption) figure.append(createElement("figcaption", "", screenshot.caption));
      grid.append(figure);
    }

    if (grid.childElementCount) section.hidden = false;
  };

  const updateThemeButton = (button) => {
    if (!button) return;
    const next = theme() === "dark" ? "light" : "dark";
    const icon = button.querySelector(".theme-toggle-icon");
    const label = button.querySelector("[data-theme-label]");
    button.setAttribute("aria-pressed", String(theme() === "dark"));
    button.setAttribute("aria-label", t(next === "dark" ? "controls.switchToDark" : "controls.switchToLight") || "");
    if (icon) icon.textContent = next === "dark" ? "☾" : "☀";
    if (label) label.textContent = t(next === "dark" ? "controls.dark" : "controls.light") || "";
  };

  const apply = () => {
    translateStatic();
    renderProjects();
    renderUpdates();
    renderScreenshots();
    updateThemeButton(document.querySelector("[data-theme-toggle]"));
  };

  const init = () => {
    const themeButton = document.querySelector("[data-theme-toggle]");
    const languageSelect = document.querySelector("[data-language-select]");

    apply();

    themeButton?.addEventListener("click", () => {
      const next = theme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      write(themeKey, next);
      updateThemeButton(themeButton);
    });

    languageSelect?.addEventListener("change", () => {
      if (!languages.includes(languageSelect.value)) return;
      language = languageSelect.value;
      write(languageKey, language);
      if (normalizeLanguage(location.hash.slice(1))) {
        history.replaceState(null, "", location.pathname + location.search);
      }
      apply();
    });

    const onSystemTheme = () => {
      if (!root.dataset.theme) updateThemeButton(themeButton);
    };
    darkQuery.addEventListener?.("change", onSystemTheme);
    if (!darkQuery.addEventListener) darkQuery.addListener?.(onSystemTheme);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
