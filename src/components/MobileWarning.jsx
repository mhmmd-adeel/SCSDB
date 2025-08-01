// src/components/MobileWarning.jsx
import React from 'react';

const MobileWarning = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center text-center px-6 md:hidden">
      <h2 className="text-2xl font-bold mb-4">Not Supported on Mobile</h2>
      <p className="text-lg">
        This website is not responsive yet. Please open it on a desktop or laptop for the best experience.
      </p>
    </div>
  );
};

export default MobileWarning;
