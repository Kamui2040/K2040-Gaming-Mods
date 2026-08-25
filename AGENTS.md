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
- Keep the site lightweight, responsive, localized, and visually consistent with the K2040 site family.

## Validation

Before accepting website changes, check relevant links, local assets, localization, desktop and mobile navigation/rendering, and diff cleanliness.
