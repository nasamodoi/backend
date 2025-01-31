import axios from 'axios';

// Define the base URL for your Django backend API
const BASE_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

// Tours API
export const fetchTours = () => api.get('tours/');
export const fetchTourById = (id) => api.get(`tours/${id}/`);
export const createTour = async (data) => {
  try {
    const response = await api.post('tours/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating tour:', error.response?.data || error.message);
    throw new Error('Failed to create tour.');
  }
};

// Categories API
export const fetchCategories = () => api.get('categories/');
export const createCategory = (data) => api.post('categories/', data);

// Bookings API
export const fetchBookings = () => api.get('bookings/');
export const createBooking = (data) => api.post('bookings/', data);

export default api;
