import React, { useEffect, useRef } from "react";

const Button = () => {
  
  return (
    <a className="w-full md:w-80 py-5 px-8 flex items-center justify-between rounded-full border border-black mt-8 lg:mt-16 info link" href="#">
        <p className="text-base">Learn more</p>
        <span className="block">
        <svg width="50" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1279 1L65.1279 6L60.1279 11" stroke="black" strokeWidth="2"/>
              <path d="M54 6H0" stroke="black" strokeWidth="2" className="arrow-line"/>
        </svg>
        </span>
    </a>
);
};

export default Button;