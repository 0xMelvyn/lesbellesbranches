import Image from "next/image";
import Smile from "../../public/smile.png";
import Lojo from "./lojo";

const Sante = () => {
  return (
    <section className="p-5 bg-cool">
      <div className="flex flex-col-reverse lg:flex-row items-center pt-10">
                {/* Composant slider (Lojo) */}
        <div className="w-full lg:w-1/2 flex justify-center my-10 lg:my-0">
          <Lojo />
        </div>
        {/* Texte */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-10">
          <p className="text-4xl lg:text-5xl font-bold mb-4">Votre santé visuelle</p>
          <div className="flex justify-center lg:justify-start mb-4">
            <Image src={Smile} alt="Smile" width={60} />
          </div>
          <h2 className="text-lg lg:text-2xl text-gris leading-relaxed">
            <span className="font-bold">Opticiens diplômés</span>, on vous accompagne avec sérieux, transparence et bienveillance
            <br /><br />
            <p className="text-left">
            ▶ Examens de vue (adulte et enfant) <br />
            ▶ Réparations et ajustements gratuits<br />
            ▶ Monture sur mesure et personnalisable <br />
            ▶ Bilan lentilles et adaptation lentilles de contact<br />
            ▶ Lunettes de sport : votre vue aussi mérite la performance <br />
            ▶ Reconditionnement de montures : offrez une seconde vie à vos anciennes lunettes
            </p>
            <br /><br />
            <span className="text-black">
              Oui, vous êtes chez un opticien… mais aussi chez des <span className="font-bold">pros de la santé visuelle.</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Sante;
