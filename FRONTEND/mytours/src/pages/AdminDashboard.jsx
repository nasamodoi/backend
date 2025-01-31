// import React, { useState, useEffect } from 'react';
// import { fetchTours, fetchCategories, fetchBookings } from '../services/api';
// import CategoryForm from '../components/admin/CategoryForm';
// import TourForm from '../components/admin/TourForm';

// const AdminDashboard = () => {
//   const [categories, setCategories] = useState([]);
//   const [tours, setTours] = useState([]);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const categoryResponse = await fetchCategories();
//         const tourResponse = await fetchTours();
//         const bookingResponse = await fetchBookings();
//         setCategories(categoryResponse.data);
//         setTours(tourResponse.data);
//         setBookings(bookingResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const refreshCategories = async () => {
//     const response = await fetchCategories();
//     setCategories(response.data);
//   };

//   const refreshTours = async () => {
//     const response = await fetchTours();
//     setTours(response.data);
//   };

//   return (
//     <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg space-y-12">
//       <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Admin Dashboard</h1>

//       {/* Categories Section */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Manage Categories</h2>
//         <CategoryForm onCategoryAdded={refreshCategories} />
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//           {categories.map((category) => (
//             <li
//               key={category.id}
//               className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition"
//             >
//               <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
//               <p className="text-sm text-gray-600">{category.description}</p>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Tours Section */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-green-600 mb-4">Manage Tours</h2>
//         <TourForm onTourAdded={refreshTours} />
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//           {tours.map((tour) => (
//             <li
//               key={tour.id}
//               className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition"
//             >
//               <h3 className="font-bold text-lg text-gray-800">{tour.name}</h3>
//               <p className="text-sm text-gray-600">{tour.description}</p>
//               <p className="text-sm text-gray-500">Category: {tour.category.name}</p>
//               <p className="text-sm text-gray-500">Price: ${tour.price}</p>
//               <p className="text-sm text-gray-500">
//                 Dates: {tour.start_date} - {tour.end_date}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Bookings Section */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-red-600 mb-4">Manage Bookings</h2>
//         <ul className="divide-y divide-gray-200">
//           {bookings.map((booking) => (
//             <li
//               key={booking.id}
//               className="py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition"
//             >
//               <div>
//                 <h3 className="font-bold text-gray-800">
//                   {booking.customer_name} - {booking.tours.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">Email: {booking.email}</p>
//                 <p className="text-sm text-gray-600">
//                   Booking Date: {new Date(booking.booking_date).toLocaleString()}
//                 </p>
//                 <p className="text-sm text-gray-600">Number of People: {booking.number_of_people}</p>
//                 <p className="text-sm text-gray-600">Total Price: ${booking.total_price}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { fetchTours, fetchCategories, fetchBookings } from '../services/api';
import CategoryForm from '../components/admin/CategoryForm';
import TourForm from '../components/admin/TourForm';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          const categoryResponse = await fetchCategories();
          const tourResponse = await fetchTours();
          const bookingResponse = await fetchBookings();
          setCategories(categoryResponse.data);
          setTours(tourResponse.data);
          setBookings(bookingResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual logic)
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-blue-700">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Categories Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Manage Categories</h2>
        <CategoryForm onCategoryAdded={async () => {
          const response = await fetchCategories();
          setCategories(response.data);
        }} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {categories.map((category) => (
            <li key={category.id} className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tours Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Manage Tours</h2>
        <TourForm onTourAdded={async () => {
          const response = await fetchTours();
          setTours(response.data);
        }} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {tours.map((tour) => (
            <li key={tour.id} className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-gray-800">{tour.name}</h3>
              <p className="text-sm text-gray-600">{tour.description}</p>
              <p className="text-sm text-gray-500">Category: {tour.category.name}</p>
              <p className="text-sm text-gray-500">Price: ${tour.price}</p>
              <p className="text-sm text-gray-500">Dates: {tour.start_date} - {tour.end_date}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Bookings Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Manage Bookings</h2>
        <ul className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <li key={booking.id} className="py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition">
              <div>
                <h3 className="font-bold text-gray-800">
                  {booking.customer_name} - {booking.tours.name}
                </h3>
                <p className="text-sm text-gray-600">Email: {booking.email}</p>
                <p className="text-sm text-gray-600">Booking Date: {new Date(booking.booking_date).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Number of People: {booking.number_of_people}</p>
                <p className="text-sm text-gray-600">Total Price: ${booking.total_price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;

