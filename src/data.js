// ============================================================
// ROUKI FASHION — Données Produits & Services
// ============================================================

import robeWax from './assets/images/model_robe_wax_orange.jpg';
import ensembleBleu from './assets/images/model_ensemble_bleu.jpg';
import robeNoire from './assets/images/model_robe_noire_gold.jpg';
import ensembleVert from './assets/images/model_ensemble_vert.jpg';
import jupeRose from './assets/images/model_jupe_rose.jpg';
import boubouBordeaux from './assets/images/model_boubou_bordeaux.jpg';

export const WHATSAPP_NUMBER = '+2290143271803';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
export const PHONE_NUMBER = '+229 01 43 27 18 03';

export const categories = [
  { id: 'all', label: 'Tout', icon: 'grid' },
  { id: 'robes', label: 'Robes', icon: 'dress' },
  { id: 'ensembles', label: 'Ensembles', icon: 'layers' },
  { id: 'jupes', label: 'Jupes', icon: 'circle' },
  { id: 'boubous', label: 'Boubous', icon: 'star' },
];

export const products = [
  {
    id: 1,
    name: 'Robe Wax Soleil',
    category: 'robes',
    categoryLabel: 'Robe',
    image: robeWax,
    price: '45 000 FCFA',
    rating: 4.9,
    reviews: 38,
    badge: 'Nouveau',
    description:
      "Une création exceptionnelle en wax 100 % africain aux couleurs de l'aurore. Silhouette fluide avec manches à volants caractéristiques de notre savoir-faire. Idéale pour les cérémonies, mariages et sorties élégantes.",
    specs: {
      Matière: 'Wax 100% coton',
      Coupe: 'Robe longue',
      Finition: 'Couture main',
      Délai: '7 à 10 jours',
    },
    isNew: true,
  },
  {
    id: 2,
    name: 'Ensemble Pagne Royal',
    category: 'ensembles',
    categoryLabel: 'Ensemble',
    image: ensembleBleu,
    price: '55 000 FCFA',
    rating: 4.8,
    reviews: 24,
    badge: null,
    description:
      "Ensemble deux pièces en pagne wax bleu et blanc. Jupe portefeuille assortie à un top peplum à col. Allure royale, confort absolu. La tenue parfaite pour impressionner en toutes circonstances.",
    specs: {
      Matière: 'Pagne wax',
      Coupe: 'Ensemble 2 pièces',
      Finition: 'Broderie main',
      Délai: '10 à 14 jours',
    },
    isNew: false,
  },
  {
    id: 3,
    name: 'Robe Nuit Dorée',
    category: 'robes',
    categoryLabel: 'Robe',
    image: robeNoire,
    price: '65 000 FCFA',
    rating: 5.0,
    reviews: 15,
    badge: 'Exclusif',
    description:
      "Robe de soirée noire ajustée avec broderies dorées sur toute la longueur et une fente latérale audacieuse. Pièce maîtresse de notre collection Prestige. Pour les femmes qui savent ce qu'elles valent.",
    specs: {
      Matière: 'Tissu satiné + broderies or',
      Coupe: 'Robe longue ajustée',
      Finition: 'Broderie artisanale',
      Délai: '14 à 21 jours',
    },
    isNew: false,
  },
  {
    id: 4,
    name: 'Ensemble Émeraude',
    category: 'ensembles',
    categoryLabel: 'Ensemble',
    image: ensembleVert,
    price: '58 000 FCFA',
    rating: 4.7,
    reviews: 31,
    badge: 'Tendance',
    description:
      "Ensemble pantalon palazzo et veste courte en tissu kente vert et or. Un style moderne et affirmé qui mêle tradition africaine et coupe contemporaine. Parfait pour les femmes de caractère.",
    specs: {
      Matière: 'Tissu kente tissé',
      Coupe: 'Ensemble 2 pièces',
      Finition: 'Couture de précision',
      Délai: '10 à 14 jours',
    },
    isNew: false,
  },
  {
    id: 5,
    name: 'Jupe & Top Dentelle Rose',
    category: 'jupes',
    categoryLabel: 'Jupe & Top',
    image: jupeRose,
    price: '38 000 FCFA',
    rating: 4.8,
    reviews: 19,
    badge: null,
    description:
      "Ensemble jupe mi-longue et top épaule dénudée en dentelle rose poudré et blanc. Féminité absolue, légèreté et élégance. La pièce idéale pour un événement champêtre ou une sortie distinguée.",
    specs: {
      Matière: 'Dentelle + voile',
      Coupe: 'Jupe mi-longue + top',
      Finition: 'Appliqués dentelle',
      Délai: '7 à 10 jours',
    },
    isNew: true,
  },
  {
    id: 6,
    name: 'Grand Boubou Bordeaux',
    category: 'boubous',
    categoryLabel: 'Boubou',
    image: boubouBordeaux,
    price: '75 000 FCFA',
    rating: 5.0,
    reviews: 22,
    badge: 'Premium',
    description:
      "Grand boubou en tissu bordeaux brodé de fils dorés avec soin. Allure royale et imposante. Cette pièce est la quintessence de l'élégance africaine de haut rang. Pour mariages, cérémonies officielles et événements d'exception.",
    specs: {
      Matière: 'Bazin riche brodé',
      Coupe: 'Grand boubou',
      Finition: 'Broderie or artisanale',
      Délai: '14 à 21 jours',
    },
    isNew: false,
  },
];

