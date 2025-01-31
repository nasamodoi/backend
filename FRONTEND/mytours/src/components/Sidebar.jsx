// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        <li className="mb-2">
          <Link to="/tours" className="hover:underline">
            Tours
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/categories" className="hover:underline">
            Categories
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/bookings" className="hover:underline">
            Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
