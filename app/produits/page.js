import PropTypes from 'prop-types';

// Composant Gallery
const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-10 px-5 lg:px-20">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-0 pb-[100%]">
          <img
            src={src}
            alt={`Image ${index}`}
            layout="fill"
            objectFit="cover"
            className="absolute rounded-2xl inset-0 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Page d'accueil
export default function Home() {
  const images = [
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723890954/lunette-de-soleil-bleu-plastique-recycle-bambou-organique-modele-sunglass_y6hjgy.webp',
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723890954/s-l400_wwcznx.jpg',
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723891749/_afflelou_core_07630629414754_afflelou_ma_model_65b7c48cb7174_s7br6d.png',
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723891749/Hommes_udvaqf.webp',
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723891748/categorie-par-defaut-layer_ccner4.jpg',
    'https://res.cloudinary.com/dxecll7yj/image/upload/v1723891964/c42de44522eb3ae9f3724972a2da7550_ojynqc.jpg',
    // Ajoutez plus d'images ici
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Nos créations</h1>
      <Gallery images={images} />
    </div>
  );
}
