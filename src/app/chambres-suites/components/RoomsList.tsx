'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { BedDouble, Users, Wifi, Wind, Tv, Lock, Coffee, Phone, Bath, ChevronLeft, ChevronRight } from 'lucide-react';

import { BOOKING_URL } from '@/lib/config';

const baseAmenities = [
  { key: 'wifi', icon: Wifi, label: 'Wi-Fi gratuit' },
  { key: 'ac', icon: Wind, label: 'Climatisation' },
  { key: 'tv', icon: Tv, label: 'TV satellite' },
  { key: 'safe', icon: Lock, label: 'Coffre-fort' },
  { key: 'minibar', icon: Coffee, label: 'Minibar' },
  { key: 'phone', icon: Phone, label: 'Room service' },
  { key: 'bath', icon: Bath, label: 'Salle de bain privée' },
  { key: 'bed', icon: BedDouble, label: 'Single ou double' }];

const rooms = [
{
  id: 'chambre-classique',
  type: 'Chambre Classique',
  badge: null,
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'Chambre confortable et soigneusement aménagée, alliant décoration marocaine et équipements modernes pour un séjour reposant à Agadir. Disponible en occupation single ou double.',
  images:
  [
  { id: 'cls-img-1', src: "/assets/images/rooms/dsc1460.jpg", alt: 'Chambre Classique – photo 1' },
  { id: 'cls-img-2', src: "/assets/images/hotel/dsc1450.jpg", alt: 'Chambre Classique – photo 2' }],
  amenities: baseAmenities
},
{
  id: 'chambre-luxe-vue-piscine',
  type: 'Chambre de Luxe',
  badge: 'Vue piscine',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  view: 'Vue sur la piscine',
  description: 'Chambre de luxe avec vue sur la piscine de l\'hôtel, pour un séjour plus raffiné au calme. Disponible en occupation single ou double.',
  images:
  [
  { id: 'lux-img-1', src: "/assets/images/rooms/dsc1467.jpg", alt: 'Chambre de Luxe vue piscine – photo 1' },
  { id: 'lux-img-2', src: "/assets/images/rooms/dsc1448.jpg", alt: 'Chambre de Luxe vue piscine – photo 2' }],
  amenities: baseAmenities
},
{
  id: 'suite-junior',
  type: 'Suite Junior',
  badge: 'Suite',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'Suite Junior offrant plus d\'espace et de confort pour un séjour en toute sérénité. Disponible en occupation single ou double.',
  images:
  [
  { id: 'jun-img-1', src: "/assets/images/rooms/dsc1445.jpg", alt: 'Suite Junior – photo 1' },
  { id: 'jun-img-2', src: "/assets/images/rooms/dsc1446.jpg", alt: 'Suite Junior – photo 2' },
  { id: 'jun-img-3', src: "/assets/images/rooms/dsc1447.jpg", alt: 'Suite Junior – photo 3' },
  { id: 'jun-img-4', src: "/assets/images/rooms/dsc1449.jpg", alt: 'Suite Junior – photo 4' },
  { id: 'jun-img-5', src: "/assets/images/rooms/dsc1453.jpg", alt: 'Suite Junior – photo 5' },
  { id: 'jun-img-6', src: "/assets/images/rooms/dsc1463.jpg", alt: 'Suite Junior – photo 6' }],
  amenities: baseAmenities
},
{
  id: 'suite-senior',
  type: 'Suite Senior',
  badge: 'Suite',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'Suite Senior spacieuse, pensée pour les voyageurs qui recherchent un confort supérieur. Disponible en occupation single ou double.',
  images:
  [
  { id: 'sen-img-1', src: "/assets/images/rooms/dsc1435.jpg", alt: 'Suite Senior – photo 1' },
  { id: 'sen-img-2', src: "/assets/images/rooms/dsc1436.jpg", alt: 'Suite Senior – photo 2' },
  { id: 'sen-img-3', src: "/assets/images/rooms/dsc1437.jpg", alt: 'Suite Senior – photo 3' },
  { id: 'sen-img-4', src: "/assets/images/rooms/dsc1438.jpg", alt: 'Suite Senior – photo 4' },
  { id: 'sen-img-5', src: "/assets/images/rooms/dsc1439.jpg", alt: 'Suite Senior – photo 5' },
  { id: 'sen-img-6', src: "/assets/images/rooms/dsc1440.jpg", alt: 'Suite Senior – photo 6' },
  { id: 'sen-img-7', src: "/assets/images/rooms/dsc1441.jpg", alt: 'Suite Senior – photo 7' },
  { id: 'sen-img-8', src: "/assets/images/rooms/dsc1442.jpg", alt: 'Suite Senior – photo 8' },
  { id: 'sen-img-9', src: "/assets/images/rooms/dsc1443.jpg", alt: 'Suite Senior – photo 9' },
  { id: 'sen-img-10', src: "/assets/images/rooms/dsc1444.jpg", alt: 'Suite Senior – photo 10' }],
  amenities: baseAmenities
},
{
  id: 'suite-prestige-vue-piscine',
  type: 'Suite Prestige',
  badge: 'Vue piscine',
  occupancy: '1 à 2 personnes',
  bed: 'Single ou double',
  view: 'Vue sur la piscine',
  description: 'Notre Suite Prestige avec vue sur la piscine, la catégorie la plus haut de gamme de l\'hôtel. Disponible en occupation single ou double.',
  images:
  [
  { id: 'pre-img-1', src: "/assets/images/rooms/dsc1422.jpg", alt: 'Suite Prestige vue piscine – photo 1' },
  { id: 'pre-img-2', src: "/assets/images/rooms/dsc1423.jpg", alt: 'Suite Prestige vue piscine – photo 2' },
  { id: 'pre-img-3', src: "/assets/images/rooms/dsc1424.jpg", alt: 'Suite Prestige vue piscine – photo 3' },
  { id: 'pre-img-4', src: "/assets/images/rooms/dsc1425.jpg", alt: 'Suite Prestige vue piscine – photo 4' },
  { id: 'pre-img-5', src: "/assets/images/rooms/dsc1431.jpg", alt: 'Suite Prestige vue piscine – photo 5' },
  { id: 'pre-img-6', src: "/assets/images/rooms/dsc1432.jpg", alt: 'Suite Prestige vue piscine – photo 6' },
  { id: 'pre-img-7', src: "/assets/images/rooms/dsc1433.jpg", alt: 'Suite Prestige vue piscine – photo 7' },
  { id: 'pre-img-8', src: "/assets/images/rooms/dsc1428.jpg", alt: 'Suite Prestige vue piscine – photo 8' },
  { id: 'pre-img-9', src: "/assets/images/rooms/dsc1429.jpg", alt: 'Suite Prestige vue piscine – photo 9' },
  { id: 'pre-img-10', src: "/assets/images/rooms/dsc1430.jpg", alt: 'Suite Prestige vue piscine – photo 10' }],
  amenities: baseAmenities
}];


