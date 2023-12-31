import React from 'react';
import CarCard from './CarCard';
import '../styles/CarCard.css';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
