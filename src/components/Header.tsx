import { useEffect, useRef, useState } from 'react';
import { type Language, type Strings } from '../data/company';

interface HeaderProps {
  language: Language;
  strings: Strings;
  onSelectLanguage: (language: Language) => void;
}

/**
 * About Us dialog: shows the company description behind a compact button in
 * the header. Direction follows the document (set on <html>), so Persian is
 * RTL and English is LTR automatically.
 */
function AboutDialog({ strings: t, onClose }: { strings: Strings; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="call-dialog__overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="call-dialog about-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-dialog-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="about-dialog-title" className="call-dialog__title">
          {t.aboutTitle}
        </h3>
        <p className="about-dialog__text">{t.description}</p>
        <button type="button" className="call-dialog__close" onClick={onClose}>
          {t.dialogClose}
        </button>
      </div>
    </div>
  );
}

/**
 * Compact header: the About Us button on the start side and the language
 * switch on the end side. No navigation links — this is a one-page business
 * card.
 */
export default function Header({ language, strings: t, onSelectLanguage }: HeaderProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <button
          type="button"
          className="about-button"
          onClick={() => setIsAboutOpen(true)}
        >
          {t.aboutLabel}
        </button>
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

      {isAboutOpen && (
        <AboutDialog strings={t} onClose={() => setIsAboutOpen(false)} />
      )}
    </header>
  );
}
