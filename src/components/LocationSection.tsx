import { company, type Strings } from '../data/company';
import { MapPinIcon } from './icons';

interface LocationSectionProps {
  strings: Strings;
}

/**
 * Location: the supplied address text, a prominent Google Maps action using
 * the exact supplied share URL, and an optional lightweight key-free embed.
 * The link is the source of truth — the embed is a bonus and the page works
 * without it.
 */
export default function LocationSection({ strings: t }: LocationSectionProps) {
  return (
    <section className="location" aria-labelledby="location-heading">
      <h2 id="location-heading" className="section-heading">
        {t.locationHeading}
      </h2>
      <div className="card location__card">
        <p className="location__label">
          <MapPinIcon className="location__pin" />
          <span>{t.addressLabel}</span>
        </p>
        <p className="location__address">
          <bdi>{company.location.text}</bdi>
        </p>
        <a
          className="action location__maps-link"
          href={company.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPinIcon className="action__icon" />
          <span>{t.openMapsLabel}</span>
          <span className="visually-hidden">({t.opensNewTab})</span>
        </a>
        <div className="location__map">
          <iframe
            src={company.location.embedUrl}
            title={t.mapEmbedTitle}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
