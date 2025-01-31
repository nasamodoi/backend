import React, { useState, useEffect } from 'react';
import { fetchCategories, createCategory } from '../../services/api';

const CategoriesManagement = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddCategory = async () => {
    const newCategory = { name: 'New Category' };
    try {
      await createCategory(newCategory);
      console.log('Category added successfully!');
      const response = await fetchCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Categories</h2>
      <ul className="list-disc ml-5">
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <button
        onClick={handleAddCategory}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add New Category
      </button>
    </div>
  );
};

export default CategoriesManagement;
