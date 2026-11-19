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
  id: 'chambre-standard',
  type: 'Chambre Standard',
  badge: null,
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'Pensée comme un cocon de confort, la Chambre Standard allie lignes épurées et touches d\'inspiration marocaine : tissus aux motifs traditionnels, tons chaleureux et équipements modernes pour un séjour reposant au cœur d\'Agadir. Disponible en occupation single ou double.',
  images:
  [
  { id: 'std-img-1', src: "/assets/images/rooms/dsc1467.jpg", alt: 'Chambre Standard – photo 1' },
  { id: 'std-img-2', src: "/assets/images/rooms/dsc1448.jpg", alt: 'Chambre Standard – photo 2' }],
  amenities: baseAmenities
},
{
  id: 'chambre-deluxe-vue-mer',
  type: 'Chambre Deluxe Vue Mer',
  badge: 'Vue mer',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  view: 'Vue sur la mer',
  description: 'La Chambre Deluxe Vue Mer s\'ouvre sur l\'horizon atlantique. Entre linge de lit soigné, décor chaleureux d\'inspiration marocaine et balcon tourné vers la mer, elle offre un art de vivre à la fois raffiné et authentique. Disponible en occupation single ou double.',
  images:
  [
  { id: 'dlx-img-1', src: "/assets/images/rooms/dsc1460.jpg", alt: 'Chambre Deluxe Vue Mer – photo 1' },
  { id: 'dlx-img-2', src: "/assets/images/hotel/dsc1450.jpg", alt: 'Chambre Deluxe Vue Mer – photo 2' }],
  amenities: baseAmenities
},
{
  id: 'suite-prestige-vue-mer',
  type: 'Suite Prestige Vue Mer',
  badge: 'Prestige',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  view: 'Vue sur la mer',
  description: 'Notre Suite Prestige est le joyau de l\'hôtel. Salon lumineux, boiseries et détails inspirés de l\'artisanat marocain, finitions soignées et vue sur la mer : chaque espace célèbre l\'élégance de la tradition marocaine, associée à un confort moderne exclusif. Disponible en occupation single ou double.',
  images:
  [
  { id: 'pre-img-1', src: "/assets/images/rooms/dsc1422.jpg", alt: 'Suite Prestige Vue Mer – photo 1' },
  { id: 'pre-img-2', src: "/assets/images/rooms/dsc1423.jpg", alt: 'Suite Prestige Vue Mer – photo 2' },
  { id: 'pre-img-3', src: "/assets/images/rooms/dsc1424.jpg", alt: 'Suite Prestige Vue Mer – photo 3' },
  { id: 'pre-img-4', src: "/assets/images/rooms/dsc1425.jpg", alt: 'Suite Prestige Vue Mer – photo 4' },
  { id: 'pre-img-5', src: "/assets/images/rooms/dsc1453.jpg", alt: 'Suite Prestige Vue Mer – photo 5' },
  { id: 'pre-img-6', src: "/assets/images/rooms/dsc1449.jpg", alt: 'Suite Prestige Vue Mer – photo 6' },
  { id: 'pre-img-7', src: "/assets/images/rooms/dsc1431.jpg", alt: 'Suite Prestige Vue Mer – photo 7' },
  { id: 'pre-img-8', src: "/assets/images/rooms/dsc1432.jpg", alt: 'Suite Prestige Vue Mer – photo 8' },
  { id: 'pre-img-9', src: "/assets/images/rooms/dsc1433.jpg", alt: 'Suite Prestige Vue Mer – photo 9' },
  { id: 'pre-img-10', src: "/assets/images/rooms/dsc1428.jpg", alt: 'Suite Prestige Vue Mer – photo 10' },
  { id: 'pre-img-11', src: "/assets/images/rooms/dsc1429.jpg", alt: 'Suite Prestige Vue Mer – photo 11' },
  { id: 'pre-img-12', src: "/assets/images/rooms/dsc1430.jpg", alt: 'Suite Prestige Vue Mer – photo 12' }],
  amenities: baseAmenities
},
{
  id: 'suite-senior',
  type: 'Suite Senior',
  badge: 'Suite',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'La Suite Senior déploie de généreux volumes autour d\'un salon aux banquettes bleues et d\'une chambre aux boiseries sculptées. Décoration traditionnelle marocaine, motifs artisanaux et finitions raffinées y rencontrent le confort moderne. Disponible en occupation single ou double.',
  images:
  [
  { id: 'sen-img-1', src: "/assets/images/rooms/dsc1437.jpg", alt: 'Suite Senior – photo 1' },
  { id: 'sen-img-2', src: "/assets/images/rooms/dsc1435.jpg", alt: 'Suite Senior – photo 2' },
  { id: 'sen-img-3', src: "/assets/images/rooms/dsc1436.jpg", alt: 'Suite Senior – photo 3' },
  { id: 'sen-img-4', src: "/assets/images/rooms/dsc1438.jpg", alt: 'Suite Senior – photo 4' },
  { id: 'sen-img-5', src: "/assets/images/rooms/dsc1439.jpg", alt: 'Suite Senior – photo 5' },
  { id: 'sen-img-6', src: "/assets/images/rooms/dsc1440.jpg", alt: 'Suite Senior – photo 6' },
  { id: 'sen-img-7', src: "/assets/images/rooms/dsc1443.jpg", alt: 'Suite Senior – photo 7' },
  { id: 'sen-img-8', src: "/assets/images/rooms/dsc1444.jpg", alt: 'Suite Senior – photo 8' }],
  amenities: baseAmenities
},
{
  id: 'suite-junior',
  type: 'Suite Junior',
  badge: 'Suite',
  occupancy: 'Single : 1 pers. · Double : 2 pers.',
  bed: 'Single ou double',
  view: 'Selon disponibilité',
  description: 'La Suite Junior réunit chambre et espace salon dans une atmosphère chaleureuse. Tissus traditionnels, détails d\'inspiration artisanale et ambiance intimiste composent un refuge élégant où tradition marocaine et confort moderne se répondent. Disponible en occupation single ou double.',
  images:
  [
  { id: 'jun-img-1', src: "/assets/images/rooms/dsc1447.jpg", alt: 'Suite Junior – photo 1' },
  { id: 'jun-img-2', src: "/assets/images/rooms/dsc1445.jpg", alt: 'Suite Junior – photo 2' },
  { id: 'jun-img-3', src: "/assets/images/rooms/dsc1446.jpg", alt: 'Suite Junior – photo 3' },
  { id: 'jun-img-4', src: "/assets/images/rooms/dsc1463.jpg", alt: 'Suite Junior – photo 4' }],
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
            De la Chambre Standard à la Suite Prestige Vue Mer, chaque catégorie est disponible en occupation single ou double.
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