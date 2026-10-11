import { company, type Language, type Strings } from '../data/company';

interface HeaderProps {
  language: Language;
  strings: Strings;
  onSelectLanguage: (language: Language) => void;
}

/**
 * Compact header: brand wordmark on the start side and the language switch on
 * the end side. No navigation links — this is a one-page business card.
 */
export default function Header({ language, strings: t, onSelectLanguage }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <span className="site-header__brand">{company.shortName}</span>
        <nav className="lang-switch" aria-label={t.languageNavLabel}>
          <button
            type="button"
            className="lang-switch__button"
            aria-pressed={language === 'fa'}
            onClick={() => onSelectLanguage('fa')}
          >
            فارسی
          </button>
          <button
            type="button"
            className="lang-switch__button"
            aria-pressed={language === 'en'}
            onClick={() => onSelectLanguage('en')}
          >
            English
          </button>
        </nav>
      </div>
    </header>
  );
}
