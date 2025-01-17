import React from 'react';

interface Cards {
    id: number;
    name: string;
    image: string;
    testimonial?: string; 
}

interface CardProps {
    card: Cards;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="max-w-[400px] w-full bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
      <img
        src={card.image}
        className="h-48 w-full object-cover rounded"
        alt={card.name}
      />
      <h3 className="text-center text-2xl p-2 font-bold text-gray-700">
        {card.name}
      </h3>
      {card.testimonial && (
        <h4 className="text-center text-gray-600">
          "{card.testimonial}"
        </h4>
      )}
    </div>
  );
};

export default Card;
