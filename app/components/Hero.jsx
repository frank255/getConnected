import React from "react";

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="container 
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    gap-12
    lg:mt-20
    mt-6
    mx-auto"
        >
          <div className="flex flex-auto w-full md:w-full flex-col items-center lg:items-start">
            <h2 className="text-black text-2xl italic font-bold md:text-5xl text-center items-start mb-6">
              We Connect you to the World of Opportunities!
            </h2>
            <div className="flex justify-center flex-auto mb-10 md:mb-16 lg:mb-0  md:hidden">
              <img
                src="world.svg"
                alt="world"
                className="w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
              />
            </div>
            <p className="text-lg text-center lg:items-start mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              amet eaque obcaecati velit voluptatibus maxime.
            </p>
            <div className="flex justify-center flex-wrap gap-8 items-center">
              <button className="btn">get Started</button>
            </div>
          </div>
          <div className="flex justify-center flex-auto mb-10 md:mb-16 lg:mb-0  hidden md:block">
            <img
              src="world.svg"
              alt="world"
              className="w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
            />
          </div>
        </div>
      </section>

       {/* services */}
       <section className="py-20 px-2 mt-12 bg-slate-200">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Services</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            amet eaque obcaecati velit voluptatibus maxime.
          </p>
        </div>
      </section>

      {/* about us */}
      <section className="py-20 px-2 mt-0 bg-slate-300">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">About us</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            amet eaque obcaecati velit voluptatibus maxime.
          </p>
        </div>
      </section>

     

      {/* our team */}
      <section className="py-20 px-2 mt-0  bg-slate-100">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Our Team</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            amet eaque obcaecati velit voluptatibus maxime.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
