'use client';
import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Search } from 'lucide-react';

import { BOOKING_URL } from '@/lib/config';

export default function BookingBar() {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [childAges, setChildAges] = useState<string[]>([]);
  const today = new Date().toISOString().split('T')[0];
  const handleChildrenChange = (value: string) => {
    setChildren(value);
    setChildAges((prev) => Array.from({ length: Number(value) }, (_, i) => prev[i] ?? ''));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ checkin, checkout, adults, children });
    childAges.forEach((age, i) => params.set(`child${i + 1}_age`, age));
    // Les paramètres sont placés avant le hash (#) du moteur Nozoul
    const [base, hash] = BOOKING_URL.split('#');
    window.open(`${base}?${params.toString()}#${hash}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-card/95 backdrop-blur-md rounded-xl shadow-luxury border border-border p-4 lg:p-3"
    >
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 items-end">
        {/* Check-in */}
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Arrivée
          </label>
          <div className="relative">
            <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="date"
              value={checkin}
              min={today}
              required
              onChange={(e) => {
                setCheckin(e.target.value);
                if (checkout && checkout <= e.target.value) setCheckout('');
              }}
              className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              aria-label="Date d'arrivée"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Départ
          </label>
          <div className="relative">
            <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="date"
              value={checkout}
              min={checkin || today}
              required
              onChange={(e) => setCheckout(e.target.value)}
              className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              aria-label="Date de départ"
            />
          </div>
        </div>

        {/* Adults */}
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Adultes
          </label>
          <div className="relative">
            <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full pl-8 pr-6 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring appearance-none text-foreground"
              aria-label="Nombre d'adultes"
            >
              {['1','2','3','4','5','6'].map((n) => (
                <option key={`adults-${n}`} value={n}>{n}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Children */}
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Enfants
          </label>
          <div className="relative">
            <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              value={children}
              onChange={(e) => handleChildrenChange(e.target.value)}
              className="w-full pl-8 pr-6 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring appearance-none text-foreground"
              aria-label="Nombre d'enfants"
            >
              {['0','1','2','3','4'].map((n) => (
                <option key={`children-${n}`} value={n}>{n}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Âges des enfants */}
        {childAges.length > 0 && (
          <div className="col-span-2 lg:col-span-5">
            <p className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
              Âge des enfants (à la date du séjour)
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {childAges.map((age, i) => (
                <div key={`child-age-${i}`} className="relative">
                  <select
                    value={age}
                    required
                    onChange={(e) =>
                      setChildAges((prev) => prev.map((a, idx) => (idx === i ? e.target.value : a)))
                    }
                    className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring appearance-none text-foreground"
                    aria-label={`Âge de l'enfant ${i + 1}`}
                  >
                    <option value="" disabled>Enfant {i + 1} – âge</option>
                    <option value="0">Moins d&apos;1 an</option>
                    {Array.from({ length: 17 }, (_, a) => a + 1).map((a) => (
                      <option key={`age-${i}-${a}`} value={String(a)}>{a} {a === 1 ? 'an' : 'ans'}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="col-span-2 lg:col-span-1">
          <button
            type="submit"
            className="w-full btn-primary justify-center py-2.5 text-sm"
          >
            <Search size={15} />
            Vérifier
          </button>
        </div>
      </div>
    </form>
  );
}