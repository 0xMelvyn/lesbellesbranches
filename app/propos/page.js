'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import target from "../../public/target.png";
import jojo from "../../public/jojo.png";
import lolo from "../../public/lolo.png";

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
      <main className="bg-cool">
          <section className="lg:flex">
            <div className="lg:w-1/2 lg:my-5 lg:ml-14">
            <p className="flex lg:hidden text-5xl font-bold justify-center py-7">Notre mission</p>
              <Image src={target} alt='Joël' width={400} className="lg:m-20 flex justify-center mx-auto"/>
            </div>
            <div className="lg:w-1/2 lg:my-20 lg:mr-14 lg:mt-44">
              <p className="hidden lg:block text-5xl font-bold">Notre mission</p>
              <br />
              <p className="hidden lg:block text-lg">Nous créons des lunettes élégantes et pratiques tout en réduisant notre impact environnemental, grâce à l'utilisation de matériaux durables et recyclés qui allient qualité supérieure et respect de l'environnement.</p>
              <p className="block lg:hidden mx-5 text-xl text-justify">Nous créons des lunettes élégantes et pratiques tout en réduisant notre impact environnemental, grâce à l'utilisation de matériaux durables et recyclés qui allient qualité supérieure et respect de l'environnement.</p>
            </div>
          </section>

          <section className="bg-white lg:flex pt-16 py-8 lg:py-40">
          <div className="flex lg:w-1/2 justify-center items-center">
          <div className="underline text-5xl font-bold text-center">
              <p>100% Recyclé.</p>
              <br />
              <p>100% Français.</p>
              <br />
              <p>100% Pour vous.</p>
              </div>
            </div>
            <div className="pt-6 lg:pt-0 lg:w-1/2">
              <p className="text-2xl text-justify m-5 lg:m-0 lg:mr-14">Nous valorisons le savoir-faire français en fabriquant nos lunettes en France, garantissant ainsi une qualité artisanale exceptionnelle. En utilisant des matériaux recyclés, nous affirmons notre engagement envers une production durable et respectueuse de l'environnement. De plus, notre service de sur mesure vous permet de personnaliser chaque paire pour qu'elle soit parfaitement adaptée à vos besoins et à votre style, tout en contribuant à un avenir plus vert.</p>
            </div>
          </section>

          <section ref={sectionRef} className="mt-20 pb-20">

        <p className='flex mb-20 justify-center text-6xl text-center'>Qui sommes nous ?</p>
        <div className={`lg:flex mt-8 p-2 lg:p-0 transition-opacity lg:duration-500 ease-in-out ${animateLeft ? 'opacity-100 animate-slide-in-left' : 'opacity-0'}`}>
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

        <div className={`lg:flex mt-8 p-2 lg:p-0 transition-opacity lg:duration-500 ease-in-out ${animateRight ? 'opacity-100 animate-slide-in-right' : 'opacity-0'}`}>
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
      </main>
    );
  }
  