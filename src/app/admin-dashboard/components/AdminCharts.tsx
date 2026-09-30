'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ReservationsChart = dynamic(() => import('./ReservationsChart'), { ssr: false });
const OccupancyChart = dynamic(() => import('./OccupancyChart'), { ssr: false });

export default function AdminCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 bg-card border border-border rounded-xl p-6">
        <h3 className="text-base font-bold text-foreground mb-1">Réservations — 12 derniers mois</h3>
        <p className="text-muted-foreground text-xs mb-5">Nombre de réservations confirmées par mois</p>
        <ReservationsChart />
      </div>
      <div className="xl:col-span-1 bg-card border border-border rounded-xl p-6">
        <h3 className="text-base font-bold text-foreground mb-1">Occupation par type</h3>
        <p className="text-muted-foreground text-xs mb-5">Taux d&apos;occupation actuel par catégorie de chambre</p>
        <OccupancyChart />
      </div>
    </div>
  );
}