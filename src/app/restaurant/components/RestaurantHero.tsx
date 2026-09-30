import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function RestaurantHero() {
  return (
    <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_4561b5712-1789113488132.png"
        alt="Restaurant élégant de l'hôtel Borjs avec tables dressées, décoration marocaine et ambiance chaleureuse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex items-end pb-16 px-6 lg:px-16 xl:px-24">
        <div>
          <div className="gold-divider mb-5" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Gastronomie</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-3">Restaurant</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Trois espaces de restauration pour savourer les saveurs du Maroc et de la Méditerranée.
          </p>
        </div>
      </div>
    </section>);

}