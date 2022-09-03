import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const navBtn = document.querySelector("#menu");
    const menuBar = document.querySelector('[role="menubar"]');

    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
      menuBar.classList.toggle("hidden");
      menuBar.classList.toggle("flex");
    });
  });

  return (
    <>
      <nav className="mx-auto p-4 bg-amber-300">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="/"
            aria-label="Go to home page"
            className="
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-300
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:top-9
        z-50"
          >
            <img
              src="logo.svg"
              alt="getConnected logo"
              width="200"
              className="W-48 md:w-64 lg:w-72 lg:mr-28"
            />
          </a>
          <button
            id="menu"
            className="
          lg:hidden
          focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-300"
            aria-expanded="false"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            role="menubar"
            className="
          hidden
          flex-col
          gap-4
          absolute
          right-0
          left-0
          top-16
          bg-amber-300
          shadow-xl
          text-center
          text-lg
          p-6 
          items-center 
          lg:flex
          lg:flex-row
          lg:static
          lg:shadow-none
          lg:justify-between
          lg:w-full
          z-10
          "
          >
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Home
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Services
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Learning
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900
          lg:ml-auto"
            >
              About us
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Contacts
            </a>
            <a
              role="menuitem"
              href="/login"
              className="
          py-1
          px-6
          bg-teal-900
          text-white
          rounded-lg
          "
            >
              Login
            </a>
            <a
              role="menuitem"
              href="/register"
              className="
          py-1
          px-6
          bg-teal-900
          text-white
          rounded-lg
          "
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20  text-center ">
          <div className="bg-white shadow-2xl flex w-2/3 max-w-4xl rounded-2xl">
            <div className="w-3/5 p-5">
              <div className="flex text-left  font-tangerine text-2xl">
                <img className="h-10" src="logo.png" alt="logo" />
                <span>getConnected</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-black">
                  Please Sign up
                </h2>
                <div className="border-2 w-20 rounded-md border-orange-300 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                  <a
                    href=""
                    className="border-2 border-green-400 rounded-full p-3 mx-1"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </a>
                  <a
                    href=""
                    className="border-2 border-green-400 rounded-full p-3 mx-1"
                  >
                    {" "}
                    <FaGoogle />{" "}
                  </a>
                  <a
                    href=""
                    className="border-2 border-green-400 rounded-full p-3 mx-1"
                  >
                    {" "}
                    <FaLinkedinIn />{" "}
                  </a>
                </div>
                <p className="text-gray-400 my-3">
                  You may sign up using links above
                </p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2  flex items-center rounded-md">
                    <FaUserCircle className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="bg-gray-100 border-gray-100 focus:rounded-md focus:ring-orange-300 text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 mt-3 flex items-center rounded-md">
                    <FaPhone className="text-gray-400 m-2" />
                    <input
                      type="Number"
                      name="Phone Number"
                      placeholder="phone:example 076683...."
                      className="bg-gray-100 focus:rounded-md  border-gray-100 text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 mt-3 flex items-center rounded-md">
                    <FaLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="Password"
                      placeholder="create a new password"
                      className="bg-gray-100 focus:rounded-md  border-gray-100 text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 mt-3 flex items-center rounded-md">
                    <FaLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="Password"
                      placeholder="repeat password"
                      className="bg-gray-100 focus:rounded-md  border-gray-100 text-sm flex-1"
                    />
                  </div>
                  <button className="font-semibold border-2 border-orange-300 bg-green-400 rounded-full inline-block px-12 py-2 mt-6 hover:bg-orange-300 hover:text-black">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="w-2/5 text-white rounded-tr-2xl rounded-br-2xl bg-orange-300 py-36 px-12">
              <h2 className="text-4xl font-bold mb-2">Hi, There! 👋🏽</h2>
              <div className="border-2 w-20 border-green-400 inline-block mb-2 rounded-md"></div>
              <p className="mb-10 text-2xl">
                Already have an account? <br /> Kindly click the button below to
                sign in
              </p>
              <Link to="/auth/login">
                <button className="font-semibold border-2 border-green-400 rounded-full inline-block px-12 py-2 hover:bg-green-400 hover:text-black">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
