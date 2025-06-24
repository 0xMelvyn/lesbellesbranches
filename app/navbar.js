"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex p-4 pb-1 text-2xl bg-black">
      <div className="hidden lg:flex ml-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={200} />
        </Link>
      </div>
      <div className="flex lg:hidden ml-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={150} />
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-end">
        <Link
          href="/nos-racines"
          className="text-cool hover:text-mustard transition duration-300 ease-in-out mx-4"
        >
          Nos racines
        </Link>
        <Link
          href="/nos-montures"
          className="text-cool hover:text-mustard transition duration-300 ease-in-out mx-4"
        >
          Nos montures
        </Link>
        <Link
          href="/sante-visuelle"
          className="text-cool hover:text-mustard transition duration-300 ease-in-out mx-4"
        >
          Santé visuelle
        </Link>
        <Link
          href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank"
          className="text-cool transition duration-300 ease-in-out mx-3 px-4 py-2 bg-mustard rounded-full hover:scale-105"
        >
          Prendre RDV
        </Link>
      </div>
      <div className="lg:hidden flex flex-1 justify-end">
        <button onClick={toggleMenu} className="text-cool hover:text-mustard focus:outline-none" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed z-50 top-0 right-0 h-full w-3/4 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col p-4 text-cool">
          <button onClick={toggleMenu} className="self-end mb-4" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
          <Link
            href="/nos-racines"
            className="py-2 text-lg text-cool hover:text-mustard transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Nos racines
          </Link>
          <Link
            href="/nos-montures"
            className="py-2 text-lg text-cool hover:text-mustard transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Nos montures
          </Link>
          <Link
            href="/sante-visuelle"
            className="py-2 text-lg text-cool hover:text-mustard transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Santé visuelle
          </Link>
          <Link
            href="https://lj.reservio.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="py-2 text-lg text-center bg-mustard transition duration-300 ease-in-out text-cool rounded-full px-4 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Prendre RDV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
