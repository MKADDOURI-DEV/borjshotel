'use client';
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, BedDouble, Maximize2, X, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

// BACKEND INTEGRATION: Replace with real rooms data from hotel management API
const initialRooms = [
  { id: 'admin-room-001', name: 'Chambre Standard Double', type: 'Standard', size: '28 m²', occupancy: 2, status: 'Disponible', floor: '1er étage', view: 'Jardin' },
  { id: 'admin-room-002', name: 'Double Vue Mer', type: 'Vue Mer', size: '28 m²', occupancy: 2, status: 'Occupée', floor: '3ème étage', view: 'Mer' },
  { id: 'admin-room-003', name: 'Suite Supérieure', type: 'Suite', size: '58 m²', occupancy: 4, status: 'Disponible', floor: '4ème étage', view: 'Piscine' },
  { id: 'admin-room-004', name: 'Chambre Standard Double', type: 'Standard', size: '28 m²', occupancy: 2, status: 'Maintenance', floor: '2ème étage', view: 'Cour' },
  { id: 'admin-room-005', name: 'Suite Supérieure', type: 'Suite', size: '58 m²', occupancy: 4, status: 'Occupée', floor: '4ème étage', view: 'Jardin' },
];

const statusConfig: Record<string, string> = {
  'Disponible': 'bg-green-100 text-green-700 border-green-200',
  'Occupée': 'bg-blue-100 text-blue-700 border-blue-200',
  'Maintenance': 'bg-amber-100 text-amber-700 border-amber-200',
};

interface RoomFormData {
  name: string;
  type: string;
  size: string;
  occupancy: number;
  floor: string;
  view: string;
  status: string;
}

export default function AdminRoomsManager() {
  const [rooms, setRooms] = useState(initialRooms);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<RoomFormData>();

  const openAdd = () => { reset(); setEditingId(null); setShowModal(true); };

  const onSubmit = async (data: RoomFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    if (editingId) {
      setRooms((prev) => prev.map((r) => r.id === editingId ? { ...r, ...data } : r));
    } else {
      setRooms((prev) => [...prev, { id: `admin-room-${Date.now()}`, ...data }]);
    }
    setShowModal(false);
    reset();
  };

  const deleteRoom = (id: string) => {
    setRooms((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Gestion des Chambres</h2>
        <button onClick={openAdd} className="btn-primary text-sm py-2.5 px-5">
          <Plus size={16} />
          Ajouter une chambre
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                {['Chambre', 'Type', 'Superficie', 'Capacité', 'Étage', 'Vue', 'Statut', 'Actions'].map((col) => (
                  <th key={`rooms-th-${col}`} className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.id} className="border-b border-border hover:bg-secondary/50 transition-colors group">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground">{room.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{room.type}</td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    <div className="flex items-center gap-1">
                      <Maximize2 size={12} className="text-muted-foreground" />
                      {room.size}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground font-tabular">{room.occupancy} pers.</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{room.floor}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{room.view}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig[room.status] || ''}`}>
                      {room.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-1.5 rounded-md hover:bg-primary/10 text-primary transition-colors"
                        title="Modifier"
                        onClick={() => { setEditingId(room.id); setShowModal(true); }}
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        className="p-1.5 rounded-md hover:bg-red-100 text-red-500 transition-colors"
                        title="Supprimer"
                        onClick={() => deleteRoom(room.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-lg shadow-luxury animate-slide-down" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingId ? 'Modifier la chambre' : 'Ajouter une chambre'}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Nom <span className="text-red-500">*</span></label>
                <input
                  {...register('name', { required: 'Requis' })}
                  placeholder="ex: Suite Supérieure 401"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors.name ? 'border-red-400' : 'border-input'}`}
                />
                {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Type</label>
                  <select {...register('type')} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="Standard">Standard</option>
                    <option value="Vue Mer">Vue Mer</option>
                    <option value="Suite">Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Superficie</label>
                  <input {...register('size')} placeholder="28 m²" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Capacité</label>
                  <input type="number" {...register('occupancy', { valueAsNumber: true })} defaultValue={2} min={1} max={6} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Statut</label>
                  <select {...register('status')} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="Disponible">Disponible</option>
                    <option value="Occupée">Occupée</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Étage</label>
                  <input {...register('floor')} placeholder="ex: 3ème étage" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Vue</label>
                  <input {...register('view')} placeholder="ex: Mer, Piscine" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors">
                  Annuler
                </button>
                <button type="submit" disabled={isSubmitting} className="flex-1 btn-primary justify-center py-2.5 disabled:opacity-60">
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : (editingId ? 'Enregistrer' : 'Ajouter')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}