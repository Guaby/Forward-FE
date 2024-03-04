
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState, createRef } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Button from "./Button";
gsap.registerPlugin(TextPlugin);

const HomeSlider = () => {
    
      const imgRefs = useRef<Array<React.RefObject<HTMLImageElement | null>>>([]);
      imgRefs.current = Array(5).fill(null).map((_, i) => imgRefs.current[i] || createRef());
    
      let [currentSlide, setCurrentSlide] = useState(1);
      const totalSlides = 5;
      const [isAnimating, setIsAnimating] = useState(false);
    
      const animateSlide = (slideNumber: number, reveal: boolean) => {
        const imgRef = imgRefs.current[slideNumber - 1]?.current as HTMLImageElement;
        const clipPathValue = reveal ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0 0%)': 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)';
        imgRefs.current.forEach((ref, index) => {
          gsap.to(imgRef, { clipPath: clipPathValue, duration: 2.5, ease: "power4.out" }); 
          gsap.fromTo(imgRef, { scale: 1.3 },{scale: 1, duration: 2.5, ease: "power4.out"}); 
        });
    
      };
    
      const animateSlideNumber = (slideNumber: number) => {
        setCurrentSlide(slideNumber);
      };

      useEffect(() => {
        const slideNumberElement = document.querySelector(".slide-number") as HTMLElement;
        gsap.fromTo(
          slideNumberElement,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, text: currentSlide.toString() }
        );
      }, [currentSlide]);
    
      const animateSlideContent = (slideNumber: number): void => {
        const slideElements = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
      
        const currentSlide = document.querySelector(".active") as HTMLElement;
        const currentName = currentSlide.querySelector(".info.name") as HTMLElement;
        const currentCategory = currentSlide.querySelector(".info.category") as HTMLElement;
        const currentDescription = currentSlide.querySelector(".info.description") as HTMLElement;
        const currentLink = currentSlide.querySelector(".info.link") as HTMLAnchorElement;
      
        const nextSlide = slideElements[slideNumber - 1];
        const nextName = nextSlide.querySelector(".info.name") as HTMLElement;
        const nextCategory = nextSlide.querySelector(".info.category") as HTMLElement;
        const nextDescription = nextSlide.querySelector(".info.description") as HTMLElement;
        const nextLink = nextSlide.querySelector(".info.link") as HTMLAnchorElement;
      
        gsap.to([currentName, currentCategory, currentDescription, currentLink], {
          duration: 0.3,
          opacity: 0,
          y: -10,
          stagger: 0.1,
          onComplete: () => {
            currentSlide.classList.remove("active");
            currentSlide.classList.add("slide");
            nextSlide.classList.add("active");
      
            gsap.fromTo([nextName, nextCategory, nextDescription, nextLink], {
              opacity: 0,
              y: -10,
            }, {
              duration: 0.3,
              opacity: 1,
              y: 0,
              stagger: 0.1,
              onComplete: () => {
                setIsAnimating(false);
              }
            });
          }
        });
      };
    
      const handleLeftClick = () => {
        if (!isAnimating && currentSlide > 1) {
          setIsAnimating(true);
          animateSlide(currentSlide, false);
          setCurrentSlide(currentSlide - 1);
          animateSlideNumber(currentSlide - 1);
          animateSlideContent(currentSlide - 1);
          currentSlide--;
        }
      };
    
      const handleRightClick = () => {
        if (!isAnimating && currentSlide < totalSlides) {
          setIsAnimating(true);
          animateSlide(currentSlide + 1, true);
          animateSlideNumber(currentSlide + 1);
          animateSlideContent(currentSlide + 1);
          currentSlide++;
        }
      };  

 
    
    return (

        <section className="w-full mx-auto lg:px-10 xl:px-16 2xl:px-24 flex flex-col-reverse lg:flex-row lg:items-end gap-4 lg:gap-12 pb-16 md:mt-12 relative">

          {/* content - text */}

            <div className="w-full h-auto px-6 lg:px-8 my-4 md:mt-8 lg:pl-0 xl:pr-20 xl:min-h-96 xl:flex xl:items-end xl:w-1/2 2xl:pb-16 slide-content-wrapper" >
                <ul className="flex w-full justify-between text-xs slider">

                    <li className="w-full slide active">
                      <div className="flex w-full justify-between text-xs">
                          <h5 className="info name">Xtillion Team</h5>
                          <h5 className="info category">Data Science - AI</h5>
                      </div>
                      <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl my-6 info description">Forward strives to create a great work environment that nurtures and develops talent professionally, while fostering a sense of community.</h3>
                      <Button></Button>
                    </li>

                    <li className="w-full slide">
                    <div className="flex w-full justify-between text-xs">
                        <h5 className="info name">Platea Team</h5>
                        <h5 className="info category">Travel - Culture</h5>
                    </div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl my-6 info description">Forward was founded in 2018 with the intention of revitalizing Puerto Rico's economy following the devastating Hurricane María.</h3>
                    <Button></Button>
                    </li>

                    <li className="w-full slide">
                    <div className="flex w-full justify-between text-xs">
                        <h5 className="info name">Nave Bank Team</h5>
                        <h5 className="info category">Fintech - Banking</h5>
                    </div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl my-6 info description">Forward has a diverse portfolio of teams spanning across multiple industries, including finance, data, marketing, and the consumer marketplace.</h3>
                    <Button></Button>
                    </li>

                    <li className="w-full slide">
                    <div className="flex w-full justify-between text-xs">
                        <h5 className="info name">RVPR Team</h5>
                        <h5 className="info category">Business - SEO</h5>
                    </div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl my-6 info description">We are currently seeking talented individuals to join our dynamic teams across various industries, as we continue to expand.</h3>
                    <Button></Button>
                    </li>

                    <li className="w-full slide">
                    <div className="flex w-full justify-between text-xs">
                        <h5 className="info name">Guide Team</h5>
                        <h5 className="info category">Travel - AI</h5>
                    </div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl my-6 info description">At Forward, we strive to make a positive social impact in Puerto Rico through community initiatives and support.</h3>
                    <Button></Button>
                    </li>

                </ul>
            </div>

            {/* images  */}

            <div className="w-full h-auto md:h-lvh md:max-h-medium xl:max-h-lg xl:w-1/2 2xl:max-h-xl 3xl:max-h-huge">
                <div className="h-mobile md:h-full bg-teal-100 relative slide-img-wrapper">
                    <div className="flex items-center w-full h-full justify-between absolute top-0 left-0">
                        {/* images  */}
                        <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
                          <Image
                              src="/images/teams/t1.png"
                              layout='fill'
                              alt="Picture of the author"
                              id="t1"
                              className="slider-img"
                              ref={imgRefs.current[0]}
                          />
                          <Image
                              src="/images/teams/t2.png"
                              layout='fill'
                              alt="Picture of the author"
                              id="t2"
                              className="slider-img"
                              ref={imgRefs.current[1]}
                          />
                          <Image
                              src="/images/teams/t3.png"
                              layout='fill'
                              alt="Picture of the author"
                              id="t3"
                              className="slider-img"
                              ref={imgRefs.current[2]}
                          />
                          <Image
                              src="/images/teams/t4.png"
                              layout='fill'
                              alt="Picture of the author"
                              id="t4"
                              className="slider-img"
                              ref={imgRefs.current[3]}
                          />
                          <Image
                              src="/images/teams/t5.png"
                              layout='fill'
                              alt="Picture of the author"
                              id="t5"
                              className="slider-img"
                              ref={imgRefs.current[4]}
                          />
                        </div>


                        {/* controls  */}

                        <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-6 md:p-8 xl:p-12 z-20">
                          <div className="flex items-center gap-2 text-sm text-white bg-slate-500/50 px-4 py-3 rounded-full overflow-hidden">
                              <div className="slide-number">{currentSlide}</div>
                              <div>/</div>
                              <div className="">{totalSlides}</div>
                          </div>
                          <div className="flex items-center gap-6 bg-slate-500/50 px-4 rounded-full">
                              <button className="arrow right py-3 opacity-70 hover:opacity-100 transition-all duration-500" onClick={handleLeftClick}>
                              <span className="rotate-180 block">
                                  <svg width="60" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M60.1279 1L65.1279 6L60.1279 11" stroke="white" strokeWidth="2"/>
                                  <path d="M65 6H0" stroke="white" strokeWidth="2"/>
                                  </svg>
                              </span>
                              </button>
                              <button className="arrow left py-3 opacity-70 hover:opacity-100 transition-all duration-500" onClick={handleRightClick}>
                              <span>
                                  <svg width="60" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M60.1279 1L65.1279 6L60.1279 11" stroke="white" strokeWidth="2"/>
                                  <path d="M65 6H0" stroke="white" strokeWidth="2"/>
                                  </svg>
                              </span>
                              </button>
                          </div>
                        </div>
                        
                    </div>
                </div>
            </div>
      </section>

      
        
    );
  };
  
  export default HomeSlider;