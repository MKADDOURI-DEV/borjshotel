import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {/* Address */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Adresse</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Borjs Hotel Suites & Spa<br />
              Lot N°F7, Cité Baie des Palmiers<br />
              Quartier Founty<br />
              Agadir 80000, Maroc
            </p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Téléphone</p>
            <a href="tel:+212528381919" className="text-primary font-bold text-lg hover:text-accent transition-colors">
              +212 528 381 919
            </a>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Email</p>
            <a href="mailto:contact@borjshotelagadir.com" className="text-primary text-sm font-semibold hover:text-accent transition-colors">
              contact@borjshotelagadir.com
            </a>
          </div>
        </div>
      </div>

      {/* Reception hours */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Réception</p>
            <p className="text-muted-foreground text-sm">Ouverte 24h/24, 7j/7</p>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/212528381919?text=Bonjour%2C+je+souhaite+obtenir+des+informations."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-6 hover:bg-green-100 transition-colors group"
      >
        <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
          <MessageCircle size={20} className="text-green-600" />
        </div>
        <div>
          <p className="font-semibold text-green-800 mb-0.5">WhatsApp</p>
          <p className="text-green-700 text-sm">Réponse rapide sur WhatsApp</p>
        </div>
      </a>

      {/* Call button */}
      <a
        href="tel:+212528381919"
        className="btn-primary w-full justify-center py-3.5"
      >
        <Phone size={17} />
        Appeler l&apos;hôtel
      </a>
    </div>
  );
}