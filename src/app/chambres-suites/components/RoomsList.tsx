'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { BedDouble, Maximize2, Users, Wifi, Wind, Tv, Lock, Coffee, Phone, Bath, ChevronLeft, ChevronRight } from 'lucide-react';

// BACKEND INTEGRATION: Replace BOOKING_ENGINE_URL with actual booking engine URL from admin settings
const BOOKING_ENGINE_URL = 'https://booking.borjshotelagadir.com';

const rooms = [
{
  id: 'room-standard-double',
  type: 'Chambre Standard Double',
  badge: null,
  size: '28 m²',
  terrace: '4 m²',
  occupancy: '2 personnes',
  bed: '1 lit King-size',
  floor: 'Rez-de-chaussée ou étage',
  view: 'Piscine, jardin ou points d\'intérêt',
  description: 'Chambre confortable et soigneusement aménagée d\'environ 28 m², avec terrasse privée de 4 m². Un espace chaleureux alliant décoration marocaine et équipements modernes pour un séjour reposant à Agadir.',
  images: [
  { id: 'std-img-1', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d4e5bfcf-1773145657003.png", alt: 'Chambre standard avec lit king-size, décoration marocaine et terrasse privée' },
  { id: 'std-img-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c818d8e8-1770803352139.png", alt: 'Salle de bain moderne de la chambre standard avec douche et finitions élégantes' },
  { id: 'std-img-3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d4e5bfcf-1773145657003.png", alt: 'Terrasse privée de la chambre standard avec vue sur le jardin de l\'hôtel' }],

  amenities: [
  { key: 'wifi', icon: Wifi, label: 'Wi-Fi gratuit' },
  { key: 'ac', icon: Wind, label: 'Climatisation' },
  { key: 'tv', icon: Tv, label: 'TV satellite' },
  { key: 'safe', icon: Lock, label: 'Coffre-fort' },
  { key: 'minibar', icon: Coffee, label: 'Minibar' },
  { key: 'phone', icon: Phone, label: 'Room service' },
  { key: 'bath', icon: Bath, label: 'Salle de bain privée' },
  { key: 'bed', icon: BedDouble, label: 'Lit King-size' }]

},
{
  id: 'room-double-seaview',
  type: 'Double Vue Mer',
  badge: 'Vue Mer',
  size: '28 m²',
  terrace: '4 m²',
  occupancy: '2 personnes',
  bed: '1 lit double',
  floor: 'Étage supérieur',
  view: 'Vue panoramique sur la mer',
  description: 'Chambre avec vue imprenable sur la mer d\'Agadir. Profitez du spectacle de l\'Atlantique depuis votre balcon privé. Même superficie que la chambre standard, avec en prime un panorama exceptionnel sur la côte marocaine.',
  images: [
  { id: 'sea-img-1', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7d14cf0-1779635909875.png", alt: 'Chambre double vue mer avec balcon et panorama sur l\'océan Atlantique depuis Agadir' },
  { id: 'sea-img-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_16df72331-1779106167904.png", alt: 'Salle de bain élégante de la chambre vue mer avec baignoire et finitions modernes' },
  { id: 'sea-img-3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_10c7d42df-1773022300138.png", alt: 'Vue panoramique sur la mer depuis le balcon de la chambre double vue mer' }],

  amenities: [
  { key: 'wifi', icon: Wifi, label: 'Wi-Fi gratuit' },
  { key: 'ac', icon: Wind, label: 'Climatisation' },
  { key: 'tv', icon: Tv, label: 'TV satellite' },
  { key: 'safe', icon: Lock, label: 'Coffre-fort' },
  { key: 'minibar', icon: Coffee, label: 'Minibar' },
  { key: 'phone', icon: Phone, label: 'Room service' },
  { key: 'bath', icon: Bath, label: 'Salle de bain privée' },
  { key: 'bed', icon: BedDouble, label: 'Lit double' }]

},
{
  id: 'room-suite',
  type: 'Suite Supérieure',
  badge: 'Suite',
  size: '58 m²',
  terrace: '11 m²',
  occupancy: '4 personnes',
  bed: '1 lit King + 2 canapés-lits',
  floor: 'Étage supérieur',
  view: 'Jardin ou piscine',
  description: 'Notre Suite Supérieure de 58 m² offre un espace de vie généreux avec salon séparé, cuisine moderne équipée et terrasse de 11 m². Idéale pour les familles ou les voyageurs souhaitant plus d\'espace et de confort premium.',
  images: [
  { id: 'suite-img-1', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1dce45a39-1776113140890.png", alt: 'Suite luxueuse avec salon séparé, décoration marocaine et vue sur la piscine' },
  { id: 'suite-img-2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_13b793222-1785153798426.png", alt: 'Chambre de la suite avec lit king-size et finitions haut de gamme' },
  { id: 'suite-img-3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1239373c7-1772249595914.png", alt: 'Grande terrasse de la suite avec vue sur le jardin et la piscine de l\'hôtel' }],

  amenities: [
  { key: 'wifi', icon: Wifi, label: 'Wi-Fi gratuit' },
  { key: 'ac', icon: Wind, label: 'Climatisation' },
  { key: 'tv', icon: Tv, label: 'TV satellite' },
  { key: 'safe', icon: Lock, label: 'Coffre-fort' },
  { key: 'minibar', icon: Coffee, label: 'Minibar' },
  { key: 'phone', icon: Phone, label: 'Room service' },
  { key: 'bath', icon: Bath, label: 'Salle de bain + baignoire' },
  { key: 'bed', icon: BedDouble, label: 'King + canapés-lits' }]

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
    window.open(`${BOOKING_ENGINE_URL}?room=${roomId}`, '_blank');
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Nos hébergements</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Choisissez votre chambre</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Toutes nos chambres disposent d&apos;une terrasse ou d&apos;un balcon privé, de la climatisation et d&apos;équipements modernes.
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
                      <Maximize2 size={14} className="text-accent" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <span className="text-accent text-xs">⬛</span>
                      <span>Terrasse {room.terrace}</span>
                    </div>
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