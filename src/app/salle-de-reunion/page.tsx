import React from 'react';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MeetingHero from '@/app/salle-de-reunion/components/MeetingHero';
import MeetingRoomSection from '@/app/components/MeetingRoomSection';

export const metadata: Metadata = {
  title: 'Salle de réunion | Borjs Hotel Suites & Spa Agadir',
  description: 'Salle de réunion et de séminaire du Borjs Hotel Suites & Spa à Agadir : un espace professionnel et élégant pour vos événements.',
};

export default function SalleDeReunionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MeetingHero />
        <MeetingRoomSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
