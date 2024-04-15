import Button from "./Button";
import Image from "next/image";
import CircularText from "./CircularText";

const Why = () => {
    
    return (

        <section className="w-full mx-auto px-6 lg:px-10 xl:px-16 2xl:px-24 py-12 xl:py-24 bg-blue-700 text-white">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl lg:text-6xl mb-10 font-bold">Why PR</h1>
                <p className="">Endowed with rich resources, vibrant culture, local talent, and resilience, Puerto Rico is set for global success. The Forward Platform sparks change, positioning Puerto Rico as a hub for innovation, shaping its future.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-24 items-center max-w-6xl mx-auto mt-24 lg:mb-16">
                
                <div className="relative">
                    <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] relative rounded-full overflow-hidden">
                        <video
                            className="w-full h-full object-cover absolute top-0 left-0 z-0"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/videos/bg-5.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-64 h-64 absolute top-0 right-0 -translate-x-4 translate-y-4 scale-150 md:translate-x-8 md:-translate-y-24 lg:-translate-y-20 md:scale-95">
                    <CircularText isCenterHidden={false} isBlack={false}/>
                    </div>
                    <span className="hidden md:flex w-24 h-24 bg-white absolute bottom-0 left-0 rounded-full translate-x-10 translate-y-2 lg:-translate-y-1 items-center justify-center scale-90">
                        <Image
                            src="/images/logos/logo-icon.svg"
                            alt="Forward logo"
                            className="translate-y-1"
                            width={30}
                            height={30}
                        />
                    </span>
                </div>

                <div className="">
                    <div className="flex w-full justify-between text-xs">
                        <h5 className="info name bg-blue-600 text-blue-300 px-4 py-2 rounded-full uppercase">A paradise for everyone</h5>
                    </div>
                    <h3 className="text-2xl xl:text-3xl 3xl:text-5xl my-6 info description lg:mb-10">Become a part of the Forward Platform as we push the boundaries of growth and innovation.</h3>
                    <Button color={'white'} text={'Join the movement'} fullW={false}></Button>
                </div>

            </div>

        </section>
        
    );
  };
  
  export default Why;