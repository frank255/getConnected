import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col bg-gray-800 px-6 py-6  text-white items-center overflow-hidden  bottom-0 w-full mt-0">
        <div className="inline-flex gap-2 px-2 py-2">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
        <div className="inline-flex gap-2 px-2 py-2">
          <div> <a href="#">Home</a></div>
          <div> <a href="#">Services</a></div>
          <div> <a href="#">Learning</a></div>
          <div> <a href="#">About us</a></div>
        </div>
        <div className="row">Copyright © 2022 Designed By: Ilunga</div>
      </footer>
    </>
  );
}

export default Footer;
