import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RoomsHero from '@/app/chambres-suites/components/RoomsHero';
import RoomsList from '@/app/chambres-suites/components/RoomsList';
import RoomsAmenities from '@/app/chambres-suites/components/RoomsAmenities';

export default function ChambresPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <RoomsHero />
        <RoomsList />
        <RoomsAmenities />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}