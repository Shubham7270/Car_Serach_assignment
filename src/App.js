import React, { useState } from 'react';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import './App.css';
import carsData from './data/cars.json';

function App() {
  const [cars, setCars] = useState(carsData);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Function to handle page change
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle search
  const handleSearch = (query) => {
    const filteredCars = carsData.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="app">
      <h1>Car Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={currentCars} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}

export default App;


