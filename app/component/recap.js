import Image from "next/image";
import flag from "../../public/flag.png";
import health from "../../public/health.png";
import green from "../../public/green.png";

const items = [
  {
    src: flag,
    alt: "Local & responsable",
    text: "Local & responsable",
    subtext: "On travaille avec des marques françaises, voir carrément régionales (voir carrément départementales",
  },
  {
    src: green,
    alt: "Zéro gaspillages, tout le temps, partout",
    text: "Zéro gaspillages, tout le temps, partout",
    subtext: (
    <>
      Vos ancinnes lunettes ? On les recycle ou on les revalorise. Le mobilier du magasin ? 100% chiné et remis à neuf !{" "}<br/>
      <span className="text-xs">
        Et même notre atelier, on recycle l'eau pour économiser jusqu'à 2000 litres par an. Parce que chaque geste compte.
      </span>
    </>
  ),
  },
  {
    src: health,
    alt: "Engagement santé",
    text: "Engagement santé",
    subtext: "Professionnels diplômés, on prend soin de votre vue avec précision. On prend le temps de vous écouter, d'expliquer, de vous orienter vers LA solution adaptée à votre besoin.",
  },
];

const Recap = () => {
  return (
    <section className="p-5 bg-cool">
      <h2 className="text-center text-5xl font-bold my-12">
        Nos valeurs, aussi solides que nos montures
      </h2>
      <p className="text-xl text-center mb-10">
        Si vous êtes arrivés jusqu'ici, vous avez compris l'essentiel, mais un dernier rappel ne fait jamais de mal :
      </p>

      <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 justify-center mb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition duration-300 ease-in-out text-center max-w-xs mx-auto"
          >
            <Image src={item.src} width={275} height={275} alt={item.alt} className="mx-auto" />
            <h1 className="pt-4 text-2xl font-semibold">{item.text}</h1>
            <p className="text-base text-gray-600 mt-2 px-4 leading-tight">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recap;
