import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "~/components/Footer";
export default function Index() {
  return (
    <>
      {/* meta information */}
      <Helmet>
        <title>Home - getConnected</title>
        <meta
          name="description"
          content="A platform for connecting people to different Opportunities"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        {/* nav for medium devices */}
        <div className="hidden md:p-4 md:flex justify-between text-black">
          <div className="flex font-tangerine text-4xl">
            <Link to="/">
              <img className="h-12" src="favicon.ico" alt="logo" />
            </Link>
            <Link to={"/"}>
              <span>getConnected</span>
            </Link>
          </div>
          <div>
            <ul className="inline-flex space-x-6 text-xl">
              <Link className="hover:bg-orange-200 p-2 rounded-md" to={"/"}>
                Home
              </Link>
              <Link
                className="hover:bg-orange-200 p-2 rounded-md"
                to={"services"}
              >
                Services
              </Link>
              <Link
                className="hover:bg-orange-200 p-2 rounded-md"
                to={"learning"}
              >
                Learning
              </Link>
              <Link className="hover:bg-orange-200 p-2 rounded-md" to={"about"}>
                About
              </Link>
              <Link
                className="hover:bg-orange-200 p-2 rounded-md"
                to={"contacts"}
              >
                Contacts
              </Link>
            </ul>
          </div>
          <div>
            <Link to={"auth/register"}>
              <button className="bg-green-400 hover:bg-orange-200 text-xl px-4 py-3 rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* header for small devices */}
        <div className="flex p-3 md:hidden">
          <div className="flex-1">
            <Link to="/">
              <img className="h-12" src="favicon.ico" alt="logo" />
            </Link>
          </div>
          <div className="font-tangerine text-3xl">
            <Link to={"/"}>
              <span>getConnected</span>
            </Link>
          </div>
        </div>
        {/* hero section */}
        <div className="px-6 md:pl-6 md:space-y-4 md:grid md:grid-cols-2">
          {/* left */}

          <div className="md:pt-10">
            <div className="md:my-2 text-3xl md:text-6xl">
              we connect you to the
            </div>
            <div className="pl-4 md:mt-1 md:pl-24 text-2xl md:text-4xl text-orange-300">
              World of Opportunities!
            </div>
            <div className="pt-2 flex justify-center md:pl-20 md:hidden">
              <img
                className="h-3/5 w-3/5 md:object-fit"
                src="world.png"
                alt=""
              />
            </div>
            <p className="text-black text-l p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              natus omnis quasi ipsum magni, quaerat voluptas officia, porro
              aspernatur culpa debitis neque blanditiis quia optio tempora
              numquam, doloremque dolores fugit!
            </p>
            {/* button */}
            <div className="flex justify-center motion-safe:animate-bounce">
              <Link to={"services"}>
                <button className="hover:bg-orange-200 flex bg-green-400 text-lg p-3 rounded-full md:text-xl md:px-8 md:py-3 md:shadow-md md:skew-x-6">
                  <span className="px-2">Find out More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-7 "
                  >
                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="hidden md:pl-20 md:flex">
            <img className="object-fit" src="world.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
