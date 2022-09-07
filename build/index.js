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
var app_default = "/build/_assets/app-MCCXZ45X.css";

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
  default: () => services_default,
  loader: () => loader
});

// app/components/Footer.jsx
var import_react3 = __toESM(require("react"));
function Footer() {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "text-orange-400 bg-gray-200 inline-flex  justify-between md:hidden fixed bottom-0 left-0  w-full px-6 py-4 dark:bg-neutral-800"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/"
  }, " Home"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/services"
  }, "Services"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/learning"
  }, "Learning"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/about"
  }, "About us"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("svg", {
    class: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/contacts"
  }, "Contacts")))), /* @__PURE__ */ import_react3.default.createElement("section", {
    className: "hidden md:inline"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: " bg-gray-200 max-w-screen-xl px-4 py-6 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "flex flex-wrap justify-center -mx-5 -my-2"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "Home")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/services",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "Services")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "Learning")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/about",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "About us")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/contacts",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "Contacts")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/terms",
    className: "text-base leading-6 text-gray-500 hover:text-gray-900"
  }, "Terms"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex justify-center mt-8 space-x-6"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Facebook"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "w-6 h-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Instagram"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "w-6 h-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Twitter"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "w-6 h-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "GitHub"), /* @__PURE__ */ import_react3.default.createElement("svg", {
    className: "w-6 h-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    "clip-rule": "evenodd"
  })))), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "mt-8 text-base leading-6 text-center text-gray-400"
  }, "\xA9 ", new Date().getFullYear(), " getConnected, Inc. All rights reserved."))));
}
var Footer_default = Footer;

// route:/Volumes/ROOT/learning/getConnected/app/routes/services/index.jsx
var import_react4 = require("@remix-run/react");
var loader = async () => {
  const response = await fetch("http://localhost:1337/api/services");
  return response.json();
};
function index() {
  const services = (0, import_react4.useLoaderData)();
  console.log(services);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "container max-w-6xl mx-auto"
  }, /* @__PURE__ */ React.createElement("h2", {
    class: "text-4xl font-bold tracking-tight text-center"
  }, "Our Services"), /* @__PURE__ */ React.createElement("p", {
    class: "mt-2 text-lg text-center text-gray-600"
  }, "Check out our list of awesome services below."), /* @__PURE__ */ React.createElement("div", {
    class: "grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
  }, services.data.map((service) => /* @__PURE__ */ React.createElement("div", {
    key: service.id,
    class: "rounded-md relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "p-3 text-white bg-blue-500 rounded-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: service.attributes.icon
  })), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, service.attributes.title), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, service.attributes.description)))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/register.jsx
var register_exports = {};
__export(register_exports, {
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
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_helmet.Helmet, null, /* @__PURE__ */ import_react5.default.createElement("title", null, "getConnected-Register"), /* @__PURE__ */ import_react5.default.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ import_react5.default.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 "
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    class: "md:flex hidden flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "",
    src: "logo.png",
    alt: "logo"
  }))), /* @__PURE__ */ import_react5.default.createElement("section", {
    className: "py-6 dark:bg-gray-800 dark:text-gray-50 rounded-lg"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "py-6 md:py-0 md:px-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h1", {
    className: "text-2xl md:text-4xl font-bold"
  }, "Join Our Community \u{1F60E}"), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "pt-2 pb-4"
  }, "You may signup using links below......."), /* @__PURE__ */ import_react5.default.createElement("div", {
    class: "flex flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaGoogle, null)), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaFacebookF, null)), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaLinkedinIn, null))), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "pt-2 pb-4 my-4"
  }, "Already registered? click the button below to sign in"), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom.Link, {
    to: "/auth/login"
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    className: "self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
  }, "Signin"))), /* @__PURE__ */ import_react5.default.createElement("div", {
    class: "md:flex hidden flex-row items-center justify-start lg:justify-start mt-56"
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-3 bg-green-400 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaHome, null)))), /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "hidden md:inline"
  }, " Home")), /* @__PURE__ */ import_react5.default.createElement("form", {
    novalidate: "",
    className: "flex flex-col py-2 md:py-6 space-y-6  md:px-6 ng-untouched ng-pristine ng-valid"
  }, /* @__PURE__ */ import_react5.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "mb-1"
  }, "Full name"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    placeholder: "Leroy Jenkins",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react5.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "mb-1"
  }, "Email address"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "email",
    placeholder: "leroy@jenkins.com",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react5.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "mb-1"
  }, "Phone number"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "number",
    placeholder: "07667890......",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react5.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "mb-1"
  }, "Password"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "password",
    placeholder: "********",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react5.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "mb-1"
  }, "Confirm Password"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "password",
    placeholder: "********",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "button",
    className: "self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "p-1"
  }, /* @__PURE__ */ import_react5.default.createElement(import_fa.FaUserPlus, null)), "Signup")))))), /* @__PURE__ */ import_react5.default.createElement(Footer_default, null));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/index.jsx
