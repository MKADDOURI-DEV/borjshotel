// URL du moteur de réservation (Nozoul)
export const BOOKING_URL =
  'https://brjs.nozoul.ma/#/be/f9d80206-fb35-490f-ab6f-174aa01f7d35/book';

/**
 * Construit le lien Nozoul. Le moteur attend exactement : period=ARRIVEE,DEPART & adults=N
 * (& child=N & ages=A,B si enfants). Les paramètres vont APRÈS le hash (#/be/.../book?...).
 */
export function buildBookingUrl(params?: {
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  childAges?: (string | number)[];
}) {
  if (!params) return BOOKING_URL;
  const pairs: string[] = [];
  if (params.checkIn && params.checkOut) {
    pairs.push(`period=${encodeURIComponent(`${params.checkIn},${params.checkOut}`)}`);
  }
  pairs.push(`adults=${encodeURIComponent(String(params.adults || 1))}`);
  const kids = params.children || 0;
  if (kids > 0) {
    pairs.push(`child=${kids}`);
    const ages = (params.childAges || [])
      .filter((a) => a !== '' && a !== undefined && a !== null)
      .join(',');
    if (ages) pairs.push(`ages=${encodeURIComponent(ages)}`);
  }
  return `${BOOKING_URL}${BOOKING_URL.includes('?') ? '&' : '?'}${pairs.join('&')}`;
}

/** Réseaux sociaux : renseigner l'URL EXACTE de la page officielle (jamais la page d'accueil du réseau).
 *  Une icône n'est affichée dans le footer que si son URL est renseignée. */
export const SOCIAL_LINKS = {
  instagram: '',
  facebook: '',
};

export const WHATSAPP_NUMBER = '212666262244';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const MOBILE_DISPLAY = '06 66 26 22 44';

/** Salle de réunion : ajouter ici les photos et infos quand elles seront fournies. */
export const MEETING_ROOM: { photos: { src: string; alt: string }[]; details: string[] } = {
  photos: [],
  details: [],
};
