import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="section-padding bg-background" id="localisation">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Localisation</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Nous trouver</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Idéalement situé à Agadir, à 10 minutes à pied de la célèbre plage de l&apos;Atlantique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Adresse</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lot N°F7, Cité Baie des Palmiers<br />
                    Quartier Founty<br />
                    Agadir 80000, Maroc
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Téléphone</p>
                  <a href="tel:+212528381919" className="text-primary font-semibold hover:text-accent transition-colors">
                    +212 528 381 919
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <p className="font-semibold text-foreground mb-3">Points d&apos;intérêt proches</p>
              <ul className="space-y-2">
                {[
                  { key: 'poi-beach', label: 'Plage d\'Agadir', dist: '10 min à pied' },
                  { key: 'poi-marina', label: 'Marina d\'Agadir', dist: '15 min en voiture' },
                  { key: 'poi-souk', label: 'Souk El Had', dist: '10 min en voiture' },
                  { key: 'poi-airport', label: 'Aéroport Al Massira', dist: '25 min en voiture' },
                ]?.map((poi) => (
                  <li key={poi?.key} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{poi?.label}</span>
                    <span className="text-muted-foreground text-xs">{poi?.dist}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://maps.google.com/?q=Borjs+Hotel+Suites+Spa+Agadir"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <Navigation size={16} />
              Obtenir l&apos;itinéraire
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-card h-[450px]">
            {/* BACKEND INTEGRATION: Replace with actual Google Maps embed API key */}
            <iframe
              src="https://maps.google.com/maps?q=Borjs+Hotel+Suites+Spa+Agadir+Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Borjs Hotel Suites & Spa Agadir"
            />
          </div>
        </div>
      </div>
    </section>
  );
}