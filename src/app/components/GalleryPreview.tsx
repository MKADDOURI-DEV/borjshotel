'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
{ id: 'gallery-1', src: "https://images.unsplash.com/photo-1581670292646-c86f6a56212e", alt: 'Piscine extérieure courbée de l\'hôtel Borjs avec palmiers et ciel bleu', category: 'Piscine', tall: true },
{ id: 'gallery-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c7f9a767-1776068206562.png", alt: 'Chambre élégante avec lit king-size et décoration marocaine raffinée', category: 'Chambres', tall: false },
{ id: 'gallery-3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a24d59e4-1767793851948.png", alt: 'Espace spa avec hammam traditionnel marocain et ambiance zen', category: 'Spa', tall: false },
{ id: 'gallery-4', src: "https://images.unsplash.com/photo-1714108433527-49531184f08e", alt: 'Restaurant élégant avec tables dressées et décoration marocaine', category: 'Restaurant', tall: false },
{ id: 'gallery-5', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9bd7968-1773141707263.png", alt: 'Suite luxueuse avec salon séparé et vue sur la piscine', category: 'Suites', tall: true },
{ id: 'gallery-6', src: "https://img.rocket.new/generatedImages/rocket_gen_img_17e3e8c9f-1785953061341.png", alt: 'Façade blanche de l\'hôtel Borjs entourée de palmiers tropicaux', category: 'Hôtel', tall: false }];


export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const lightboxItem = galleryItems?.find((g) => g?.id === lightbox);

  return (
    <section className="section-padding bg-secondary" id="galerie">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Galerie</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Découvrez l&apos;hôtel</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Une sélection d&apos;images pour vous plonger dans l&apos;ambiance unique du Borjs Hotel.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-3 xl:columns-3 gap-4 space-y-4">
          {galleryItems?.map((item) =>
          <div
            key={item?.id}
            className="gallery-item break-inside-avoid mb-4 rounded-xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: item?.tall ? '3/4' : '4/3' }}
            onClick={() => setLightbox(item?.id)}
            role="button"
            tabIndex={0}
            aria-label={`Voir ${item?.alt} en plein écran`}
            onKeyDown={(e) => e?.key === 'Enter' && setLightbox(item?.id)}>
            
              <div className="relative w-full h-full" style={{ minHeight: item?.tall ? '320px' : '220px' }}>
                <AppImage
                src={item?.src}
                alt={item?.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                unoptimized />
              
                <div className="gallery-overlay">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-3 left-3 bg-foreground/70 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {item?.category}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && lightboxItem &&
      <div
        className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Galerie plein écran">
        
          <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setLightbox(null)}
          aria-label="Fermer">
          
            <X size={20} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e?.stopPropagation()}>
            <AppImage
            src={lightboxItem?.src}
            alt={lightboxItem?.alt}
            fill
            sizes="90vw"
            className="object-contain"
            unoptimized />
          
          </div>
          <p className="absolute bottom-6 text-white/60 text-sm">{lightboxItem?.alt}</p>
        </div>
      }
    </section>);

}