'use client';
import React from 'react';
import PhotoGrid from '@/components/PhotoGrid';

const restaurantImages = [
{ id: 'rg-1', src: "/assets/images/restaurant/dsc1474.jpg", alt: 'Salle de restaurant principale avec tables dressées et décoration marocaine' },
{ id: 'rg-2', src: "/assets/images/restaurant/dsc1475.jpg", alt: 'Salle du restaurant avec sièges colorés' },
{ id: 'rg-3', src: "/assets/images/restaurant/dsc1481.jpg", alt: 'Salle bar et brasserie avec écrans' },
{ id: 'rg-4', src: "/assets/images/restaurant/dsc1478.jpg", alt: 'Mur de bouteilles du bar' },
{ id: 'rg-5', src: "/assets/images/pool/dsc1507.jpg", alt: 'Bar de la piscine' },
{ id: 'rg-6', src: "/assets/images/restaurant/dsc1479.jpg", alt: 'Comptoir du bar avec éclairage chaleureux' }];


export default function RestaurantGallery() {
  return (
    <section className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Galerie Restaurant</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Une invitation visuelle à découvrir nos espaces et notre cuisine.
          </p>
        </div>
        <PhotoGrid photos={restaurantImages.map((g) => ({ src: g.src, alt: g.alt }))} label="Galerie Restaurant" />
      </div>
    </section>);
}
