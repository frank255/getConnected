import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Footer.jsx
init_react();
var import_react = __toESM(require_react());
function Footer() {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("footer", {
    className: "bg-gray-800 px-6 py-6  text-white items-center overflow-hidden fixed bottom-0 "
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }, "Copyright \xA9 2022 Designed By: Ilunga")));
}
var Footer_default = Footer;

// app/components/Hero.jsx
init_react();
var import_react2 = __toESM(require_react());
function Hero() {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("section", {
    className: "relative overflow-hidden"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container \n    flex\n    flex-col-reverse\n    lg:flex-row\n    items-center\n    gap-12\n    lg:mt-20\n    mt-6\n    mx-auto"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-auto w-full md:w-full flex-col items-center lg:items-start"
  }, /* @__PURE__ */ import_react2.default.createElement("h2", {
    className: "text-black text-3xl md:text-5xl text-center lg:items-start mb-6"
  }, "We Connect you to the World!"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex justify-center flex-auto mb-10 md:mb-16 lg:mb-0  md:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "world.svg",
    alt: "world",
    className: "w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
  })), /* @__PURE__ */ import_react2.default.createElement("p", {
    className: "text-lg text-center lg:items-start mx-auto"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime."), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex justify-center flex-wrap gap-8 items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    className: "btn"
  }, "get Started"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex justify-center flex-auto mb-10 md:mb-16 lg:mb-0 z-10 hidden md:block"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "world.svg",
    alt: "world",
    className: "w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
  })))));
}
var Hero_default = Hero;

// app/components/Navbar.jsx
init_react();
var import_react3 = __toESM(require_react());
function Navbar() {
  (0, import_react3.useEffect)(() => {
    const navBtn = document.querySelector("#menu");
    const menuBar = document.querySelector('[role="menubar"]');
    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
      menuBar.classList.toggle("hidden");
      menuBar.classList.toggle("flex");
    });
  });
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "mx-auto p-4 bg-amber-400"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "container mx-auto flex items-center justify-between"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    "aria-label": "Go to home page",
    className: "\n        focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-400\n        lg:absolute\n        lg:left-1/2\n        lg:-translate-x-1/2\n        lg:top-9\n        z-50"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    src: "",
    alt: "getConnected logo",
    width: "200",
    className: "W-48 md:w-64 lg:w-72 ml-[-0.5]"
  })), /* @__PURE__ */ import_react3.default.createElement("button", {
    id: "menu",
    className: "\n          lg:hidden\n          focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-400",
    "aria-expanded": "false",
    "aria-label": "Open Menu"
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-8 w-8",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    role: "menubar",
    className: "\n          hidden\n          flex-col\n          gap-4\n          absolute\n          right-0\n          left-0\n          top-16\n          bg-amber-400\n          shadow-xl\n          text-center\n          text-lg\n          p-6 \n          items-center \n          lg:flex\n          lg:flex-row\n          lg:static\n          lg:shadow-none\n          lg:justify-between\n          lg:w-full\n          z-10\n          "
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Home"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Services"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Learning"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900\n          lg:ml-auto"
  }, "About us"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Contacts"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Login"), /* @__PURE__ */ import_react3.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Join us")))));
}
var Navbar_default = Navbar;

// app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-JKGTHQZ2.js.map
