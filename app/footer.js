import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex bg-black items-center flex-wrap justify-center p-4 md:p-8">
      <div className="my-5 text-center text-sm md:text-xl font-chewi">
        <Link
          className="text-white text-4xl hover:underline transition duration-500"
          href="/"
        >
          Les Belles Branches
        </Link>

        <ul className="flex justify-center my-5 gap-5 flex-wrap">
          <div className="lg:flex gap-5">
            <li>
              <Link
                className="text-white hover:underline transition duration-500"
                href="/produits"
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline transition duration-500"
                href="/tarifs"
              >
                Presentation
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline transition duration-500"
                href="/propos"
              >
                Nos racines
              </Link>
            </li>
          </div>
          <div className="lg:flex gap-5">
            <li>
              <Link
                className="text-white hover:underline transition duration-500"
                href="/aide"
              >
                Et pourquoi ?
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:underline transition duration-500"
                href="https://lj.reservio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre RDV
              </Link>
            </li>
          </div>
        </ul>

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
            <FaFacebook />
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

        <div className="grid text-center text-white">
          <small>15 Rue du Rem Saint-Etienne, 31000 Toulouse</small>
          <small>2024 &copy; Tous droits réservés</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;