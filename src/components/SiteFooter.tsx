import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SOCIAL_LINKS, WHATSAPP_URL } from '@/lib/config';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.9 9.9 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.88 9.89zM20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.44-8.41z" />
  </svg>
);

const footerLinks = [
  { key: 'footer-accueil', label: 'Accueil', href: '/' },
  { key: 'footer-chambres', label: 'Chambres & Suites', href: '/chambres-suites' },
  { key: 'footer-restaurant', label: 'Restaurant', href: '/restaurant' },
  { key: 'footer-spa', label: 'Spa & Bien-être', href: '/spa-bien-tre' },
  { key: 'footer-contact', label: 'Contact', href: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div className="inline-block bg-white rounded-xl p-1">
                <AppLogo size={96} />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Un cadre élégant où confort, bien-être et hospitalité marocaine se rencontrent au cœur d&apos;Agadir.
            </p>
            <div className="flex items-start gap-2 text-white/60 text-sm mb-3">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
              <span>Lot N°F7, Cité Baie des Palmiers, Agadir 80000, Maroc</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Phone size={16} className="flex-shrink-0 text-accent" />
              <a href="tel:+212528381919" className="hover:text-white transition-colors">
                +212 528 381 919
              </a>
            </div>
            <div className="flex items-start gap-2 text-white/60 text-sm mb-6">
              <Mail size={16} className="mt-0.5 flex-shrink-0 text-accent" />
              <div className="flex flex-col gap-1">
                <a href="mailto:Reservation@borjshotelagadir.com" className="hover:text-white transition-colors">
                  Reservation@borjshotelagadir.com
                </a>
                <a href="mailto:Commercial@borjshotelagadir.com" className="hover:text-white transition-colors">
                  Commercial@borjshotelagadir.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.instagram && (
<a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
)}
              {SOCIAL_LINKS.facebook && (
<a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
)}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks?.map((link) => (
                <li key={link?.key}>
                  <Link
                    href={link?.href}
                    className="text-white/60 text-sm hover:text-accent transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {['Piscine', 'Spa & Hammam', 'Rooftop Bar', 'Room Service', 'Navette']?.map((s) => (
                <li key={`footer-service-${s}`}>
                  <span className="text-white/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Borjs Hotel Suites & Spa. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">Agadir, Maroc</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <a href="mailto:Reservation@borjshotelagadir.com" className="text-white/40 text-xs hover:text-accent transition-colors">
              Reservation@borjshotelagadir.com
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <a href="mailto:Commercial@borjshotelagadir.com" className="text-white/40 text-xs hover:text-accent transition-colors">
              Commercial@borjshotelagadir.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}