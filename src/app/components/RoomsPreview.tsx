import React from 'react';
import { BOOKING_URL } from '@/lib/config';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { BedDouble, Users, ArrowRight } from 'lucide-react';

const rooms = [
{
  id: 'chambre-double-standard',
  type: 'Chambre Double Standard',
  subtitle: 'Chambre',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Chambre confortable alliant décoration marocaine et équipements modernes.',
  image: "/assets/images/rooms/dsc1467.jpg",
  alt: 'Chambre Double Standard – Borj Hôtel Agadir',
  badge: null,
  view: 'Selon disponibilité'
},
{
  id: 'chambre-deluxe',
  type: 'Chambre Deluxe',
  subtitle: 'Chambre',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Chambre spacieuse et raffinée, pour un séjour haut de gamme.',
  image: "/assets/images/rooms/dsc1460.jpg",
  alt: 'Chambre Deluxe – Borj Hôtel Agadir',
  badge: 'Deluxe',
  view: 'Selon disponibilité'
},
{
  id: 'suite-junior',
  type: 'Suite Junior',
  subtitle: 'Suite',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Plus d\'espace et de confort pour un séjour en toute sérénité.',
  image: "/assets/images/rooms/dsc1447.jpg",
  alt: 'Suite Junior – Borj Hôtel Agadir',
  badge: 'Suite',
  view: 'Selon disponibilité'
},
{
  id: 'suite-senior',
  type: 'Suite Senior',
  subtitle: 'Suite',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Suite spacieuse pour un confort supérieur.',
  image: "/assets/images/rooms/dsc1437.jpg",
  alt: 'Suite Senior – Borj Hôtel Agadir',
  badge: 'Suite',
  view: 'Selon disponibilité'
},
{
  id: 'suite-vue-mer',
  type: 'Suite Vue Mer',
  subtitle: 'Vue mer',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Suite lumineuse avec vue sur la mer.',
  image: "/assets/images/rooms/dsc1453.jpg",
  alt: 'Suite Vue Mer – Borj Hôtel Agadir',
  badge: 'Vue mer',
  view: 'Vue sur la mer'
},
{
  id: 'suite-junior-vue-jardin',
  type: 'Suite Junior Vue Jardin',
  subtitle: 'Vue jardin',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  description: 'Suite Junior au calme, avec vue sur le jardin.',
  image: "/assets/images/rooms/dsc1422.jpg",
  alt: 'Suite Junior Vue Jardin – Borj Hôtel Agadir',
  badge: 'Vue jardin',
  view: 'Vue sur le jardin'
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
            Découvrez nos 121 chambres et suites spacieuses, conçues pour votre confort avec une touche d&apos;élégance marocaine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary justify-center text-sm py-2.5">
                    Réserver
                  </a>
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