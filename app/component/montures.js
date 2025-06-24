'use client';
import Image from "next/image";
import React from "react";
import Montures1 from "../../public/montures1.png";
import Montures2 from "../../public/montures2.png";
import Montures3 from "../../public/montures3.png";
import Montures4 from "../../public/montures4.png";
import { useSpringCarousel } from 'react-spring-carousel';

const Montures = () => {
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
  } = useSpringCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className="flex justify-center">
            <Image
              src={Montures1}
              alt="Monture 1"
              className="w-11/12 md:w-2/3 rounded-2xl"
              width={1500}
            />
          </div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div className="flex justify-center">
            <Image
              src={Montures2}
              alt="Monture 2"
              className="w-11/12 md:w-2/3 rounded-2xl"
              width={1500}
            />
          </div>
        )
      },
      {
        id: 'item-3',
        renderItem: (
          <div className="flex justify-center">
            <Image
              src={Montures3}
              alt="Monture 3"
              className="w-11/12 md:w-2/3 rounded-2xl"
              width={1500}
            />
          </div>
        )
      },
      {
        id: 'item-4',
        renderItem: (
          <div className="flex justify-center">
            <Image
              src={Montures4}
              alt="Monture 4"
              className="w-11/12 md:w-2/3 rounded-2xl"
              width={1500}
            />
          </div>
        )
      }
    ],
    withLoop: true,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
    }, 4000);

    return () => clearInterval(interval);
  }, [slideToNextItem]);

  return (
    <section className="relative">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {carouselFragment}

        {/* Flèches visibles uniquement sur desktop */}
        <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-4">
          <button
            onClick={slideToPrevItem}
            className="ml-2 bg-black opacity-40 hover:opacity-60 text-white rounded-full p-2"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          </button>
          <button
            onClick={slideToNextItem}
            className="mr-2 bg-black opacity-40 hover:opacity-60 text-white rounded-full p-2"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Montures;
