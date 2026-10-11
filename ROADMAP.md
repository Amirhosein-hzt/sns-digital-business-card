# One-Day Implementation Roadmap

## Phase 0 — Owner approves the design (required; before implementation)

1. Present the proposed palette and design language from `DESIGN.md` to the owner.
2. Do not scaffold or implement the website until the owner explicitly approves the visual direction.
3. If the owner requests a change, update `DESIGN.md` and any affected acceptance criteria before coding.
4. Record the approved palette/design direction in `DESIGN.md`.

This approval gate is intentional: do not spend the one-day implementation budget on a design the owner has not approved.

## Working rules

- Follow steps in order. Do not wait for approval between ordinary implementation steps.
- Prefer the simplest working solution.
- Do not expand the scope.
- If a non-blocking detail is missing, document the assumption and continue.
- Do not claim tests passed unless you ran them and observed the result.
- Keep the final result runnable and explain any unresolved blocker.

## Phase 1 — Inspect and scaffold (30 minutes; only after design approval)

1. Inspect the workspace before changing files.
2. If it is an empty folder, scaffold Vite + React + TypeScript.
3. If a suitable existing project is present, reuse it rather than replacing it.
4. Create a clear component structure and a single company-data/config module.
5. Check for the supplied logo in project files and `public/assets/`.
6. If no logo exists, use a clearly replaceable placeholder and continue.
7. Install only necessary dependencies.

**Exit criteria**
- Project starts locally.
- Structure is small and understandable.
- No unrelated framework or backend has been added.

## Phase 2 — Build the page (90 minutes)

Implement:
1. Compact header and language toggle.
2. Company introduction with logo, name, descriptor, established year, and description.
3. Contact actions: phone, email, website.
4. Instagram and LinkedIn links.
5. Address and Google Maps action; add a basic responsive map embed only if it is reliable and lightweight.
6. Minimal footer.

Keep all content data-driven where practical. Ensure every link uses the supplied URLs and values.

**Exit criteria**
- All required content appears.
- No fabricated information or dead placeholder links.
- Contact actions work using the appropriate URL schemes.

## Phase 3 — Bilingual support (45 minutes)

1. Implement Persian and English content.
2. Translate the supplied English company description faithfully into natural Persian.
3. Implement the visible language switch.
4. Update page direction and language attributes at the document root.
5. Check mixed RTL/LTR strings such as phone, email, URLs, and English company name.

**Exit criteria**
- Both language modes are complete.
- Direction, alignment, and mixed-direction text behave correctly.
- Switching language does not reload the page unless there is a compelling implementation reason.

## Phase 4 — Styling and responsive polish (90 minutes)

1. Apply the restrained premium design from `DESIGN.md`.
2. Match the visual accents to the official logo if it is available.
3. Tune spacing, type scale, content width, borders, and contact-action hierarchy.
4. Add focus, hover, and active states.
5. Test at widths of approximately 320, 375, 768, 1024, and 1440 CSS pixels.
6. Fix overflow, clipped content, awkward wrapping, and overly small tap targets.

**Exit criteria**
- No horizontal overflow at 320 CSS pixels.
- Page remains coherent on mobile and desktop.
- Primary contact actions are immediately obvious.

## Phase 5 — Verify and fix (60 minutes)

Run the available project checks, at minimum:
- `npm run build`
- Run the dev server and inspect the page in a browser if browser tools are available.
- Check console/runtime errors if browser tools are available.
- Click/test `tel:`, `mailto:`, website, Instagram, LinkedIn, and Google Maps links.
- Test both languages and their directions.
- Test behavior when the map embed is unavailable.
- Confirm there are no broken local asset paths or accidental secrets.

Fix any issues found. Do not report a browser test if no browser test was actually performed.

## Phase 6 — Delivery and deployment notes (30 minutes)

1. Update README with install, dev, build, and preview commands.
2. Document the production output directory (`dist/` for a normal Vite build).
3. Provide generic static-hosting instructions without assuming the user's host.
4. Explain that connecting a domain, DNS changes, TLS, and deployment credentials may require the owner.
5. Report what was implemented, what was tested, and any remaining manual tasks.

## Suggested one-day schedule

| Elapsed time | Focus |
|---|---|
| 0:00–0:30 | Inspect and scaffold |
| 0:30–2:00 | Build page structure and links |
| 2:00–2:45 | Persian/English switch |
| 2:45–4:15 | Styling and responsive layout |
| 4:15–5:15 | Build checks and fixes |
| 5:15–5:45 | README and delivery |
| Remaining time | Logo integration, owner review, and deployment if access is available |

The schedule is a target, not a guarantee. If time is running short, preserve the core page, bilingual behavior, working links, and successful production build; drop decorative extras first.

## Final acceptance checklist

- [ ] Production build succeeds.
- [ ] Dev server starts.
- [ ] Official logo is used, or the placeholder is clearly documented.
- [ ] Company name and description are correct in both languages.
- [ ] Persian mode is RTL and English mode is LTR.
- [ ] Phone action is correct.
- [ ] Email action is correct.
- [ ] Main website opens correctly.
- [ ] Instagram opens correctly.
- [ ] LinkedIn opens correctly.
- [ ] Google Maps link opens the supplied location.
- [ ] Map embed, if present, is responsive and not required for basic location access.
- [ ] Layout has no horizontal overflow at 320 CSS pixels.
- [ ] Focus states and readable contrast are present.
- [ ] No invented facts or unverified WhatsApp action.
- [ ] README has commands and deployment notes.
- [ ] Final response distinguishes completed work from anything not verified.
