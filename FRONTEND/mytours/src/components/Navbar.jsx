import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyTours</Link>
        <div className="space-x-4">
          <Link to="/tours" className="text-white">Tours</Link>
          <Link to="/categories" className="text-white">Categories</Link>
          <Link to="/bookings" className="text-white">Bookings</Link>
          <Link to="/admin" className="text-white">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
