import {
  Footer_default,
  Navbar_default
} from "/build/_shared/chunk-A4CXPU4H.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/ilunga/learning/remix/getConnected/app/routes/register.jsx?browser
init_react();

// app/routes/register.jsx
init_react();
function register() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "grid py-12 px-12 ml-52 my-20 items-center grid-flow-col "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("form", {
    class: "w-full max-w-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 mb-6"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3 mb-6 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-first-name"
  }, "First Name"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "text",
    placeholder: "Jane"
  }), /* @__PURE__ */ React.createElement("p", {
    class: "text-red-500 text-xs italic"
  }, "Please fill out this field.")), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-last-name"
  }, "Last Name"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    type: "text",
    placeholder: "Doe"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 mb-6"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full px-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-password",
    type: "password",
    placeholder: "******************"
  }), /* @__PURE__ */ React.createElement("p", {
    class: "text-gray-600 text-xs italic"
  }, "Make it as long and as crazy as you'd like"))), /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-city"
  }, "City"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-city",
    type: "text",
    placeholder: "Albuquerque"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-state"
  }, "State"), /* @__PURE__ */ React.createElement("div", {
    class: "relative"
  }, /* @__PURE__ */ React.createElement("select", {
    class: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-state"
  }, /* @__PURE__ */ React.createElement("option", null, "New Mexico"), /* @__PURE__ */ React.createElement("option", null, "Missouri"), /* @__PURE__ */ React.createElement("option", null, "Texas")), /* @__PURE__ */ React.createElement("div", {
    class: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
  }, /* @__PURE__ */ React.createElement("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  }))))), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-zip"
  }, "Zip"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-zip",
    type: "text",
    placeholder: "90210"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-evenly "
  }, /* @__PURE__ */ React.createElement("img", {
    className: "ml-6 w-2/5 h-2/5",
    src: "signup.svg",
    alt: "signup"
  }))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
export {
  register as default
};
//# sourceMappingURL=/build/routes/register-HY2KY6FK.js.map
