import React from 'react';
import { Clock } from 'lucide-react';

// BACKEND INTEGRATION: Opening hours should be editable from admin panel
const openingHours = [
  {
    id: 'hours-breakfast',
    venue: 'Petit-Déjeuner',
    schedule: [
      { key: 'breakfast-daily', days: 'Tous les jours', hours: '07h00 – 10h30' },
    ],
  },
  {
    id: 'hours-lunch',
    venue: 'Déjeuner',
    schedule: [
      { key: 'lunch-daily', days: 'Tous les jours', hours: '12h00 – 15h00' },
    ],
  },
  {
    id: 'hours-dinner',
    venue: 'Dîner',
    schedule: [
      { key: 'dinner-daily', days: 'Tous les jours', hours: '19h00 – 22h30' },
    ],
  },
  {
    id: 'hours-rooftop',
    venue: 'Rooftop Bar',
    schedule: [
      { key: 'rooftop-daily', days: 'Tous les jours', hours: '17h00 – 00h00' },
    ],
  },
];

export default function RestaurantHours() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Horaires</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Horaires d&apos;ouverture
          </h2>
          <p className="text-muted-foreground text-sm italic">
            Horaires susceptibles de varier selon la saison. Veuillez confirmer auprès de la réception.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {openingHours?.map((item) => (
            <div key={item?.id} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/40 hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-4">{item?.venue}</h3>
              {item?.schedule?.map((s) => (
                <div key={s?.key} className="mb-2">
                  <p className="text-muted-foreground text-xs font-medium mb-1">{s?.days}</p>
                  <p className="text-primary font-bold text-base">{s?.hours}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}