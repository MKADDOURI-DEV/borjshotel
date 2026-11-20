import React from 'react';
import Link from 'next/link';
import { Presentation, ImageIcon } from 'lucide-react';
import PhotoGrid from '@/components/PhotoGrid';
import { MEETING_ROOM, WHATSAPP_URL } from '@/lib/config';

export default function MeetingRoomSection() {
  const { photos, details } = MEETING_ROOM;
  return (
    <section id="salle-de-reunion" className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Séminaires & événements</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Salle de réunion</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Un espace professionnel et élégant pour vos réunions, séminaires et rencontres d&apos;affaires.
          </p>
        </div>

        {photos.length > 0 ? (
          <div className="mb-10">
            <PhotoGrid photos={photos.map((ph) => ({ src: ph.src, alt: ph.alt }))} label="Salle de réunion" />
          </div>
        ) : (
          <div className="relative aspect-[16/7] rounded-2xl border-2 border-dashed border-accent/40 bg-card flex flex-col items-center justify-center text-center p-8 mb-10">
            <ImageIcon size={32} className="text-accent mb-3" />
            <p className="font-semibold text-foreground mb-1">Photos de la salle</p>
            <p className="text-muted-foreground text-sm">Les photos seront bientôt disponibles.</p>
          </div>
        )}

        <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Presentation size={22} className="text-primary" />
          </div>
          {details.length > 0 ? (
            <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
              {details.map((d) => <li key={d}>• {d}</li>)}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Capacité, équipements et configurations : notre équipe commerciale vous renseigne et prépare votre devis sur simple demande.
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-3 px-6">Nous contacter sur WhatsApp</a>
            <Link href="/contact" className="btn-outline text-sm py-3 px-6">Formulaire de contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
