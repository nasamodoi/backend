// import React, { useEffect, useState } from 'react';
// import { fetchBookings } from '../services/api';
// import BookingCard from '../components/BookingCard';

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetchBookings().then((response) => {
//       setBookings(response.data);
//     });
//   }, []);

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookings.map((booking) => (
//           <BookingCard key={booking.id} booking={booking} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Bookings;


import React, { useEffect, useState } from 'react';
import { fetchBookings } from '../services/api';
import BookingCard from '../components/BookingCard';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings().then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
