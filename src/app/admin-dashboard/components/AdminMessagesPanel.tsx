'use client';
import React, { useState } from 'react';
import { Mail, MailOpen, Trash2, Phone, MessageCircle, Clock } from 'lucide-react';

// BACKEND INTEGRATION: Replace with real contact messages from database
const initialMessages = [
  { id: 'msg-001', nom: 'Karim Benali', email: 'k.benali@gmail.com', telephone: '+212 661 234 567', sujet: 'Réservation chambre', message: 'Bonjour, je souhaite réserver une suite pour 2 personnes du 15 au 22 octobre. Pourriez-vous me confirmer la disponibilité et les tarifs ?', date: '30 Sep 2026, 14:32', read: false, source: 'Formulaire' },
  { id: 'msg-002', nom: 'Sophie Martin', email: 'sophie.martin@outlook.fr', telephone: '+33 6 78 90 12 34', sujet: 'Réservation spa', message: 'Bonjour, nous serons en séjour du 5 au 9 octobre et aimerions réserver 2 massages et un hammam. Merci de nous indiquer les disponibilités.', date: '29 Sep 2026, 09:15', read: false, source: 'Formulaire' },
  { id: 'msg-003', nom: 'Hassan Alaoui', email: 'h.alaoui@yahoo.com', telephone: '+212 672 456 789', sujet: 'Navette aéroport', message: 'Est-ce que vous proposez un service de navette depuis l\'aéroport Al Massira ? Nous arrivons le 12 octobre à 18h30.', date: '28 Sep 2026, 16:45', read: true, source: 'WhatsApp' },
  { id: 'msg-004', nom: 'Nadia Cherkaoui', email: 'nadia.cherkaoui@gmail.com', telephone: '+212 661 987 654', sujet: 'Événement / Groupe', message: 'Nous organisons un séminaire d\'entreprise pour 20 personnes fin octobre. Avez-vous des salles de réunion disponibles et des tarifs groupe pour les chambres ?', date: '27 Sep 2026, 11:20', read: true, source: 'Formulaire' },
  { id: 'msg-005', nom: 'Pierre Dupont', email: 'p.dupont@hotmail.com', telephone: '+33 6 12 34 56 78', sujet: 'Informations générales', message: 'Bonjour, nous planifions un séjour en famille avec 2 enfants de 6 et 9 ans. Y a-t-il des activités prévues pour les enfants à l\'hôtel ?', date: '26 Sep 2026, 08:55', read: true, source: 'Formulaire' },
];

export default function AdminMessagesPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedMsg = messages.find((m) => m.id === selected);

  const markRead = (id: string) => {
    setMessages((prev) => prev.map((m) => m.id === id ? { ...m, read: true } : m));
  };

  const deleteMsg = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected === id) setSelected(null);
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-foreground">Messages de contact</h2>
          {unreadCount > 0 && (
            <span className="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {unreadCount} non lus
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Messages list */}
        <div className="lg:col-span-2 space-y-2">
          {messages.length === 0 ? (
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <MailOpen size={32} className="text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Aucun message</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => { setSelected(msg.id); markRead(msg.id); }}
                className={`bg-card border rounded-xl p-4 cursor-pointer transition-all ${
                  selected === msg.id
                    ? 'border-primary shadow-card'
                    : 'border-border hover:border-accent/40'
                } ${!msg.read ? 'border-l-4 border-l-accent' : ''}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {msg.read ? (
                      <MailOpen size={14} className="text-muted-foreground flex-shrink-0" />
                    ) : (
                      <Mail size={14} className="text-accent flex-shrink-0" />
                    )}
                    <p className={`text-sm font-semibold ${!msg.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {msg.nom}
                    </p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteMsg(msg.id); }}
                    className="p-1 rounded hover:bg-red-100 text-red-500 transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <p className="text-xs font-semibold text-primary mb-1">{msg.sujet}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{msg.message}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={11} className="text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">{msg.date}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message detail */}
        <div className="lg:col-span-3">
          {selectedMsg ? (
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{selectedMsg.nom}</h3>
                  <p className="text-accent text-sm font-semibold">{selectedMsg.sujet}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">{selectedMsg.source}</span>
              </div>

              <div className="space-y-3 mb-5 p-4 bg-secondary rounded-xl text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={13} className="text-primary" />
                  <a href={`mailto:${selectedMsg.email}`} className="text-primary hover:text-accent transition-colors">
                    {selectedMsg.email}
                  </a>
                </div>
                {selectedMsg.telephone && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={13} className="text-primary" />
                    <a href={`tel:${selectedMsg.telephone}`} className="text-primary hover:text-accent transition-colors">
                      {selectedMsg.telephone}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={13} />
                  <span>{selectedMsg.date}</span>
                </div>
              </div>

              <div className="p-4 bg-secondary rounded-xl mb-6">
                <p className="text-sm text-foreground leading-relaxed">{selectedMsg.message}</p>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${selectedMsg.email}?subject=Re: ${selectedMsg.sujet}`}
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  <Mail size={15} />
                  Répondre par email
                </a>
                {selectedMsg.telephone && (
                  <a
                    href={`https://wa.me/${selectedMsg.telephone.replace(/\s+/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                )}
                <button
                  onClick={() => deleteMsg(selectedMsg.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={15} />
                  Supprimer
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
              <MailOpen size={40} className="text-muted-foreground mb-4" />
              <p className="text-foreground font-semibold mb-2">Sélectionnez un message</p>
              <p className="text-muted-foreground text-sm">Cliquez sur un message pour le consulter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}