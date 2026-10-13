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
  /** Supplied company phone numbers, grouped by unit. The company landline is
   *  the original supplied number; the sales and procurement numbers were
   *  supplied by the owner. All are used verbatim as tel: targets. */
  phone: {
    company: 'tel:02645332259',
    sales: 'tel:09021096896',
    procurement: 'tel:09386415001',
  },
  phoneDisplay: '026 4533 2259',

  /** Product catalogue PDF served from public/assets. The `download` attribute
   *  on the link makes the browser download it instead of navigating. */
  catalogueUrl: `${import.meta.env.BASE_URL}assets/product-catalogue.pdf`,

  email: 'info@sns-co.ir',
  websiteUrl: 'https://sns-co.ir',
  websiteDisplay: 'sns-co.ir',
  instagramUrl: 'https://www.instagram.com/sayalniroosanat/',
  linkedinUrl: 'https://www.linkedin.com/company/sayal-niroo-sanat-company',

  location: {
    /**
     * Exact supplied Google Maps share URL — always used for the map action.
     */
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
  aboutLabel: string;
  aboutTitle: string;
  dialogClose: string;
  logoAlt: string;
  descriptor: string;
  established: string;
  description: string;
  contactHeading: string;
  callLabel: string;
  emailLabel: string;
  websiteLabel: string;
  instagramLabel: string;
  linkedinLabel: string;
  downloadLabel: string;
  opensNewTab: string;
  callDialogTitle: string;
  callDialogClose: string;
  callOptionCompany: string;
  callOptionSales: string;
  callOptionProcurement: string;
  locationHeading: string;
  addressLabel: string;
  address: string;
  openMapsLabel: string;
  mapEmbedTitle: string;
  footerText: string;
}

export const strings: Record<Language, Strings> = {
  fa: {
    pageTitle: 'شرکت سیال نیرو صنعت | SNS Co.',
    pageDescription:
      'شرکت سیال نیرو صنعت (SNS)، از سال ۱۳۷۹ تولیدکننده پمپ و ادوات هیدرولیک و اکنون تولیدکننده مجموعه متنوع‌تری از قطعات خودرو متناسب با نیازهای سخت‌گیرانه صنعت خودروسازی.',
    skipToContent: 'پرش به محتوای اصلی',
    languageNavLabel: 'تغییر زبان',
    aboutLabel: 'درباره ما',
    aboutTitle: 'درباره ما',
    dialogClose: 'بستن',
    logoAlt: 'لوگوی شرکت سیال نیرو صنعت',
    descriptor: 'تولیدکننده و تأمین‌کننده قطعات خودرو',
    established: 'از سال ۱۳۷۹',
    description:
      'شرکت سیال نیرو صنعت در سال ۱۳۷۹ به منظور تولید پمپ و ادوات هیدرولیک تأسیس گردید و با گذشت زمان دامنه فعالیت‌های تولیدی خود را گسترش داده و اکنون مجموعه متنوع‌تری از قطعات خودرو را متناسب با نیازها و الزامات سخت‌گیرانه صنعت خودروسازی تولید می‌کند. این شرکت با تکیه بر سابقه، کیفیت پایدار، قیمت‌گذاری رقابتی و تأمین قابل‌اتکا، شریکی مناسب برای کسب‌وکارهایی است که به دنبال راهکارهای اثبات‌شده و قابل‌اعتماد در حوزه قطعات خودرو می‌باشد.',
    contactHeading: 'تماس با ما',
    callLabel: 'تماس تلفنی',
    emailLabel: 'ارسال ایمیل',
    websiteLabel: 'وب‌سایت شرکت',
    instagramLabel: 'اینستاگرام',
    linkedinLabel: 'لینکدین',
    downloadLabel: 'دانلود کاتالوگ',
    opensNewTab: 'در پنجره‌ای جدید باز می‌شود',
    callDialogTitle: 'واحدها',
    callDialogClose: 'بستن',
    callOptionCompany: 'شرکت',
    callOptionSales: 'واحد فروش',
    callOptionProcurement: 'واحد تامین',
    locationHeading: 'موقعیت مکانی',
    addressLabel: 'نشانی',
    address: 'کرج، نظر آباد، شهرک صنعتی سپهر، رازی جنوبی، اردیبهشت شرقی، شرکت سیال نیرو صنعت',
    openMapsLabel: 'مشاهده در نقشه گوگل',
    mapEmbedTitle: 'نقشه موقعیت شرکت سیال نیرو صنعت',
    footerText: 'شرکت سیال نیرو صنعت · از سال ۱۳۷۹',
  },
  en: {
    pageTitle: 'Sayal Niroo Sanat Co. (SNS Co.)',
    pageDescription:
      'SNS Co., established in 2000 to manufacture hydraulic pumps and accessories, now produces a more diverse range of automotive parts tailored to the demanding needs of the automotive industry.',
    skipToContent: 'Skip to main content',
    languageNavLabel: 'Change language',
    aboutLabel: 'About Us',
    aboutTitle: 'About Us',
    dialogClose: 'Close',
    logoAlt: 'SNS Co. logo',
    descriptor: 'Automotive parts manufacturer & supplier',
    established: 'Established 2000',
    description:
      'SNS Co. was established in 2000 to manufacture hydraulic pumps and accessories. Over time, it has expanded its production activities and now produces a more diverse range of automotive parts tailored to the demanding needs and requirements of the automotive industry. Relying on its track record, consistent quality, competitive pricing, and dependable supply, the company is a suitable partner for businesses seeking proven and reliable solutions in the field of automotive parts.',
    contactHeading: 'Contact us',
    callLabel: 'Call us',
    emailLabel: 'Email us',
    websiteLabel: 'Visit website',
    instagramLabel: 'Instagram',
    linkedinLabel: 'LinkedIn',
    downloadLabel: 'Download Catalogue',
    opensNewTab: 'opens in a new tab',
    callDialogTitle: 'Departments',
    callDialogClose: 'Close',
    callOptionCompany: 'Company',
    callOptionSales: 'Sales Department',
    callOptionProcurement: 'Procurement Department',
    locationHeading: 'Location',
    addressLabel: 'Address',
    address:
      'Sayal Niroo Sanat Co., Eastern Ordibehesht St., Southern Razi St., Sepehr Industrial Town, Nazarabad, Karaj, Alborz Province, Iran',
    openMapsLabel: 'Open in Google Maps',
    mapEmbedTitle: 'Map of SNS Co. location',
    footerText: 'SNS Co. · Established 2000',
  },
};

/** localStorage key for the visitor's language preference. */
export const LANGUAGE_STORAGE_KEY = 'sns-language';
