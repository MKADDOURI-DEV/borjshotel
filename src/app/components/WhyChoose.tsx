import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { BedDouble, Sparkles, Waves, UtensilsCrossed, Heart, MapPin } from 'lucide-react';

const advantages = [
{ key: 'adv-suites', icon: BedDouble, title: 'Suites spacieuses', desc: '48 suites et chambres jusqu\'à 58 m² pour votre confort.' },
{ key: 'adv-spa', icon: Sparkles, title: 'Spa traditionnel', desc: 'Hammam, massages et soins de beauté dans un cadre authentique.' },
{ key: 'adv-pool', icon: Waves, title: 'Piscines', desc: 'Piscine extérieure et intérieure chauffée toute l\'année.' },
{ key: 'adv-restaurant', icon: UtensilsCrossed, title: 'Gastronomie', desc: '3 restaurants avec cuisine marocaine et méditerranéenne.' },
{ key: 'adv-hospitality', icon: Heart, title: 'Hospitalité marocaine', desc: 'Un accueil chaleureux et un service attentionné 24h/24.' },
{ key: 'adv-location', icon: MapPin, title: 'Emplacement idéal', desc: 'À 10 minutes de la plage d\'Agadir et des principales attractions.' }];


export default function WhyChoose() {
  return (
    <section className="section-padding bg-foreground moroccan-pattern" aria-label="Pourquoi choisir Borjs Hotel">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-divider mb-6" />
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Pourquoi nous choisir</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              L&apos;excellence à<br />votre service
            </h2>
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-10">
              Au Borjs Hotel Suites & Spa, chaque détail est pensé pour vous offrir une expérience inoubliable, dans un cadre alliant authenticité marocaine et confort contemporain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages?.map((adv) =>
              <div key={adv?.key} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <adv.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{adv?.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{adv?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/5]">
            <AppImage
              src="https://images.unsplash.com/photo-1730830645703-e90bc940b4cd"
              alt="Vue extérieure de l'hôtel Borjs avec architecture marocaine blanche, palmiers et ciel bleu d'Agadir"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized />
            
          </div>
        </div>
      </div>
    </section>);

}