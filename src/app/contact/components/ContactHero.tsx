import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ContactHero() {
  return (
    <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_4c73c0a3b-1790785055279.png"
        alt="Vue extérieure de l'hôtel Borjs avec architecture marocaine blanche et palmiers tropicaux à Agadir"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex items-end pb-12 px-6 lg:px-16 xl:px-24">
        <div>
          <div className="gold-divider mb-5" />
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-3">Contact</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Notre équipe est à votre disposition pour toute demande d&apos;information ou réservation.
          </p>
        </div>
      </div>
    </section>);

}