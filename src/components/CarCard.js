import React from 'react';
import '../styles/CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.price}</p>
    </div>
  );
};

export default CarCard;
