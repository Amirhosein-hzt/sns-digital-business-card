# Instructions for Cline / Coding Agent

You are responsible for implementing the SNS Co. Digital Business Card end to end. Read `PROJECT.md`, `DESIGN.md`, and `ROADMAP.md` before coding. IMPORTANT: `DESIGN.md` has a mandatory owner-approval gate. Do not scaffold or implement the website until the owner explicitly approves the palette and design language.

## Mission

Deliver a polished, responsive, bilingual static website for Sayal Niroo Sanat Co. within one working day. Follow the roadmap in order and verify the result.

## Design approval gate

- Before coding, confirm that the owner has explicitly approved the visual direction and palette in `DESIGN.md`.
- If approval has not been given, do not scaffold or implement the website. You may inspect files non-destructively and report that design approval is pending.
- The visual moodboard is a reference for color and mood, not permission to add extra pages, navigation, or invented product imagery.

## Autonomy

- Work autonomously through the roadmap; do not ask for approval after every small step.
- Do not stop for non-critical missing information. Use a documented, easily replaceable fallback and continue.
- Ask only if a genuinely blocking issue requires owner input, such as a destructive change to an existing project or a required credential.
- Never overwrite an existing project blindly. Inspect first and preserve useful work.
- If the browser, network, or hosting environment is unavailable, continue with the work that can be completed locally and clearly document what could not be verified.

## Source of truth

- `PROJECT.md` contains the official supplied company facts and exact URLs.
- `DESIGN.md` defines the design direction.
- `ROADMAP.md` defines the required sequence and acceptance criteria.
- Do not invent company claims, phone numbers, email addresses, social accounts, map locations, awards, certifications, or product details.
- Do not create a WhatsApp link unless the supplied number is confirmed to be WhatsApp-enabled.
- Do not recreate the official logo. Search project assets first; if missing, use a clearly replaceable placeholder.

## Engineering constraints

- Preferred stack: Vite + React + TypeScript.
- Prefer plain CSS or CSS modules and a small component structure.
- Do not add a backend, database, CMS, authentication, complex router, or heavyweight UI framework.
- Avoid unnecessary dependencies. Do not add a dependency solely for a trivial visual effect.
- Keep all company content, contact data, and links in a single configuration module where practical.
- Use semantic HTML and accessible link labels.
- Do not add API keys or secrets.
- Do not add external fonts, scripts, or remote assets unless genuinely necessary.
- Ensure the Google Maps link works even if an embed fails.

## Language requirements

- Support Persian and English.
- Persian must use RTL and English must use LTR.
- Update the document language and direction when the selected language changes.
- Keep mixed Latin strings such as email addresses and URLs readable in Persian mode.
- Translate the provided English description faithfully; do not embellish it.
- Prefer Persian as the initial language.

## Implementation behavior

1. Inspect the workspace.
2. Scaffold only if needed.
3. Implement all required page sections and working links.
4. Implement the language switch.
5. Style according to `DESIGN.md`.
6. Test responsiveness and fix issues.
7. Run the production build.
8. Update README with run/build/deployment notes.
9. Provide a concise completion report with files changed, checks actually run, and outstanding manual actions.

## Verification and honesty

- Run `npm run build` and fix build errors.
- Run the development server where possible.
- If browser automation or a browser preview is available, inspect both language modes at mobile and desktop sizes.
- Never claim that a link, layout, browser behavior, deployment, or domain works unless you have actually verified it.
- If a check could not be performed, state that clearly.
- Do not spend time on low-value decorative polish while required behavior is incomplete.

## Definition of done

The project meets the final acceptance checklist in `ROADMAP.md`. Do not stop after scaffolding or after creating a static mockup; deliver the functioning implementation.
