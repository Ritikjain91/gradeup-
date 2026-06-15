import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scrollbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row gap-4">
        <p className="text-lg font-bold cursor-pointer border-b-2 border-blue-500 pb-1">
          Javascript
        </p>

        <p
          onClick={() => navigate('/react')}
          className="text-lg font-bold cursor-pointer border-b-2 border-blue-500 pb-1"
        >
          React JS
          <span className="ml-2 inline-block rounded-full bg-red-500 px-2 py-1 text-xs text-white animate-pulse">
            Coming Soon
          </span>
        </p>
      </div>
    </div>
  );
};

export default Scrollbar;
