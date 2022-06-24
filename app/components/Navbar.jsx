import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const navBtn = document.querySelector("#menu");
    const menuBar = document.querySelector('[role="menubar"]');

    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
      menuBar.classList.toggle("hidden");
      menuBar.classList.toggle("flex");
    });
  });

  return (
    <>
      <nav className="mx-auto p-4 bg-amber-300">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="/"
            aria-label="Go to home page"
            className="
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-300
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:top-9
        z-50"
          >
            <img
              src="logo.svg"
              alt="getConnected logo"
              width="200"
              className="W-48 md:w-64 lg:w-72 lg:mr-28"
            />
          </a>
          <button
            id="menu"
            className="
          lg:hidden
          focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-300"
            aria-expanded="false"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            role="menubar"
            className="
          hidden
          flex-col
          gap-4
          absolute
          right-0
          left-0
          top-16
          bg-amber-300
          shadow-xl
          text-center
          text-lg
          p-6 
          items-center 
          lg:flex
          lg:flex-row
          lg:static
          lg:shadow-none
          lg:justify-between
          lg:w-full
          z-10
          "
          >
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Home
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Services
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Learning
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900
          lg:ml-auto"
            >
              About us
            </a>
            <a
              role="menuitem"
              href="/"
              className="
          py-1
          px-6
          dark:text-neutral-900"
            >
              Contacts
            </a>
            <a
              role="menuitem"
              href="/login"
              className="
          py-1
          px-6
          bg-teal-900
          text-white
          rounded-lg
          "
            >
              Login
            </a>
            <a
              role="menuitem"
              href="/register"
              className="
          py-1
          px-6
          bg-teal-900
          text-white
          rounded-lg
          "
            >
              Join us
            </a>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
