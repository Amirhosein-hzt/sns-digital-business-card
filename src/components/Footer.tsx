import type { Strings } from '../data/company';

interface FooterProps {
  strings: Strings;
}

/** Minimal footer: company name and established year, nothing unverified. */
export default function Footer({ strings: t }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="site-footer__text">{t.footerText}</p>
      </div>
    </footer>
  );
}
