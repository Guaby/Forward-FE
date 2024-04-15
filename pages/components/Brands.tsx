import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Brands = () => {

  useEffect(() => {
    const marquee = document.querySelector('.marquee') as HTMLElement;
    const marqueeContent = marquee.firstChild as HTMLElement;
    const marqueeContentClone = marqueeContent.cloneNode(true) as HTMLElement;
    marquee.append(marqueeContentClone);

    const playMarquee = () => {
        const contentWidth = marqueeContent.offsetWidth;
        const gap = parseInt(getComputedStyle(marqueeContent).columnGap);
        const totalWidth = contentWidth + gap;
      
        // if (totalWidth > containerWidth) {
          const distanceToTransition = -1 * totalWidth;
      
          gsap.fromTo(
            marquee.children,
            { x: 0 },
            {
              x: distanceToTransition,
              duration: 8,
              ease: "none",
              repeat: -1
            }
          );
        // }
      };

    playMarquee();
    window.addEventListener('resize', playMarquee);
    
  }, []);

  
  return (
    <section className="flex flex-nowrap w-full px-24 pt-4 pb-20 lg:pt-24 lg:pb-32 marquee gap-72 items-center overflow-hidden">
     <ul className="flex items-center justify-center mx-auto gap-40 lg:gap-72 marquee-content">
        <li>
          <Image
            src="/images/logos/rvpr.svg"
            layout='responsive'
            alt="RVPR logo"
            className="min-w-40 brand-item"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src="/images/logos/xtillion.svg"
            layout='responsive'
            alt="RVPR logo"
            className="min-w-40 brand-item"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src="/images/logos/platea.svg"
            layout='responsive'
            alt="RVPR logo"
            className="min-w-40 brand-item"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src="/images/logos/nave.svg"
            layout='responsive'
            alt="RVPR logo"
            className="min-w-40 brand-item"
            width={200}
            height={200}
          />
        </li>
        <li>
          <Image
            src="/images/logos/guide.svg"
            layout='responsive'
            alt="RVPR logo"
            className="min-w-40 brand-item"
            width={200}
            height={200}
          />
        </li>
        
      </ul>

      
    </section>
  );
};

export default Brands;