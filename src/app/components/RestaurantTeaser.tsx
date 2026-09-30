import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { UtensilsCrossed, Coffee, Sunset } from 'lucide-react';

const venues = [
{ key: 'venue-main', icon: UtensilsCrossed, name: 'Restaurant Principal', desc: 'Cuisine méditerranéenne et marocaine raffinée dans un cadre élégant.' },
{ key: 'venue-breakfast', icon: Coffee, name: 'Petit-déjeuner', desc: 'Buffet généreux avec produits locaux frais chaque matin.' },
{ key: 'venue-rooftop', icon: Sunset, name: 'Rooftop Bar', desc: 'Cocktails et vues panoramiques sur la baie d\'Agadir.' }];


export default function RestaurantTeaser() {
  return (
    <section className="section-padding bg-secondary moroccan-pattern" id="restaurant">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="image-reveal rounded-2xl overflow-hidden aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_4561b5712-1789113488132.png"
                alt="Restaurant élégant de l'hôtel Borjs avec décoration marocaine, tables dressées et ambiance chaleureuse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized />
              
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="gold-divider mb-6" />
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Gastronomie</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Restaurant</h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              Savourez les saveurs authentiques du Maroc et de la Méditerranée dans nos 3 espaces de restauration. Des ingrédients locaux frais, une cuisine soignée et une ambiance chaleureuse pour chaque moment de la journée.
            </p>

            <div className="space-y-5 mb-8">
              {venues?.map((v) =>
              <div key={v?.key} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <v.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{v?.name}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{v?.desc}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant" className="btn-primary text-sm py-3 px-7">
                Découvrir le restaurant
              </Link>
              <Link href="/contact" className="px-7 py-3 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-card hover:border-accent/50 transition-colors">
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}