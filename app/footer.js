import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Smile from "../public/smile.png";

const Footer = () => {
  return (
    <footer className="flex bg-black items-center flex-wrap justify-center p-4 md:pt-8">
      <div className="text-center text-sm md:text-xl font-chewi">
        <p className='text-white'><Link
          className="font-bold hover:underline transition duration-500"
          href="/"
        >
          Les Belles Branches
        </Link> -  15, rue du rempart Saint-Etienne 31000 Toulouse</p>

        <div className='my-3 text-white leading-none'>
          <div className='flex justify-center'>
            <Image
                          src={Smile}
                          alt="Smile"
                          className=""
                          width={60}
                        /></div>
          <p className='font-bold my-3'>Horaires d'ouverture :</p>
          <small>Le lundi 10h00 - 12h30 | 14h00 - 19h00 <br/>
Du mardi au vendredi 9h30 - 12h30 | 14h00 - 19h00<br/>
Le samedi de 10h00 à 18h00</small>
        </div>

        <div className="flex justify-center text-center text-2xl my-5 gap-5">
          <Link
            className="text-white hover:underline transition duration-500"
            href="https://www.instagram.com/lesbellesbranches/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-white hover:underline transition duration-500"
            href="https://www.linkedin.com/company/les-belles-branches/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white hover:underline transition duration-500"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="text-white hover:underline transition duration-500"
            href="mailto:bonjour@lesbellesbranches.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Link>
        </div>

        <div className="grid text-center text-white leading-none">
          <small><Link href="lesbellesbranche.fr">Mentions légales</Link> - <Link href="lesbellesbranche.fr">Politique de confidentialité</Link> - <Link href="lesbellesbranche.fr">CGU</Link></small>
          <small>2025 &copy; Tous droits réservés</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;