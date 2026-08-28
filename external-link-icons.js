(() => {
  "use strict";

  const ACTION_SELECTOR = [
    "a[data-brand]",
    "a.text-link",
    "a.project-action",
    "a.section-link",
    "a.inline-link",
    "a.download-button",
    ".resource-links a",
    ".about-links a"
  ].join(",");

  const platformFor = (link) => {
    const declared = link.dataset.brand?.toLowerCase();
    if (declared === "github" || declared === "nexus") return declared;

    let url;
    try { url = new URL(link.href, location.href); } catch { return null; }
    const host = url.hostname.toLowerCase();
    if (host === "github.com" || host.endsWith(".github.com")) return "github";
    if (host === "nexusmods.com" || host.endsWith(".nexusmods.com")) return "nexus";
    return null;
  };

  const makeSvg = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("focusable", "false");
    return svg;
  };

  const githubIcon = () => {
    const icon = document.createElement("span");
    icon.className = "external-platform-icon external-platform-icon--github";
    icon.setAttribute("aria-hidden", "true");

    const svg = makeSvg();
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 24 12.3C24 5.7 18.6.3 12 .3Z");
    svg.append(path);
    icon.append(svg);
    return icon;
  };

  const appendStrokePath = (svg, d) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svg.append(path);
  };

  const nexusIcon = () => {
    const icon = document.createElement("span");
    icon.className = "external-platform-icon external-platform-icon--nexus";
    icon.setAttribute("aria-hidden", "true");

    const svg = makeSvg();
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    appendStrokePath(svg, "M3.4 6.7c4.4-2.8 10.8-3.2 15-.7 1.4.8 2.3 1.9 2.5 3.2");
    appendStrokePath(svg, "M5 10c3.4-2 8.2-2.3 11.4-.5 1.5.8 2.4 2 2.4 3.2");
    appendStrokePath(svg, "M7 13.2c2.3-1.2 5.5-1.3 7.6-.2 1.2.6 1.8 1.5 1.6 2.5");
    appendStrokePath(svg, "M9.1 16.2c1.3-.6 3-.6 4.1 0 .7.4 1 1 .8 1.6");
    appendStrokePath(svg, "M10.8 19.2h2.4");
    icon.append(svg);
    return icon;
  };

  const decorate = (link) => {
    if (!(link instanceof HTMLAnchorElement) || link.dataset.externalPlatform) return;
    const platform = platformFor(link);
    if (!platform) return;

    const labelText = link.textContent.trim() || (platform === "github" ? "GitHub" : "Nexus Mods");
    const label = document.createElement("span");
    label.className = "external-platform-label";
    label.textContent = labelText;

    link.replaceChildren(platform === "github" ? githubIcon() : nexusIcon(), label);
    link.classList.add("external-platform-link");
    link.dataset.externalPlatform = platform;
  };

  const decorateWithin = (root = document) => {
    if (root instanceof HTMLAnchorElement && root.matches(ACTION_SELECTOR)) decorate(root);
    root.querySelectorAll?.(ACTION_SELECTOR).forEach(decorate);
  };

  const init = () => {
    decorateWithin();
    new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) decorateWithin(node);
      }));
    }).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
