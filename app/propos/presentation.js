'use client';
import React, { useRef, useEffect, useState } from 'react';
import jojo from "../../public/jojo.png";
import lolo from "../../public/lolo.png";
import Image from "next/image";

const Team = () => {
  const sectionRef = useRef(null);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateLeft(true);
            setAnimateRight(true);
            observer.unobserve(entry.target); // Stop observing after the first trigger if desired
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-20 pb-20">
      <p className="flex mb-20 justify-center text-6xl text-center">
        Qui sommes nous ?
      </p>

      <div
        className={`flex flex-col lg:flex-row lg:mr-80 mb-8 transition-opacity lg:duration-500 ease-in-out ${
          animateLeft ? 'opacity-100 animate-slide-in-left' : 'opacity-0'
        }`}
      >
        <div className="bg-mustard rounded-e-full shadow-lg p-4 flex flex-col lg:flex-row items-center">
          <div className="mb-4 lg:mb-0 lg:pr-8 text-justify">
            <h1 className="text-2xl lg:text-3xl font-bold mb-6 lg:px-7 underline">
              Laurène
            </h1>
            <p className="text-lg pr-14 lg:px-7 lg:text-xl">
              Diplômée en optique et passionnée par le design, je me consacre à
              la création de lunettes sur mesure qui allient confort, esthétique
              et fonctionnalité. Mon objectif est de vous accompagner dans le
              choix de montures et de verres qui subliment votre regard tout en
              répondant parfaitement à vos besoins visuels.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-mustard">
              <Image
                src={lolo}
                alt="Lorainne"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row lg:ml-80 transition-opacity lg:duration-500 ease-in-out ${
          animateRight ? 'opacity-100 animate-slide-in-right' : 'opacity-0'
        }`}
      >
        <div className="bg-mustard rounded-s-full shadow-lg p-4 flex flex-col lg:flex-row items-center">
          <div className="hidden lg:flex justify-center">
            <div className="relative w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-mustard">
              <Image
                src={jojo}
                alt="Joël"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mb-4 lg:mb-0 lg:pr-8 text-justify">
            <h1 className="text-2xl lg:text-3xl font-bold text-right mb-6 px-7 underline">
              Joël
            </h1>
            <p className="text-lg pl-14 lg:px-7 lg:text-xl">
              Fort de plus de 10 ans d'expérience dans le domaine de l'optique, je mets mon expertise technique et ma passion pour l’art du lunetier au service de mes clients. Mon rôle est de vous conseiller et de vous accompagner dans le choix de lunettes de vue, de lentilles de contact ou de lunettes de soleil.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative lg:hidden w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-mustard">
              <Image
                src={jojo}
                alt="Joël"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;