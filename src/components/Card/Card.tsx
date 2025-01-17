import React from "react";
import "./CardStyles.css";

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
    <div className="cardContainer">
      <img
        src={card.image}
        className="cardImage"
        alt={card.name}
      />
      <h3 className="cardName">{card.name}</h3>
      {card.testimonial && (
        <h4 className="cardTestimonial">"{card.testimonial}"</h4>
      )}
    </div>
  );
};

export default Card;
