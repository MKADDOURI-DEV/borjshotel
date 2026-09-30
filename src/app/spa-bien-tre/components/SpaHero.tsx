import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function SpaHero() {
  return (
    <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1a24d59e4-1767793851948.png"
        alt="Espace spa luxueux avec hammam traditionnel marocain, lumières tamisées et ambiance de détente"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized />
      
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="gold-divider mx-auto mb-6" />
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Bien-être & Sérénité</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-5">
          Un moment pour vous
        </h1>
        <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
          Laissez-vous envelopper par la chaleur des soins traditionnels marocains dans notre espace spa dédié à votre bien-être.
        </p>
      </div>
    </section>);

}