export const banners = [
  {
    id: 1,
    badge: 'Nouvelle Collection',
    title: 'Automne\nGrand Chic',
    subtitle: '15% de remise sur toute nouvelle commande',
    image: robeWax,
    modelImage: boubouBordeaux,
    bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)',
  },
  {
    id: 2,
    badge: 'Collection Prestige',
    title: 'Soirée\nEtoilée',
    subtitle: 'Nos robes de soirée exclusives',
    image: robeNoire,
    modelImage: robeNoire,
    bg: 'linear-gradient(135deg, #0d0d1a 0%, #1a0d2e 100%)',
  },
  {
    id: 3,
    badge: 'Sur-Mesure',
    title: 'Votre Tenue\nPersonnalisée',
    subtitle: 'Confectionnée selon vos mensurations exactes',
    image: ensembleBleu,
    modelImage: ensembleBleu,
    bg: 'linear-gradient(135deg, #001a0d 0%, #003d1a 100%)',
  },
];

export const services = [
  {
    id: 1,
    name: 'Couture Sur Mesure',
    description:
      'Chaque vêtement est confectionné à vos mesures exactes pour un tombé parfait et un confort incomparable. Prise de mesures gratuite dans notre atelier.',
    icon: 'scissors',
    color: '#FF4D00',
    bg: 'linear-gradient(135deg, #FF4D00, #FF6B2B)',
  },
  {
    id: 2,
    name: 'Stylisme & Conseil',
    description:
      'Notre styliste vous accompagne dans le choix des tissus, des couleurs et des coupes qui mettront en valeur votre silhouette et votre personnalité.',
    icon: 'sparkle',
    color: '#9B59B6',
    bg: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
  },
  {
    id: 3,
    name: 'Retouches & Ajustements',
    description:
      'Retouche de vêtements existants, transformation et ajustements pour que chaque tenue vous aille à la perfection.',
    icon: 'tool',
    color: '#27AE60',
    bg: 'linear-gradient(135deg, #27AE60, #2ECC71)',
  },
  {
    id: 4,
    name: 'Robes de Cérémonie',
    description:
      'Spécialisation dans les tenues de mariage, baptême, anniversaire et cérémonies officielles. Des créations uniques pour vos moments inoubliables.',
    icon: 'heart',
    color: '#E91E63',
    bg: 'linear-gradient(135deg, #E91E63, #AD1457)',
  },
  {
    id: 5,
    name: 'Tenues Professionnelles',
    description:
      'Uniformes de bureau, tenues corporatives et collections pour entreprises. Style professionnel alliant élégance et fonctionnalité.',
    icon: 'briefcase',
    color: '#1A73E8',
    bg: 'linear-gradient(135deg, #1A73E8, #1565C0)',
  },
  {
    id: 6,
    name: 'Livraison à Domicile',
    description:
      'Livraison dans tout Parakou et environs. Profitez de vos créations sans vous déplacer. Prise en charge rapide et soigneuse.',
    icon: 'truck',
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, #F59E0B, #D97706)',
  },
];
