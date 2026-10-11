import { company, type Strings } from '../data/company';
import { GlobeIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon } from './icons';

interface ContactActionsProps {
  strings: Strings;
}

/**
 * Contact actions (call, email, website) and social links (Instagram,
 * LinkedIn). All targets come from src/data/company.ts. Latin values such as
 * the email address and the domain are LTR-isolated so they stay readable in
 * Persian (RTL) mode.
 */
export default function ContactActions({ strings: t }: ContactActionsProps) {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading">
        {t.contactHeading}
      </h2>
      <div className="card contact__card">
        <div className="contact__actions">
          <a className="action action--primary" href={company.phoneHref}>
            <PhoneIcon className="action__icon" />
            <span className="action__label">{t.callLabel}</span>
            <span className="action__value" dir="ltr">
              {company.phoneDisplay}
            </span>
          </a>
          <a className="action" href={`mailto:${company.email}`}>
            <MailIcon className="action__icon" />
            <span className="action__label">{t.emailLabel}</span>
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
            <GlobeIcon className="action__icon" />
            <span className="action__label">{t.websiteLabel}</span>
            <span className="action__value" dir="ltr">
              {company.websiteDisplay}
            </span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>
        </div>

        <div className="contact__social">
          <p className="contact__social-label">{t.socialHeading}</p>
          <a
            className="social-link"
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="social-link__icon" />
            <span>{t.instagramLabel}</span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>
          <a
            className="social-link"
            href={company.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="social-link__icon" />
            <span>{t.linkedinLabel}</span>
            <span className="visually-hidden">({t.opensNewTab})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
