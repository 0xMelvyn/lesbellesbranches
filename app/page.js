'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Accueil from "../public/accueil.png";
import AccueilM from "../public/accueilm.png";
import flag from "../public/flag.png";
import earth from "../public/earth.png";
import glasses from "../public/glasses.png";
import reviews from "../public/reviews.png";
import jojo from "../public/jojo.png";
import lolo from "../public/lolo.png";
import arrow from "../public/arrow.png";
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Home() {
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
    <main>
      <section>
        <div className="hidden lg:flex">
          <Image src={Accueil} alt='Accueil' width={1500} />
        </div>
        <div className="flex lg:hidden">
          <Image src={AccueilM} alt='Accueil' width={1500} />
        </div>
      </section>

      <section className={`font-Raleway ${raleway.className}`}>
        <div className='grid lg:flex mb-20 justify-around'>
          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="hidden lg:block">
              <Image src={flag} width={350} alt='Drapeau Français' />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image src={flag} width={275} alt='Drapeau Français' />
            </div>
            <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>100% Français</h1>
          </div>

          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="hidden lg:block">
              <Image src={earth} width={350} alt='Terre' />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image src={earth} width={275} alt='Terre' />
            </div>
            <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>En materiaux recyclés</h1>
          </div>

          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="hidden lg:block">
              <Image src={glasses} width={350} alt='Lunettes' />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image src={glasses} width={275} alt='Lunettes' />
            </div>
            <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>Sur-mesure</h1>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className={`my-20 font-Raleway ${raleway.className}`}>

        <p className='flex justify-center text-6xl mb- text-center'>Qui sommes nous ?</p>
        <div className={`lg:flex my-8 p-2 lg:p-0 transition-opacity duration-500 ease-in-out ${animateLeft ? 'opacity-100 animate-slide-in-left' : 'opacity-0'}`}>
          <div className="lg:w-1/12"></div>
          <div className="lg:w-1/6 bg-mustard p-2 rounded-t-3xl lg:rounded-e-none lg:rounded-l-3xl flex items-center">
            <Image src={lolo} alt="Laurainne" className="rounded-3xl" />
          </div>
          <div className="lg:w-2/6 flex lg:pr-20">
          <div className='flex items-center'>
          <p className="bg-mustard text-black p-3 lg:p-10 text-xl text-justify lg:text-left lg:text-2xl rounded-b-3xl lg:rounded-r-full lg:px-10">
              Je crée des lunettes sur mesure alliant <span className='text-cool'>artisanat</span> et innovation pour sublimer votre <span className='text-cool'>regard</span> avec passion et expertise.
            </p>
          </div>
          </div>
          <div className="lg:w-1/6"></div>
        </div>

        <div className={`lg:flex my-8 p-2 lg:p-0 transition-opacity duration-500 ease-in-out ${animateRight ? 'opacity-100 animate-slide-in-right' : 'opacity-0'}`}>
          <div className="w-1/6"></div>
          <div className="w-1/6"></div>
          <div className="w-1/12"></div>
          <div className="lg:w-2/6 flex lg:pl-20">
          <div className='hidden lg:flex items-center'>
          <p className="bg-mustard text-black p-3 lg:p-10 text-xl text-justify lg:text-right lg:text-2xl rounded-b-3xl lg:rounded-l-full lg:px-10">
              Je crée des lunettes sur mesure alliant <span className='text-cool'>artisanat</span> et innovation pour sublimer votre <span className='text-cool'>regard</span> avec passion et expertise.
            </p>
          </div>
          </div>
          <div className="lg:w-1/6 bg-mustard p-2 rounded-t-3xl lg:rounded-s-none lg:rounded-e-none lg:rounded-r-3xl flex items-center">
            <Image src={jojo} alt="Joël" className="rounded-3xl" />
          </div>
          <div className='flex lg:hidden items-center'>
          <p className="bg-mustard text-black p-3 lg:p-10 text-xl text-justify lg:text-right lg:text-2xl rounded-b-3xl lg:rounded-l-full lg:px-10">
              Je crée des lunettes sur mesure alliant <span className='text-cool'>artisanat</span> et innovation pour sublimer votre <span className='text-cool'>regard</span> avec passion et expertise.
            </p>
          </div>
          <div className="w-1/12"></div>
        </div>
      </section>

      <section className={`my-10 lg:flex font-Raleway ${raleway.className}`}>
        <div className="flex justify-center lg:w-1/2">
          <a href="https://www.google.fr/search?sca_esv=47a906e9dc93da55&tbm=lcl&sxsrf=ADLYWILXdGMqobmmFsg4NXpchAGAwn1s-w:1723578486144&q=Les+Belles+Branches+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLc0MDG3MDU2MjW0NDM3sbA0NtrAyPiKUcIntVjBKTUnB0QVJeYlZwAZjmWZxYtYcUoBAA9fcH5RAAAA&rldimm=17904785325196748932&hl=fr-FR&sa=X&ved=2ahUKEwi00aKb3vKHAxWWVqQEHYhKHacQ9fQKegQIMxAF&biw=1440&bih=725&dpr=2#lkt=LocalPoiReviews" target='_blank'>
            <Image src={reviews} alt="Avis" width={500} />
          </a>
        </div>
        <div className='lg:w-1/2 lg:flex mt-5 lg:mt-0'>
        <p className='flex justify-center text-center items-center text-3xl'>N'hésite pas a consulter ou laisser un avis !</p>
        </div>
      </section>
    </main>
  );
}
