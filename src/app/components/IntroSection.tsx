import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { Wifi, Waves, UtensilsCrossed, Sparkles, Clock, BedDouble } from 'lucide-react';

const benefits = [
{ key: 'benefit-suites', icon: BedDouble, label: 'Suites spacieuses', desc: '48 suites confortables' },
{ key: 'benefit-spa', icon: Sparkles, label: 'Spa & Bien-être', desc: 'Hammam, massages, sauna' },
{ key: 'benefit-pool', icon: Waves, label: 'Piscines', desc: 'Extérieure & intérieure chauffée' },
{ key: 'benefit-restaurant', icon: UtensilsCrossed, label: 'Restaurants', desc: '3 restaurants sur place' },
{ key: 'benefit-wifi', icon: Wifi, label: 'Wi-Fi gratuit', desc: 'Dans tout l\'hôtel' },
{ key: 'benefit-reception', icon: Clock, label: 'Réception 24h/24', desc: 'À votre service' }];


export default function IntroSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_4dc1e2c4c-1790785055824.png"
                alt="Intérieur élégant de l'hôtel Borjs avec décoration marocaine raffinée et mobilier luxueux"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized />
              
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-5 shadow-luxury hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">48</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Suites & Chambres</p>
                  <p className="text-muted-foreground text-xs">Espace et confort</p>
                </div>
              </div>
            </div>
            {/* Moroccan pattern accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 moroccan-pattern rounded-xl opacity-60 hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <div className="gold-divider mb-6" />
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Bienvenue
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Bienvenue au Borjs<br />
              <span className="text-primary">Hotel Suites & Spa</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4">
              Niché au cœur de la Cité Baie des Palmiers à Agadir, le Borjs Hotel Suites & Spa est un havre de sérénité alliant architecture marocaine authentique et confort moderne.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              À seulement 10 minutes à pied de la plage d&apos;Agadir, notre établissement 4 étoiles vous propose 48 suites spacieuses, trois restaurants, une piscine extérieure et intérieure chauffée, un spa traditionnel et un rooftop avec vue panoramique sur la baie.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {benefits?.map((b) =>
              <div key={b?.key} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{b?.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{b?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}