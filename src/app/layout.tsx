import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Borjs Hotel Suites & Spa | Hôtel & Spa à Agadir',
  description:
    'Découvrez Borjs Hotel Suites & Spa à Agadir : chambres et suites, piscine, spa, restaurant et services pour un séjour confortable au Maroc.',
  keywords: 'hotel agadir, borjs hotel, spa agadir, suites agadir, hotel maroc, piscine agadir',
  openGraph: {
    title: 'Borjs Hotel Suites & Spa | Hôtel & Spa à Agadir',
    description:
      'Découvrez Borjs Hotel Suites & Spa à Agadir : chambres et suites, piscine, spa, restaurant et services pour un séjour confortable au Maroc.',
    url: 'https://borjshotelagadir.com',
    siteName: 'Borjs Hotel Suites & Spa',
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borjs Hotel Suites & Spa | Hôtel & Spa à Agadir',
    description:
      'Découvrez Borjs Hotel Suites & Spa à Agadir : chambres et suites, piscine, spa, restaurant et services pour un séjour confortable au Maroc.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Borjs Hotel Suites & Spa',
              description:
                'Hôtel 4 étoiles à Agadir combinant suites confortables, spa, piscine et restaurant.',
              url: 'https://borjshotelagadir.com',
              telephone: '+212528381919',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Lot N°F7, Cité Baie des Palmiers',
                addressLocality: 'Agadir',
                postalCode: '80000',
                addressCountry: 'MA',
              },
              starRating: { '@type': 'Rating', ratingValue: '4' },
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Piscine extérieure', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuit', value: true },
              ],
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fborjshotel6155back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}