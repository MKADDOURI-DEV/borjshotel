'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

const subjects = [
  'Réservation chambre',
  'Réservation spa',
  'Réservation restaurant',
  'Informations générales',
  'Navette aéroport',
  'Événement / Groupe',
  'Autre',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  // BACKEND INTEGRATION: Replace with actual API call to send contact message
  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    console.log('Contact form data:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message envoyé !</h3>
        <p className="text-muted-foreground text-base mb-6">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>
      <p className="text-muted-foreground text-sm mb-8">
        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-1.5">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            placeholder="Votre nom et prénom"
            {...register('nom', { required: 'Le nom est requis' })}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
              errors.nom ? 'border-red-400' : 'border-input hover:border-primary/40'
            }`}
          />
          {errors.nom && (
            <p className="mt-1.5 text-red-500 text-xs font-medium">{errors.nom.message}</p>
          )}
        </div>

        {/* Email + Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              {...register('email', {
                required: 'L\'email est requis',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
              })}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                errors.email ? 'border-red-400' : 'border-input hover:border-primary/40'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-red-500 text-xs font-medium">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-1.5">
              Téléphone
            </label>
            <input
              id="telephone"
              type="tel"
              placeholder="+212 6XX XXX XXX"
              {...register('telephone')}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring hover:border-primary/40 transition-colors"
            />
          </div>
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="sujet" className="block text-sm font-semibold text-foreground mb-1.5">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="sujet"
            {...register('sujet', { required: 'Veuillez sélectionner un sujet' })}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors appearance-none ${
              errors.sujet ? 'border-red-400' : 'border-input hover:border-primary/40'
            }`}
          >
            <option value="">Sélectionnez un sujet</option>
            {subjects.map((s) => (
              <option key={`subject-${s}`} value={s}>{s}</option>
            ))}
          </select>
          {errors.sujet && (
            <p className="mt-1.5 text-red-500 text-xs font-medium">{errors.sujet.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <p className="text-muted-foreground text-xs mb-2">
            Décrivez votre demande avec le plus de détails possible.
          </p>
          <textarea
            id="message"
            rows={5}
            placeholder="Votre message..."
            {...register('message', {
              required: 'Le message est requis',
              minLength: { value: 20, message: 'Le message doit contenir au moins 20 caractères' },
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors ${
              errors.message ? 'border-red-400' : 'border-input hover:border-primary/40'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-red-500 text-xs font-medium">{errors.message.message}</p>
          )}
        </div>

        <p className="text-muted-foreground text-xs">
          <span className="text-red-500">*</span> Champs obligatoires
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ minWidth: '180px' }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={17} />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}