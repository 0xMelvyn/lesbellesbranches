import Accordion from "./accordion";
import ContactForm from './contact';

const FAQ = () => {
  return (
    <div className="bg-cool pt-10">
      <h1 className="text-3xl font-bold mb-10 text-center">FAQ</h1>
      <div className="p-4 mx-5 lg:mx-20 bg-white rounded-lg">
        <Accordion
          title="Qu'est-ce que cela signifie que nos lunettes sont Made in France ?"
          answer="Made in France signifie que nos lunettes sont entièrement conçues, fabriquées et assemblées en France. Cela garantit une qualité exceptionnelle, un soutien à l'économie locale, et un respect des normes environnementales et sociales élevées. Nous sommes fiers de perpétuer un savoir-faire traditionnel tout en offrant des produits durables et éthiques."
        />
        <Accordion
          title="Comment nos lunettes respectent-elles l'environnement ?"
          answer="Nous utilisons des matériaux écologiques, tels que l'acétate bio-sourcé et le bois certifié, tout en appliquant des pratiques durables pour minimiser notre empreinte carbone."
        />
        <Accordion
          title="Vos lunettes sont-elles recyclables ?"
          answer="Oui, nos lunettes sont conçues pour être recyclées. Nous encourageons nos clients à nous renvoyer leurs anciennes montures pour qu'elles soient traitées de manière écologique."
        />
        <Accordion 
          title="Est-il possible de personnaliser mes lunettes ?"
          answer="Oui, nous offrons des options de personnalisation pour que vos lunettes reflètent parfaitement votre style unique. Choisissez parmi différents matériaux, couleurs et formes." 
        />
      </div>
      <ContactForm/>
    </div>
  );
};

export default FAQ;