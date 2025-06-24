'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import Accueil from '../../public/accueil.png';
import Accueil2 from '../../public/accueil2.png';
import Accueil3 from '../../public/accueil3.png';
import Accueil4 from '../../public/accueil4.png';
import Accueil5 from '../../public/accueil5.png';

const images = [Accueil, Accueil2, Accueil3, Accueil4, Accueil5];

const Slider = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    items: images.map((img, index) => ({
      id: `item-${index + 1}`,
      renderItem: (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={img}
            alt={`Accueil ${index + 1}`}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      ),
    })),
    withLoop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
    }, 4000);

    return () => clearInterval(interval);
  }, [slideToNextItem]);

  return (
    <section className="relative w-full">
      <div className="overflow-hidden w-full">{carouselFragment}</div>
      <div className="flex absolute inset-0 justify-between items-center px-4">
        <button
          onClick={slideToPrevItem}
          aria-label="Previous"
          className="bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300 text-white rounded-full p-3 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={slideToNextItem}
          aria-label="Next"
          className="bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300 text-white rounded-full p-3 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;