var auth_exports = {};

// route:/Volumes/ROOT/learning/getConnected/app/routes/auth/login.jsx
var login_exports = {};
__export(login_exports, {
  default: () => index3
});
var import_react7 = __toESM(require("react"));
var import_react_helmet2 = require("react-helmet");
var import_react_router_dom2 = require("react-router-dom");
var import_fa2 = require("react-icons/fa");
function index3() {
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_helmet2.Helmet, null, /* @__PURE__ */ import_react7.default.createElement("title", null, "getConnected-Register"), /* @__PURE__ */ import_react7.default.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ import_react7.default.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 "
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    class: "md:flex hidden flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom2.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react7.default.createElement("img", {
    className: "",
    src: "logo.png",
    alt: "logo"
  }))), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "py-6 dark:bg-gray-800 dark:text-gray-50 rounded-lg"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "py-6 md:py-0 md:px-6"
  }, /* @__PURE__ */ import_react7.default.createElement("h1", {
    className: "text-2xl md:text-4xl font-bold"
  }, "Welcome back \u{1F60A}"), /* @__PURE__ */ import_react7.default.createElement("p", {
    className: "pt-2 pb-4"
  }, "You may signin using links below......."), /* @__PURE__ */ import_react7.default.createElement("div", {
    class: "flex flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa2.FaGoogle, null)), /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa2.FaFacebookF, null)), /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-4 bg-orange-300 text-black  font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa2.FaLinkedinIn, null))), /* @__PURE__ */ import_react7.default.createElement("p", {
    className: "pt-2 pb-4 my-4"
  }, "Not registered? click the button below to sign up"), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-row items-center justify-center lg:justify-center"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom2.Link, {
    to: "/auth/register"
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    className: "self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "p-1"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa2.FaUserPlus, null)), "Signup"))), /* @__PURE__ */ import_react7.default.createElement("div", {
    class: "md:flex hidden flex-row items-center justify-start lg:justify-start mt-40"
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    "data-mdb-ripple": "true",
    "data-mdb-ripple-color": "light",
    class: "inline-block p-3 bg-green-400 text-black font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom2.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react7.default.createElement(import_fa2.FaHome, null)))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "hidden md:inline"
  }, " Home")), /* @__PURE__ */ import_react7.default.createElement("form", {
    novalidate: "",
    className: "flex flex-col py-2 md:py-6 space-y-6  md:px-6 ng-untouched ng-pristine ng-valid"
  }, /* @__PURE__ */ import_react7.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "mb-1"
  }, "Email address"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "email",
    placeholder: "leroy@jenkins.com",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react7.default.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "mb-1"
  }, "Password"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "password",
    placeholder: "********",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    className: "self-center flex px-8 py-3 text-lg rounded-full focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
  }, "Signin")))))), /* @__PURE__ */ import_react7.default.createElement(Footer_default, null));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/contacts.jsx
var contacts_exports = {};
__export(contacts_exports, {
  default: () => contacts_default
});
function contact() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 bg-white"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "py-6 dark:bg-gray-800 dark:text-gray-50 rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-6 md:py-0 md:px-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold"
  }, "Get in touch \u{1F609}"), /* @__PURE__ */ React.createElement("p", {
    className: "pt-2 pb-4"
  }, "Fill in the form to start a conversation"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "w-5 h-5 mr-2 sm:mr-6"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", null, "Fake address, 9999 City")), /* @__PURE__ */ React.createElement("p", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "w-5 h-5 mr-2 sm:mr-6"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  })), /* @__PURE__ */ React.createElement("span", null, "123456789")), /* @__PURE__ */ React.createElement("p", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "w-5 h-5 mr-2 sm:mr-6"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  })), /* @__PURE__ */ React.createElement("span", null, "contact@business.com")))), /* @__PURE__ */ React.createElement("form", {
    novalidate: "",
    className: "flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mb-1"
  }, "Full name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Leroy Jenkins",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mb-1"
  }, "Email address"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "leroy@jenkins.com",
    className: "block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mb-1"
  }, "Message"), /* @__PURE__ */ React.createElement("textarea", {
    rows: "3",
    className: "block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-200 dark:bg-gray-800"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-green-400 dark:text-gray-900"
  }, "Submit \u27A4"))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var contacts_default = contact;

