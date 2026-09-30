import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function SpaBookingCTA() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_14a32fed0-1772261238759.png"
        alt="Vue apaisante de l'espace wellness avec bougies, fleurs et ambiance spa de luxe"
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
          Réservez votre moment de détente
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl">
          Contactez notre équipe pour réserver vos soins spa, hammam ou massages. Tarifs sur demande.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base py-3.5 px-8">
            Réserver un soin
          </Link>
          <a
            href="https://wa.me/212528381919?text=Bonjour%2C+je+souhaite+r%C3%A9server+un+soin+au+spa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base py-3.5 px-8">
            
            WhatsApp
          </a>
        </div>
      </div>
    </section>);

}