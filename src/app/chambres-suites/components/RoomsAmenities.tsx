import React from 'react';
import { Wifi, Wind, Tv, Coffee, Lock, Bath, Phone, BedDouble, Car, Dumbbell, Waves, Sparkles } from 'lucide-react';

const amenities = [
  { key: 'ra-wifi', icon: Wifi, label: 'Wi-Fi haut débit', desc: 'Dans tout l\'hôtel' },
  { key: 'ra-ac', icon: Wind, label: 'Climatisation', desc: 'Contrôle individuel' },
  { key: 'ra-tv', icon: Tv, label: 'TV satellite', desc: 'Chaînes internationales' },
  { key: 'ra-minibar', icon: Coffee, label: 'Minibar', desc: 'Rafraîchissements' },
  { key: 'ra-safe', icon: Lock, label: 'Coffre-fort', desc: 'Sécurité intégrée' },
  { key: 'ra-bath', icon: Bath, label: 'Salle de bain', desc: 'Douche ou baignoire' },
  { key: 'ra-roomservice', icon: Phone, label: 'Room service', desc: 'Service en chambre' },
  { key: 'ra-bed', icon: BedDouble, label: 'Literie premium', desc: 'Confort optimal' },
  { key: 'ra-shuttle', icon: Car, label: 'Navette', desc: 'Aéroport sur demande' },
  { key: 'ra-fitness', icon: Dumbbell, label: 'Fitness', desc: 'Accès inclus' },
  { key: 'ra-pool', icon: Waves, label: 'Piscines', desc: 'Extérieure & intérieure' },
  { key: 'ra-spa', icon: Sparkles, label: 'Spa & Hammam', desc: 'Accès aux installations' },
];

export default function RoomsAmenities() {
  return (
    <section className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Équipements & Services inclus
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Chaque chambre est équipée pour vous offrir un confort optimal tout au long de votre séjour.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-4">
          {amenities?.map((a) => (
            <div key={a?.key} className="bg-card rounded-xl border border-border p-5 text-center hover:border-accent/40 hover:shadow-card transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <a.icon size={20} className="text-primary" />
              </div>
              <p className="font-semibold text-foreground text-sm">{a?.label}</p>
              <p className="text-muted-foreground text-xs mt-1">{a?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}