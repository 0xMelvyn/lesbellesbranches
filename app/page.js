import Image from "next/image";
import Accueil from "../public/accueil.png";
import AccueilM from "../public/accueilm.png";
import flag from "../public/flag.png";
import earth from "../public/earth.png";
import glasses from "../public/glasses.png";
import reviews from "../public/reviews.png";
import jojo from "../public/jojo.png";
import lolo from "../public/lolo.png";
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Home() {
  return (
    <main>

      <section>
        <div className="hidden lg:flex">
        <Image src={Accueil} alt='Accueil' width={1500}></Image>
        </div>
        <div className="flex lg:hidden">
        <Image src={AccueilM} alt='Accueil' width={1500}></Image>
        </div>
      </section>

      <section className={`font-Raleway ${raleway.className}`}>
      <div className='grid lg:flex mb-10 justify-around'>
        <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
          <div className="hidden lg:block">
            <Image src={flag} width={350} alt='Drapeau Français'/>
          </div>
          <div className="flex justify-center lg:hidden">
            <Image src={flag} width={275} alt='Drapeau Français'/>
          </div>
          <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>100% Français</h1>
        </div>

        <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
        <div className="hidden lg:block">
            <Image src={earth} width={350} alt='Terre'/>
          </div>
          <div className="flex justify-center lg:hidden">
            <Image src={earth} width={275} alt='Terre'/>
          </div>
          <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>En materiaux recyclés</h1>
        </div>

        <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
        <div className="hidden lg:block">
            <Image src={glasses} width={350} alt='Lunettes'/>
          </div>
          <div className="flex justify-center lg:hidden">
            <Image src={glasses} width={275} alt='Lunettes'/>
          </div>
          <h1 className='flex pt-2 justify-center text-2xl mb-2 text-center'>Sur-mesure</h1>
        </div>
      </div>
    </section>

    <section className="my-10">
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Image src={lolo} alt="Lauraine"></Image>
        </div>
        <div className={`lg:w-3/4 flex items-center bg-cool text-4xl text-black px-4 text-justify font-Raleway ${raleway.className}`}>
        <p>Bienvenue chez Les Belles Branches, votre artisan lunetier-opticien <span className="text-black">diplômé</span>, passionné par l'excellence et le savoir-faire. Fort d'une expertise reconnue et d'une formation spécialisée, je mets un point d'honneur à vous offrir des services sur mesure, alliant tradition <span className="text-black">artisanale</span> et technologies de pointe.</p>
        </div>
      </div>
      <div className="lg:flex">
      <div className={`lg:w-3/4 hidden lg:flex items-center bg-mustard text-4xl text-black px-4 text-justify font-Raleway ${raleway.className}`}>
      <p>Bienvenue chez <span className="text-black">Les Belles Branches</span>, où l'artisanat rencontre l'optique de précision. En tant que lunetier-opticien diplômé, je suis dédié à la création de montures qui ne sont pas seulement fonctionnelles, mais aussi véritables œuvres d'art. Chaque paire de lunettes est le fruit d'une <span className="text-black">expertise</span> minutieuse et d'un souci du détail inégalé.</p>
        </div>
        <div className="lg:w-1/4">
          <Image src={jojo} alt="Joël"></Image>
        </div>
        <div className={`lg:w-3/4 flex lg:hidden items-center bg-mustard text-4xl text-black px-4 text-justify font-Raleway ${raleway.className}`}>
      <p>Bienvenue chez <span className="text-black">Les Belles Branches</span>, où l'artisanat rencontre l'optique de précision. En tant que lunetier-opticien diplômé, je suis dédié à la création de montures qui ne sont pas seulement fonctionnelles, mais aussi véritables œuvres d'art. Chaque paire de lunettes est le fruit d'une <span className="text-black">expertise</span> minutieuse et d'un souci du détail inégalé.</p>
        </div>
      </div>
    </section>

    <section className="my-10">
      <div className="flex justify-center">
        <a href="https://www.google.fr/search?sca_esv=47a906e9dc93da55&tbm=lcl&sxsrf=ADLYWILXdGMqobmmFsg4NXpchAGAwn1s-w:1723578486144&q=Les+Belles+Branches+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLc0MDG3MDU2MjW0NDM3sbA0NtrAyPiKUcIntVjBKTUnB0QVJeYlZwAZjmWZxYtYcUoBAA9fcH5RAAAA&rldimm=17904785325196748932&hl=fr-FR&sa=X&ved=2ahUKEwi00aKb3vKHAxWWVqQEHYhKHacQ9fQKegQIMxAF&biw=1440&bih=725&dpr=2#lkt=LocalPoiReviews" target='_blank'>
        <Image src={reviews} alt="Avis" width={500}></Image>
        </a>
      </div>
    </section>
    </main>
  );
}
