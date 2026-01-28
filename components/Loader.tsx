
import React from 'react';

const Loader: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#061125] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-t-2 border-l-2 border-[#fc466b] rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-b-2 border-r-2 border-[#00dbde] rounded-full animate-spin direction-reverse"></div>
        <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-bold text-white">
          R
        </div>
      </div>
    </div>
  );
};

export default Loader;
