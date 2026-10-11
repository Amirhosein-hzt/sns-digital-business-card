import { useEffect, useState } from 'react';
import { LANGUAGE_STORAGE_KEY, strings, type Language } from './data/company';
import Header from './components/Header';
import Identity from './components/Identity';
import ContactActions from './components/ContactActions';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

/**
 * Persian first (the company operates in Iran). A previously stored
 * preference wins; if storage is unavailable, fall back to Persian.
 */
function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'fa' || stored === 'en') return stored;
  } catch {
    // Storage can be unavailable (e.g. privacy modes) — use the default.
  }
  return 'fa';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = strings[language];

  // Keep document language, direction, title, and description in sync.
  // Switching language is pure client state — no page reload.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.pageDescription);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures; the language still switches for this visit.
    }
  }, [language, t]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Header language={language} strings={t} onSelectLanguage={setLanguage} />
      <main id="main" className="container" tabIndex={-1}>
        <Identity language={language} strings={t} />
        <ContactActions strings={t} />
        <LocationSection strings={t} />
      </main>
      <Footer strings={t} />
    </>
  );
}
