import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { BedDouble, Users, ArrowRight } from 'lucide-react';

const rooms = [
{
  id: 'chambre-classique',
  type: 'Chambre Classique',
  subtitle: 'Chambre',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  description: 'Chambre confortable alliant décoration marocaine et équipements modernes.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab7bb580-1772211526418.png",
  alt: 'Chambre classique élégante avec décoration marocaine',
  badge: null
},
{
  id: 'chambre-luxe',
  type: 'Chambre de Luxe',
  subtitle: 'Vue piscine',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  description: 'Chambre de luxe avec vue sur la piscine de l\'hôtel.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab7bb580-1772211526418.png",
  alt: 'Chambre de luxe avec vue sur la piscine',
  badge: 'Vue piscine'
},
{
  id: 'suite-junior',
  type: 'Suite Junior',
  subtitle: 'Suite',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  description: 'Plus d\'espace et de confort pour un séjour en toute sérénité.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9bd7968-1773141707263.png",
  alt: 'Suite Junior luxueuse avec décoration marocaine',
  badge: 'Suite'
},
{
  id: 'suite-senior',
  type: 'Suite Senior',
  subtitle: 'Suite',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  description: 'Suite spacieuse pour un confort supérieur.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9bd7968-1773141707263.png",
  alt: 'Suite Senior spacieuse avec décoration marocaine',
  badge: 'Suite'
},
{
  id: 'suite-prestige',
  type: 'Suite Prestige',
  subtitle: 'Vue piscine',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  description: 'Notre catégorie la plus haut de gamme, avec vue sur la piscine.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9bd7968-1773141707263.png",
  alt: 'Suite Prestige avec vue sur la piscine',
  badge: 'Prestige'
}];


export default function RoomsPreview() {
  return (
    <section className="section-padding bg-secondary moroccan-pattern" id="chambres">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Hébergement</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Chambres & Suites</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos 48 chambres et suites spacieuses, conçues pour votre confort avec une touche d&apos;élégance marocaine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.map((room) =>
          <div key={room?.id} className="room-card">
              {/* Image */}
              <div className="image-reveal relative aspect-[4/3]">
                <AppImage
                src={room?.image}
                alt={room?.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                unoptimized />
              
                {room?.badge &&
              <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {room?.badge}
                  </span>
              }
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">{room?.subtitle}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{room?.type}</h3>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Users size={13} />
                    <span>{room?.occupancy}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <BedDouble size={13} />
                    <span>{room?.bed}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{room?.description}</p>

                <div className="flex gap-3">
                  <Link
                  href="/chambres-suites"
                  className="flex-1 btn-primary justify-center text-sm py-2.5">
                  
                    Réserver
                  </Link>
                  <Link
                  href="/chambres-suites"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                  
                    Voir <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link href="/chambres-suites" className="btn-primary text-base py-3.5 px-10">
            Voir toutes les chambres
          </Link>
        </div>
      </div>
    </section>);

}