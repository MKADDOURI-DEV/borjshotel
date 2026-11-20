'use client';
import React from 'react';
import PhotoGrid from '@/components/PhotoGrid';

const spaImages = [
{ id: 'spa-g-1', src: "/assets/images/spa/dsc1384.jpg", alt: 'Hammam traditionnel avec banquette et fenêtre en arche', tall: true },
{ id: 'spa-g-2', src: "/assets/images/spa/dsc1399.jpg", alt: 'Cabine de massage avec lumière tamisée et niches', tall: false },
{ id: 'spa-g-3', src: "/assets/images/spa/dsc1408.jpg", alt: 'Entrée du hammam', tall: false },
{ id: 'spa-g-4', src: "/assets/images/spa/dsc1386.jpg", alt: 'Vasque du hammam en zellige', tall: false },
{ id: 'spa-g-5', src: "/assets/images/spa/dsc1404.jpg", alt: 'Salle de massage double avec niches en tadelakt', tall: true },
{ id: 'spa-g-7', src: "/assets/images/spa/dsc1385.jpg", alt: 'Salle de hammam avec accès en arche', tall: false },
{ id: 'spa-g-9', src: "/assets/images/spa/dsc1392.jpg", alt: 'Plateau de soins et produits naturels du hammam', tall: false },
{ id: 'spa-g-10', src: "/assets/images/spa/dsc1400.jpg", alt: 'Cabine de massage avec plafond en bois', tall: true },
{ id: 'spa-g-11', src: "/assets/images/spa/dsc1409.jpg", alt: 'Entrée des salles de massage', tall: false },
{ id: 'spa-g-12', src: "/assets/images/spa/dsc1394.jpg", alt: 'Banquette du hammam et fenêtre', tall: false },
{ id: 'spa-g-13', src: "/assets/images/spa/dsc1401.jpg", alt: 'Serviette et pierres chaudes pour le massage', tall: false },
{ id: 'spa-g-14', src: "/assets/images/spa/dsc1402.jpg", alt: 'Cabine de massage éclairée aux bougies', tall: false },
{ id: 'spa-g-16', src: "/assets/images/spa/dsc1403.jpg", alt: 'Table de massage et couloir en arche', tall: false },
{ id: 'spa-g-17', src: "/assets/images/spa/dsc1406.jpg", alt: 'Cabine de massage avec niches et bougies', tall: false },
{ id: 'spa-g-18', src: "/assets/images/spa/dsc1407.jpg", alt: 'Bougies dans une niche du spa', tall: false },
{ id: 'spa-g-19', src: "/assets/images/spa/dsc1411.jpg", alt: 'Étagères de serviettes du spa', tall: false },
{ id: 'spa-g-20', src: "/assets/images/spa/dsc1414.jpg", alt: 'Couloir du spa avec serviettes', tall: true },
{ id: 'spa-n-1', src: "/assets/images/spa/spa-new-01.jpg", alt: 'Cabine de soins avec fauteuils et ambiance chaleureuse', tall: true },
{ id: 'spa-n-2', src: "/assets/images/spa/spa-new-02.jpg", alt: 'Bougie et galets de massage', tall: true },
{ id: 'spa-n-3', src: "/assets/images/spa/spa-new-03.jpg", alt: 'Couloir du spa éclairé aux lanternes', tall: true },
{ id: 'spa-n-4', src: "/assets/images/spa/spa-new-04.jpg", alt: 'Lits de massage et serviettes en forme de cygnes', tall: false },
{ id: 'spa-n-5', src: "/assets/images/spa/spa-new-05.jpg", alt: 'Serviette roulée sur lit de massage', tall: true },
{ id: 'spa-n-6', src: "/assets/images/spa/spa-new-06.jpg", alt: 'Banquette du hammam en zellige', tall: false },
{ id: 'spa-n-7', src: "/assets/images/spa/spa-new-07.jpg", alt: 'Plateau de soins sur banquette en mosaïque', tall: true },
{ id: 'spa-n-8', src: "/assets/images/spa/spa-new-08.jpg", alt: 'Espace détente du spa', tall: true },
{ id: 'spa-n-9', src: "/assets/images/spa/spa-new-09.jpg", alt: 'Cabine de massage individuelle', tall: true },
{ id: 'spa-n-10', src: "/assets/images/spa/spa-new-10.jpg", alt: 'Salle de massage aux rideaux ocre', tall: false },
{ id: 'spa-n-11', src: "/assets/images/spa/spa-new-11.jpg", alt: 'Salle de massage avec vue sur la ville', tall: false },
{ id: 'spa-n-12', src: "/assets/images/spa/spa-new-12.jpg", alt: 'Bougie et galet sur serviette blanche', tall: true },
];


export default function SpaGallery() {
  return (
    <section className="section-padding bg-secondary moroccan-pattern">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Galerie Spa</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Découvrez nos espaces de bien-être en images.
          </p>
        </div>
        <PhotoGrid photos={spaImages.map((g) => ({ src: g.src, alt: g.alt }))} label="Galerie Spa" />
      </div>
    </section>);
}
