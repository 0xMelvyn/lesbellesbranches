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
  const { carouselFragment } = useSpringCarousel({
    items: productData.map((product, index) => ({
      id: `item-${index + 1}`,
      renderItem: (
        <Link key={index} href="/tarifs" passHref>
          <div className="bg-white w-screen rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={product.src}
              width={315}
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
    itemsPerSlide: 1, // Display 2 items at a time
  });

  return (
    <section className="bg-cool lg:flex">
      <div className="lg:flex">
        <div className="relative bg-mustard">
          <Image
            src={promo}
            width={330}
            className="h-full object-contain mx-auto"
          />
          <Link
            href="/tarifs"
            className="bg-black text-white absolute inset-0 flex mt-24 mx-auto justify-center w-max h-max rounded-xl px-2 hover:scale-105 transition duration-300 ease-in-out"
          >
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="flex mx-auto">
        <div className="pt-5 pb-5 lg:pb-0 mx-4 lg:mx-8">
          <p className="text-5xl text-center">Lunettes tendances</p>
          <br />
          {/* Mobile: Carousel */}
          <div className="block lg:hidden w-screen">
            {carouselFragment}
          </div>
          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {productData.map((product, index) => (
              <Link
                key={index}
                href="/tarifs"
                passHref
              >
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                  <Image
                    src={product.src}
                    width={315}
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
