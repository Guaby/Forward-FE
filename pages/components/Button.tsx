import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Button = () => {

  useEffect(() => {
    const arrowBTN = document.querySelectorAll<HTMLAnchorElement>('.arrow-btn');
    const arrowLine = document.querySelectorAll<SVGPathElement>('.arrow-line');

    arrowBTN.forEach(arrowBTNElement => {
      arrowBTNElement.addEventListener('mouseover', () => {
          if (arrowLine) {
              gsap.to(arrowLine, { attr: { d: 'M63 6H0' }, duration: 1, ease: 'pawer2.in' });
          }
      });
  });

  arrowBTN.forEach(arrowBTNElement => {
    arrowBTNElement.addEventListener('mouseout', () => {
        if (arrowLine) {
          gsap.to(arrowLine, { attr: { d: 'M45 6H0' }, duration: 1, ease:'pawer2.in' });
        }
    });
});

  }, []);
  
  return (
    <a className="w-full md:w-80 py-5 px-8 flex items-center justify-between rounded-full border border-black mt-8 lg:mt-16 info link arrow-btn xl:hover:px-9 transition-[padding] hover:duration-500" href="#">
        <p className="text-base">Learn more</p>
        <span className="block">
        <svg width="50" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1279 1L65.1279 6L60.1279 11" stroke="black" strokeWidth="2"/>
              <path d="M45 6H0" stroke="black" strokeWidth="2" className="arrow-line"/>
        </svg>
        </span>
    </a>
);
};

export default Button;