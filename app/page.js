import Image from "next/image";
import Slider from "./component/slider";
import Resume from "./component/resume";
import Promo from "./component/promo";
import Recap from "./component/recap";
import reviews from "../public/reviews.png";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Slider/>
      <section className="bg-cool">
      <div className="p-5">
        <h1 className="my-12 text-5xl font-bold text">Les lunettes qui poussent dans le bon sens,<br/> au coeur de Toulouse</h1>
        <p className="text-xl">Bienvenue chez <span className="font-bold">Les Belles Branches</span>, votre <span className="font-bold">opticien éco-réfléchi indépendant</span> à Toulouse, à deux pas de la station de métro François Verdier.<br/><br/>
        Ici, nous prenons soin de votre santé visuelle tout en rendant le 100% français accessible à tous. Pas de collections éphémères fabriquées à l'autre bout du monde : uniquement des montures locales et durables, adaptées à tous les styles et tous les budgets.<br/><br/>
        Dans notre magasin, on vous propose bien plus que des lunettes :</p>
        <div className="flex justify-end">
        <p className="text-xl"><br/>✅ Une large gamme de <span className="font-bold">montures locales, durables et sur-mesure</span><br/><br/>
        ✅ Du montage en magasin à des <span className="font-bold">services de santé visuelle personnalisés</span><br/><br/>
        ✅ Et surtout, une <span className="font-bold">approche humaine</span>, sincère et accessible.</p>
        </div>
        <p className="text-xl"><br/>Notre mission ? Être à votre écoute pour vous proposer les solutions optiques adaptées à VOS besoins.</p>
      </div>
      </section>
      <Resume />
      <Promo />
      <section className="p-5">
        <div className="">
           <h3 className="my-12 text-5xl font-bold">Santé visuelle : suivi et accompagnent professionels</h3>
           <p className="text-xl">Opticiens diplômés, on vous accompagne avec sérieux, transparence et bienveillance :</p>
           <br/>
           <ul className="text-xl list-disc pl-5">
            <li>Examens de vue (adulte et enfatn)</li>
            <li>Réparations et ajustements gratuits</li>
            <li>Monture sur mesure et personnalisable : créez LA paire qui vous ressemble</li>
            <li>Bilan lentilles, adapation lentilles de contact</li>
            <li>Lunettes de sport : votre vue aussi mérite la performance</li>
            <li>Reconditionnement de montures : offrez une seconde vie à vos anciennes lunettes</li>
           </ul>
           <br/>
           <p className="text-xl italic">Oui, vous êtes chez un opticien... mais aussi chez des pros de la santé visuelle.</p>
           <br/>
           <div className="flex justify-center mt-10">

      <Link
          href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank"
          className="text-cool text-center transition duration-300 ease-in-out mx-3 px-36 py-6 bg-mustard rounded-full hover:scale-105"
        >
          Prendre RDV sur Doctolib
        </Link>
        </div>
        </div>
      </section>

      <Recap />

      <section className="p-5">
      <h2 className="text-center text-5xl font-bold my-12">Passez nous voir !</h2>
      <p className="text-xl text-center text-justify lg:mx-20">On est à deux pas du métro François Verdier, en plein centre de Toulouse. Poussez la porte du magasin, on vous promet un moment sympa, des conseils honnêtes, et qui sait, peut-être votre prochaine paire de lunette coup de coeur ? Si vous préférez planifer votre venue <Link href="https://www.doctolib.fr/magasin-d-optique/toulouse/opticien-les-belles-branches"
          target="_blank">prenez rendez-vous en ligne ici.</Link></p>
          <br/>
      <p className="text-xl text-justify mx-auto flex justify-center">Horaires d'ouverture : Le lundi 10h00 - 12h30 | 14h00 - 19h00<br/>
      Du mardi au vendredi 9h30 - 12h30 | 14h00 - 19h00<br/>
      Le samedi de 10h00 à 18h00<br/>
      Adresse : 15, rue du rempart Saint-Etienne 31000 Toulouse</p>
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
            Vos avis nous font grossir !
          </p>
        </div>
      </section>
    </main>
  );
}
