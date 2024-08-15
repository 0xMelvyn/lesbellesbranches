const Explication = () => {
  return (
    <section className="bg-white lg:flex pt-16 py-8 lg:py-40">
    <div className="flex lg:w-1/2 justify-center items-center">
    <div className="underline text-5xl font-bold text-center">
        <p>100% Recyclé.</p>
        <br />
        <p>100% Français.</p>
        <br />
        <p>100% Pour vous.</p>
        </div>
      </div>
      <div className="pt-6 lg:pt-0 lg:w-1/2">
        <p className="text-2xl lg:text-justify m-5 lg:m-0 lg:mr-14">Nous valorisons le <span className='bg-mustard'>savoir-faire</span> français en fabriquant nos lunettes en France, garantissant ainsi une qualité artisanale exceptionnelle. En utilisant des matériaux recyclés, nous affirmons notre engagement envers une production <span className='bg-mustard'>durable</span> et respectueuse de l'environnement. De plus, notre service de <span className='bg-mustard'>sur mesure</span> vous permet de personnaliser chaque paire pour qu'elle soit parfaitement adaptée à vos besoins et à votre style, tout en contribuant à un avenir plus vert.</p>
      </div>
    </section>
  );
};

export default Explication;