// route:/Volumes/ROOT/learning/getConnected/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
function about() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "py-10 px-2 bg-gray-100 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-center"
  }, "About us"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center mt-4"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime."))), /* @__PURE__ */ React.createElement("section", {
    className: "py-10 px-2  bg-slate-100 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-center"
  }, "Our Team"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center mt-4"
  }, "Lorem ipsum dolor sit amet consectetur."), /* @__PURE__ */ React.createElement("div", {
    className: "container grid grid-cols-2 max-w-screen-lg mx-auto my-6 md:gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "avator.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "John Doe"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 font-light items-center "
  }, "CEO"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-4 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "avator.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Mark Doe"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2 font-light items-center "
  }, "Manager "), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-4 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
  })), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  })))))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var about_default = about;

// route:/Volumes/ROOT/learning/getConnected/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react_helmet3 = require("react-helmet");
var import_react_router_dom3 = require("react-router-dom");
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet3.Helmet, null, /* @__PURE__ */ React.createElement("title", null, "Home - getConnected"), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen bg-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:p-4 md:flex justify-between text-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex font-tangerine text-4xl"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-12",
    src: "favicon.ico",
    alt: "logo"
  })), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", null, "getConnected"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "inline-flex space-x-6 text-xl"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "services"
  }, "Services"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "learning"
  }, "Learning"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "about"
  }, "About"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "contacts"
  }, "Contacts"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "auth/register"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-green-400 hover:bg-orange-200 text-xl px-4 py-3 rounded-full"
  }, "Get Started")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex p-3 md:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-12",
    src: "favicon.ico",
    alt: "logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "font-tangerine text-3xl"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", null, "getConnected")))), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 md:pl-6 md:space-y-4 md:grid md:grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:pt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:my-2 text-3xl md:text-6xl"
  }, "we connect you to the"), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 md:mt-1 md:pl-24 text-2xl md:text-4xl text-orange-300"
  }, "World of Opportunities!"), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 flex justify-center md:pl-20 md:hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-3/5 w-3/5 md:object-fit",
    src: "world.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-black text-l p-10"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus omnis quasi ipsum magni, quaerat voluptas officia, porro aspernatur culpa debitis neque blanditiis quia optio tempora numquam, doloremque dolores fugit!"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center motion-safe:animate-bounce"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "services"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "hover:bg-orange-200 flex bg-green-400 text-lg p-3 rounded-full md:text-xl md:px-8 md:py-3 md:shadow-md md:skew-x-6"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px-2"
  }, "Find out More"), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "w-5 h-7 "
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:pl-20 md:flex"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "object-fit",
    src: "world.png",
    alt: ""
  })))), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "8446707e", "entry": { "module": "/build/entry.client-X3BHCAF4.js", "imports": ["/build/_shared/chunk-INFB3K4O.js", "/build/_shared/chunk-WVCR2VME.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VIXC7XDO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-GJMTGPNU.js", "imports": ["/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/index": { "id": "routes/auth/index", "parentId": "root", "path": "auth", "index": true, "caseSensitive": void 0, "module": "/build/routes/auth/index-6WA6IXNH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-TX36QVWJ.js", "imports": ["/build/_shared/chunk-GBKZLXUN.js", "/build/_shared/chunk-Z7Q6IFVF.js", "/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/register": { "id": "routes/auth/register", "parentId": "root", "path": "auth/register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/register-K2CZRK65.js", "imports": ["/build/_shared/chunk-GBKZLXUN.js", "/build/_shared/chunk-Z7Q6IFVF.js", "/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contacts": { "id": "routes/contacts", "parentId": "root", "path": "contacts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contacts-MIYYVE47.js", "imports": ["/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QKUVIDAH.js", "imports": ["/build/_shared/chunk-Z7Q6IFVF.js", "/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services/index": { "id": "routes/services/index", "parentId": "root", "path": "services", "index": true, "caseSensitive": void 0, "module": "/build/routes/services/index-FCW3QHGZ.js", "imports": ["/build/_shared/chunk-PQCLLIOF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8446707E.js" };

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
