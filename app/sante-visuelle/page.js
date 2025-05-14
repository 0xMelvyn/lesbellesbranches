import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Votre opticien santé visuelle à Toulouse centre - examens de vue, adaptation lentilles.",
  description: "Bilan visuel, adaptation lentilles, lunettes de sport, examens de vue à Toulouse : nos opticiens diplômés vous accompagnent avec transparence, écoute et bienveillance.",
};

const services = [
  {
    name: "Monture sur mesure et personnalisable",
    description: "Créer LA paire qui vous ressemble !",
    price: "À partir de 289,00€",
  },
  {
    name: "Bilan adaptation lentilles/lunettes",
    description: "Des solutions adaptées à vos yeux et votre confort",
    price: "À partir de 50,00€",
  },
  {
    name: "Examen visuel enfant et adulte",
    description: "Vous avez un doute sur l'évolution de votre vue ? Prenez rendez-vous et nous vous orienterons vers un ophtalmologue si nécessaire",
    price: "À partir de 30,00€",
  },
  {
    name: "Lunettes de sport",
    description: "Parce que votre vision mérite aussi la performance",
    price: "À partir de 95,00€",
  },
  {
    name: "Reconditionnement de montures",
    description: "Offrez une seconde vie à vos anciennes paires de lunettes",
    price: "À partir de 10€",
  },
  {
    name: "Réparations et ajustements gratuits",
    description: "Pour un confort visuel toujours optimal",
    price: "À partir d'un avis 5 étoiles sur Google 😉",
  },
];

export default function Tarifs() {
  return (
    <div className="bg-cool py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Santé visuelle</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-4 border-mustard  hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-xl font-bold text-mustard">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
              <div className="flex justify-center mt-10">

      <Link
          href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank"
          className="text-cool text-center transition duration-300 ease-in-out mx-3 px-36 py-6 bg-mustard rounded-full hover:scale-105"
        >
          Prendre RDV sur Doctolib
        </Link>
        </div>
    </div>
  );
}
