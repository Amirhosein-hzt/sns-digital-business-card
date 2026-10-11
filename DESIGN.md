# Design Specification — SNS Co. (Approval Required Before Implementation)

## 0. Design approval gate

> **Status: APPROVED.** The owner approved the refined purple-and-amber palette
> (purple `#3A2A6A`, amber `#F4B342`, warm-white background `#FAF9F7`, white
> surfaces `#FFFFFF`, text `#1A1F2E`/`#6B7280`, borders `#E7E3DD`), the restrained
> premium design language, and the compact single-page business-card composition
> in the project conversation on 2026-11-10. Implementation may proceed per
> `ROADMAP.md`.

**Do not begin website implementation until the owner explicitly approves the visual direction and palette.**
## 0. Design approval gate

**Do not begin website implementation until the owner explicitly approves the visual direction and palette.**

The generated visual reference is a moodboard, not a literal page specification. It may contain illustrative product imagery or navigation patterns that are not part of the required digital business card. The final site is a single-page business card, not a multi-page corporate website.

The owner should approve:
1. The color palette below (or a revised palette).
2. The design language: premium, restrained, modern, brand-faithful.
3. The page composition: compact company identity, description, contact/social actions, and location.

Until approved, only inspect the workspace and prepare non-destructive setup. Do not scaffold a new app or implement the page. Once approval is recorded in the conversation or project notes, continue with `ROADMAP.md`.

## 1. Design intent

Create a premium, restrained corporate identity for an established automotive parts manufacturer. The result should feel reliable, precise, and industrial—not like a generic link-in-bio template, an e-commerce store, or a flashy startup landing page.

Keep SNS Co.'s recognizable purple and amber identity. Modernize their use rather than replacing them with unrelated colors. Use a light, elegant background; the original logo's beige background should not dictate the entire website.

## 2. Proposed palette — for owner approval

The following palette stays close to the original logo colors while improving how they work together on a modern screen. This is a proposal, not a final locked brand standard.

| Role | Proposed color | Use |
|---|---|---|
| Primary brand purple | `#3A2A6A` | Brand accents, selected headings, links, icon details |
| Signature amber | `#F4B342` | Primary CTA, small highlights, active states; use selectively |
| Main page background | `#FAF9F7` | Main canvas: soft white, not beige-heavy |
| Surface/card | `#FFFFFF` | Cards, contact sections, map container |
| Main text | `#1A1F2E` | Body copy and high-contrast headings |
| Secondary text | `#6B7280` | Supporting copy, labels, metadata |
| Borders/dividers | `#E7E3DD` | Fine separators and subtle card borders |

### Color hierarchy

- The page background should be a very light warm white (`#FAF9F7`) or plain white if the logo and content look cleaner against it.
- Purple is the signature brand color. Use it consistently, but not as a large dark background behind every section.
- Amber is the accent, not a second dominant background. Use it for the main call-to-action, small dividers, active indicators, and selected icons.
- Use dark text for readability. Do not use amber for long text or small text on white.
- Preserve the existing logo's original colors inside the logo asset. Do not recolor the logo to match the proposed screen palette.
- If a real logo asset shows the proposed values clash, tune the page palette around the logo rather than modifying the logo.

### Original brand colors supplied by the owner

- Logo background: `#ebe6e0`
- Amber circles / solid circle: `#f0ab22`
- Purple SNS mark: `#38265a`
- Surrounding logo text: `#141511`

The proposed palette makes small refinements but remains recognizably within this family.

## 3. Design language

- Premium, clean, understated, and modern.
- Generous white space and a clear hierarchy.
- Strong, confident typography without overly decorative styles.
- Soft corners and subtle borders; avoid excessive pills, floating cards, or deep shadows.
- Amber used sparingly to create visual emphasis.
- Purple used to anchor brand recognition.
- No unnecessary gradients, glow effects, glassmorphism, parallax, animated counters, or decorative blobs.
- No stock automotive imagery is required for the business card. Use the official logo and the company's actual assets if provided. Do not make up or generate a product photo that could be mistaken for a real SNS Co. product.
- Avoid a conventional multi-page navigation bar. This deliverable is one compact page, not a redesign of `sns-co.ir`.

## 4. Typography

- Use a clean modern sans-serif stack.
- For English, a system sans-serif stack is sufficient; use a bundled font only if it is already available or clearly worth the added setup.
- For Persian, choose a legible Persian-capable system fallback. Do not rely on an external font service for the page to remain usable.
- Use clear heading/body contrast, comfortable line-height, and readable paragraph width.
- Avoid all-caps body copy and overly tight letter spacing.

## 5. Page composition

1. **Compact header**
   - Company logo/brand mark.
   - A clear language switch (`فارسی` / `English`).
   - No unrelated navigation links.

2. **Company identity**
   - Official logo with enough clear space.
   - Company name in the active language.
   - Short descriptor: automotive parts manufacturer/supplier.
   - Established year: 2000.

3. **Description**
   - The supplied company description in English and a faithful Persian translation.
   - Keep the copy readable; do not hide it behind tabs or accordions.

4. **Contact actions**
   - Prominent Call, Email, and Website actions.
   - Instagram and LinkedIn presented as social links.
   - No WhatsApp action until the owner confirms the phone number is WhatsApp-enabled.

5. **Location**
   - Display the supplied address/location text.
   - Provide a clear Google Maps action.
   - A lightweight embedded map is optional. If included, keep it responsive and provide a working map link as fallback.

6. **Footer**
   - Minimal company name and established year.
   - Do not add unverified legal/copyright claims.

## 6. Responsive behavior

- Design mobile-first.
- On mobile, stack content in a clear vertical flow and keep the contact actions easy to tap.
- On desktop, center the content in a restrained max-width layout. A two-column arrangement is optional only if it improves the card and does not make the page look like a corporate homepage.
- Use fluid spacing and readable line lengths.
- No horizontal scrolling at 320 CSS pixels.
- Aim for tap targets around 44×44 CSS pixels.
- Check approximately 320, 375, 768, 1024, and 1440 CSS pixel widths.

## 7. Bilingual behavior and accessibility

- Persian mode: document `lang="fa"` and `dir="rtl"`.
- English mode: document `lang="en"` and `dir="ltr"`.
- Switching language updates all text, labels, button text, location labels, and footer copy.
- Do not mirror the logo or social icons.
- Keep phone numbers, email addresses, and URLs readable in RTL mode, using directional isolation where needed.
- Use semantic landmarks, a clear main heading, descriptive link labels, keyboard focus styles, and adequate contrast.
- Respect `prefers-reduced-motion`.

## 8. Quality bar

A visitor should recognize the brand, understand what the company does, and find a way to contact it within a few seconds. The design must look intentional and premium without adding complexity that does not help the digital business card.
