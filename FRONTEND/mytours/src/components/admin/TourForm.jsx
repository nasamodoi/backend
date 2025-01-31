import React, { useState, useEffect } from 'react';
import { fetchCategories, createTour } from '../../services/api';

const TourForm = ({ onTourAdded }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available_spots: '',
    start_date: '',
    end_date: '',
    category_id: '',
    is_active: true,
  });
  const [image, setImage] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategoriesList();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) {
      data.append('image', image);
    }

    try {
      await createTour(data);
      alert('Tour created successfully!');
      onTourAdded(); // Notify parent to refresh tours
    } catch (error) {
      console.error('Error adding tour:', error);
      alert('Failed to create tour. Check the console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        name="name"
        placeholder="Tour Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      ></textarea>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      />
      <input
        type="number"
        name="available_spots"
        placeholder="Available Spots"
        value={formData.available_spots}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      />
      <input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      />
      <input
        type="date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      />
      <select
        name="category_id"
        value={formData.category_id}
        onChange={handleChange}
        required
        className="block w-full px-4 py-2 border rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select
        name="is_active"
        value={formData.is_active}
        onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'true' })}
        required
        className="block w-full px-4 py-2 border rounded"
      >
        <option value={true}>Active</option>
        <option value={false}>Inactive</option>
      </select>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="block w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Tour
      </button>
    </form>
  );
};

export default TourForm;
