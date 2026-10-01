'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navLinks = [
  { key: 'nav-accueil', label: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' }, href: '/' },
  { key: 'nav-chambres', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites', ar: 'الغرف والأجنحة' }, href: '/chambres-suites' },
  { key: 'nav-restaurant', label: { fr: 'Restaurant', en: 'Restaurant', ar: 'المطعم' }, href: '/restaurant' },
  { key: 'nav-spa', label: { fr: 'Spa & Bien-être', en: 'Spa & Wellness', ar: 'السبا والعافية' }, href: '/spa-bien-tre' },
  { key: 'nav-contact', label: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' }, href: '/contact' },
];

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

interface SiteHeaderProps {
  currentLang?: 'fr' | 'en' | 'ar';
  onLangChange?: (lang: 'fr' | 'en' | 'ar') => void;
}

export default function SiteHeader({ currentLang = 'fr', onLangChange }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<'fr' | 'en' | 'ar'>(currentLang);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangSelect = (lang: 'fr' | 'en' | 'ar') => {
    setActiveLang(lang);
    setLangOpen(false);
    onLangChange?.(lang);
  };

  const bookingLabel = { fr: 'Réserver', en: 'Book Now', ar: 'احجز الآن' };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
        dir={activeLang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0" aria-label="Borjs Hotel Suites & Spa — Accueil">
              <div className="bg-white rounded-lg shadow-sm p-0.5">
                <AppLogo size={64} />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-150 ${
                    isScrolled
                      ? 'text-foreground hover:text-primary hover:bg-secondary'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label[activeLang]}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                    isScrolled
                      ? 'text-foreground hover:bg-secondary'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                  aria-label="Changer de langue"
                >
                  <Globe size={15} />
                  <span>{activeLang.toUpperCase()}</span>
                  <ChevronDown size={13} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-luxury overflow-hidden animate-slide-down min-w-[80px]">
                    {languages.map((lang) => (
                      <button
                        key={`lang-${lang.code}`}
                        onClick={() => handleLangSelect(lang.code as 'fr' | 'en' | 'ar')}
                        className={`w-full px-4 py-2 text-sm font-semibold text-left hover:bg-secondary transition-colors ${
                          activeLang === lang.code ? 'text-primary bg-secondary' : 'text-foreground'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Book CTA */}
              <button className="btn-primary text-sm py-2.5 px-6">
                {bookingLabel[activeLang]}
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <button className="btn-primary text-sm py-2 px-4">
                {bookingLabel[activeLang]}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-foreground hover:bg-secondary' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-luxury animate-slide-down">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.key}`}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-secondary hover:text-primary transition-colors"
                >
                  {link.label[activeLang]}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <p className="px-4 py-2 text-xs text-muted-foreground font-semibold uppercase tracking-widest">
                  Langue
                </p>
                <div className="flex gap-2 px-4 pb-2">
                  {languages.map((lang) => (
                    <button
                      key={`mobile-lang-${lang.code}`}
                      onClick={() => handleLangSelect(lang.code as 'fr' | 'en' | 'ar')}
                      className={`px-4 py-1.5 rounded-md text-sm font-semibold border transition-colors ${
                        activeLang === lang.code
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground hover:bg-secondary'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}