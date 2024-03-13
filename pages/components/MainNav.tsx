import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import React, { useState, useEffect, useLayoutEffect } from "react";

const MainNavigation = () => {

  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  useLayoutEffect(() => {
    const mobileNav = document.querySelector(".mobile-nav") as HTMLElement | null;
    const hamMenu = document.querySelector('.ham-menu') as HTMLElement | null;

    const openNav = () => {
      if (mobileNav) {
        gsap.set(mobileNav, { display: 'fixed', opacity: 0 });
        gsap.to(mobileNav, {
          duration: 0.5,
          opacity: 1,
          ease: "power2.inOut"
        });
        setMobileNavVisible(true);
      }
    };

    const closeNav = () => {
      if (mobileNav) {
        gsap.to(mobileNav, {
          duration: 0.5,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(mobileNav, { display: 'none' });
          }
        });
        setMobileNavVisible(false);
      }
    };

    const toggleMobileLinks = () => {
      if (mobileNavVisible) {
        closeNav();
      } else {
        openNav();
      }
    };

    if (hamMenu) {
      hamMenu.addEventListener('click', toggleMobileLinks);
    }

  }, [mobileNavVisible]);

  return (
    <nav className="bg-white fixed top-0 lef-0 w-full z-50 ring-2 ring-neutral-100 ring-inset">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <div className="flex items-center justify-between h-12">

        {/* Desktop  */}

        <div className="flex w-full items-center justify-between capitalize h-full">

          {/* left side  */}
          <div className="hidden md:flex items-center h-full">
            <div className="flex items-center justify-start space-x-4 h-full">
              <Link legacyBehavior href="/">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">home</a>
              </Link>
              <Link legacyBehavior href="/about">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">about us</a>
              </Link>
              <Link legacyBehavior href="/careers">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">careers</a>
              </Link>
            </div>
          </div>

          {/* center */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link legacyBehavior href="/">
              <a className="font-bold text-xl">
              <Image
                src="/images/logos/logo-icon.svg"
                alt="Forward logo"
                className=""
                width={20}
                height={200}
              />

              </a>
            </Link>
          </div>

          {/* right side  */}
          <div className="hidden md:flex items-center h-full">
            <div className="flex items-center space-x-4 h-full">
              <Link legacyBehavior href="/news">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">news</a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">community</a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">contact</a>
              </Link>
              <div>
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">
                  <Image
                  src="/images/lang.png"
                  alt="Forward logo"
                  className=""
                  width={24}
                  height={24}
                />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex gap-2 md:hidden items-center h-full z-50">
                <div className="ham-menu flex flex-col gap-1.5 h-full items-center justify-center">
                  <span className="menu-line w-8 h-0.5 bg-black"></span>
                  <span className="menu-line w-8 h-0.5 bg-black"></span>
                </div>
                <div className="h-full">
                  <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">
                    <Image
                    src="/images/lang.png"
                    alt="Forward logo"
                    className=""
                    width={24}
                    height={24}
                  />
                  </a>
                </div>
              </div>

        </div>
        {/* Add any additional elements you need on the right side */}
      </div>
    </div>

    {/* Mobile Links */}

    <div className="w-full h-svh bg-white z-40 mobile-nav">
        <ul className={`mt-10 px-5 mobile-links`}>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">about</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">careers</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">internships</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">news</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl mb-5 font-medium h-full flex items-center transition-all ease-in-out duration-300">community</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/">
              <a className="px-3 py-2 text-4xl font-medium h-full flex items-center transition-all ease-in-out duration-300">contact</a>
            </Link>
          </li>
        </ul>

        {/* <div className="absolute -bottom-10 left-0 w-full flex px-6">
            <a href="#" className="px-3 py-2 text-sm mb-6 font-medium h-full flex items-center transition-all ease-in-out duration-300">IG</a>
            <a href="#" className="px-3 py-2 text-sm mb-6 font-medium h-full flex items-center transition-all ease-in-out duration-300">LINKEDIN</a>
        </div> */}
      </div>

  </nav>
  );
};

export default MainNavigation;