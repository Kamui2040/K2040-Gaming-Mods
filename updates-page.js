(() => {
  "use strict";

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

  const linkLabel = (href) => {
    if (!href) return null;
    let url;
    try { url = new URL(href, location.href); } catch { return "Read more"; }
    const host = url.hostname.toLowerCase();
    if (host === "github.com" || host.endsWith(".github.com")) return "GitHub";
    if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) return "Nexus Mods";
    return "Read more";
  };

  const projectImage = (projectId) => {
    const project = window.K2040_PROJECTS?.[projectId];
    if (!project?.cardImage) return null;
    return new URL(project.cardImage, `${location.origin}/K2040-Gaming-Mods/`).href;
  };

  const decorateCard = (card, update) => {
    if (!card || card.dataset.updateArchiveDecorated === "true") return;
    card.dataset.updateArchiveDecorated = "true";

    const link = card.querySelector("[data-update-link]");
    if (link && update.href) {
      const label = linkLabel(update.href);
      if (label) {
        const wrapped = link.querySelector(":scope > .external-platform-label");
        if (wrapped) wrapped.textContent = label;
        else link.textContent = label;
        link.title = label;
      }
    }

    const copy = document.createElement("div");
    copy.className = "gaming-update-copy";
    copy.append(...card.childNodes);

    const src = projectImage(update.projectId);
    if (!src) {
      card.classList.add("update-card--no-media");
      card.append(copy);
      return;
    }

    const media = document.createElement("div");
    media.className = "gaming-update-media";
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    media.append(image);
    card.append(media, copy);
  };

  const init = () => {
    const list = document.querySelector(".updates-page [data-update-list]");
    if (!list) return;
    const updates = sortedUpdates();
    const decorateAll = () => {
      [...list.querySelectorAll(":scope > .update-card")].forEach((card, index) => decorateCard(card, updates[index]));
    };
    decorateAll();
    new MutationObserver(decorateAll).observe(list, { childList: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
