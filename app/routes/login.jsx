import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function login() {
  return <>
  
   <Navbar/>
 
 <section className="flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20  overflow-hidden">
        {/* register */}
        <div className=" md:basis-3/4 md:px-20  md:ml-20 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl md:text-xl  text-center">Please Login To continue..</h1>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********"></input>
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
        </div>

        {/* image */}
        <div className="basis-1/4 items-center hidden md:inline">
          <img className="h-56" src="signup.svg" alt="signup" />
        </div>

      </section>
 
    <Footer/>
  </>
   
}
