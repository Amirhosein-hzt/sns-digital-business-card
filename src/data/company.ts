// ---------------------------------------------------------------------------
// Single source of truth for all company content, contact data, links and
// bilingual UI strings (per AGENTS.md / PROJECT.md).
// To update company details: change this file (and swap the logo file in
// public/assets/). No component edits should be necessary.
// ---------------------------------------------------------------------------

export type Language = 'fa' | 'en';

export const company = {
  /** Persian legal name (supplied). */
  nameFa: 'شرکت سیال نیرو صنعت',
  /** English name (supplied). */
  nameEn: 'Sayal Niroo Sanat Co.',
  /** Short brand name (supplied). */
  shortName: 'SNS Co.',
  /** Established year (supplied). */
  establishedYear: 2000,

  /** Official logo, supplied in public/assets. Used as-is; never recolored or
   *  mirrored. BASE_URL keeps the path valid under any deploy base (e.g. the
   *  GitHub Pages project-site subpath). */
  logoSrc: `${import.meta.env.BASE_URL}assets/snsco-logo.png`,
  logoWidth: 501,
  logoHeight: 498,

  /** Phone exactly as supplied: 02645332259. Display groups the same digits for readability. */
  phoneHref: 'tel:02645332259',
  phoneDisplay: '026 4533 2259',

  email: 'info@sns-co.ir',
  websiteUrl: 'https://sns-co.ir',
  websiteDisplay: 'sns-co.ir',
  instagramUrl: 'https://www.instagram.com/sayalniroosanat/',
  linkedinUrl: 'https://www.linkedin.com/company/sayal-niroo-sanat-company',

  location: {
    /** Supplied location text (plus code + locality). Kept verbatim. */
    text: 'WHGQ+954, Nazarabad, Alborz Province, Iran',
    /** Exact supplied Google Maps share URL — always used for the map action. */
    mapsUrl: 'https://goo.gl/maps/KXoz4iYw1VH2',
    /**
     * Lightweight, key-free Google Maps embed built from the supplied plus
     * code. If this embed is blocked or unavailable, the mapsUrl link above
     * must still work — it is always rendered as the primary map action.
     */
    embedUrl:
      'https://maps.google.com/maps?q=WHGQ%2B954%2C%20Nazarabad%2C%20Alborz%20Province%2C%20Iran&z=14&output=embed',
  },
} as const;

/** All UI copy for each language. */
export interface Strings {
  pageTitle: string;
  pageDescription: string;
  skipToContent: string;
  languageNavLabel: string;
  logoAlt: string;
  descriptor: string;
  established: string;
  description: string;
  contactHeading: string;
  callLabel: string;
  emailLabel: string;
  websiteLabel: string;
  socialHeading: string;
  instagramLabel: string;
  linkedinLabel: string;
  opensNewTab: string;
  locationHeading: string;
  addressLabel: string;
  openMapsLabel: string;
  mapEmbedTitle: string;
  footerText: string;
}

export const strings: Record<Language, Strings> = {
  fa: {
    pageTitle: 'شرکت سیال نیرو صنعت | SNS Co.',
    pageDescription:
      'شرکت سیال نیرو صنعت (SNS)، از سال ۲۰۰۰ تولیدکننده و تأمین‌کننده معتبر قطعات خودرو است؛ بیش از همه شناخته‌شده به‌واسطه پمپ‌های هیدرولیک و طیفی رو به رشد از قطعات باکیفیت.',
    skipToContent: 'پرش به محتوای اصلی',
    languageNavLabel: 'تغییر زبان',
    logoAlt: 'لوگوی شرکت سیال نیرو صنعت',
    descriptor: 'تولیدکننده و تأمین‌کننده قطعات خودرو',
    established: 'از سال ۲۰۰۰',
    description:
      'شرکت سیال نیرو صنعت، از سال ۲۰۰۰، تولیدکننده و تأمین‌کننده‌ای معتبر در حوزه قطعات خودرو است که طیفی رو به رشد از قطعات مطمئن و باکیفیت را برای واسطه‌فروشان و خودروسازان عرضه می‌کند. این شرکت که بیش از همه به‌واسطه پمپ‌های هیدرولیک و متعلقات آن‌ها شناخته می‌شود، دامنه تولید خود را گسترش داده است تا سبد گسترده‌تری از قطعات خودرو را که برای پاسخ‌گویی به نیازهای سخت‌گیرانه صنعت طراحی شده‌اند، پوشش دهد. سیال نیرو صنعت با شهرتی که به‌واسطه کیفیت یکدست، قیمت رقابتی و تأمین قابل‌اتکا به دست آورده است، شریکی عملی برای کسب‌وکارهایی است که به‌دنبال راهکارهای خودرویی آزموده‌شده هستند.',
    contactHeading: 'تماس با ما',
    callLabel: 'تماس تلفنی',
    emailLabel: 'ارسال ایمیل',
    websiteLabel: 'وب‌سایت شرکت',
    socialHeading: 'ما را دنبال کنید',
    instagramLabel: 'اینستاگرام',
    linkedinLabel: 'لینکدین',
    opensNewTab: 'در پنجره‌ای جدید باز می‌شود',
    locationHeading: 'موقعیت مکانی',
    addressLabel: 'نشانی',
    openMapsLabel: 'مشاهده در نقشه گوگل',
    mapEmbedTitle: 'نقشه موقعیت شرکت سیال نیرو صنعت',
    footerText: 'شرکت سیال نیرو صنعت · از سال ۲۰۰۰',
  },
  en: {
    pageTitle: 'Sayal Niroo Sanat Co. (SNS Co.)',
    pageDescription:
      'SNS Co., established in 2000, is a trusted automotive parts manufacturer and supplier, best known for its hydraulic pumps and a growing range of reliable, high-quality components.',
    skipToContent: 'Skip to main content',
    languageNavLabel: 'Change language',
    logoAlt: 'SNS Co. logo',
    descriptor: 'Automotive parts manufacturer & supplier',
    established: 'Established 2000',
    description:
      'SNS Co., established in 2000, is a trusted automotive parts manufacturer and supplier serving resellers and auto manufacturers with a growing range of reliable, high-quality components. Best known for its hydraulic pumps and accessories, the company has expanded its production to cover a broader portfolio of auto parts designed to meet demanding industry needs. With a strong reputation for consistent quality, competitive pricing, and dependable supply, SNS Co. is a practical partner for businesses looking for proven automotive solutions.',
    contactHeading: 'Contact us',
    callLabel: 'Call us',
    emailLabel: 'Email us',
    websiteLabel: 'Visit website',
    socialHeading: 'Follow us',
    instagramLabel: 'Instagram',
    linkedinLabel: 'LinkedIn',
    opensNewTab: 'opens in a new tab',
    locationHeading: 'Location',
    addressLabel: 'Address',
    openMapsLabel: 'Open in Google Maps',
    mapEmbedTitle: 'Map of SNS Co. location',
    footerText: 'SNS Co. · Established 2000',
  },
};

/** localStorage key for the visitor's language preference. */
export const LANGUAGE_STORAGE_KEY = 'sns-language';
