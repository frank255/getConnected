var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Volumes/ROOT/learning/getConnected/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-JGFXHFVX.css";

// route:/Volumes/ROOT/learning/getConnected/app/root.jsx
var import_axios = __toESM(require("axios"));
var import_react2 = require("@remix-run/react");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "getConnected",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "max-w-[2000px] \n       mx-auto\n      "
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/services/index.jsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default
});
var import_react3 = __toESM(require("react"));
function index() {
  return /* @__PURE__ */ import_react3.default.createElement("div", null, "index");
}
var services_default = index;

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/register.jsx
var register_exports = {};
__export(register_exports, {
  default: () => register_default
});
var import_react4 = __toESM(require("react"));
function register() {
  return /* @__PURE__ */ import_react4.default.createElement("div", null, "register");
}
var register_default = register;

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/index.jsx
var auth_exports = {};
__export(auth_exports, {
  default: () => index2
});
var import_react5 = __toESM(require("react"));
var import_react6 = require("@remix-run/react");
var import_react_helmet = require("react-helmet");
var import_react_router_dom = require("react-router-dom");
var import_fa = require("react-icons/fa");
function index2() {
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_helmet.Helmet, null, /* @__PURE__ */ import_react5.default.createElement("title", null, "Authentication - getConnected"), /* @__PURE__ */ import_react5.default.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col items-center justify-center w-full flex-1 px-20  text-center "
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "bg-white shadow-2xl flex w-2/3 max-w-4xl rounded-2xl"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "w-3/5 p-5"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex text-left  font-tangerine text-2xl"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "h-10",
    src: "favicon.ico",
    alt: "logo"
  }), /* @__PURE__ */ import_react5.default.createElement("span", null, "getConnected")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "py-10"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-3xl font-bold mb-2 text-black"
  }, "Please Sign in"), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "border-2 w-20 rounded-md border-orange-300 inline-block mb-2"
  }), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex justify-center my-2"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react5.default.createElement(import_fa.FaFacebookF, null), " "), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react5.default.createElement(import_fa.FaGoogle, null), " "), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react5.default.createElement(import_fa.FaLinkedinIn, null), " ")), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "text-gray-400 my-3"
  }, "You may sign in using links above"), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "bg-gray-100 w-64 p-2  flex items-center rounded-md"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaUserCircle, {
    className: "text-gray-400 m-2"
  }), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Username",
    className: "bg-gray-100 border-gray-100 focus:rounded-md focus:ring-orange-300 text-sm flex-1"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "bg-gray-100 w-64 p-2 mt-3 flex items-center rounded-md"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaLock, {
    className: "text-gray-400 m-2"
  }), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "password",
    name: "Password",
    placeholder: "********",
    className: "bg-gray-100 focus:rounded-md  border-gray-100 text-sm flex-1"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex justify-between w-64 mt-2 text-sm text-gray-400"
  }, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "checkbox",
    classclassName: "flex items-center "
  }, /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "checkbox",
    name: "remember",
    className: "text-sm m-1 text-gray-400 rounded-sm h-3 w-3"
  }), "Remember me"), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "",
    className: ""
  }, "Forgot password?")), /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom.Link, {
    to: ""
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "font-semibold border-2 border-orange-300 bg-green-400 rounded-full inline-block px-12 py-2 mt-6 hover:bg-orange-300 hover:text-black"
  }, "Sign In"))))), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "w-2/5 text-white rounded-tr-2xl rounded-br-2xl bg-orange-300 py-36 px-12"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-3xl font-bold mb-2"
  }, "Hi, There! \u{1F44B}\u{1F3FD}"), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "border-2 w-20 border-green-400 inline-block mb-2 rounded-md"
  }), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "mb-10"
  }, "Not registered yet? ", /* @__PURE__ */ import_react5.default.createElement("br", null), " Kindly click the button below to get registered."), /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom.Link, {
    to: ""
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "font-semibold border-2 border-green-400 rounded-full inline-block px-12 py-2 hover:bg-green-400 hover:text-black"
  }, "Sign Up"))))), /* @__PURE__ */ import_react5.default.createElement(import_react6.Outlet, null)));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/login.jsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});
var import_react7 = __toESM(require("react"));
function login() {
  return /* @__PURE__ */ import_react7.default.createElement("div", null, "login");
}
var login_default = login;

