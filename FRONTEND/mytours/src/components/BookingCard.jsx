import React from 'react';

const BookingCard = ({ booking }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-bold">Booking ID: {booking.id}</h2>
      <p className="text-gray-600 mt-2">Tour: {booking.tourName}</p>
      <p className="text-gray-600 mt-2">Customer: {booking.customerName}</p>
      <p className="text-blue-600 font-bold mt-4">Total: ${booking.totalAmount}</p>
    </div>
  );
};

export default BookingCard;
