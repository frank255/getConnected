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

        <section class="w-full border-2  bg-white md:mx-6 md:my-6">
          <div class="mx-auto max-w-7xl ">
            <div class="flex flex-col lg:flex-row ">
              <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-4 lg:px-16 lg:my-0">
                  <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                    <div class="relative">
                      <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">
                      Hi, There! 👋🏽
                      </h2>
                    </div>
                    <p class="text-2xl text-gray-700">
                     Are you registered? <br /> Kindly click the button bellow to login.
                    </p>
                    <a
                      href="/auth/login"
                      class="inline-block ml-20 px-10 py-3 text-xl font-medium text-center text-white transition duration-200 bg-orange-300 rounded-full hover:bg-green-500 ease"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>

              <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div class="flex flex-col items-start justify-center w-full h-full p-10 lg:p-16 xl:p-24">
                  <h4 class="w-full text-3xl font-bold">Signup</h4>

                  <div class="relative w-full mt-10 space-y-8">
                    <div class="relative">
                      <label class="font-medium text-gray-900">Name</label>
                      <input
                        type="text"
                        class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div class="relative">
                      <label class="font-medium text-gray-900">Email</label>
                      <input
                        type="text"
                        class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    <div class="relative">
                      <label class="font-medium text-gray-900">Phone</label>
                      <input
                        type="number"
                        class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                        placeholder="phone number"
                      />
                    </div>
                    <div class="relative">
                      <label class="font-medium text-gray-900">Password</label>
                      <input
                        type="password"
                        class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
                        placeholder="Password"
                      />
                    </div>
                    <div class="relative">
                      <a
                        href="#_"
                        class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-green-400 rounded-lg hover:bg-green-500 ease"
                      >
                        Create Account
                      </a>
                      <a
                        href="#_"
                        class="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                      >
                        Sign up with Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
