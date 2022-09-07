import React from "react";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaGoogle,
  FaLock,
  FaFacebookF,
  FaLinkedinIn,
  FaHome,
  FaRegEnvelope,
  FaUserCircle,
  FaKey,
  FaPhone,
} from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Helmet>
          <title>getConnected-Register</title>
          <meta
            name="description"
            content="A platform for connecting people to different Opportunities"
          />
        </Helmet>

        <section class="p-6 mb-20 md:mb-6 md:py-20 ">
          <div class="md:flex hidden flex-row items-center justify-center lg:justify-center">
            <Link to="/">
              <img className="" src="logo.png" alt="logo" />
            </Link>
          </div>
          <section className="py-6 dark:bg-gray-800 dark:text-gray-50 rounded-lg">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Join Our Community &#128526;
                </h1>
                <p className="pt-2 pb-4">
                  You may signup using links below.......
                </p>
                <div class="flex flex-row items-center justify-center lg:justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-4 bg-orange-300 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaFacebookF />
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <FaLinkedinIn />
                  </button>
                </div>
                <p className="pt-2 pb-4 my-4">
                  Already registered? click the button below to sign in
                </p>
                <div className="flex flex-row items-center justify-center lg:justify-center">
                  <Link to={"/auth/login"}>
                    <button
                      type="button"
                      className="self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
                    >
                      Signin
                    </button>
                  </Link>
                </div>
                <div class="md:flex hidden flex-row items-center justify-start lg:justify-start mt-56">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-3 bg-green-400 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <Link to={"/"}>
                      <FaHome />
                    </Link>
                  </button>
                </div>
                <span className="hidden md:inline"> Home</span>
              </div>

              <form
                novalidate=""
                className="flex flex-col py-2 md:py-6 space-y-6  md:px-6 ng-untouched ng-pristine ng-valid"
              >
                <label className="block">
                  <span className="mb-1">Full name</span>
                  <input
                    type="text"
                    placeholder="Leroy Jenkins"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Email address</span>
                  <input
                    type="email"
                    placeholder="leroy@jenkins.com"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Phone number</span>
                  <input
                    type="number"
                    placeholder="07667890......"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Password</span>
                  <input
                    type="password"
                    placeholder="********"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Confirm Password</span>
                  <input
                    type="password"
                    placeholder="********"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
                  />
                </label>
                <button
                  type="button"
                  className="self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
                >
                  <span className="p-1">
                    <FaUserPlus />
                  </span>
                  Signup
                </button>
              </form>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
