import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RestaurantHero from '@/app/restaurant/components/RestaurantHero';
import RestaurantVenues from '@/app/restaurant/components/RestaurantVenues';
import RestaurantGallery from '@/app/restaurant/components/RestaurantGallery';
import RestaurantHours from '@/app/restaurant/components/RestaurantHours';
import RestaurantCTA from '@/app/restaurant/components/RestaurantCTA';

export default function RestaurantPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <RestaurantHero />
        <RestaurantVenues />
        <RestaurantGallery />
        <RestaurantHours />
        <RestaurantCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}