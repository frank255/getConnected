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
            <div className="flex flex-1 justify-center flex-wrap  items-center">
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
      <section className="py-10 px-2 mt-12 bg-slate-300 items-center">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Services</h1>
        </div>
        <div class="container grid grid-cols-1 md:grid-cols-4 max-w-screen-lg mx-auto my-6 md:gap-6">
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
            <img className="h-3/5 w-3/5 md:w-full md:h-full" src="university.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">University/College</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img className="h-3/5 w-3/5 md:w-full md:h-full" src="scholarship.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">Scholarships</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img className="h-3/5 w-3/5 md:w-full md:h-full" src="job.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">Job Opportunities</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img className="h-3/5 w-3/5 md:w-full md:h-full" src="online-learning.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">Online Courses</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero. </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
              <button className="btn-service">learn more</button>
            </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="py-20 px-2 mt-0 bg-slate-200">
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
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="container grid grid-cols-2 max-w-screen-lg mx-auto my-6 md:gap-6">
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img className="h-3/5 w-3/5 md:w-full md:h-full" src="avator.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">John Doe</h3>
              <p className="mb-2 font-light items-center ">CEO</p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                {/* links to social media */}
            </div>
            </div>
            
          </div>

          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img className="h-3/5 w-3/5 md:w-full md:h-full" src="avator.svg" alt="" />
              <h3 className="mt-5 mb-2 text-lg">Mark Doe</h3>
              <p className="mb-2 font-light items-center ">Manager </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                     {/* links to social media */}
            </div>
            </div>
            
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
