'use client';
import Image from "next/image";
import Link from "next/link";
import promo from "../../public/promo.png";
import produit1 from "../../public/produit1.png";
import produit2 from "../../public/produit2.png";
import produit3 from "../../public/produit3.png";
import React from "react";
import { useSpringCarousel } from 'react-spring-carousel';

const productData = [
  {
    src: produit1,
    alt: "Produit 1",
    title: "Wayfarer",
    price: "280€",
  },
  {
    src: produit2,
    alt: "Produit 2",
    title: "Aviator",
    price: "450€",
  },
  {
    src: produit3,
    alt: "Produit 3",
    title: "CatEye",
    price: "300€",
  },
];

const Promo = () => {
  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    items: productData.map((product, index) => ({
      id: `item-${index + 1}`,
      renderItem: (
        <Link key={index} href="/nos-montures" passHref>
          <div className="bg-white mx-2 rounded-lg shadow-md p-4 cursor-pointer">
            <Image
              src={product.src}
              alt={product.alt}
              className="object-cover mx-auto rounded-md"
            />
            <h3 className="text-xl font-bold mt-2 flex justify-center">
              {product.title}
            </h3>
            <p className="text-mustard flex justify-center">
              {product.price}
            </p>
          </div>
        </Link>
      ),
    })),
    withLoop: true, // Enables looping
    itemsPerSlide: 2, // Display 1 item at a time
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem(); // Passe à l'item suivant automatiquement
    }, 4000); // Intervalle en millisecondes (3 secondes)

    return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage
  }, [slideToNextItem]);

  return (
    <section className="bg-cool lg:flex flex-col lg:flex-row">
      <div className="relative bg-mustard">
        <Image
          src={promo}
          width={330}
          height={330} // Added height to maintain aspect ratio
          className="h-full object-contain mx-auto"
        />
        <Link
          href="/nos-montures"
          className="bg-black text-white absolute inset-0 flex mt-24 mx-auto justify-center w-max h-max rounded-xl px-2 hover:scale-105 transition duration-300 ease-in-out"
        >
          Découvrir nos montures
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center mx-4 lg:mx-8">
        {/* Mobile: Carousel */}
        <div className="pt-5 pb-5 lg:pb-0 mx-4 lg:mx-8">
          <p className="text-5xl text-center">Lunettes tendances</p>
          <br />
        <div className="lg:hidden w-screen overflow-hidden">
          {carouselFragment}
        </div>
        {/* Desktop: Grid */}

        <div className="hidden lg:grid grid-cols-3 gap-4 h-full">
          {productData.map((product, index) => (
            <Link
              key={index}
              href="/nos-montures"
              passHref
            >
              <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={product.src}
                  width={315}
                  height={315} // Added height to maintain aspect ratio
                  alt={product.alt}
                  className="object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-2 flex justify-center">
                  {product.title}
                </h3>
                <p className="text-mustard flex justify-center">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
