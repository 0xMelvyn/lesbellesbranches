import Image from "next/image";
import Slider from "./component/slider";
import Vision from "./component/vision";
import Sante from "./component/sante";
import Valeurs from "./component/valeurs";
import reviews from "../public/reviews.png";
import GoogleReviewsCarousel from "./component/avis"
import Link from 'next/link';
import Intro from "./component/intro";

export default function Home() {
  return (
    <main>
      <Slider/>
      <Intro/>
      <Vision />
      <Sante />
      <Valeurs />

      <section className="p-5">
      <h2 className="text-center text-5xl font-bold my-12">Passez nous voir !</h2>
      <p className="text-2xl text-center text-gris lg:mx-20">On est à deux pas du métro François Verdier, en plein centre de Toulouse. Poussez la porte du magasin, on vous promet un moment sympa, des conseils honnêtes, et qui sait, peut-être votre prochaine paire de lunette coup de coeur ?<br></br>Si vous préférez planifer votre venue :</p>
          <div className="flex justify-center mt-10">

      <Link
          href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank"
          className="text-cool text-center transition duration-300 ease-in-out mx-3 px-16 lg:px-36 py-6 bg-mustard rounded-full hover:scale-105"
        >
          Prendre RDV en ligne
        </Link>
        </div>
      </section>

      <section className="my-10 lg:flex">
        <div className="flex justify-center lg:w-1/2">
          <a
            href="https://www.google.fr/search?sca_esv=47a906e9dc93da55&tbm=lcl&sxsrf=ADLYWILXdGMqobmmFsg4NXpchAGAwn1s-w:1723578486144&q=Les+Belles+Branches+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLc0MDG3MDU2MjW0NDM3sbA0NtrAyPiKUcIntVjBKTUnB0QVJeYlZwAZjmWZxYtYcUoBAA9fcH5RAAAA&rldimm=17904785325196748932&hl=fr-FR&sa=X&ved=2ahUKEwi00aKb3vKHAxWWVqQEHYhKHacQ9fQKegQIMxAF&biw=1440&bih=725&dpr=2#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={reviews}
              alt="Avis"
              width={500}
            />
          </a>
        </div>
        <div className="lg:w-1/2 lg:flex justify-center mt-5 lg:mt-0">
          <p className="flex justify-center text-center items-center text-3xl">
            Vos avis nous font grandir !
          </p>
        </div>
      </section>
      <GoogleReviewsCarousel/>
    </main>
  );
}
