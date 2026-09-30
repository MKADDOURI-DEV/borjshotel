'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { X } from 'lucide-react';

const spaImages = [
{ id: 'spa-g-1', src: "https://img.rocket.new/generatedImages/rocket_gen_img_197874809-1772250293060.png", alt: 'Hammam traditionnel marocain avec vapeur, carrelage zellige et ambiance zen', tall: true },
{ id: 'spa-g-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ad86be97-1772968518955.png", alt: 'Piscine intérieure chauffée du spa avec lumière tamisée et ambiance sérénité', tall: false },
{ id: 'spa-g-3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a17e5232-1772261868764.png", alt: 'Table de massage avec huiles essentielles et décoration marocaine', tall: false },
{ id: 'spa-g-4', src: "https://images.unsplash.com/photo-1672983666814-a0e43bd3b1b9", alt: 'Espace relaxation du spa avec chaises longues et décoration naturelle', tall: true },
{ id: 'spa-g-5', src: "https://images.unsplash.com/photo-1732024739880-c748d1a57f94", alt: 'Salle de fitness moderne avec équipements cardio et vue sur le jardin', tall: false },
{ id: 'spa-g-6', src: "https://images.unsplash.com/photo-1655194911449-9f327e3d5a06", alt: 'Sauna en bois avec pierres chaudes et ambiance apaisante', tall: false }];


export default function SpaGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const item = spaImages?.find((g) => g?.id === lightbox);

  return (
    <section className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Galerie Spa</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Découvrez nos espaces de bien-être en images.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4">
          {spaImages?.map((img) =>
          <div
            key={img?.id}
            className="gallery-item break-inside-avoid mb-4"
            style={{ minHeight: img?.tall ? '320px' : '200px' }}
            onClick={() => setLightbox(img?.id)}
            role="button"
            tabIndex={0}
            aria-label={`Voir en plein écran: ${img?.alt}`}
            onKeyDown={(e) => e?.key === 'Enter' && setLightbox(img?.id)}>
            
              <div className="relative w-full" style={{ paddingBottom: img?.tall ? '133%' : '75%' }}>
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                unoptimized />
              
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
        aria-label="Galerie spa plein écran">
        
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