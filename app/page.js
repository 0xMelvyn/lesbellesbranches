import Image from "next/image";
import Slider from "./component/slider";
import Resume from "./component/resume";
import Promo from "./component/promo";
import reviews from "../public/reviews.png";

import Logo from "../public/logo.png"
import target from "../public/target.png"
import work from "../public/work.png"
import { BsEyeglasses } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { GrPowerCycle } from "react-icons/gr";
import { FaInstagram, FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <div className="flex m-4 pb-1 text-2xl">
          <div className="hidden lg:flex ml-4">
              <Image src={Logo} alt="Logo" width={200} />
          </div>
          <div className="flex lg:hidden ml-4">
          <Image src={Logo} alt="Logo" width={150} />
      </div>
        </div>

        <div className="lg:flex py-7 lg:py-14 bg-cool">
        <div className="lg:w-1/2 mt-7 lg:ml-14">
            <p className="text-5xl text-center font-bold">Pssst notre site est en train de pousser 🌱</p>
            <br />
            <p className="hidden lg:block text-lg">Retrouvez ici prochainement nos lunettes qui poussent dans le bon sens</p>
            <p className="block lg:hidden mx-5 text-xl text-justify">Retrouvez ici prochainement nos lunettes qui poussent dans le bon sens</p>
            <br />
            <p className="mx-5 lg:mx-0 font-bold">100% français & engagé</p>
            <br />
            <p className="hidden lg:block text-lg">Verres et montures fabriqués à la main en France.
            pensés pour durer</p>
            <p className="block lg:hidden mx-5 text-xl text-justify">Verres et montures fabriqués à la main en France.
            pensés pour durer</p>
          </div>
        <div className="lg:w-1/2">
        <div className="flex justify-center items-center">
    <div className="underline text-5xl py-5 lg:py-0 font-bold text-center">
    <Image src={work} alt="Logo" width={700} />
        </div>
      </div>
        </div>
          </div>
          
          

  <div className="lg:flex md:py-7 bg-mustard">
    <div className="lg:w-1/2 md:pt-10 lg:pt-0">
      <div className="flex justify-center items-center">
        <div className="md:flex justify-center text-2xl text-cool text-center">
          <div className="flex-1 py-4 lg:py-0">
            <BsEyeglasses className="flex mx-auto text-8xl lg:text-5xl" />
            <p className="mx-5">Bilan visuel offert</p>
          </div>
          <div className="flex-1 py-4 lg:py-0">
            <VscTools className="flex mx-auto text-8xl lg:text-5xl" />
            <p className="mx-5">Réparation gratuite</p>
          </div>
          <div className="flex-1 py-4 lg:py-0">
            <GrPowerCycle className="flex mx-auto text-8xl lg:text-5xl" />
            <p>On recycle vos montures</p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 lg:mr-14">
      <p className="text-3xl text-center text-cool pt-10 md-pt-0 px-2 lg:px-0">En attendant on fait pousser nos branches ici</p>
      <div className="flex py-5 justify-center text-5xl text-cool gap-12">
        <a href="https://www.instagram.com/lesbellesbranches/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </div>
  </div>
      </section>
{/* 
      <Slider/>
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
        <div className="lg:w-1/2 lg:flex justify-center mt-5 lg:mt-0">
          <p className="flex justify-center text-center items-center text-3xl">
            Vos avis nous font grandir !
          </p>
        </div>
      </section>
      */}
    </main>
  );
}