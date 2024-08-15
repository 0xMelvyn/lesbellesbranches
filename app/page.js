'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Accueil from "../public/accueil.png";
import AccueilM from "../public/accueilm.png";
import flag from "../public/flag.png";
import earth from "../public/earth.png";
import glasses from "../public/glasses.png";
import reviews from "../public/reviews.png";
import promo from "../public/promo.png";
import produit1 from "../public/produit1.png";
import produit2 from "../public/produit2.png";
import produit3 from "../public/produit3.png";

export default function Home() {
  
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

      <section>
        <div className='hidden lg:flex mb-20 justify-around'>
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

        <div className='lg:hidden mb-20 justify-center'>
          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex justify-center">
              <Image src={flag} width={150} alt='Drapeau Français' />
            </div>
            <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>100% Français</h1>
          </div>

          <div className='flex justify-around'>

          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center">
              <Image src={earth} width={150} alt='Drapeau Français' />
            </div>
            <div className=''>
              <h1 className='flex pt-2 justify-center text-2xl text-center'>En materiaux</h1>
              <h1 className='flex justify-center text-2xl mb-2 text-center'>recyclés</h1>
              </div>
            </div>

            <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
                <Image src={glasses} width={150} alt='Lunettes'/>
              <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>Sur-mesure</h1>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-cool lg:flex'>
  <div className="lg:flex">
    <div className='relative bg-mustard'>
      <Image src={promo} width={330} className="h-full object-contain mx-auto"></Image>
      <a href="/tarifs" className='bg-black text-white absolute inset-0 flex mt-24 mx-auto justify-center w-max h-max rounded-xl px-2 hover:scale-105 transition duration-300 ease-in-out'>
        En savoir plus
      </a>
    </div>
  </div>
  <div>
    <div className='pt-5 mx-4 lg:mx-8'>
      <p className='text-5xl text-center'>Lunettes tendances</p>
      <br />
      <div className="grid grid-cols-3 gap-4">
        {/* Product Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src={produit1} width={315} alt="Produit 2" className="object-cover rounded-md" />
          <h3 className="text-xl font-bold mt-2 flex justify-center">Wayfarer</h3>
          <a href="/product2" className="text-mustard flex justify-center">280€</a>
        </div>
        
        {/* Product Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src={produit2} width={315} alt="Produit 2" className="object-cover rounded-md" />
          <h3 className="text-xl font-bold mt-2 flex justify-center">Aviator</h3>
          <a href="/product2" className="text-mustard flex justify-center">450€</a>
        </div>
        
        {/* Product Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src={produit3} width={315} alt="Produit 2" className="object-cover rounded-md" />
          <h3 className="text-xl font-bold mt-2 flex justify-center">CatEye</h3>
          <a href="/product2" className="text-mustard flex justify-center">300€</a>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="my-10 lg:flex">
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
