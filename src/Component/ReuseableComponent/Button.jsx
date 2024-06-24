// Button.js

import React from 'react';

const Button = ({ item1, item2, tailwindClasses , onClick }) => {
  const defaultClasses = "lg:w-[8.5rem] lg:h-14 md:w-[6.5rem] md:h-12 w-[5rem] h-8 bg-[#FEB692] text-center hover:bg-[#FDD819] md:mr-10 mr-4 rounded-lg transition duration-300";
  const combinedClasses = `${defaultClasses} ${tailwindClasses}`;

  return (
    <div className={combinedClasses} onClick={onClick}>
      <button className="text-white font-Roboto flex">
        {item1}
        <div className="lg:text-[20px] md:text-[17px] text-[14px] font-semibold pt-3">
          {item2}
        </div>
      </button>
    </div>
  );
};

export default Button;
