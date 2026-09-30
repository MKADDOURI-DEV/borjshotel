import React from 'react';
import { BedDouble, CalendarCheck, TrendingUp, MessageSquare, Users, Star } from 'lucide-react';

// BACKEND INTEGRATION: Replace with real-time data from hotel management API
const kpis = [
  {
    id: 'kpi-rooms',
    icon: BedDouble,
    label: 'Chambres totales',
    value: '48',
    sub: '36 occupées aujourd\'hui',
    trend: '+2 vs hier',
    trendUp: true,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    id: 'kpi-reservations',
    icon: CalendarCheck,
    label: 'Réservations actives',
    value: '36',
    sub: '12 arrivées cette semaine',
    trend: '+8% ce mois',
    trendUp: true,
    color: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    id: 'kpi-occupancy',
    icon: TrendingUp,
    label: 'Taux d\'occupation',
    value: '75%',
    sub: 'Objectif: 80%',
    trend: '-3% vs semaine passée',
    trendUp: false,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    id: 'kpi-messages',
    icon: MessageSquare,
    label: 'Messages non lus',
    value: '5',
    sub: '3 demandes de réservation',
    trend: 'Nécessite attention',
    trendUp: false,
    color: 'bg-red-50 text-red-500 border-red-100',
  },
  {
    id: 'kpi-guests',
    icon: Users,
    label: 'Clients ce mois',
    value: '142',
    sub: 'Séjours complétés',
    trend: '+18% vs mois dernier',
    trendUp: true,
    color: 'bg-green-50 text-green-600 border-green-100',
  },
  {
    id: 'kpi-rating',
    icon: Star,
    label: 'Note moyenne',
    value: '4.6',
    sub: 'Sur 5 — 89 avis',
    trend: 'Stable ce trimestre',
    trendUp: true,
    color: 'bg-accent/10 text-accent border-accent/20',
  },
];

export default function AdminKPIs() {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-5">Vue d&apos;ensemble — Octobre 2026</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-4">
        {kpis?.map((kpi) => (
          <div key={kpi?.id} className={`stat-card border rounded-xl ${kpi?.color?.split(' ')?.[2]}`}>
            <div className={`w-10 h-10 rounded-xl ${kpi?.color?.split(' ')?.[0]} ${kpi?.color?.split(' ')?.[2]} border flex items-center justify-center mb-4`}>
              <kpi.icon size={18} className={kpi?.color?.split(' ')?.[1]} />
            </div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-1">{kpi?.label}</p>
            <p className="text-3xl font-bold text-foreground font-tabular mb-1">{kpi?.value}</p>
            <p className="text-muted-foreground text-xs mb-2">{kpi?.sub}</p>
            <p className={`text-xs font-semibold ${kpi?.trendUp ? 'text-green-600' : 'text-red-500'}`}>
              {kpi?.trend}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}