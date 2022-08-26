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
  FaPhone,
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
        <Outlet />
      </div>
    </>
  );
}
