import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold">{category.name}</h2>
      <p className="text-gray-600 mt-2">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
