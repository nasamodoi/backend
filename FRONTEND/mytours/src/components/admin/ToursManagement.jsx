import React, { useState, useEffect } from 'react';
import { fetchTours, createTour } from '../../services/api';

const ToursManagement = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTours();
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddTour = async () => {
    const newTour = { name: 'New Tour', description: 'Exciting new tour!' };
    try {
      await createTour(newTour);
      console.log('Tour added successfully!');
      const response = await fetchTours();
      setTours(response.data);
    } catch (error) {
      console.error('Error adding tour:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Tours</h2>
      <ul className="list-disc ml-5">
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
      <button
        onClick={handleAddTour}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add New Tour
      </button>
    </div>
  );
};

export default ToursManagement;
