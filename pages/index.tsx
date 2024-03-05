
import HomeHero from "./components/HomeHero";
import MainNavigation from "./components/MainNav";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import HomeSlider from "./components/HomeSlider";
import Join from "./components/Join";
import Magnet from "./components/Magnet";

export default function Home() {

  return (
    <div>
    <MainNavigation />
    <main> 
      <HomeHero />

      <section className="w-full mx-auto px-6 lg:px-10 xl:px-16 2xl:px-24 lg:pt-12 xl:py-20 block lg:grid gap-8 grid-cols-12 py-0">
        <div className="md:col-span-5 xl:col-span-4" >
          <h1 className="text-2xl 3xl:text-4xl my-8 lg:my-0">Puerto Rico's future unfolds now. The <strong>Forward</strong> Platform ignites it.</h1>
        </div>
        <div className="col-start-6 lg:col-start-7 xl:col-start-8 lg:pl-8 xl:pl-0 col-end-13">
          <p className="3xl:text-2xl">Through innovative ventures, we disrupt industries and redefine them, igniting a transformation that showcases Puerto Rico as a fertile ground for innovation. Technology and innovation are the foundation of our economic renaissance, supported by the brilliant minds and passionate hearts of Puerto Rico.</p>
        </div>
      </section>

      <section className="w-full mx-auto px-6 mt-8 mb-16 lg:mb-0 lg:mt-0 lg:px-10 xl:px-16 2xl:px-24 block lg:grid gap-8 grid-cols-18">
        <div className="relative w-full h-64 md:h-72 lg:h-80 2xl:h-96 3xl:h-4k lg:col-span-8 2xl:col-span-8 bg-black cursor-pointer group" >
          <div className="w-full h-full relative">
            <video
                className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-50"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/people.mp4" type="video/mp4" />
            </video>
            <Magnet>
              <span className="play-btn flex items-center justify-center bg-slate-400/30 group-hover:bg-blue-600">
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8V0L5 3.80952L0 8Z" fill="white"/>
                </svg>
              </span>
            </Magnet>
          </div>
          <div className=" z-20 absolute bottom-0 left-0 translate-y-10">
            <p className=" uppercase text-sm">Check our <strong className=" bg-blue-600 text-white px-2 py-1 mx-1 rounded-full">DNA</strong> reel</p>
          </div>
        </div>
      </section>

      {/* slider */}
      <HomeSlider></HomeSlider>

      {/* logos */}
      <Brands></Brands>

      {/* join us */}
      <Join></Join>
  
      {/* footer */}
      <Footer></Footer>

    </main>
  </div>
  );
}
