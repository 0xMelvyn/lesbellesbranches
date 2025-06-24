'use client'
import Link from 'next/link';
import { useState } from 'react';

const lunettesData = {
  surmesure: [
    {
      nom: "Netlooks",
      description: (
        <>
          - personnalisable de A à Z : forme, branches, couleurs, gravure<br />
          - matière : acétate de cellulose
        </>
      ),
      image: "/netlooks.png",
    },
    {
      nom: "Loumy Lunetier",
      description: (
        <>
          - sur-mesure petit et grand visages<br />
          - façonnées à la main à Montauban<br/>
          - matière : acétate de cellulose et branche métal
        </>
      ),
      image: "/loumy.png",
    },
    {
      nom: "Nogs",
      description: (
        <>
          - forme, couleur et finition sur mesure<br />
          - matière : ricin - anallergique, résistant et flexible<br/>
          - trois fois plus légères qu'une monture classique<br/>
          - fabrication à Lille, ricin cultivé dans le sud-ouest de la France<br/>
          - Solaire clipsable
        </>
      ),
      image: "/nogs.png",
    },
  ],
  deuxenun: [
    {
      nom: "Nogs",
      description: (
        <>
          - forme, couleur et finition sur mesure<br />
          - matière : ricin - anallergique, résistant et flexible<br/>
          - trois fois plus légères qu'une monture classique<br/>
          - fabrication à Lille, ricin cultivé dans le sud-ouest de la France<br/>
          - Clip solaire aimanté
        </>
      ),
      image: "/nogs.png",
    },
  ],
  ultra: [
    {
      nom: "Nogs",
      description: (
        <>
          - forme, couleur et finition sur mesure<br />
          - matière : ricin - anallergique, résistant et flexible<br/>
          - trois fois plus légères qu'une monture classique<br/>
          - fabrication à Lille, ricin cultivé dans le sud-ouest de la France
        </>
      ),
      image: "/nogs.png",
    },
    {
      nom: "Bondet",
      description: (
        <>
          - Accessible à tous<br />
          - Origine France garantie (certifié OFG)<br/>
          - Matériaux biosourcés et/ou recyclables (huile de ricin française ou acétate de cellulose)<br/>
          - Production quasi-neutre en émission de carbone<br/>
          - Des montures légères pour un grand confort
        </>
      ),
      image: "/bondet.png",
    },
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
  ],
  createurs: [
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
    {
      nom: "Baily Lunetier Français",
      description: (
        <>
          - Origine France garantie (certifié OFG)<br />
          - Fabrication à la main à Oyonnax<br/>
          - Recyclage sur place des déchets matières pour produire de nouveaux acétates<br/>
          - Légèreté, confort et solidité<br/>
          - Matériaux : acétate de cellulose (fibre de coton)
        </>
      ),
      image: "/bailly.png",
    },
  ],
};

const motsCles = [
  { key: "ultra", label: "Ultra légèreté", titre: "Pour un confort au quotidien" },
  { key: "budget", label: "Petit budget", titre: "Montures accessible et engagées" },
  { key: "deuxenun", label: "2-en-1", titre: "Lunettes de vue + solaire clipsables" },
  { key: "createurs", label: "Créateurs", titre: "Nos artisans de Montauban, Albi, du Jura..." },
  { key: "surmesure", label: "Montures sur-mesure", titre: "Ajustable et personnalisables, pour petits et grands visages" },
  { key: "solaires", label: "Solaires", titre: "Allier style et protection UV" },
  { key: "enfants", label: "Gamme enfants", titre: "Confort, résistance et suivi optique" },
  { key: "eco", label: "Matériaux écologiques", titre: "Acétate bio, ricin, bois, upcycling..." },
];

export default function Home() {
  const [filtre, setFiltre] = useState(null);

  return (
    <>
      <section className="bg-cool">
      <div className="p-5">
        <h1 className="my-6 text-5xl font-bold">Nos montures - Responsable, locales et pensées pour durer</h1>
        <p className="text-xl">Chez Les Belles Branches, nos montures ne se choisissent pas à la légère : on les déniche avec du coeur, du bon sens et une véritable exigence. Notre sélection est <span className="font-bold">locale, responsable </span>et <span className="font-bold">personnalisable</span>. Des <span className='font-bold'>petits visages </span>aux grandes envies de style, on vous aide à trouver la paire qui vous ressemble tout en limitant notre impact sur l'environnement.<br/><br/>
        Toutes les montures que vous découvrirez en magasin respectent nos engagements :</p>
        <div className="flex justify-end">
        <p className="text-xl"><br/>✅ <span className="font-bold">Made in France </span>et même parfois <span className="font-bold">Made in Occitanie </span>: un choix de proximité, pour soutenir les artisans d'ici<br/><br/>
✅ <span className="font-bold">Limiter la surconsommation </span>: en vous proposant des modèles solides, réparables et durables<br/><br/>
✅ Privilégier les <span className="font-bold">materiaux éco-friendly</span> : comme l'acétate de cellulose (issu de la fibre de coton),<br/> à la fois renouvelable et recyclable, ou encore les graines et l'huile de ricin, dont la production<br/> nécesssite peu d'eau et est à faible empreinte carbone<br/><br/>
✅ Offrir une <span className="font-bold">seconde vie </span>aux lunettes : vos anciennes montures peuvent être revalorisées<br/> à petit prix pour sublimer d'autres regards
</p>
        </div>
        <p className="text-xl"><br/>Et surtout, chaque paire est <span className="font-bold">ajustée à votre morphologie, vos besoins visuels et votre style</span>. Pas de (sur)production à l'autre bout de la planète ni de standardisation chez Les Belles Branches : chez nous, les lunettes c'est du <span className="font-bold">sur-mesures</span> et toujours avec le sourire !</p>
      </div>
      <div className="flex justify-center py-10">

      <Link
          href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank"
          className="text-cool text-center transition duration-300 ease-in-out mx-3 px-36 py-6 bg-mustard rounded-full hover:scale-105"
        >
          Je suis curieux/curieuse, dites-moi en plus...
        </Link>
        </div>
      </section>

      <section className="bg-white py-12">
        <h2 className="my-6 text-2xl text-center font-bold">
          À Toulouse, découvrez nos montures éco-réfléchies pour tous les yeux curieux (et toutes les têtes bien faites)
        </h2>

        {/* Nuage de mots-clés */}
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {motsCles.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFiltre(key)}
              className={`px-5 py-2 rounded-full border ${
                filtre === key ? "bg-mustard text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Titre associé */}
        {filtre && (
          <h3 className="text-xl text-center font-semibold mb-8">
            {motsCles.find((mc) => mc.key === filtre)?.titre}
          </h3>
        )}

        {/* Affichage des lunettes */}
        {filtre && lunettesData[filtre]?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10">
            {lunettesData[filtre].map((lunette, index) => (
              <div key={index} className="max-w-xs text-center">
                <img
                  src={lunette.image}
                  alt={lunette.nom}
                  className="w-full h-auto rounded shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{lunette.nom}</h3>
                <p className="text-sm text-left text-gray-600 mt-2">{lunette.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}