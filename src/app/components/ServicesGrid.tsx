import React from 'react';
import { Wifi, Clock, ShoppingBag, Car, UtensilsCrossed, Wine, Sparkles, Waves, Coffee, Wind, Tv, Package, Lock, Home, Dumbbell } from 'lucide-react';

const services = [
  { key: 'svc-wifi', icon: Wifi, title: 'Wi-Fi gratuit', desc: 'Connexion haut débit dans tout l\'établissement' },
  { key: 'svc-reception', icon: Clock, title: 'Réception 24h/24', desc: 'Équipe disponible à toute heure' },
  { key: 'svc-roomservice', icon: ShoppingBag, title: 'Room service', desc: 'Service en chambre disponible' },
  { key: 'svc-laundry', icon: Package, title: 'Blanchisserie', desc: 'Service de pressing et lavage' },
  { key: 'svc-shuttle', icon: Car, title: 'Navette aéroport', desc: 'Transferts sur demande' },
  { key: 'svc-restaurant', icon: UtensilsCrossed, title: '3 Restaurants', desc: 'Cuisine marocaine et méditerranéenne' },
  { key: 'svc-bar', icon: Wine, title: 'Rooftop Bar', desc: 'Cocktails avec vue panoramique' },
  { key: 'svc-spa', icon: Sparkles, title: 'Spa & Hammam', desc: 'Soins traditionnels marocains' },
  { key: 'svc-pool', icon: Waves, title: 'Piscines', desc: 'Extérieure et intérieure chauffée' },
  { key: 'svc-breakfast', icon: Coffee, title: 'Petit-déjeuner', desc: 'Buffet avec produits locaux frais' },
  { key: 'svc-ac', icon: Wind, title: 'Climatisation', desc: 'Contrôle individuel en chambre' },
  { key: 'svc-tv', icon: Tv, title: 'TV satellite', desc: 'Chaînes internationales' },
  { key: 'svc-minibar', icon: Package, title: 'Minibar', desc: 'Rafraîchissements en chambre' },
  { key: 'svc-safe', icon: Lock, title: 'Coffre-fort', desc: 'Sécurité de vos objets de valeur' },
  { key: 'svc-terrace', icon: Home, title: 'Terrasse privée', desc: 'Balcon ou terrasse dans chaque chambre' },
  { key: 'svc-fitness', icon: Dumbbell, title: 'Salle de fitness', desc: 'Équipements modernes' },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Prestations</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Services & Équipements</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tout ce dont vous avez besoin pour un séjour confortable et mémorable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {services?.map((svc) => (
            <div key={svc?.key} className="service-card p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-card transition-all duration-200 cursor-default">
              <div className="service-icon-wrap mb-4">
                <svc.icon size={22} className="text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{svc?.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{svc?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}