import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ButtonProps {
    color: "black" | "white";
    text: string
  }

  const Button: React.FC<ButtonProps> = ({ color, text }) => {

  useEffect(() => {
    const arrowBTN = document.querySelectorAll<HTMLAnchorElement>('.arrow-btn');

    arrowBTN.forEach(arrowBTNElement => {
      arrowBTNElement.addEventListener('mouseover', () => {
          const arrowLine = arrowBTNElement.querySelector<SVGPathElement>('.arrow-line');
          if (arrowLine) {
              gsap.killTweensOf(arrowLine);
              gsap.to(arrowLine, { 
                  attr: { d: 'M63 6H0' }, 
                  duration: 1, 
                  ease: 'pawer2.in', 
              });
          }
      });
  });
  arrowBTN.forEach(arrowBTNElement => {
    arrowBTNElement.addEventListener('mouseout', () => {
        const arrowLine = arrowBTNElement.querySelector<SVGPathElement>('.arrow-line');
        if (arrowLine) {
            gsap.killTweensOf(arrowLine);
            gsap.to(arrowLine, { 
                attr: { d: 'M45 6H0' }, 
                duration: 1, 
                ease: 'pawer2.in',
                onComplete: () => {
                    arrowLine.setAttribute('d', 'M45 6H0');
                }
            });
        }
    });
});

  }, []);
  
  return (
    <a className={`w-full md:w-80 py-5 px-8 flex items-center justify-between rounded-full border mt-8 lg:mt-16 info link arrow-btn xl:hover:px-10 duration-500 lg:hover:w-[22rem] ease-out ${color === 'white' ? 'text-white border-white' : 'text-black border-black'}`} href="#">
        <p className={`text-base ${color === 'white' ? 'text-white' : 'text-black'}`}>{text}</p>
        <span className="block">
        <svg width="50" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1279 1L65.1279 6L60.1279 11" stroke={color} strokeWidth="2"/>
              <path d="M45 6H0" stroke={color} strokeWidth="2" className="arrow-line"/>
        </svg>
        </span>
    </a>
);
};

export default Button;