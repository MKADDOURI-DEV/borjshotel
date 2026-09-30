'use client';
import React, { useState } from 'react';
import AdminKPIs from './AdminKPIs';
import AdminReservationsTable from './AdminReservationsTable';
import AdminCharts from './AdminCharts';
import AdminRoomsManager from './AdminRoomsManager';
import AdminBookingSettings from './AdminBookingSettings';
import AdminMessagesPanel from './AdminMessagesPanel';

const tabs = [
  { key: 'tab-overview', id: 'overview', label: 'Vue d\'ensemble' },
  { key: 'tab-reservations', id: 'reservations', label: 'Réservations' },
  { key: 'tab-rooms', id: 'rooms', label: 'Chambres' },
  { key: 'tab-messages', id: 'messages', label: 'Messages' },
  { key: 'tab-settings', id: 'settings', label: 'Paramètres' },
];

export default function AdminDashboardContent() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6 lg:p-8 max-w-screen-2xl">
      {/* Tab nav */}
      <div className="flex items-center gap-1 mb-8 border-b border-border overflow-x-auto">
        {tabs?.map((tab) => (
          <button
            key={tab?.key}
            onClick={() => setActiveTab(tab?.id)}
            className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab?.id
                ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab?.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          <AdminKPIs />
          <AdminCharts />
        </div>
      )}
      {activeTab === 'reservations' && <AdminReservationsTable />}
      {activeTab === 'rooms' && <AdminRoomsManager />}
      {activeTab === 'messages' && <AdminMessagesPanel />}
      {activeTab === 'settings' && <AdminBookingSettings />}
    </div>
  );
}