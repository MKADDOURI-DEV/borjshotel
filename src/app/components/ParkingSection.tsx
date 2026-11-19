import React from 'react';
import { ParkingCircle, Car, ArrowDownToLine } from 'lucide-react';

const options = [
  { key: 'parking-ext', icon: Car, title: 'Parking extérieur', desc: 'Un stationnement en plein air, accessible directement depuis l\'hôtel.' },
  { key: 'parking-sub', icon: ArrowDownToLine, title: 'Parking en sous-sol', desc: 'Un stationnement couvert en sous-sol, à l\'abri du soleil.' },
];

export default function ParkingSection() {
  return (
    <section id="parking" className="section-padding bg-background">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Stationnement</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Parking</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            L&apos;hôtel met à votre disposition deux possibilités de stationnement : un parking extérieur et un parking en sous-sol.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {options.map((o) => (
            <div key={o.key} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/40 hover:shadow-card transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <o.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
          <ParkingCircle size={16} className="text-accent" />
          <span>Deux parkings : extérieur et sous-sol</span>
        </div>
      </div>
    </section>
  );
}
