import React from 'react';
import { Droplets, Flame, Dumbbell, Flower2, Heart } from 'lucide-react';

// BACKEND INTEGRATION: These spa services should be fetched from the admin panel / CMS
const spaServices = [
  {
    id: 'spa-hammam',
    icon: Flame,
    title: 'Hammam Traditionnel',
    description: 'Vivez l\'expérience authentique du hammam marocain. Purifiez votre peau et détendez votre corps dans notre hammam traditionnel chauffé selon les méthodes ancestrales.',
    duration: 'Sur demande',
    category: 'Soins traditionnels',
  },
  {
    id: 'spa-massage',
    icon: Heart,
    title: 'Massages Thérapeutiques',
    description: 'Nos thérapeutes qualifiés vous proposent une gamme de massages relaxants et thérapeutiques adaptés à vos besoins. Techniques marocaines et internationales.',
    duration: 'Sur demande',
    category: 'Massages',
  },
  {
    id: 'spa-pool',
    icon: Droplets,
    title: 'Piscine Intérieure Chauffée',
    description: 'Profitez de notre piscine intérieure chauffée toute l\'année dans un cadre intime et relaxant. Idéale pour une détente après vos soins.',
    duration: 'Accès libre',
    category: 'Aqua-détente',
  },
  {
    id: 'spa-sauna',
    icon: Flame,
    title: 'Sauna',
    description: 'Notre sauna vous offre les bienfaits de la chaleur sèche pour éliminer les toxines, améliorer la circulation et favoriser une relaxation profonde.',
    duration: 'Sur demande',
    category: 'Thermothérapie',
  },
  {
    id: 'spa-beauty',
    icon: Flower2,
    title: 'Soins de Beauté',
    description: 'Soins du visage, manucure, pédicure et traitements corporels réalisés par nos esthéticiennes avec des produits de qualité adaptés à votre type de peau.',
    duration: 'Sur demande',
    category: 'Beauté',
  },
  {
    id: 'spa-fitness',
    icon: Dumbbell,
    title: 'Salle de Fitness',
    description: 'Maintenez votre routine sportive dans notre salle de fitness entièrement équipée d\'appareils cardio et de musculation modernes.',
    duration: 'Accès libre',
    category: 'Fitness',
  },
];

export default function SpaServices() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Nos soins</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Spa & Bien-être
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Notre espace spa traditionnel marocain vous propose une gamme complète de soins et traitements pour votre bien-être total.
          </p>
          <p className="text-muted-foreground text-sm mt-3 italic">
            Tarifs et disponibilités disponibles sur demande à la réception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaServices?.map((service) => (
            <div key={service?.id} className="bg-card border border-border rounded-2xl p-7 hover:border-accent/40 hover:shadow-luxury transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">
                {service?.category}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">{service?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service?.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">{service?.duration}</span>
                <span className="text-primary text-xs font-semibold">Sur réservation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}