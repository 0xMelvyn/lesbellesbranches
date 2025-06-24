'use client'
import { useEffect } from "react";
import Image from "next/image";
import flag from "../../public/flag.png";
import health from "../../public/health.png";
import Smile from "../../public/smile.png";
import green from "../../public/green.png";

const items = [
  {
    src: flag,
    alt: "Local & responsable",
    title: "Local & responsable",
    description:
      "On travaille avec des marques françaises, voire carrément régionales (voire carrément départementales)",
  },
  {
    src: green,
    alt: "Zéro gaspillages, tout le temps, partout",
    title: "Zéro gaspillages, tout le temps, partout",
    description: (
      <>
        Vos anciennes lunettes ? On les recycle ou on les revalorise. Le mobilier du magasin ? 100% chiné et remis à neuf !<br />
        <span className="text-xs block mt-1">
          Et même notre atelier, on recycle l&apos;eau pour économiser jusqu&apos;à 2000 litres par an. Parce que chaque geste compte.
        </span>
      </>
    ),
  },
  {
    src: health,
    alt: "Engagement santé",
    title: "Engagement santé",
    description:
      "Professionnels diplômés, on prend soin de votre vue avec précision. On prend le temps de vous écouter, d'expliquer, de vous orienter vers LA solution adaptée à votre besoin.",
  },
];

const Valeurs = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="p-6 md:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos valeurs,<br />aussi solides que nos montures
          </h2>
          <div className="flex justify-center lg:justify-start">
            <Image src={Smile} alt="Smile" width={60} />
          </div>
          <p className="text-lg text-gris">
            Si vous êtes arrivés jusqu’ici, vous avez compris l’essentiel, mais un dernier rappel ne fait jamais de mal :
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/Ck0-dyXJQCs/"
            data-instgrm-version="14"
            style={{ background: "#FFF", border: 0, margin: 0, padding: 0 }}
          ></blockquote>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mb-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform duration-300 ease-in-out text-center max-w-sm mx-auto"
          >
            <Image src={item.src} width={275} height={275} alt={item.alt} className="mx-auto" />
            <h3 className="pt-4 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 px-4 leading-snug">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valeurs;
