import React, { useState } from 'react';
import { createCategory } from '../../services/api';

const CategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      await createCategory(formData);
      onCategoryAdded();
      setName('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full px-4 py-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full px-4 py-2 border rounded"
      ></textarea>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="block w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
