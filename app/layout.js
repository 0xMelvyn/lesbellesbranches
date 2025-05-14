import React from 'react';
import Head from 'next/head';
import "./globals.css";
import Navbar from './navbar';
import Footer from './footer';
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Les Belles Branches",
  description: "Opticien écoresponsable à Toulouse, spécialisé dans les petits visages, l'adapation de lentilles. Montures locales, durables et sur-mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>Les Belles Branches - opticien écoresponsable à Toulouse | petits visages, sur-mesure, adaptation lentilles</title>
        <meta name="description" content="Opticien écoresponsable à Toulouse, spécialisé dans les petits visages, l'adapation de lentilles. Montures locales, durables et sur-mesure." />
        <meta name="keywords" content="opticien, lunettes, lentilles, Toulouse, optique, éco-responsable, services optiques, lunettes sur mesure" />
        <meta property="og:title" content="Les Belles Branches" />
        <meta property="og:description" content="Découvrez L'Opticien Éco-Réfléchi à Toulouse, spécialiste de l'examen de la vue et de l'adaptation de lentilles. Situé au 15, rue du Rempart Saint-Etienne, nous vous accueillons du lundi au samedi. Optez pour une approche locale et responsable avec nos services de qualité et nos solutions de seconde vie. #Français #Responsable #Local #SecondeVie" />
        <meta property="og:image" content="/" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Les Belles Branches" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Les Belles Branches" />
        <meta property="twitter:description" content="Découvrez L'Opticien Éco-Réfléchi à Toulouse, spécialiste de l'examen de la vue et de l'adaptation de lentilles. Situé au 15, rue du Rempart Saint-Etienne, nous vous accueillons du lundi au samedi. Optez pour une approche locale et responsable avec nos services de qualité et nos solutions de seconde vie. #Français #Responsable #Local #SecondeVie" />
        <meta property="twitter:image" content="/" />
        <meta property="twitter:url" content="" />
      </Head>
      <body className={`font-Raleway ${raleway.className}`}>
<Navbar />
      {children}
        
        
        <Footer />
      </body>
    </html>
  );
}
