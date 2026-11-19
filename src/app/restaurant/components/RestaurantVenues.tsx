import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { UtensilsCrossed, Globe, Sunset, MapPin } from 'lucide-react';

// BACKEND INTEGRATION: Venue content should be editable from admin panel / CMS
const venues = [
{
  id: 'venue-international',
  icon: Globe,
  name: 'Restaurant International',
  tagline: 'Une table ouverte sur le monde',
  description: 'Installé à la place de l\'ancienne salle du petit-déjeuner, le Restaurant International vous accueille dans une salle lumineuse et élégante pour une cuisine internationale, du matin jusque tard le soir.',
  cuisines: ['Cuisine internationale'],
  meals: ['Ouvert de 07h00 à 00h00'],
  image: "/assets/images/restaurant/dsc1473.jpg",
  alt: 'Restaurant international de l\'hôtel Borjs : salle élégante aux tables dressées',
  location: 'Rez-de-chaussée'
},
{
  id: 'venue-marocain',
  icon: UtensilsCrossed,
  name: 'Restaurant Marocain',
  tagline: 'Notre spécialité · Cuisine marocaine authentique',
  description: 'Au cœur de la table du Borjs Hotel, le Restaurant Marocain célèbre la cuisine traditionnelle dans un cadre chaleureux : saveurs authentiques, spécialités du terroir et art de recevoir à la marocaine.',
  cuisines: ['Cuisine marocaine traditionnelle', 'Spécialités marocaines'],
  meals: ['Ouvert de 10h00 à 01h00'],
  image: "/assets/images/restaurant/dsc1481.jpg",
  alt: 'Restaurant marocain de l\'hôtel Borjs avec décoration marocaine, tables dressées et ambiance chaleureuse',
  location: 'Rez-de-chaussée'
},
{
  id: 'venue-rooftop',
  icon: Sunset,
  name: 'Rooftop Bar & Lounge',
  tagline: 'Vue panoramique sur la baie d\'Agadir',
  description: 'Le Rooftop Bar vous offre une vue panoramique sur la baie d\'Agadir. Un lieu pour vos fins de journée et vos soirées.',
  cuisines: ['Cocktails', 'Boissons'],
  meals: ['Ouvert de 14h00 à 02h00'],
  image: "/assets/images/pool/dsc1500.jpg",
  alt: 'Rooftop bar avec vue panoramique sur la baie d\'Agadir',
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
            Nos espaces de restauration
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un restaurant international, un restaurant marocain et un rooftop bar : chaque repas est une expérience.
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
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Horaires</p>
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