import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function register() {
  return (
    <>
      <Navbar />
      <section className="flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20 md:shadow-md overflow-hidden">
        {/* register */}
        <div className=" md:basis-3/4 md:px-20  md:ml-20 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl text-center">Register Here</h1>
        </div>
          <form class="w-full max-w-lg px-6 py-6 md:ml-20">
            <div class="flex flex-wrap -mx-3 md:mb-6 mb-2">
              <div class="w-full md:w-1/2 px-3 md:mb-6 mb-2 md:mb-0">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="example:Joe"
                ></input>
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="example:Will"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 md:mb-6 mb-2">
              <div class="w-full md:w-1/2 px-3 md:mb-6 mb-2 ">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="example:joe@gmail.com"
                ></input>
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  WhatsApp Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="example:+255766890443"
                ></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 md:mb-6 mb-2">
              <div class="w-full md:w-1/2 px-3 md:mb-6 mb-2 ">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Password
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="*********"
                ></input>
                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div class="w-full md:w-1/2 px-3 mb-2">
                <label
                  class="tracking-wide text-gray-700 text-xs font-bold mb-3"
                  for="grid-last-name"
                >
                  Repeat Password
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="********"
                ></input>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        {/* image */}
        <div className="basis-1/4 items-center hidden md:inline">
          <img className="h-56" src="signup.svg" alt="signup" />
        </div>

        {/* login form
     <div className="flex-auto">
     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>

     </div> */}
      </section>
      <Footer />
    </>
  );
}
