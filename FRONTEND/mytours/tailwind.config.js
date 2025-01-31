module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includes all your source files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/assets/example.jpg')", // Replace with the path to your image
      },
    },
  },
  plugins: [],
};
