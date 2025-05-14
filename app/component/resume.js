import Image from "next/image";
import flag from "../../public/flag.png";
import earth from "../../public/earth.png";
import glasses from "../../public/glasses.png";

const items = [
  {
    src: flag,
    alt: "Drapeau Français",
    text: "100% Français",
  },
  {
    src: glasses,
    alt: "Lunettes",
    text: "Sur-mesure",
  },
  {
    src: earth,
    alt: "Terre",
    text: "Seconde vie",
  },
];

const Resume = () => {
  return (
    <section className="p-5">
      <h2 className="text-center text-5xl font-bold my-12">Notre vision, changer la vôtre</h2>
      <p className="text-xl text-center">Toutes nos montures sont sélectionnées selon des critères exigeants : matériaux durables (huile/graine de ricin, acétate de cellulose), fabrication française et circuits courts (Montauban, Albi...).<br/><br/>
      Et parce que chaque besoin est unique, on a (vraiment) pensé à tout :</p>
      <div className="hidden lg:flex mb-20 justify-around">
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-10 hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="hidden lg:block">
              <Image src={item.src} width={350} alt={item.alt} />
            </div>
            <div className="flex justify-center lg:hidden">
              <Image src={item.src} width={275} alt={item.alt} />
            </div>
            <h1 className="flex pt-2 justify-center text-2xl mb-2 text-center">
              {item.text}
            </h1>
          </div>
        ))}
      </div>

      <div className="lg:hidden mb-20 justify-center">
        <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center">
            <Image src={flag} width={150} alt="Drapeau Français" />
          </div>
          <h1 className="flex pt-2 justify-center text-2xl mb-2 text-center">
            100% Français
          </h1>
        </div>

        <div className="flex justify-around">
          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex justify-center">
              <Image src={glasses} width={150} alt="Terre" />
            </div>
            <div className="">
              <h1 className="flex pt-2 justify-center text-2xl text-center">
                Sur mesure
              </h1>
            </div>
          </div>

          <div className="mt-10 hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex justify-center">
              <Image src={earth} width={150} alt="Lunettes" />
            </div>
            <h1 className="flex pt-2 justify-center text-2xl mb-2 text-center">
              Seconde vie
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;