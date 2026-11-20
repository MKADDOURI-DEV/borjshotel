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
  instagram: 'https://www.instagram.com/borjs_hotel',
  facebook: 'https://www.facebook.com/share/19zVpFUcJn/',
  tripadvisor: 'https://www.tripadvisor.fr/Hotel_Review-g293731-d14954596-Reviews-Borjs_Hotel_Suites_Spa-Agadir_Souss_Massa.html',
};

export const WHATSAPP_NUMBER = '212666262244';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const MOBILE_DISPLAY = '06 66 26 22 44';

/** Salle de réunion : ajouter ici les photos et infos quand elles seront fournies. */
export const MEETING_ROOM: { photos: { src: string; alt: string; width: number; height: number }[]; details: string[] } = {
  photos: [
    { src: '/assets/images/meeting/salle-reunion-01.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 1', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-02.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 2', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-03.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 3', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-04.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 4', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-05.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 5', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-06.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 6', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-07.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 7', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-08.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 8', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-09.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 9', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-10.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 10', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-11.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 11', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-12.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 12', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-13.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 13', width: 1333, height: 2000 },
    { src: '/assets/images/meeting/salle-reunion-14.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 14', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-15.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 15', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-16.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 16', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-17.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 17', width: 2000, height: 1333 },
    { src: '/assets/images/meeting/salle-reunion-18.jpg', alt: 'Salle de réunion du Borjs Hotel – vue 18', width: 1333, height: 2000 },
  ],
  details: [],
};
