import Image from "next/image";
import face from "../../public/face.png";
import earth from "../../public/earth.png";
import glasses from "../../public/glasses.png";
import second from "../../public/second.png";

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
    text: "Modèles entièrement personnalisbles",
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
      En déposant vos anciennes lunettes, vous bénéficiez d&apos;un bon d&apos;achat.{" "}<br/>
      <span className="text-xs">
        Elles seront revalorisées dans notre atelier pour équiper d&apos;autres personnes à petit prix.
      </span>
    </>
  ),
}
];

const Resume = () => {
  return (
    <section className="p-5">
      <h2 className="text-center text-5xl font-bold my-12">Notre vision, changer la vôtre</h2>
      <p className="text-xl text-center">
        Toutes nos montures sont sélectionnées selon des critères exigeants : matériaux durables (huile/graine de ricin, acétate de cellulose), fabrication française et circuits courts (Montauban, Albi...).<br /><br />
        Et parce que chaque besoin est unique, on a (vraiment) pensé à tout :
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition duration-300 ease-in-out text-center"
          >
            <div className="flex justify-center">
              <Image src={item.src} width={200} alt={item.alt} />
            </div>
            <h1 className="pt-4 text-2xl font-semibold">{item.text}</h1>
            <p className="text-base text-gray-600 mt-2 leading-tight px-4">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
