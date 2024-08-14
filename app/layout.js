import React from 'react';
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
  description: "Découvrez L'Opticien Éco-Réfléchi à Toulouse, spécialiste de l'examen de la vue et de l'adaptation de lentilles. Situé au 15, rue du Rempart Saint-Etienne, nous vous accueillons du lundi au samedi. Optez pour une approche locale et responsable avec nos services de qualité et nos solutions de seconde vie. #Français #Responsable #Local #SecondeVie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`font-Raleway ${raleway.className}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
