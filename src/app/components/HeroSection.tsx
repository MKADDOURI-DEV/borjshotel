import React from 'react';
import BookingBar from '@/components/BookingBar';
import { ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden" aria-label="Section héros de l'hôtel">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/hero.mp4"
        poster="/assets/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 xl:px-24 pb-40">
        <div className="max-w-3xl">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-5">
            {[1, 2, 3, 4]?.map((s) =>
            <Star key={`star-${s}`} size={16} fill="currentColor" className="text-accent" />
            )}
            <span className="ml-2 text-white/70 text-sm font-medium tracking-wide">4 étoiles — Agadir, Maroc</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            Votre parenthèse<br />
            <span className="text-accent">de confort</span> à Agadir
          </h1>

          <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            Borjs Hotel Suites & Spa vous accueille dans un cadre élégant où confort, bien-être et hospitalité marocaine se rencontrent.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary text-base py-3.5 px-8">
              Réserver maintenant
            </button>
            <Link href="/chambres-suites" className="btn-outline text-base py-3.5 px-8">
              Découvrir l&apos;hôtel
            </Link>
          </div>
        </div>
      </div>

      {/* Booking bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 lg:px-12 xl:px-20 pb-6">
        <div className="max-w-screen-xl mx-auto">
          <BookingBar />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-8 z-10 hidden lg:flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>);

}