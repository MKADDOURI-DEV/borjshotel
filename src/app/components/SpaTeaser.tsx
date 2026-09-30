import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function SpaTeaser() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden" aria-label="Spa et bien-être">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1a24d59e4-1767793851948.png"
        alt="Espace spa luxueux avec hammam traditionnel marocain, bougies et ambiance zen"
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 w-full">
          <div className="max-w-xl">
            <div className="gold-divider mb-6" />
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Spa & Bien-être</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Un moment<br />pour vous
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Plongez dans un univers de détente absolue. Notre spa traditionnel marocain propose hammam, massages thérapeutiques, sauna, soins de beauté et piscine intérieure chauffée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/spa-bien-tre" className="btn-primary text-base py-3.5 px-8">
                Découvrir le Spa
              </Link>
              <Link href="/contact" className="btn-outline text-base py-3.5 px-8">
                Réserver un soin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}