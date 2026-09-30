'use client';
import React, { useState } from 'react';
import { Search, Filter, Eye, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// BACKEND INTEGRATION: Replace with real reservations data from hotel management API
const reservations = [
  { id: 'res-001', guest: 'Karim Benali', room: 'Suite — 401', checkin: '02 Oct 2026', checkout: '06 Oct 2026', nights: 4, adults: 2, children: 1, status: 'Confirmée', source: 'Direct' },
  { id: 'res-002', guest: 'Sophie Martin', room: 'Double Vue Mer — 312', checkin: '03 Oct 2026', checkout: '07 Oct 2026', nights: 4, adults: 2, children: 0, status: 'En cours', source: 'Booking.com' },
  { id: 'res-003', guest: 'Hassan Alaoui', room: 'Standard — 205', checkin: '05 Oct 2026', checkout: '09 Oct 2026', nights: 4, adults: 2, children: 0, status: 'Confirmée', source: 'Direct' },
  { id: 'res-004', guest: 'Fatima Zahra Idrissi', room: 'Suite — 402', checkin: '08 Oct 2026', checkout: '14 Oct 2026', nights: 6, adults: 2, children: 2, status: 'En attente', source: 'Expedia' },
  { id: 'res-005', guest: 'Pierre Dupont', room: 'Double Vue Mer — 308', checkin: '10 Oct 2026', checkout: '13 Oct 2026', nights: 3, adults: 2, children: 0, status: 'Confirmée', source: 'Booking.com' },
  { id: 'res-006', guest: 'Aicha Bensouda', room: 'Standard — 112', checkin: '12 Oct 2026', checkout: '15 Oct 2026', nights: 3, adults: 1, children: 0, status: 'Confirmée', source: 'Direct' },
  { id: 'res-007', guest: 'Thomas Müller', room: 'Suite — 403', checkin: '15 Oct 2026', checkout: '22 Oct 2026', nights: 7, adults: 2, children: 1, status: 'Confirmée', source: 'Tripadvisor' },
  { id: 'res-008', guest: 'Nadia Cherkaoui', room: 'Standard — 218', checkin: '18 Oct 2026', checkout: '20 Oct 2026', nights: 2, adults: 2, children: 0, status: 'Annulée', source: 'Direct' },
  { id: 'res-009', guest: 'James O\'Brien', room: 'Double Vue Mer — 315', checkin: '20 Oct 2026', checkout: '25 Oct 2026', nights: 5, adults: 2, children: 0, status: 'Confirmée', source: 'Booking.com' },
  { id: 'res-010', guest: 'Leila Tazi', room: 'Suite — 405', checkin: '25 Oct 2026', checkout: '01 Nov 2026', nights: 7, adults: 2, children: 2, status: 'En attente', source: 'Direct' },
];

const statusConfig: Record<string, string> = {
  'Confirmée': 'bg-green-100 text-green-700 border-green-200',
  'En cours': 'bg-blue-100 text-blue-700 border-blue-200',
  'En attente': 'bg-amber-100 text-amber-700 border-amber-200',
  'Annulée': 'bg-red-100 text-red-600 border-red-200',
};

export default function AdminReservationsTable() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Tous');
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = reservations.filter((r) => {
    const matchSearch = r.guest.toLowerCase().includes(search.toLowerCase()) ||
      r.room.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'Tous' || r.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-foreground">Réservations</h2>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-52"
            />
          </div>
          {/* Filter */}
          <div className="relative">
            <Filter size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <select
              value={filterStatus}
              onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
              className="pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
            >
              {['Tous', 'Confirmée', 'En cours', 'En attente', 'Annulée'].map((s) => (
                <option key={`filter-${s}`} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                {['Réf.', 'Client', 'Chambre', 'Arrivée', 'Départ', 'Nuits', 'Personnes', 'Statut', 'Source', 'Actions'].map((col) => (
                  <th key={`th-${col}`} className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center text-muted-foreground text-sm">
                    Aucune réservation trouvée pour cette recherche.
                  </td>
                </tr>
              ) : (
                paginated.map((res) => (
                  <tr key={res.id} className="border-b border-border hover:bg-secondary/50 transition-colors group">
                    <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{res.id}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground whitespace-nowrap">{res.guest}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">{res.room}</td>
                    <td className="px-4 py-3 text-sm text-foreground whitespace-nowrap">{res.checkin}</td>
                    <td className="px-4 py-3 text-sm text-foreground whitespace-nowrap">{res.checkout}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground font-tabular">{res.nights}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground font-tabular">{res.adults + res.children}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig[res.status] || ''}`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{res.source}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 rounded-md hover:bg-blue-100 text-blue-600 transition-colors" title="Voir">
                          <Eye size={14} />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-primary/10 text-primary transition-colors" title="Modifier">
                          <Edit2 size={14} />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-red-100 text-red-500 transition-colors" title="Supprimer">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <p className="text-muted-foreground text-xs">
            {filtered.length} résultats — Page {page} sur {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Page précédente"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={`page-${p}`}
                onClick={() => setPage(p)}
                className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors ${
                  page === p ? 'bg-primary text-white' : 'hover:bg-secondary text-foreground'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Page suivante"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}