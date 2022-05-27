import React from "react";

function Navbar() {
  return (
    <>
      <header className="navstyles">
        <span className="mt-[1rem]">
            <img src="logo.png"></img>
        </span>
        <div className="">
          <a href="" className="navlinks">
            Home
          </a>
          <a href="" className="navlinks">
            Services
          </a>
          <a href="" className="navlinks">
            Learning
          </a>
          <a href="" className="navlinks">
            About us
          </a>
          <a href="" className="navlinks">
            Contacts
          </a>
        </div>
        <div>
          <button className="btn-nav">Join us</button>
          <button className="btn-nav">Login</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
