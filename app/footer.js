import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});


const Footer = () => {
  return (
    <footer className={`flex bg-brique items-center flex-wrap justify-center p-4 md:p-8 font-Raleway ${raleway.className}`}>
        <div className='my-5 text-center text-xl md:text-2xl font-chewi'>
            <Link className=' text-white text-4xl hover:underline transition duration-500' href="/">Les Belles Branches</Link>

            <ul className='flex justify-center my-5 gap-5'>
                <li><Link className='text-white hover:underline transition duration-500' href="/produits">Nos produits</Link></li>
                <li><Link className='text-white hover:underline transition duration-500' href="/tarifs">Tarifs</Link></li>
                <li><Link className='text-white hover:underline transition duration-500' href="/propos">À propos</Link></li>
                <li><Link className='text-white hover:underline transition duration-500' href="/faq">FAQ</Link></li>
                <li><Link className='text-white hover:underline transition duration-500' href="/rdv">Contact</Link></li>


            </ul>

            <div className='flex justify-center text-center text-2xl my-5 gap-5'>
                <Link className='text-white hover:underline transition duration-500' href="https://www.instagram.com/lesbellesbranches/" target='_blank'><FaInstagram /></Link>
                <Link className='text-white hover:underline transition duration-500' href="https://www.youtube.com/@lulussweetworld" target='_blank'><FaYoutube /></Link>
                <Link className='text-white hover:underline transition duration-500' href="https://www.tiktok.com/@lulussweetworld" target='_blank'><FaTiktok /></Link>
            </div>

            <div className='grid text-center text-white'>
                <small>15 Rue du Rem Saint-Etienne, 31000 Toulouse</small>
                <small>2024 &copy; Tous droits réservés</small>
            </div>
          </div>
        </footer>
  );
};

export default Footer;