// route:/Volumes/ROOT/learning/getConnected/app/routes/contacts.jsx
var contacts_exports = {};
__export(contacts_exports, {
  default: () => contacts_default
});
var import_react8 = __toESM(require("react"));
function contact() {
  return /* @__PURE__ */ import_react8.default.createElement("div", null, "contact");
}
var contacts_default = contact;

// route:/Volumes/ROOT/learning/getConnected/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
var import_react9 = __toESM(require("react"));
function about() {
  return /* @__PURE__ */ import_react9.default.createElement("div", null, "about");
}
var about_default = about;

// route:/Volumes/ROOT/learning/getConnected/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react_helmet2 = require("react-helmet");
var import_react_router_dom2 = require("react-router-dom");
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet2.Helmet, null, /* @__PURE__ */ React.createElement("title", null, "Home - getConnected"), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ React.createElement("header", {
    className: "px-4 py-4 bg-gray-100 "
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "hidden md:flex justify-between text-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex font-tangerine text-4xl"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-1/2",
    src: "favicon.ico",
    alt: "logo"
  })), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "/"
  }, "  ", /* @__PURE__ */ React.createElement("span", null, "getConnected"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "inline-flex space-x-6 text-xl "
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "services"
  }, "Services"), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "learning"
  }, "Learning"), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "about"
  }, "About"), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "contacts"
  }, "Contacts"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "auth"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-green-400 hover:bg-orange-200 text-xl px-4 py-3 rounded-md"
  }, "Get Started"))))), /* @__PURE__ */ React.createElement("hero", {
    className: " md:pt-1 md:flex h-screen w-screen  md:flex-1 mx-0 bg-gray-100 pb-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-1/2 grid h-64  justify-items-center text-black mx-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-2 text-3xl md:text-6xl"
  }, "we connect you to the"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 text-2xl md:text-5xl text-orange-300"
  }, "World of Opportunities!"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 grid justify-items-center text-black text-l"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus omnis quasi ipsum magni, quaerat voluptas officia, porro aspernatur culpa debitis neque blanditiis quia optio tempora numquam, doloremque dolores fugit!")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "services"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "hover:bg-orange-200 flex bg-green-400 text-xl px-6 py-3 rounded-md"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px-2"
  }, "Find out More"), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "w-5 h-7 "
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center w-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-4/5 w-4/5 object-fit",
    src: "world.png",
    alt: ""
  }))), /* @__PURE__ */ React.createElement("nav", {
    className: "text-yellow-800 inline-flex space-x-2 justify-between md:hidden fixed bottom-0 left- 0 right-0 w-full px-6 py-4  dark:bg-neutral-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, " Home"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Services"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Learning"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "About us"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Contacts")))), /* @__PURE__ */ React.createElement("footer", {
    class: "fixed w-full hidden md:inline bg-gray-100 text-gray-300 py-2 bottom-0 left-0 text-center"
  }, /* @__PURE__ */ React.createElement("span", null, "\xA9 getConnected ", new Date().getFullYear())));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "5ac60aa0", "entry": { "module": "/build/entry.client-C6KYGAET.js", "imports": ["/build/_shared/chunk-7UBAAH6N.js", "/build/_shared/chunk-WVCR2VME.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YOMAZXL5.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-XZ6NYIOU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/index": { "id": "routes/auth/index", "parentId": "root", "path": "auth", "index": true, "caseSensitive": void 0, "module": "/build/routes/auth/index-DB6IYPTO.js", "imports": ["/build/_shared/chunk-Z7Q6IFVF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-ZQHBUKQP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/register": { "id": "routes/auth/register", "parentId": "root", "path": "auth/register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/register-VSP2XH4H.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contacts": { "id": "routes/contacts", "parentId": "root", "path": "contacts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contacts-IJNQFE3F.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-NW7MK7DC.js", "imports": ["/build/_shared/chunk-Z7Q6IFVF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services/index": { "id": "routes/services/index", "parentId": "root", "path": "services", "index": true, "caseSensitive": void 0, "module": "/build/routes/services/index-JMSHJBKF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5AC60AA0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/services/index": {
    id: "routes/services/index",
    parentId: "root",
    path: "services",
    index: true,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/auth/index": {
    id: "routes/auth/index",
    parentId: "root",
    path: "auth",
    index: true,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/contacts": {
    id: "routes/contacts",
    parentId: "root",
    path: "contacts",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
