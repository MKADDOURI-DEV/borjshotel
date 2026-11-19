import React from 'react';
import { BookOpen, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/config';

// Carte du Restaurant Marocain : renseigner les rubriques et plats confirmés par l'hôtel.
// Chaque rubrique : { id, title, items: [{ name, description? }] }
const menuCategories: { id: string; title: string; items: { name: string; description?: string }[] }[] = [];

export default function RestaurantMenu() {
  return (
    <section id="carte-marocaine" className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Restaurant Marocain</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">La carte</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Spécialités marocaines et saveurs traditionnelles, servies tous les jours de 10h00 à 01h00.
          </p>
        </div>

        {menuCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuCategories.map((cat) => (
              <div key={cat.id} className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-5">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={`${cat.id}-${item.name}`}>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl p-10 text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <BookOpen size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Notre carte marocaine</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Découvrez les spécialités de notre cuisine marocaine traditionnelle. La carte détaillée est disponible au restaurant et sur simple demande.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-6">
              <MessageCircle size={16} /> Demander la carte sur WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
