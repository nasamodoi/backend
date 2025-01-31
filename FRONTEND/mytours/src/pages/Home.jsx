import React, { useState, useEffect } from 'react';
import exampleImage from '../assets/example.jpg'; // Import example.jpg
import image1 from '../assets/example2.jpeg';
import image2 from '../assets/example3.jpeg';
import image3 from '../assets/example4.jpeg';

const Home = () => {
  // Add example.jpg to the images array
  const images = [exampleImage, image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(images[0]); // Initial image
  const [imageIndex, setImageIndex] = useState(0); // Track the index

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Update current image when index changes
  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${currentImage})`, // Dynamically set background image
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-5xl font-bold text-white">Welcome to MyTours</h1>
        <p className="text-xl text-gray-200 mt-4">
          Discover amazing tours and book your next adventure today!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
