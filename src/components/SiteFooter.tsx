import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { MapPin, Phone, Star } from 'lucide-react';

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
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Star size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Star size={16} />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="TripAdvisor"
              >
                <Star size={16} />
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
              {['Piscines', 'Spa & Hammam', 'Fitness', 'Rooftop Bar', 'Room Service', 'Navette']?.map((s) => (
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
            <a href="mailto:contact@borjshotelagadir.com" className="text-white/40 text-xs hover:text-accent transition-colors">
              contact@borjshotelagadir.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}