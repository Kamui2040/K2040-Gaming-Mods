# K2040 Gaming Mods Repository Instructions

## Purpose

This public repository contains the K2040 Gaming Mods website, public project information, localization, and authorized website assets.

## Public-safe repository

- Everything committed here must be safe to publish.
- Keep only website source, public project data, localization, required documentation, and authorized or properly licensed assets.
- Do not store credentials, personal data, private URLs or IDs, machine-specific paths, private QA, backups, internal planning, or maintainer-only records.
- Preserve required attribution and licensing information for third-party material.

## Maintenance

- Routine maintenance may be performed directly through GitHub; a local checkout is not required.
- If local tooling is explicitly needed, use Linux/Bazzite and repository-native Linux tooling.
- Keep `main` stable and use focused branches and pull requests for changes.
- GitHub Actions and other cloud CI are disabled and must not be used.
- Routine website and GitHub Pages updates caused by normal repository changes are allowed.
- Social posts, announcements, ads, account changes, and official mod releases remain separate and require explicit approval.

## Website content

- Use simple, natural public-facing language.
- List only public or released projects unless the maintainer explicitly changes that policy.
- Public project and download links must point to the current authoritative public source.
- Keep all supported languages consistent when visible text changes.
- `projects/project-data.js` is the authoritative source for mutable project facts. Landing-page adapters must not duplicate those facts.
- `updates/<year>.js` is the authoritative source for Gaming update records. Preserve intentional source order when entries share a date.
- Add update records only for confirmed public changes that are already implemented or published; do not publish planned or merely announced changes as completed updates.
- The Main K2040 site consumes the Gaming update feed automatically. Do not duplicate Gaming update records in the Main-site repository.
- Keep the site lightweight, responsive, localized, and visually consistent with the K2040 site family.

## Website media asset contract

- Hero-header artwork uses a 3:1 aspect ratio. Prefer source dimensions such as 1920×640 when creating new artwork.
- Hero-header artwork must contain artwork only: no baked-in titles, descriptions, logos, UI, frames, borders, buttons, tags, or other website chrome.
- The website owns hero framing, localized text, overlays, spacing, and responsive cropping. Source artwork must leave enough visually quiet space for those overlays where the page design requires it.
- Project and category source artwork uses a 4:5 aspect ratio unless a page explicitly documents another requirement.
- Project and category source artwork must not bake in the card title, version, description, tags, status, buttons, frame, border, or other card UI. The website renders those elements separately.
- Treat card artwork and card UI as separate layers of responsibility: artwork is reusable media; HTML/CSS/data own the informational panel, actions, localization, and visual frame.
- On mobile, do not force the full rendered card into a fixed 4:5 height. Preserve the artwork treatment while allowing localized text and actions to expand without clipping or truncation.
- Reuse approved visual language and asset proportions across category cards and project cards instead of introducing per-project structural variations without a deliberate design change.

## Validation

Before accepting website changes, check relevant links, local assets, localization, desktop and mobile navigation/rendering, and diff cleanliness.
