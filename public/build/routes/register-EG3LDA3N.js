import {
  Footer_default,
  Navbar_default
} from "/build/_shared/chunk-KMLAAXKA.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/ilunga/learning/remix/getConnected/app/routes/register.jsx?browser
init_react();

// app/routes/register.jsx
init_react();
var import_react = __toESM(require_react());
function register() {
  const [state, setRegister] = (0, import_react.useState)({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    repeatpassword: ""
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20 md:shadow-md overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " md:basis-3/4 md:px-20  md:ml-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl md:text-xl  text-center"
  }, "Please Register To continue..")), /* @__PURE__ */ React.createElement("form", {
    class: "w-full max-w-lg px-6 py-6 md:ml-20"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 md:mb-6 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3 md:mb-6 mb-2 "
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-first-name"
  }, "First Name"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "text",
    name: "firstname",
    onChange: handleInput,
    value: registerInput.firstname,
    placeholder: "example:Joe"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-last-name"
  }, "Last Name"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    type: "text",
    name: "lastname",
    onChange: handleInput,
    value: registerInput.lastname,
    placeholder: "example:Will"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 md:mb-6 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3 md:mb-6 mb-2 "
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-first-name"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "email",
    name: "email",
    onChange: handleInput,
    value: registerInput.email,
    placeholder: "example:joe@gmail.com"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-last-name"
  }, "WhatsApp Number"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    type: "number",
    name: "phone",
    onChange: handleInput,
    value: registerInput.phone,
    placeholder: "example:+255766890443"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-wrap -mx-3 md:mb-6 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3 md:mb-6 mb-2 "
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-2",
    for: "grid-first-name"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "password",
    name: "password",
    onChange: handleInput,
    value: registerInput.password,
    placeholder: "*********"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "w-full md:w-1/2 px-3 mb-2"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "tracking-wide text-gray-700 text-xs font-bold mb-3",
    for: "grid-last-name"
  }, "Repeat Password"), /* @__PURE__ */ React.createElement("input", {
    class: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    type: "password",
    name: "repeatpassword",
    onChange: handleInput,
    value: registerInput.repeatpassword,
    placeholder: "*********"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-6  rounded focus:outline-none focus:shadow-outline",
    type: "button"
  }, "Register")))), /* @__PURE__ */ React.createElement("div", {
    className: "basis-1/4 items-center hidden md:inline"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-56",
    src: "signup.svg",
    alt: "signup"
  }))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
export {
  register as default
};
//# sourceMappingURL=/build/routes/register-EG3LDA3N.js.map
