import Image from "next/image";
import Smile from "../../public/smile.png";
import face from "../../public/face.png";
import earth from "../../public/earth.png";
import glasses from "../../public/glasses.png";
import second from "../../public/second.png";
import Montures from "./montures";
import Link from 'next/link';

const items = [
  {
    src: face,
    alt: "Drapeau Français",
    text: "Montures pour petits visages adultes",
    subtext: "Enfin des lunettes à votre taille sans passer par le rayon enfant",
  },
  {
    src: glasses,
    alt: "Lunettes",
    text: "Modèles entièrement personnalisables",
    subtext: "Pour une paire unique, à votre image",
  },
  {
    src: earth,
    alt: "Terre",
    text: "Lunettes upcyclées",
    subtext: "Design et responsables, elles ont tout bon",
  },
  {
    src: second,
    alt: "Personnalisation",
    text: "Montures secondes main",
    subtext: (
      <>
        En déposant vos anciennes lunettes, vous bénéficiez d&apos;un bon d&apos;achat.
        <br />
        <span className="text-xs">
          Elles seront revalorisées dans notre atelier pour équiper d&apos;autres personnes à petit prix.
        </span>
      </>
    ),
  },
];

const Vision = () => {
  return (
    <section className="px-4 md:px-8 lg:px-20 lg:py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Texte */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Notre vision,<br /> changer la vôtre
          </h2>
          <div className="flex justify-center lg:justify-start pt-4">
            <Image src={Smile} alt="Smile" width={60} />
          </div>
          <p className="mt-6 text-lg md:text-xl text-justify text-gris px-2 md:px-10 lg:px-0">
            Toutes nos montures sont sélectionnées selon des critères exigeants :
            <span className="font-bold"> matériaux durables</span> (huile/graine de ricin, acétate de cellulose),
            <span className="font-bold"> fabrication française</span> et circuits courts (Montauban, Albi…).
            Et parce que chaque besoin est unique, on a (vraiment) pensé à tout :
          </p>
          <div className="flex justify-center mt-10">

      <Link
          href="/nos-montures"
          className="text-cool text-center transition duration-300 ease-in-out mx-3 px-16 lg:px-36 py-6 bg-mustard rounded-full hover:scale-105"
        >
          Découvrir nos montures
        </Link>
        </div>
        </div>

        {/* Slider */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Montures />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-10 lg:mb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition duration-300 ease-in-out text-center"
          >
            <div className="flex justify-center">
              <Image src={item.src} width={200} alt={item.alt} />
            </div>
            <h3 className="pt-4 text-xl font-semibold">{item.text}</h3>
            <p className="text-sm text-gray-600 mt-2 px-4">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
