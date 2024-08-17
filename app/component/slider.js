'use client';
import Image from "next/image";
import React from "react";
import Accueil from "../../public/accueil.png";
import AccueilM from "../../public/accueilm.png";
import Accueil2 from "../../public/accueil2.png";
import AccueilM2 from "../../public/accueilm2.png";
import { useSpringCarousel } from 'react-spring-carousel';

const Slider = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div>
            <div className="hidden lg:flex">
              <Image
                src={Accueil}
                alt="Accueil"
                className="w-screen"
                width={1500}
              />
            </div>
            <div className="flex lg:hidden">
              <Image
                src={AccueilM}
                alt="Accueil"
                width={1500}
              />
            </div>
          </div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div>
            <div className="hidden lg:flex">
              <Image
                src={Accueil2}
                alt="Accueil"
                className="w-screen"
                width={1500}
              />
            </div>
            <div className="flex lg:hidden">
              <Image
                src={AccueilM2}
                alt="Accueil"
                width={1500}
              />
            </div>
          </div>
        )
      }
    ],
    withLoop: true, // Permet de boucler les items
  });

  // Utilisation d'un effet pour gérer l'autoplay
  React.useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem(); // Passe à l'item suivant automatiquement
    }, 3000); // Intervalle en millisecondes (3 secondes)

    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage
  }, [slideToNextItem]);

  return (
    <section className="relative">
      <div className="overflow-hidden">
        {carouselFragment}
      </div>
      <div className="hidden lg:absolute inset-0 lg:flex justify-between items-center px-4">
        <button
          onClick={slideToPrevItem}
          className="hidden lg:block bg-black opacity-40 hover:opacity-60 transition duration-300 ease-in-out text-white rounded-full p-2 focus:outline-none"
          aria-label="Previous"
        >
          &#8249; {/* Code HTML pour une flèche vers la gauche */}
        </button>
        <button
          onClick={slideToNextItem}
          className="hidden lg:block bg-black opacity-40 hover:opacity-60 transition duration-300 ease-in-out text-white rounded-full p-2 focus:outline-none"
          aria-label="Next"
        >
          &#8250; {/* Code HTML pour une flèche vers la droite */}
        </button>
      </div>
    </section>
  );
};

export default Slider;