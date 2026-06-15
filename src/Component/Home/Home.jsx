import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center p-6">
      <p className="text-red-500 font-bold text-6xl">!Alert ⚠️</p>
      <h1 className="text-4xl font-bold mb-4"> Work in Progress</h1>
      
      <p className="text-lg text-center max-w-2xl">
        Our website is currently undergoing improvements. We are making
        enhancements to the UI and updating various sections across the
        platform to provide a better experience.
      </p>

      <p className="mt-4 text-center text-gray-600">
        Thank you for your patience. We will be back with a refreshed and
        improved website soon.
      </p>
    </div>
  );
};

export default Home;