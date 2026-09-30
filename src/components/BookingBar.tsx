'use client';
import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Search } from 'lucide-react';

// BACKEND INTEGRATION: Replace BOOKING_ENGINE_URL with actual booking engine
const BOOKING_ENGINE_URL = 'https://booking.borjshotelagadir.com';

export default function BookingBar() {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [room, setRoom] = useState('standard');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ checkin, checkout, adults, children, room });
    window.open(`${BOOKING_ENGINE_URL}?${params.toString()}`, '_blank');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-card/95 backdrop-blur-md rounded-xl shadow-luxury border border-border p-4 lg:p-3"
    >
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 items-end">
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
              onChange={(e) => setCheckin(e.target.value)}
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
              onChange={(e) => setChildren(e.target.value)}
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

        {/* Room type */}
        <div className="col-span-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Chambre
          </label>
          <div className="relative">
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring appearance-none text-foreground"
              aria-label="Type de chambre"
            >
              <option value="standard">Standard Double</option>
              <option value="seaview">Double Vue Mer</option>
              <option value="suite">Suite</option>
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>

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