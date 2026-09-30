import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { Waves, Sun, Thermometer } from 'lucide-react';

const poolFeatures = [
{ key: 'pool-outdoor', icon: Waves, title: 'Piscine extérieure', desc: 'Piscine en forme courbe au cœur de l\'hôtel, entourée de palmiers et transats.' },
{ key: 'pool-indoor', icon: Thermometer, title: 'Piscine intérieure chauffée', desc: 'Profitez de la piscine couverte chauffée toute l\'année.' },
{ key: 'pool-sun', icon: Sun, title: 'Espace détente', desc: 'Transats, parasols et service de boissons pour une relaxation parfaite.' }];


export default function PoolSection() {
  return (
    <section className="section-padding bg-background" id="piscine">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-divider mb-6" />
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Piscines</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Piscine & détente
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              Laissez-vous porter par la douceur de nos piscines. La piscine extérieure en forme courbe, véritable joyau de l&apos;hôtel, est entourée de palmiers et offre une atmosphère de sérénité incomparable.
            </p>
            <div className="space-y-5">
              {poolFeatures?.map((f) =>
              <div key={f?.key} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{f?.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[3/4] col-span-1 row-span-2">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ccd1236b-1773187410599.png"
                alt="Piscine extérieure en forme courbe de l'hôtel Borjs entourée de palmiers tropicaux et transats"
                fill
                sizes="25vw"
                className="object-cover"
                unoptimized />
              
            </div>
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ad86be97-1772968518955.png"
                alt="Piscine intérieure chauffée avec lumière tamisée et atmosphère zen"
                fill
                sizes="25vw"
                className="object-cover"
                unoptimized />
              
            </div>
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/3]">
              <AppImage
                src="https://images.unsplash.com/photo-1620710304050-ed1511c60c8a"
                alt="Transats et parasols élégants autour de la piscine de l'hôtel avec ciel ensoleillé"
                fill
                sizes="25vw"
                className="object-cover"
                unoptimized />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}