import Image from "next/image";
import Smile from "../../public/smile.png";
import BG from "../../public/background.png";

const Intro = () => {
  return (
    <section className="bg-cool">
  {/* Intro Section */}
  <div className="px-6 py-12 md:px-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Les Belles Branches
  <span className="block mt-1 text-gris text-xl md:text-2xl font-normal">
    Les lunettes qui poussent dans le bon sens,<br /> au coeur de Toulouse
  </span>
</h1>
    <Image src={Smile} alt="Smile" width={60} className="mt-4" />
  </div>

  {/* Hero Section with responsive rounded bg */}
  <div className="relative overflow-hidden rounded-t-[150px] lg:rounded-t-full h-[500px] md:h-[400px]">
  <Image
    src={BG}
    alt="Fond Belles Branches"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 flex items-center justify-center px-3 md:px-6 py-16 md:py-32">
    <div className="max-w-4xl text-center space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
        Bienvenue chez <span className="font-bold">Les Belles Branches</span>,<br />
        votre <span className="font-bold">opticien éco-réfléchi indépendant</span> à Toulouse,
        à deux pas de la station de métro François Verdier.
      </h2>
      <p className="text-base sm:text-lg md:text-2xl text-gray-200 font-medium">
        Ici, nous prenons soin de <span className="font-bold">votre santé visuelle</span><br></br> tout en rendant le
        <span className="font-bold"> 100% français</span> accessible à tous.<br />
        Pas de collections éphémères fabriquées à l'autre bout du monde :<br></br>
        uniquement des <span className="font-bold">montures locales et durables</span>,<br></br>
        adaptées à tous les styles et tous les budgets.
      </p>
    </div>
  </div>
</div>

  {/* Features Section */}
  <div className="py-10 px-6 md:px-20 font-bold space-y-6 text-xl">
    <p>Dans notre magasin, on vous propose bien plus que des lunettes :</p>
    <ul className="space-y-4 list-none">
      <li>
        ✅ Une large gamme de <span className="text-mustard">montures locales, durables</span> et <span className="text-mustard">sur-mesure</span>
      </li>
      <li>
        ✅ Du <span className="text-mustard">montage</span> en magasin à des services de <span className="text-mustard">santé visuelle</span> personnalisés
      </li>
      <li>
        ✅ Et surtout, une <span className="text-mustard">approche humaine</span>, sincère et accessible.
      </li>
    </ul>
    <p>
      Notre mission ? Être à votre écoute pour vous proposer les solutions optiques adaptées à <span className="italic">vos</span> besoins.
    </p>
  </div>
</section>
  );
};

export default Intro;
