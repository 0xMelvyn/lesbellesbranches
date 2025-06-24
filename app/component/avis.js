'use client';

import React, { useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

const reviews = [
  {
    name: 'Margaux Lidoine',
    rating: 5,
    comment: 'Des professionnels passionnés et engagés ! Dans un cadre chaleureux et accueillant, les conseils reçus et l’accompagnement ne peuvent être que parfaits.Vivement que je revienne pour mes solaires',
  },
  {
    name: 'Claire Pouligny',
    rating: 5,
    comment: "Une boutique magnifique avec un accueil convivial et des conseils avisés. Je recommande vivement !",
  },
  {
    name: 'Mélanie Sylvestre',
    rating: 5,
    comment: "Accueil chaleureux, de très bons conseils, et d'autant plus, engagés dans une démarche écologique ! Je recommande vivement 😊",
  },
  {
    name: 'Jeffrey Van Handenhove',
    rating: 5,
    comment: "Merci pour vos précieux conseils. Joël s'est occupé de moi, c'était top ! Si vous cherchez de nouvelles lunettes tout en achetant français, vous povez y aller les yeux fermés 😅"
  },
  {
    name: 'Michael Baticle',
    rating: 5,
    comment: "De très bon conseil et de très belle paire de lunettes fabriquée en France a visiter absolument."
  },
];

export default function GoogleReviewsCarousel() {
  const {
    carouselFragment,
    slideToNextItem,
  } = useSpringCarousel({
    withLoop: true,
    items: reviews.map((review, index) => ({
      id: `review-${index}`,
      renderItem: (
        <div className="flex justify-center w-full">
          <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-5xl text-center mx-auto">
            <p className="text-yellow-500 text-2xl mb-3">
              {'★'.repeat(review.rating)}{' '}
              {'☆'.repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700 text-lg italic mb-4">"{review.comment}"</p>
            <p className="text-sm text-gray-500">– {review.name}</p>
          </div>
        </div>
      ),
    })),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNextItem();
    }, 4000);

    return () => clearInterval(interval);
  }, [slideToNextItem]);

  return (
    <div className="w-full flex flex-col items-center py-14 bg-cool overflow-hidden">
      <div className="w-full">{carouselFragment}</div>
    </div>
  );
}