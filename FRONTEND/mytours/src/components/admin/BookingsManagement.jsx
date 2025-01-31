import React, { useState, useEffect } from 'react';
import { fetchBookings } from '../../services/api';

const BookingsManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBookings();
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Bookings</h2>
      <ul className="list-disc ml-5">
        {bookings.map((booking) => (
          <li key={booking.id}>
            Booking ID: {booking.id}, Tour: {booking.tour}, User: {booking.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsManagement;
