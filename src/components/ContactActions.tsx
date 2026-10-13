import { useEffect, useRef, useState } from 'react';
import { company, type Strings } from '../data/company';
import {
  DownloadIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from './icons';

interface ContactActionsProps {
  strings: Strings;
}

/**
 * The call dialog: lets the visitor pick which company unit to call before
 * handing off to the device's calling application. Each option is a plain
 * tel: link — no number is dialled until one is activated.
 */
function CallDialog({ strings: t, onClose }: { strings: Strings; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus the dialog itself on open, restore focus on close, and close on Escape.
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

  const options: Array<{ label: string; href: string }> = [
    { label: t.callOptionCompany, href: company.phone.company },
    { label: t.callOptionSales, href: company.phone.sales },
    { label: t.callOptionProcurement, href: company.phone.procurement },
  ];

  return (
    <div className="call-dialog__overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="call-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="call-dialog-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="call-dialog-title" className="call-dialog__title">
          {t.callDialogTitle}
        </h3>
        <div className="call-dialog__options">
          {options.map((option) => (
            <a key={option.href} className="call-dialog__option" href={option.href}>
              <PhoneIcon className="call-dialog__option-icon" size={18} />
              <span>{option.label}</span>
            </a>
          ))}
        </div>
        <button type="button" className="call-dialog__close" onClick={onClose}>
          {t.callDialogClose}
        </button>
      </div>
    </div>
  );
}

/**
 * All contact, social, and catalogue actions as one vertical list of uniform,
 * stretched links. Call us opens the unit-picker dialog; Download Catalogue
 * fetches the PDF from public/assets. On hover-capable (desktop) devices each
 * action reveals its concrete value (number, address, domain) above the label;
 * on touch devices the resting state stays clean and centered.
 */
export default function ContactActions({ strings: t }: ContactActionsProps) {
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading">
        {t.contactHeading}
      </h2>
      <div className="card contact__card">
        <div className="contact__actions">
          <button
            type="button"
            className="action action--primary"
            onClick={() => setIsCallDialogOpen(true)}
          >
            <span className="action__main">
              <PhoneIcon className="action__icon" />
              <span className="action__label">{t.callLabel}</span>
            </span>
            <span className="action__value" dir="ltr">
              {company.phoneDisplay}
            </span>
          </button>

          <a className="action" href={`mailto:${company.email}`}>
            <span className="action__main">
              <MailIcon className="action__icon" />
              <span className="action__label">{t.emailLabel}</span>
            </span>
            <span className="action__value" dir="ltr">
              {company.email}
            </span>
          </a>

          <a
            className="action"
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="action__main">
              <GlobeIcon className="action__icon" />
              <span className="action__label">{t.websiteLabel}</span>
            </span>
            <span className="action__value" dir="ltr">
              {company.websiteDisplay}
            </span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>

          <a
            className="action"
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="action__main">
              <InstagramIcon className="action__icon" />
              <span className="action__label">{t.instagramLabel}</span>
            </span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>

          <a
            className="action"
            href={company.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="action__main">
              <LinkedInIcon className="action__icon" />
              <span className="action__label">{t.linkedinLabel}</span>
            </span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>

          <a className="action" href={company.catalogueUrl} download>
            <span className="action__main">
              <DownloadIcon className="action__icon" />
              <span className="action__label">{t.downloadLabel}</span>
            </span>
          </a>
        </div>
      </div>

      {isCallDialogOpen && (
        <CallDialog strings={t} onClose={() => setIsCallDialogOpen(false)} />
      )}
    </section>
  );
}
