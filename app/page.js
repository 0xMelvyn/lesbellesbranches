import Image from "next/image";
import Resume from "./component/resume";
import Promo from "./component/promo";
import Accueil from "../public/accueil.png";
import AccueilM from "../public/accueilm.png";
import reviews from "../public/reviews.png";

export default function Home() {
  return (
    <main>
      <section>
        <div className="hidden lg:flex">
          <Image
            src={Accueil}
            alt="Accueil"
            className="w-screen"
            width={1500}
          />
        </div>
        <div className="flex lg:hidden">
          <Image
            src={AccueilM}
            alt="Accueil"
            width={1500}
          />
        </div>
      </section>

      <Resume />
      <Promo />

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
        <div className="lg:w-1/2 lg:flex mt-5 lg:mt-0">
          <p className="flex justify-center text-center items-center text-3xl">
            N'hésite pas à consulter ou laisser un avis !
          </p>
        </div>
      </section>
    </main>
  );
}