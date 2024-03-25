import Button from "./Button";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Manifiesto = () => {
    useEffect(() => {

        const manifiesto = document.querySelector(".manifiesto") as HTMLElement | null;
        const exit = document.querySelector('.exit-manifiesto') as HTMLElement | null;
    
        const closeMani = () => {
    
          if (manifiesto) {
            gsap.fromTo(manifiesto, {
              autoAlpha: 1,
              y: 0
            }, {
              autoAlpha: 0,
              y: 20,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                console.log('manifiesto closed.');
              }
            });
          }
        };

        if (manifiesto && exit) {
          exit.addEventListener('click', closeMani);
        }

      }, []);
    
    return (
      <div className="fixed w-full h-full z-50 invisible flex items-end p-8 md:justify-end manifiesto bg-slate-800/50 md:bg-transparent">
        <div className="bg-slate-800 text-white w-full md:w-96 h-[30rem] translate-x-2/2 rounded-3xl overflow-hidden relative">
          <div className="px-8 py-3 pb-0 mb-0 flex items-center justify-between z-10 relative">
              <h2 className="text-lg">Our Manifiesto</h2>
              <div className="exit-manifiesto p-4 cursor-pointer hover:rotate-90 transition-all origin-center duration-500 translate-x-5
              ">
                    <Image
                      src="/images/x.svg"
                      alt="Forward logo"
                      className=""
                      width={16}
                      height={16}
                    />
              </div>
          </div>
          <div className="w-[98%] h-[64%] overflow-y-auto px-8 pt-0 pb-6 scrollbar" id='scrollbar'>
              <div className="text-sm flex flex-col gap-4 opacity-60 pt-4">
                  <p className="">In the heart of Puerto Rico, a movement is stirring—a movement that is not just about progress, but about transformation. We are the Forward Movement, a collective dedicated to propelling our island towards a brighter future. We believe in the power of innovation, the strength of community, and the resilience of our people. Our mission is clear: to invest in Puerto Rico, to nurture its potential, and to pave the way for economic growth and technological advancement.</p>
                  <p className="">At the core of our movement lies a commitment to our island. We understand the untapped potential that resides within Puerto Rico, and we are determined to harness it for the greater good. By investing in local talent, fostering entrepreneurship, and creating opportunities for growth, we are building a foundation for sustainable development and prosperity. Our goal is not just to succeed individually, but to uplift the entire community and drive positive change across the island.</p>
                  <p className="t">As the Forward Movement gains momentum, we are witnessing a remarkable shift in the landscape of Puerto Rico. People who once left in search of opportunities elsewhere are returning, drawn by the promise of a new beginning and the chance to contribute to something greater than themselves. Our movement is a beacon of hope, a call to action for all those who believe in the potential of our island and the power of collective action. Together, we are building a brighter future for Puerto Rico—one that is defined by innovation, inclusivity, and sustainable growth.</p>
              </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full mx-auto flex justify-center items-center p-4 pb-6">
              <Button color={'white'} text={'About us'} fullW={true}></Button>
          </div> 
        </div>
      </div>
    );
  };
  
  export default Manifiesto;