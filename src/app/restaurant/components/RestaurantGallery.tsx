'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { X } from 'lucide-react';

const restaurantImages = [
{ id: 'rg-1', src: "https://img.rocket.new/generatedImages/rocket_gen_img_144899322-1784270064298.png", alt: 'Salle de restaurant principale avec tables dressées et décoration marocaine' },
{ id: 'rg-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_15be6ae71-1773070157306.png", alt: 'Buffet petit-déjeuner avec fruits frais et viennoiseries' },
{ id: 'rg-3', src: "https://images.unsplash.com/photo-1706893763563-6213f131cef2", alt: 'Rooftop bar au coucher du soleil avec vue sur Agadir' },
{ id: 'rg-4', src: "https://images.unsplash.com/photo-1697754670540-7b0e5b52f38e", alt: 'Plat gastronomique marocain avec tajine et épices colorées' },
{ id: 'rg-5', src: "https://img.rocket.new/generatedImages/rocket_gen_img_41f052f69-1790785055565.png", alt: 'Cocktails colorés au rooftop bar de l\'hôtel Borjs' },
{ id: 'rg-6', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c18b2817-1772494416729.png", alt: 'Cuisine méditerranéenne fraîche avec légumes grillés et herbes aromatiques' }];


export default function RestaurantGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const item = restaurantImages?.find((g) => g?.id === lightbox);

  return (
    <section className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Galerie Restaurant</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Une invitation visuelle à découvrir nos espaces et notre cuisine.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {restaurantImages?.map((img, i) =>
          <div
            key={img?.id}
            className="gallery-item rounded-xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: i === 0 || i === 5 ? '4/3' : '1/1' }}
            onClick={() => setLightbox(img?.id)}
            role="button"
            tabIndex={0}
            aria-label={`Voir en plein écran: ${img?.alt}`}
            onKeyDown={(e) => e?.key === 'Enter' && setLightbox(img?.id)}>
            
              <div className="relative w-full h-full" style={{ minHeight: '200px' }}>
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                unoptimized />
              
                <div className="gallery-overlay" />
              </div>
            </div>
          )}
        </div>
      </div>

      {lightbox && item &&
      <div
        className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Galerie restaurant plein écran">
        
          <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setLightbox(null)}
          aria-label="Fermer">
          
            <X size={20} />
          </button>
          <div className="relative max-w-4xl w-full h-[80vh]" onClick={(e) => e?.stopPropagation()}>
            <AppImage src={item?.src} alt={item?.alt} fill sizes="90vw" className="object-contain" unoptimized />
          </div>
        </div>
      }
    </section>);

}