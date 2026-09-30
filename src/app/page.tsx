import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from '@/app/components/HeroSection';
import IntroSection from '@/app/components/IntroSection';
import RoomsPreview from '@/app/components/RoomsPreview';
import SpaTeaser from '@/app/components/SpaTeaser';
import PoolSection from '@/app/components/PoolSection';
import RestaurantTeaser from '@/app/components/RestaurantTeaser';
import WhyChoose from '@/app/components/WhyChoose';
import GalleryPreview from '@/app/components/GalleryPreview';
import LocationSection from '@/app/components/LocationSection';
import ServicesGrid from '@/app/components/ServicesGrid';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroSection />
        <RoomsPreview />
        <SpaTeaser />
        <PoolSection />
        <RestaurantTeaser />
        <ServicesGrid />
        <WhyChoose />
        <GalleryPreview />
        <LocationSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}