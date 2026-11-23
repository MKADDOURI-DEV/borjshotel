import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MeetingHero() {
  return (
    <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
      <AppImage
        src="/assets/images/meeting/salle-reunion-01.jpg"
        alt="Salle de réunion du Borjs Hotel avec table en U, écran de projection et tapis marocain"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        unoptimized />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="gold-divider mx-auto mb-6" />
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Séminaires & événements</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-5">Salle de réunion</h1>
        <p className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed">
          Un espace professionnel et élégant pour vos réunions, séminaires et rencontres d&apos;affaires à Agadir.
        </p>
      </div>
    </section>
  );
}
