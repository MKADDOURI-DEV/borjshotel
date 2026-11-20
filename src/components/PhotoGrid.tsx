'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type GridPhoto = { src: string; alt: string };

type Props = {
  photos: GridPhoto[];
  /** Nombre de photos visibles avant le "+N" (6 par défaut) */
  previewCount?: number;
  label?: string;
};

export default function PhotoGrid({ photos, previewCount = 6, label = 'Galerie' }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const total = photos.length;
  const preview = photos.slice(0, previewCount);
  const remaining = total - previewCount;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + total) % total)),
    [total]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, go]);

  // Garde la miniature active visible
  useEffect(() => {
    if (open === null) return;
    document.getElementById(`pg-thumb-${open}`)?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {preview.map((p, i) => {
          const isLast = i === preview.length - 1 && remaining > 0;
          return (
            <button
              key={`${p.src}-${i}`}
              type="button"
              onClick={() => setOpen(i)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-secondary"
              aria-label={isLast ? `Voir les ${total} photos – ${label}` : `Agrandir : ${p.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {isLast && (
                <span className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white">
                  <span className="text-3xl md:text-4xl font-bold">+{remaining}</span>
                  <span className="text-xs md:text-sm tracking-widest uppercase mt-1">Voir toutes les photos</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} en plein écran`}
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm tracking-wider">{open + 1} / {total}</span>
            <button type="button" onClick={close} aria-label="Fermer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <X size={20} />
            </button>
          </div>

          <div
            className="relative flex-1 min-h-0 flex items-center justify-center px-2 md:px-16"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[open].src} alt={photos[open].alt} className="max-w-full max-h-full object-contain" />
            <button type="button" onClick={() => go(-1)} aria-label="Photo précédente" className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center">
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Photo suivante" className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="px-3 py-3 overflow-x-auto flex gap-2" onClick={(e) => e.stopPropagation()}>
            {photos.map((p, i) => (
              <button
                key={`${p.src}-t-${i}`}
                id={`pg-thumb-${i}`}
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Photo ${i + 1}`}
                className={`relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border-2 ${i === open ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
