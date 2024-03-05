import React, { useEffect } from "react";
import gsap from "gsap";

const HomeHero = () => {

  useEffect(() => {

    const arrowBTN = document.querySelector<SVGPathElement>('.arrow-btn-hero');
    const arrowLine = document.querySelector<SVGPathElement>('.arrow-line');

    if (arrowLine && arrowBTN) {
      arrowBTN.addEventListener('mouseover', () => {
        gsap.to(arrowLine, { attr: { d: 'M62 6H0' }, duration: 1, ease:'pawer2.in' });
      });
    
      arrowBTN.addEventListener('mouseout', () => {
        gsap.to(arrowLine, { attr: { d: 'M45 6H0' }, duration: 1, ease:'pawer2.in' });
      });
    }
    
  }, []);

    return (
      <div className="w-screen hero-height">
        <div className="w-full h-full bg-black relative flex items-end">
          <video
            className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-50"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/fwd-bg.mp4" type="video/mp4" />
          </video>
          <div className="w-full mx-auto px-6 py-10 md:px-10 md:py-16 lg:px-12 xl:py-24 xl:px-16 2xl:px-24 z-10">
            <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[4vw] text-white w-full md:w-4/5 lg:w-4/5 mb-8 md:mb-12">The platform driving change and innovation in Puerto Rico.</h1>
            <div className="flex flex-col md:flex-row items-center">

              <a className="group w-full md:w-64 hover:w-full md:hover:w-72 bg-blue-700 py-5 xl:py-7 px-8 mb-4 md:mb-0 flex items-center justify-between text-white rounded-full z-10 xl:hover:px-9 hover:bg-blue-600 transition-all duration-500" href="#">
                  <p className="text-base">Open manifesto</p>
                  <span className="block">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-all duration-700">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.95455 0H6.04545V6.04545H0V7.95455H6.04545V14H7.95455V7.95455H14V6.04545H7.95455V0Z" fill="white"/>
                  </svg>
                  </span>
              </a>

              <a className="w-full md:w-80 bg-slate-500/40 py-5 xl:py-7 px-8 md:pl-24 flex items-center justify-between text-white rounded-full transform md:-translate-x-16 arrow-btn-hero md:hover:pl-28 md:hover:pr-10 md:hover:w-[360px] hover:bg-slate-500/50 transition-all duration-500" href="#">
                  <p className="text-base">Work with us</p>
                  <span className="block">
                    <svg width="50" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-arrow transition-all duration-300">
                          <path d="M60.1279 1L65.1279 6L60.1279 11" stroke="white" strokeWidth="3"/>
                          <path d="M45 6H0" stroke="white" strokeWidth="3" className="arrow-line"/>
                    </svg>
                  </span>
              </a>
            </div>
          </div>
        </div>
      </div>
        
    );
  };
  
  export default HomeHero;