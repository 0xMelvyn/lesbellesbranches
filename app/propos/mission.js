import Image from "next/image";
import target from "../../public/target.png";

const Explication = () => {
    return (
        <section className="lg:flex">
        <div className="lg:w-1/2 lg:my-5 lg:ml-14">
        <p className="flex lg:hidden text-5xl font-bold justify-center py-7">Notre mission</p>
          <Image src={target} alt='Joël' width={400} className="lg:m-20 flex justify-center mx-auto"/>
        </div>
        <div className="lg:w-1/2 lg:my-20 lg:mr-14 lg:mt-44">
          <p className="hidden lg:block text-5xl font-bold">Notre mission</p>
          <br />
          <p className="hidden lg:block text-lg">Nous créons des lunettes élégantes et pratiques tout en réduisant notre impact environnemental, grâce à l'utilisation de matériaux durables et recyclés qui allient qualité supérieure et respect de l'environnement.</p>
          <p className="block lg:hidden mx-5 text-xl text-justify">Nous créons des lunettes élégantes et pratiques tout en réduisant notre impact environnemental, grâce à l'utilisation de matériaux durables et recyclés qui allient qualité supérieure et respect de l'environnement.</p>
        </div>
      </section>
    );
  };
  
  export default Explication;