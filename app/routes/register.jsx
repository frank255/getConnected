import axios from "axios";
import { useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function register() {

   const [registerInput, setRegister] = useState({
       firstname:'',
       lastname:'',
       email:'',
       phone:'',
       password:'',
       repeatpassword:''
   });

   const handleInput = (e) =>{
    e.presist();
    setRegister({...registerInput, [e.target.name]: e.target.value});
   }


   const registerSubmit = (e)=>{
     e.preventDefault();

     const data = {
        firstname:registerInput.firstname,
        lastname:registerInput.lastname,
        email:registerInput.email,
        phone:registerInput.phone,
        password:registerInput.password,
        repeatpassword:registerInput.repeatpassword,
     }
        //    Api request

      axios.get('/sanctum/csrf-cookie').then(response =>{
            axios.post(`/api/register`, data).then(res=>{

          });
      });    
   }

  return (
    <>
      <Navbar />
      <section className="flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20 md:shadow-md overflow-hidden">
        {/* register */}
        <div className=" md:basis-3/4 md:px-20  md:ml-20 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h1 className="text-3xl md:text-xl  text-center">Please Register To continue..</h1>
        </div>
          <form onSubmit={registerSubmit} class="w-full max-w-lg px-6 py-6 md:ml-20">
            <div class="flex flex-wrap -mx-3 md:mb-6 mb-2">
              <div class="w-full md:w-1/2 px-3 md:mb-6 mb-2 ">
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
                  name="firstname"
                  onChange={handleInput}
                  value={registerInput.firstname}
                  placeholder="example:Joe"
                  // autoComplete="first name"
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
                  name="lastname"
                  onChange={handleInput}
                  value={registerInput.lastname}
                  placeholder="example:Will"
                  // autoComplete="last name"
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
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
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
                  type="number"
                  name="phone"
                  onChange={handleInput}
                  value={registerInput.phone}
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
                  type="password"
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
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
                  type="password"
                  name="repeatpassword"
                  onChange={handleInput}
                  value={registerInput.repeatpassword}
                  placeholder="*********"
                ></input>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-6  rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
             
            </div>
          </form>
        </div>

        {/* image */}
        <div className="basis-1/4 items-center hidden md:inline">
          <img className="h-56" src="signup.svg" alt="signup" />
        </div>

       
      </section>
      <Footer />
    </>
  );
}
