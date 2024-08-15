import React from 'react';

const services = [
  {
    name: "Test de vue",
    description: "Un test complet de la vue pour évaluer votre vision et détecter les problèmes potentiels.",
    price: "50€",
  },
  {
    name: "Réparation de lunettes",
    description: "Service de réparation de vos lunettes endommagées, incluant le redressage et le remplacement des pièces.",
    price: "À partir de 20€",
  },
  {
    name: "Ajustement de lunettes",
    description: "Ajustement personnalisé de vos lunettes pour un confort optimal.",
    price: "Gratuit",
  },
  {
    name: "Montage de verres",
    description: "Montage précis des verres sur votre monture pour une vision parfaite.",
    price: "30€",
  },
  {
    name: "Conseil en choix de monture",
    description: "Consultation pour vous aider à choisir la monture qui vous convient le mieux.",
    price: "Gratuit",
  },
  {
    name: "Nettoyage ultrasonique",
    description: "Nettoyage professionnel de vos lunettes utilisant des ultrasons pour éliminer la saleté et les résidus.",
    price: "10€",
  },
];

export default function Tarifs() {
  return (
    <div className="bg-cool py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Nos Services</h1>
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
    </div>
  );
}
