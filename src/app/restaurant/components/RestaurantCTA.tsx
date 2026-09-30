import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function RestaurantCTA() {
  return (
    <section className="relative h-[380px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_4d9c7a00d-1790785056692.png"
        alt="Cocktails colorés et ambiance lounge au rooftop bar de l'hôtel Borjs avec vue sur Agadir"
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
          Réservez votre table
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl">
          Pour les dîners en groupe ou occasions spéciales, contactez-nous pour une réservation personnalisée.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base py-3.5 px-8">
            Réserver une table
          </Link>
          <a
            href="tel:+212528381919"
            className="btn-outline text-base py-3.5 px-8">
            
            Appeler l&apos;hôtel
          </a>
        </div>
      </div>
    </section>);

}