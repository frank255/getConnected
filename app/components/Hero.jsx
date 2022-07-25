import React from "react";

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden ">
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
            <h2 className="text-black dark:text-white text-2xl italic font-bold md:text-5xl text-center items-start mb-6">
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
              <button className="btn">get Started </button>
            </div>
          </div>
          <div className="justify-center flex-auto mb-10 md:mb-16 lg:mb-0  hidden md:block">
            <img
              src="world.svg"
              alt="world"
              className="w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
            />
          </div>
        </div>
      </section>

      {/* services */}
      <section className="py-10 px-2 mt-12 bg-orange-300  items-center">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Services</h1>
        </div>
        <div class="container grid grid-cols-1 md:grid-cols-4 max-w-screen-lg mx-auto my-6 md:gap-6 text-white">
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                className="h-3/5 w-3/5 md:w-full md:h-full"
                src="university.svg"
                alt=""
              />
              <h3 className="mt-5 mb-2 text-lg">University/College</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                className="h-3/5 w-3/5 md:w-full md:h-full"
                src="scholarship.svg"
                alt=""
              />
              <h3 className="mt-12 md:mt-20 mb-2 text-lg">Scholarships</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                className="h-3/5 w-3/5 md:w-full md:h-full"
                src="job.svg"
                alt=""
              />
              <h3 className="mt-5 md:mt-[3rem] mb-2 text-lg">Job Opportunities</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                className="h-3/5 w-3/5 md:w-full md:h-full"
                src="online-learning.svg"
                alt=""
              />
              <h3 className="mt-5 mb-2 text-lg">Online Courses</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md  shadow-md">
            <div className="p-6 flex flex-col items-center">
              {/* <img className="h-3/5 w-3/5 md:w-full md:h-full" src="" alt="" /> */}
              <h3 className="mt-5 mb-2 text-lg">Coming soon..</h3>
              <p className="mb-2 font-light items-center ">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsa ad veritatis quo, numquam, quis illum mollitia libero.{" "}
              </p>
              <div className="flex flex-1 justify-center flex-wrap  items-center">
                <button className="btn-service">learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}
      <section className="py-20 px-2 mt-0 bg-slate-200 dark:bg-neutral-800">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">About us</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            amet eaque obcaecati velit voluptatibus maxime.
          </p>
        </div>
      </section>

      {/* our team */}
      <section className="py-20 px-2 mt-0  bg-slate-100 dark:bg-neutral-800">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Our Team</h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="container grid grid-cols-2 max-w-screen-lg mx-auto my-6 md:gap-6">
            <div className="flex flex-col rounded-md  shadow-md">
              <div className="p-6 flex flex-col items-center">
                <img
                  className="h-3/5 w-3/5 md:w-full md:h-full"
                  src="avator.svg"
                  alt=""
                />
                <h3 className="mt-5 mb-2 text-lg">John Doe</h3>
                <p className="mb-2 font-light items-center ">CEO</p>
                <div className="flex flex-row gap-4 justify-center flex-wrap  items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-md  shadow-md">
              <div className="p-6 flex flex-col items-center">
                <img
                  className="h-3/5 w-3/5 md:w-full md:h-full"
                  src="avator.svg"
                  alt=""
                />
                <h3 className="mt-5 mb-2 text-lg">Mark Doe</h3>
                <p className="mb-2 font-light items-center ">Manager </p>
                <div className="flex flex-row gap-4 justify-center flex-wrap  items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
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
