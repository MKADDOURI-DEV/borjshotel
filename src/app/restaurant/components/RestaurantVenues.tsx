import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { UtensilsCrossed, Coffee, Sunset, MapPin } from 'lucide-react';

// BACKEND INTEGRATION: Venue content should be editable from admin panel / CMS
const venues = [
{
  id: 'venue-principal',
  icon: UtensilsCrossed,
  name: 'Restaurant Principal',
  tagline: 'Cuisine Marocaine & Méditerranéenne',
  description: 'Notre restaurant principal vous accueille dans un cadre élégant et chaleureux pour déguster une cuisine raffinée mêlant saveurs marocaines authentiques et influences méditerranéennes. Des ingrédients locaux frais sélectionnés chaque jour pour votre plaisir.',
  cuisines: ['Marocaine', 'Méditerranéenne', 'Internationale', 'Poissons & Fruits de mer'],
  meals: ['Déjeuner', 'Dîner'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4561b5712-1789113488132.png",
  alt: 'Restaurant principal de l\'hôtel Borjs avec décoration marocaine, tables dressées et ambiance chaleureuse',
  location: 'Rez-de-chaussée'
},
{
  id: 'venue-breakfast',
  icon: Coffee,
  name: 'Salle du Petit-Déjeuner',
  tagline: 'Buffet Généreux chaque matin',
  description: 'Commencez votre journée agadirienne avec notre buffet petit-déjeuner généreux. Viennoiseries fraîches, fruits de saison, jus pressés, fromages locaux, œufs préparés à votre convenance et spécialités marocaines traditionnelles.',
  cuisines: ['Buffet continental', 'Spécialités marocaines', 'Produits frais locaux'],
  meals: ['Petit-déjeuner'],
  image: "https://images.unsplash.com/photo-1646469399210-0ec11648444c",
  alt: 'Buffet petit-déjeuner généreux avec viennoiseries fraîches, fruits et spécialités marocaines',
  location: 'Rez-de-chaussée'
},
{
  id: 'venue-rooftop',
  icon: Sunset,
  name: 'Rooftop Bar & Lounge',
  tagline: 'Vue panoramique sur la baie d\'Agadir',
  description: 'Culminez votre journée au Rooftop Bar avec une vue à couper le souffle sur la baie d\'Agadir et le coucher de soleil atlantique. Cocktails créatifs, vins sélectionnés et petites bouchées légères dans une atmosphère lounge unique.',
  cuisines: ['Cocktails', 'Vins & Boissons', 'Bouchées légères', 'Snacks'],
  meals: ['Déjeuner léger', 'Apéritif', 'Soirée'],
  image: "https://images.unsplash.com/photo-1706893763563-6213f131cef2",
  alt: 'Rooftop bar avec vue panoramique sur la baie d\'Agadir au coucher du soleil',
  location: 'Rooftop'
}];


export default function RestaurantVenues() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Nos espaces</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            3 espaces de restauration
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Du petit-déjeuner au dîner, en passant par le rooftop au coucher du soleil, chaque repas est une expérience.
          </p>
        </div>

        <div className="space-y-16">
          {venues?.map((venue, idx) =>
          <div
            key={venue?.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            
              {/* Image */}
              <div className={`image-reveal rounded-2xl overflow-hidden aspect-[16/10] ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <AppImage
                src={venue?.image}
                alt={venue?.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized />
              
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <venue.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <MapPin size={12} />
                    <span>{venue?.location}</span>
                  </div>
                </div>

                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">{venue?.tagline}</p>
                <h3 className="text-3xl font-bold text-foreground mb-4">{venue?.name}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{venue?.description}</p>

                {/* Cuisines */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Cuisine & Spécialités</p>
                  <div className="flex flex-wrap gap-2">
                    {venue?.cuisines?.map((c) =>
                  <span key={`${venue?.id}-cuisine-${c}`} className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium text-foreground border border-border">
                        {c}
                      </span>
                  )}
                  </div>
                </div>

                {/* Meals */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {venue?.meals?.map((m) =>
                  <span key={`${venue?.id}-meal-${m}`} className="px-3 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                        {m}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}