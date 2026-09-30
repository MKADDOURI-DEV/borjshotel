import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SpaHero from '@/app/spa-bien-tre/components/SpaHero';
import SpaServices from '@/app/spa-bien-tre/components/SpaServices';
import SpaGallery from '@/app/spa-bien-tre/components/SpaGallery';
import SpaBookingCTA from '@/app/spa-bien-tre/components/SpaBookingCTA';

export default function SpaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SpaHero />
        <SpaServices />
        <SpaGallery />
        <SpaBookingCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}