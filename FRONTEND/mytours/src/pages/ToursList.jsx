// pages/Tours.jsx
import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await api.get('/api/tours/');
        setTours(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map(tour => (
          <li key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.description}</p>
            <p>Price: ${tour.price}</p>
            <p>Available Spots: {tour.available_spots}</p>
            {tour.image && <img src={tour.image} alt={tour.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tours;
