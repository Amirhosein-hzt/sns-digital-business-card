# Project: SNS Co. Digital Business Card

## 1. Purpose

Build a polished, production-ready, fully responsive single-page digital business card for Sayal Niroo Sanat Co. (SNS Co.), an automotive parts manufacturer. The page should make the company easy to identify, understand, contact, follow, and locate.

This is a digital business card, not a full corporate website redesign.

## 2. Company facts

Use the following information as the source of truth. Do not invent additional claims.

- English name: Sayal Niroo Sanat Co.
- Short name: SNS Co.
- Persian name: شرکت سیال نیرو صنعت
- Industry: Automotive parts manufacturing and supply
- Established: 2000
- Supplied Persian description (current, shown in the About Us dialog):
  > شرکت سیال نیرو صنعت در سال ۱۳۷۹ به منظور تولید پمپ و ادوات هیدرولیک تأسیس گردید و با گذشت زمان دامنه فعالیت‌های تولیدی خود را گسترش داده و اکنون مجموعه متنوع‌تری از قطعات خودرو را متناسب با نیازها و الزامات سخت‌گیرانه صنعت خودروسازی تولید می‌کند. این شرکت با تکیه بر سابقه، کیفیت پایدار، قیمت‌گذاری رقابتی و تأمین قابل‌اتکا، شریکی مناسب برای کسب‌وکارهایی است که به دنبال راهکارهای اثبات‌شده و قابل‌اعتماد در حوزه قطعات خودرو می‌باشد.
- English description (established 2000 = 1379 SH):
  > SNS Co. was established in 2000 to manufacture hydraulic pumps and accessories. Over time, it has expanded its production activities and now produces a more diverse range of automotive parts tailored to the demanding needs and requirements of the automotive industry. Relying on its track record, consistent quality, competitive pricing, and dependable supply, the company is a suitable partner for businesses seeking proven and reliable solutions in the field of automotive parts.
- Phone (Company): 02645332259
- Phone (Sales Department): 09021096896
- Phone (Procurement Department): 09386415001
- Email: info@sns-co.ir
- Main website: https://sns-co.ir
- Instagram: https://www.instagram.com/sayalniroosanat/
- LinkedIn: https://www.linkedin.com/company/sayal-niroo-sanat-company
- Google Maps share URL: https://goo.gl/maps/KXoz4iYw1VH2
- Location text (Persian): کرج، نظر آباد، شهرک صنعتی سپهر، رازی جنوبی، اردیبهشت شرقی، شرکت سیال نیرو صنعت
- Location text (English, English-address convention, smallest to largest): Sayal Niroo Sanat Co., Eastern Ordibehesht St., Southern Razi St., Sepehr Industrial Town, Nazarabad, Karaj, Alborz Province, Iran
- Languages: Persian and English
- Audience: potential customers, business partners, resellers, suppliers, manufacturers, and general visitors arriving through a QR code.

## 3. Requirements

### Must-have
- One-page website.
- Responsive layout for small mobile, large mobile, tablet, laptop, and desktop.
- Bilingual Persian/English language switch.
- Correct Persian RTL and English LTR layout.
- Company logo, names, and company description.
- Contact actions: call phone number, email, open main website.
- Social links: Instagram and LinkedIn.
- Location/address section with Google Maps link and an embedded map if it can be implemented without disproportionate complexity.
- Good keyboard navigation, visible focus states, readable contrast, semantic HTML, and accessible link labels.
- Working production build and concise run/deployment instructions.

### Should-have
- WhatsApp action only if the supplied phone number is confirmed to be WhatsApp-enabled. Do not assume that a landline supports WhatsApp.
- Copy email/address action only if easy to implement and reliable.
- Useful page title, meta description, favicon, Open Graph metadata, and a sensible theme color.
- Respect reduced-motion preferences; animation is optional and must be subtle.

### Out of scope
- Backend, database, login, admin dashboard, CMS, analytics integrations, contact forms requiring a server, complex routing, elaborate animation, and full product catalog.
- Recreating or redesigning the official company logo.
- Paid map APIs or API keys. Use a normal Google Maps link and, if appropriate, a basic embed that does not require a key.
- Adding product claims, certifications, factory capacity, awards, or other unverified facts.

## 4. Design approval gate

Do not begin implementation until the owner approves the visual direction and palette in `DESIGN.md`. This is a deliberate requirement to avoid spending implementation time on an unapproved design.

## 5. Technical direction

Preferred stack: Vite + React + TypeScript + CSS (plain CSS or CSS modules).

Use a lightweight implementation. Add dependencies only when they clearly save time or improve reliability. Do not add a full UI framework or internationalization framework for this single page.

Keep company details, language strings, contact data, and URLs in one clearly named data/configuration module wherever practical. Keep components small and understandable.

## 6. Language behavior

- Default language: Persian if no preference has been stored in the URL; otherwise use a simple English default only if implementation is cleaner. Prefer Persian as the initial language because the company operates in Iran.
- Provide a visible language toggle: فارسی / English.
- Switching language updates all page copy, labels, button text, address labels, and footer text.
- Set `document.documentElement.lang` and `document.documentElement.dir` to `fa`/`rtl` or `en`/`ltr`.
- Do not mirror brand logos or social platform icons.
- Use Persian-appropriate typography with a sensible system fallback. Do not download external fonts unless connectivity and licensing are clear.
- Translate the English description into natural, faithful Persian. Do not add claims or change the meaning.
- Ensure Persian phone numbers and Latin email/domain strings remain legible and correctly ordered.

## 7. Contact behavior

- Phone link should use `tel:02645332259`. Display the supplied phone number in a readable format; do not silently change its digits.
- Email link should use `mailto:info@sns-co.ir`.
- Website and social links should open the supplied destinations. Use `target="_blank"` only when appropriate and add `rel="noopener noreferrer"`.
- Google Maps should open the exact supplied map URL in a new tab. If the embed is blocked or unavailable, the location link must still work.
- Do not add an unverified WhatsApp link or fabricate a WhatsApp number.

## 8. Logo asset

The company has an existing logo, but the actual file has not yet been supplied to the coding agent.

- Look for an official logo asset in the project files before implementing a fallback.
- Expected location: `public/assets/logo.svg` or `public/assets/logo.png`.
- If no logo asset exists, create a clearly documented placeholder using the company initials/name and keep the logo path easy to replace. Do not search random third-party assets or recreate the official logo from memory.
- Ensure the logo has suitable sizing and object-fit behavior on light and dark backgrounds.

## 9. Success criteria

The project is complete when:
1. `npm run build` succeeds.
2. `npm run dev` starts the site with no runtime errors.
3. Persian and English modes both render correctly.
4. All supplied phone, email, website, social, and map links work.
5. The layout works without horizontal overflow at narrow mobile widths.
6. The site remains usable if the embedded map or third-party services fail.
7. No invented content, broken placeholder links, or console errors remain.
8. The README documents how to run and deploy the static build.
