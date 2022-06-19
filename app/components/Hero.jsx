import React from "react";

function Hero() {
  return (
    <>
      <section className="relative">
        <div
          className="container 
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    gap-12
    mt-14
    lg:mt-28"
        >
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-black text-3xl md:text-5xl text-center lg:text-left mb-6">
              We Connect you to the World!
            </h2>
            <p className="text-lg text-center lg:items-start mx-auto">
               Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime.
            </p>
            <div className="flex justify-center flex-wrap gap-8">
              <button className="btn">
                get Started
              </button>
              <button className="btn">
                get Started
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img src="world.svg" alt="world" className="w-5/6 h-5/6" />
        </div>
      </section>
    </>
  );
}

export default Hero;
