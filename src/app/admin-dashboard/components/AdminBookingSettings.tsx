'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save, Loader2, CheckCircle, ExternalLink } from 'lucide-react';

interface BookingSettingsData {
  bookingEngineUrl: string;
  checkinTime: string;
  checkoutTime: string;
  minStay: number;
  maxStay: number;
  currency: string;
  confirmationEmail: string;
}

export default function AdminBookingSettings() {
  const [saved, setSaved] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingSettingsData>({
    defaultValues: {
      bookingEngineUrl: 'https://booking.borjshotelagadir.com',
      checkinTime: '14:00',
      checkoutTime: '12:00',
      minStay: 1,
      maxStay: 30,
      currency: 'MAD',
      confirmationEmail: 'reservations@borjshotelagadir.com',
    },
  });

  // BACKEND INTEGRATION: Save booking engine settings to admin configuration API
  const onSubmit = async (data: BookingSettingsData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Booking settings saved:', data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Paramètres de Réservation</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Configurez le moteur de réservation et les paramètres de séjour.
          </p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 text-green-600 text-sm font-semibold bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
            <CheckCircle size={16} />
            Enregistré
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Booking engine */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <ExternalLink size={16} className="text-accent" />
            Moteur de Réservation
          </h3>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              URL du moteur de réservation <span className="text-red-500">*</span>
            </label>
            <p className="text-muted-foreground text-xs mb-2">
              Tous les boutons &quot;Réserver&quot; du site redirigeront vers cette URL.
            </p>
            <input
              type="url"
              {...register('bookingEngineUrl', {
                required: 'L\'URL est requise',
                pattern: { value: /^https?:\/\/.+/, message: 'URL invalide — doit commencer par http:// ou https://' },
              })}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring font-mono ${errors.bookingEngineUrl ? 'border-red-400' : 'border-input'}`}
              placeholder="https://votre-moteur-de-reservation.com"
            />
            {errors.bookingEngineUrl && (
              <p className="mt-1.5 text-red-500 text-xs">{errors.bookingEngineUrl.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Email de confirmation
            </label>
            <input
              type="email"
              {...register('confirmationEmail')}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Stay settings */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold text-foreground mb-4">Paramètres de Séjour</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Heure d&apos;arrivée</label>
              <input type="time" {...register('checkinTime')} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Heure de départ</label>
              <input type="time" {...register('checkoutTime')} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Séjour minimum (nuits)</label>
              <input type="number" {...register('minStay', { valueAsNumber: true })} min={1} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Séjour maximum (nuits)</label>
              <input type="number" {...register('maxStay', { valueAsNumber: true })} min={1} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Devise</label>
              <select {...register('currency')} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none">
                <option value="MAD">MAD — Dirham marocain</option>
                <option value="EUR">EUR — Euro</option>
                <option value="USD">USD — Dollar américain</option>
                <option value="GBP">GBP — Livre sterling</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary py-3 px-8 disabled:opacity-60">
          {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {isSubmitting ? 'Enregistrement...' : 'Enregistrer les paramètres'}
        </button>
      </form>
    </div>
  );
}