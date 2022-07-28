import React from "react";
import { Outlet } from "@remix-run/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaLock,
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaUserCircle,
  FaKey,
} from "react-icons/fa";

export default function index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Helmet>
          <title>Authentication - getConnected</title>
          <meta
            name="description"
            content="A platform for connecting people to different Opportunities"
          />
        </Helmet>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20  text-center ">
          <div className="bg-white shadow-2xl flex w-2/3 max-w-4xl rounded-2xl">
            <div className="w-3/5 p-5">
              <div className="flex text-left  font-tangerine text-2xl">
                <img className="h-10" src="favicon.ico" alt="logo" />
                <span>getConnected</span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-black">
                  Please Sign in
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
                  You may sign in using links above
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
                    <FaLock className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="Password"
                      placeholder="********"
                      className="bg-gray-100 focus:rounded-md  border-gray-100 text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mt-2 text-sm text-gray-400">
                    <label
                      htmlFor="checkbox"
                      classclassName="flex items-center "
                    >
                      <input
                        type="checkbox"
                        name="remember"
                        className="text-sm m-1 text-gray-400 rounded-sm h-3 w-3"
                      />
                      Remember me
                    </label>
                    <a href="" className="">
                      Forgot password?
                    </a>
                  </div>
                  <Link to="">
                    <button className="font-semibold border-2 border-orange-300 bg-green-400 rounded-full inline-block px-12 py-2 mt-6 hover:bg-orange-300 hover:text-black">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-2/5 text-white rounded-tr-2xl rounded-br-2xl bg-orange-300 py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hi, There! 👋🏽</h2>
              <div className="border-2 w-20 border-green-400 inline-block mb-2 rounded-md"></div>
              <p className="mb-10">
                Not registered yet? <br /> Kindly click the button below to get
                registered.
              </p>
              <Link to="">
                <button className="font-semibold border-2 border-green-400 rounded-full inline-block px-12 py-2 hover:bg-green-400 hover:text-black">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
