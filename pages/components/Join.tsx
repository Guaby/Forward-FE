import Button from "./Button";

const Join = () => {
    
    return (

        <section className="w-full mx-auto px-6 lg:px-10 xl:px-16 2xl:px-24 block md:grid gap-8 grid-cols-12 py-12 xl:py-24 bg-black text-white">
            <div className="md:col-span-5" >
                <h1 className="text-4xl lg:text-5xl mb-10">Join our team</h1>
            </div>
                <div className="col-start-6 lg:col-start-7 xl:col-start-8 col-end-13">
                <p className="">Shape the future with Forward. Fuel your passion, hone your skills, and disrupt industries with purpose. Build the future of finance, data, marketing, and consumer marketplace landscapes. Join our team of visionaries and game-changers. Make a difference in Puerto Rico and beyond. It's more than a job. It's an impact.</p>
            </div>

            <div className="w-full bg-join col-start-1 col-end-13 mt-8 xl:mt-16 mb-8 relative max-h-96 lg:max-h-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto z-10 py-8 px-10 lg:gap-44 flex items-center justify-between">
                    <Button color={'white'} text={'See Open Positions'} fullW={false}></Button>
                </div>
            </div>

            <div className="flex flex-col lg:grid grid-cols-12 gap-12 lg:gap-24 col-span-12">

            <div className="col-span-4">
                <div className="w-full flex items-center justify-between py-2 list">
                <p className=" text-xs">01</p>
                <p>+</p>
                </div>
                <p className="text-2xl">Gain meaningful experience with multiplebrands in diverse industries.</p>
            </div>

            <div className="col-span-4">
                <div className="w-full flex items-center justify-between py-2 list">
                <p className=" text-xs">02</p>
                <p>+</p>
                </div>
                <p className="text-2xl">Solve a wealth of fascinating problems facing our entire portfolio.</p>
            </div>

            <div className="col-span-4">
                <div className="w-full flex items-center justify-between py-2 list">
                <p className=" text-xs">03</p>
                <p>+</p>
                </div>
                <p className="text-2xl">Be a part of a purpose-driven organization, committed to social impact</p>
            </div>

            </div>

        </section>
        
    );
  };
  
  export default Join;