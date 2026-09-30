'use client';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

// BACKEND INTEGRATION: Replace with real occupancy data from hotel management API
const data = [
  { name: 'Suite', occupancy: 82, fill: 'var(--accent)' },
  { name: 'Vue Mer', occupancy: 74, fill: 'var(--primary)' },
  { name: 'Standard', occupancy: 71, fill: 'var(--muted-foreground)' },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: { name: string; occupancy: number } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-luxury">
        <p className="text-foreground font-semibold text-sm">{payload[0].payload.name}</p>
        <p className="text-primary font-bold">{payload[0].payload.occupancy}% occupé</p>
      </div>
    );
  }
  return null;
};

export default function OccupancyChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="90%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar dataKey="occupancy" cornerRadius={4} background={{ fill: 'var(--secondary)' }} />
          <Tooltip content={<CustomTooltip />} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-2">
        {data.map((d) => (
          <div key={`occ-legend-${d.name}`} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: d.fill }} />
              <span className="text-muted-foreground">{d.name}</span>
            </div>
            <span className="font-bold text-foreground font-tabular">{d.occupancy}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}