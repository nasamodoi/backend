import React, { useEffect, useState } from 'react';
import { fetchTours } from '../services/api';
import TourCard from '../components/TourCard';

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours().then((response) => {
      setTours(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Available Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
