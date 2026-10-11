import { company, type Language, type Strings } from '../data/company';

interface IdentityProps {
  language: Language;
  strings: Strings;
}

/**
 * Company identity: the official logo, the company name in the active
 * language with the other name as a secondary line, descriptor, established
 * year, and the supplied description (faithfully translated).
 */
export default function Identity({ language, strings: t }: IdentityProps) {
  const primaryName = language === 'fa' ? company.nameFa : company.nameEn;
  const secondaryName = language === 'fa' ? company.nameEn : company.nameFa;
  const secondaryLang = language === 'fa' ? 'en' : 'fa';
  const secondaryDir = language === 'fa' ? 'ltr' : 'rtl';

  return (
    <section className="identity" aria-labelledby="company-name">
      <img
        className="identity__logo"
        src={company.logoSrc}
        width={company.logoWidth}
        height={company.logoHeight}
        alt={t.logoAlt}
      />
      <h1 id="company-name" className="identity__name">
        {primaryName}
      </h1>
      <p className="identity__secondary-name" lang={secondaryLang} dir={secondaryDir}>
        {secondaryName}
      </p>
      <p className="identity__descriptor">{t.descriptor}</p>
      <p className="identity__established">{t.established}</p>
      <p className="identity__description">{t.description}</p>
    </section>
  );
}
