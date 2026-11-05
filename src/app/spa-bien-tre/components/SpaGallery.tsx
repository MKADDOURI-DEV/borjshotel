'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { X } from 'lucide-react';

const spaImages = [
{ id: 'spa-g-1', src: "/assets/images/spa/dsc1384.jpg", alt: 'Hammam traditionnel marocain avec vapeur, carrelage zellige et ambiance zen', tall: true },
{ id: 'spa-g-2', src: "/assets/images/spa/dsc1386.jpg", alt: 'Espace hammam avec vasque en zellige', tall: false },
{ id: 'spa-g-3', src: "/assets/images/spa/dsc1399.jpg", alt: 'Table de massage avec huiles essentielles et décoration marocaine', tall: false },
{ id: 'spa-g-4', src: "/assets/images/spa/dsc1404.jpg", alt: 'Salle de massage double avec niches en tadelakt', tall: true },
{ id: 'spa-g-5', src: "/assets/images/spa/dsc1392.jpg", alt: 'Soins et produits naturels du hammam', tall: false },
{ id: 'spa-g-6', src: "/assets/images/spa/dsc1395.jpg", alt: 'Sauna en bois', tall: false }];


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