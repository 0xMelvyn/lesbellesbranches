"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <nav className={`flex m-4 text-2xl font-Raleway ${raleway.className}`}>
            <div className="hidden lg:flex ml-4">
              <Link href="/">
                <Image src={Logo} alt='Logo' width={200}/>
              </Link>
            </div>
            <div className="flex lg:hidden ml-4">
              <Link href="/">
                <Image src={Logo} alt='Logo' width={150}/>
              </Link>
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-end">
              <Link href="/produits" className='hover:text-mustard transition duration-300 ease-in-out mx-4'>
                Nos produits
              </Link>
              <Link href="/tarifs" className='hover:text-mustard transition duration-300 ease-in-out mx-4'>
                Tarifs
              </Link>
              <Link href="/propos" className='hover:text-mustard transition duration-300 ease-in-out mx-4'>
                À propos
              </Link>
              <Link href="/faq" className='hover:text-mustard transition duration-300 ease-in-out mx-4'>
                FAQ
              </Link>
              <Link href="/rdv" className='text-cool transition duration-300 ease-in-out mx-3 px-4 py-2 bg-mustard rounded-full hover:scale-105'>
                Prendre RDV
              </Link>
            </div>
            <div className="lg:hidden flex flex-1 justify-end">
                <button onClick={toggleMenu} className="hover:text-mustard focus:outline-none">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="flex flex-col p-4">
                    <button onClick={toggleMenu} className="self-end mb-4">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                        </svg>
                    </button>
                    <Link href="/produits" className='py-2 text-lg hover:text-mustard transition duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
                        Nos produits
                    </Link>
                    <Link href="/tarifs" className='py-2 text-lg hover:text-mustard transition duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
                        Tarifs
                    </Link>
                    <Link href="/propos" className='py-2 text-lg hover:text-mustard transition duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
                        À propos
                    </Link>
                    <Link href="/faq" className='py-2 text-lg hover:text-mustard transition duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
                        FAQ
                    </Link>
                    <Link href="/rdv" className='py-2 text-lg text-center bg-mustard transition duration-300 ease-in-out text-cool rounded-full px-4 hover:scale-105' onClick={() => setIsOpen(false)}>
                        Prendre RDV
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
