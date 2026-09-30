'use client';
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

// BACKEND INTEGRATION: Replace with real reservations data from hotel management API
const data = [
  { month: 'Nov', reservations: 28 },
  { month: 'Déc', reservations: 42 },
  { month: 'Jan', reservations: 35 },
  { month: 'Fév', reservations: 31 },
  { month: 'Mar', reservations: 48 },
  { month: 'Avr', reservations: 56 },
  { month: 'Mai', reservations: 62 },
  { month: 'Jun', reservations: 71 },
  { month: 'Jul', reservations: 88 },
  { month: 'Aoû', reservations: 94 },
  { month: 'Sep', reservations: 67 },
  { month: 'Oct', reservations: 52 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-luxury">
        <p className="text-foreground font-semibold text-sm">{label}</p>
        <p className="text-primary font-bold">{payload[0].value} réservations</p>
      </div>
    );
  }
  return null;
};

export default function ReservationsChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity={1} />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--secondary)' }} />
        <Bar dataKey="reservations" fill="url(#barGradient)" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`bar-cell-${index}`} fill={index === data.length - 1 ? 'var(--accent)' : 'url(#barGradient)'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}