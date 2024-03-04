import Link from "next/link";
import Image from "next/image";

const MainNavigation = () => {
  return (
    <nav className="bg-white fixed top-0 lef-0 w-full z-50 ring-2 ring-neutral-100 ring-inset">
    <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <div className="flex items-center justify-between h-12">
        <div className="flex w-full items-center justify-between capitalize h-full">

          

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
              <Link legacyBehavior href="/contact">
                <a className="border-b-2 border-solid border-transparent hover:border-blue-600 px-3 py-2 hover:pt-3 text-xs font-medium h-full flex items-center transition-all ease-in-out duration-300">
                  <Image
                  src="/images/lang.png"
                  alt="Forward logo"
                  className=""
                  width={24}
                  height={24}
                />
                </a>
              </Link>
            </div>
          </div>

        </div>
        {/* Add any additional elements you need on the right side */}
      </div>
    </div>
  </nav>
  );
};

export default MainNavigation;