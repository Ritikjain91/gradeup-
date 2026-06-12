import React from 'react';

const Scrollbar = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <p className="text-lg font-bold cursor-pointer border-b-2 border-blue-500 pb-1">
          Javascript
        </p>

        <p className="text-lg font-bold cursor-pointer border-b-2 border-blue-500 pb-1">
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