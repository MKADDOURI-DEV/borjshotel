import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function RoomsHero() {
  return (
    <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_144b1271a-1783617754894.png"
        alt="Chambre luxueuse de l'hôtel Borjs avec vue panoramique et décoration marocaine raffinée"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex items-end pb-16 px-6 lg:px-16 xl:px-24">
        <div>
          <div className="gold-divider mb-5" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Hébergement</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-3">Chambres & Suites</h1>
          <p className="text-white/75 text-lg max-w-xl">
            48 chambres et suites spacieuses alliant confort moderne et hospitalité marocaine.
          </p>
        </div>
      </div>
    </section>);

}