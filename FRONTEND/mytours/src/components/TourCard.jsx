import React from 'react';

const TourCard = ({ tour }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold">{tour.name}</h2>
      <p className="text-gray-600 mt-2">{tour.description}</p>
      <p className="text-blue-600 font-bold mt-4">${tour.price}</p>
    </div>
  );
};

export default TourCard;