function RoomGallery({ images }: {images: typeof rooms[0]['images'];}) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
      <AppImage
        src={images[current].src}
        alt={images[current].alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-opacity duration-500"
        unoptimized />
      
      {images.length > 1 &&
      <>
          <button
          onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/60 text-white flex items-center justify-center hover:bg-foreground/80 transition-colors"
          aria-label="Image précédente">
          
            <ChevronLeft size={16} />
          </button>
          <button
          onClick={() => setCurrent((c) => (c + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground/60 text-white flex items-center justify-center hover:bg-foreground/80 transition-colors"
          aria-label="Image suivante">
          
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) =>
          <button
            key={`dot-${i}`}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${current === i ? 'bg-white w-4' : 'bg-white/50'}`}
            aria-label={`Image ${i + 1}`} />

          )}
          </div>
        </>
      }
    </div>);

}

export default function RoomsList() {
  const handleBook = (roomId: string) => {
    // BACKEND INTEGRATION: Connect to booking engine with room type parameter
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Nos hébergements</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Choisissez votre chambre</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Du confort d&apos;une chambre classique à l&apos;élégance de la Suite Prestige, chaque catégorie est disponible en occupation single ou double.
          </p>
        </div>

        <div className="space-y-12">
          {rooms.map((room, idx) =>
          <div
            key={room.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-card bg-card ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            
              {/* Gallery */}
              <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <RoomGallery images={room.images} />
              </div>

              {/* Details */}
              <div className={`p-8 lg:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  {room.badge &&
                <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {room.badge}
                    </span>
                }
                  <h2 className="text-3xl font-bold text-foreground mb-2">{room.type}</h2>

                  {/* Specs row */}
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Users size={14} className="text-accent" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <BedDouble size={14} className="text-accent" />
                      <span>{room.bed}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{room.description}</p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <p className="text-foreground font-semibold text-sm mb-3">Équipements inclus</p>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((a) =>
                    <div key={`${room.id}-${a.key}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <a.icon size={13} className="text-accent flex-shrink-0" />
                          <span>{a.label}</span>
                        </div>
                    )}
                    </div>
                  </div>
                </div>

                {/* View info */}
                <div className="mb-6 p-4 bg-secondary rounded-xl">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Vue</p>
                  <p className="text-foreground text-sm font-medium">{room.view}</p>
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <button
                  onClick={() => handleBook(room.id)}
                  className="flex-1 btn-primary justify-center">
                  
                    Réserver cette chambre
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}