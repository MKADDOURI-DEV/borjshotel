'use client';
import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import BookingBar from '@/components/BookingBar';
import { ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
{
  id: 'hero-slide-1',
  src: "https://images.unsplash.com/photo-1688329843453-4d58a1f4e4b9",
  alt: 'Piscine extérieure de l\'hôtel Borjs avec palmiers et ciel bleu de l\'Agadir'
},
{
  id: 'hero-slide-2',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_198dc27f4-1774728914318.png",
  alt: 'Suite luxueuse avec vue panoramique sur la baie d\'Agadir'
},
{
  id: 'hero-slide-3',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_17ed13955-1765556241687.png",
  alt: 'Terrasse rooftop avec vue sur la ville d\'Agadir au coucher du soleil'
}];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden" aria-label="Section héros de l'hôtel">
      {/* Background slides */}
      {heroSlides?.map((slide, i) =>
      <div
        key={slide?.id}
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: currentSlide === i ? 1 : 0 }}>
        
          <AppImage
          src={slide?.src}
          alt={slide?.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className="object-cover"
          unoptimized />
        
        </div>
      )}

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

      {/* Slide indicators */}
      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides?.map((_, i) =>
        <button
          key={`indicator-${i}`}
          onClick={() => setCurrentSlide(i)}
          className={`transition-all duration-300 rounded-full ${
          currentSlide === i ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/50'}`
          }
          aria-label={`Diapositive ${i + 1}`} />

        )}
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