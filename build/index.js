var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// route:/home/ilunga/learning/remix/getConnected/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-QIBELUDK.css";

// route:/home/ilunga/learning/remix/getConnected/app/root.jsx
var import_axios = __toESM(require("axios"));
var import_react2 = require("@remix-run/react");
import_axios.default.defaults.baseURL = "http://127.0.0.1:8000";
import_axios.default.defaults.headers.post["Content-Type"] = "application/json";
import_axios.default.defaults.headers.post["Accept"] = "application/json";
import_axios.default.defaults.withCredentials = true;
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
    className: "max-w-[2000px] \n       mx-auto\n       text-neutral-900\n       dark:text-neutral-200\n        bg-transparent\n       dark:bg-neutral-800"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/ilunga/learning/remix/getConnected/app/routes/register.jsx
var register_exports = {};
__export(register_exports, {
  default: () => register
});
var import_axios2 = __toESM(require("axios"));
var import_react5 = require("react");

// app/components/Footer.jsx
var import_react3 = __toESM(require("react"));
function Footer() {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("footer", {
    className: " flex-col bg-gray-800 px-6 py-2  text-white items-center overflow-hidden  bottom-0 w-full mt-0 hidden md:flex"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "inline-flex gap-2 px-2 py-2  fill-teal-900"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "35",
    height: "35"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "35",
    height: "35"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "35",
    height: "35"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  }))), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "35",
    height: "35"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
  })))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "inline-flex gap-2 px-2 py-2"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, "Home")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, "Services")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, "Learning")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa fa-gear"
  }), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#"
  }, "About us"))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "row"
  }, "Copyright \xA9 2022 getConnected")), /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "flex flex-row justify-between md:hidden bottom-0 px-6 py-4 sticky bg-slate-200 dark:bg-neutral-800"
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
    href: "/"
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
    href: "/"
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
    href: "/"
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
    href: "/"
  }, "Contacts")))));
}
var Footer_default = Footer;

// app/components/Navbar.jsx
var import_react4 = __toESM(require("react"));
function Navbar() {
  (0, import_react4.useEffect)(() => {
    const navBtn = document.querySelector("#menu");
    const menuBar = document.querySelector('[role="menubar"]');
    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
      menuBar.classList.toggle("hidden");
      menuBar.classList.toggle("flex");
    });
  });
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("nav", {
    className: "mx-auto p-4 bg-amber-300"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "container mx-auto flex items-center justify-between"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    href: "/",
    "aria-label": "Go to home page",
    className: "\n        focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-300\n        lg:absolute\n        lg:left-1/2\n        lg:-translate-x-1/2\n        lg:top-9\n        z-50"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: "logo.svg",
    alt: "getConnected logo",
    width: "200",
    className: "W-48 md:w-64 lg:w-72 lg:mr-28"
  })), /* @__PURE__ */ import_react4.default.createElement("button", {
    id: "menu",
    className: "\n          lg:hidden\n          focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-300",
    "aria-expanded": "false",
    "aria-label": "Open Menu"
  }, /* @__PURE__ */ import_react4.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-8 w-8",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react4.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react4.default.createElement("div", {
    role: "menubar",
    className: "\n          hidden\n          flex-col\n          gap-4\n          absolute\n          right-0\n          left-0\n          top-16\n          bg-amber-300\n          shadow-xl\n          text-center\n          text-lg\n          p-6 \n          items-center \n          lg:flex\n          lg:flex-row\n          lg:static\n          lg:shadow-none\n          lg:justify-between\n          lg:w-full\n          z-10\n          "
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Home"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Services"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Learning"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900\n          lg:ml-auto"
  }, "About us"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Contacts"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/login",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Login"), /* @__PURE__ */ import_react4.default.createElement("a", {
    role: "menuitem",
    href: "/register",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Sign Up")))));
}
var Navbar_default = Navbar;

// route:/home/ilunga/learning/remix/getConnected/app/routes/register.jsx
function register() {
  const [registerInput, setRegister] = (0, import_react5.useState)({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    repeatpassword: ""
  });
  const handleInput = (e) => {
    e.presist();
    setRegister(__spreadProps(__spreadValues({}, registerInput), { [e.target.name]: e.target.value }));
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      email: registerInput.email,
      phone: registerInput.phone,
      password: registerInput.password,
      repeatpassword: registerInput.repeatpassword
    };
    import_axios2.default.get("/sanctum/csrf-cookie").then((response) => {
      import_axios2.default.post(`/api/register`, data).then((res) => {
      });
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20 md:shadow-md overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " md:basis-3/4 md:px-20  md:ml-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl md:text-xl  text-center"
  }, "Please Register To continue..")), /* @__PURE__ */ React.createElement("form", {
    onSubmit: registerSubmit,
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
    type: "submit"
  }, "Register")))), /* @__PURE__ */ React.createElement("div", {
    className: "basis-1/4 items-center hidden md:inline"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-56",
    src: "signup.svg",
    alt: "signup"
  }))), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Hero.jsx
var import_react6 = __toESM(require("react"));
function Hero() {
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "relative overflow-hidden"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "container \n    flex\n    flex-col-reverse\n    lg:flex-row\n    items-center\n    gap-12\n    lg:mt-20\n    mt-6\n    mx-auto"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-auto w-full md:w-full flex-col items-center lg:items-start"
  }, /* @__PURE__ */ import_react6.default.createElement("h2", {
    className: "text-black dark:text-white text-2xl italic font-bold md:text-5xl text-center items-start mb-6"
  }, "We Connect you to the World of Opportunities!"), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex justify-center flex-auto mb-10 md:mb-16 lg:mb-0  md:hidden"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    src: "world.svg",
    alt: "world",
    className: "w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
  })), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-lg text-center lg:items-start mx-auto"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime."), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn"
  }, "get Started "))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "justify-center flex-auto mb-10 md:mb-16 lg:mb-0  hidden md:block"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    src: "world.svg",
    alt: "world",
    className: "w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
  })))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "py-10 px-2 mt-12 bg-slate-300 dark:bg-neutral-800 items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "text-3xl text-center"
  }, "Services")), /* @__PURE__ */ import_react6.default.createElement("div", {
    class: "container grid grid-cols-1 md:grid-cols-4 max-w-screen-lg mx-auto my-6 md:gap-6"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "university.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "University/College"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "scholarship.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-12 md:mt-20 mb-2 text-lg"
  }, "Scholarships"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "job.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 md:mt-[3rem] mb-2 text-lg"
  }, "Job Opportunities"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "online-learning.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Online Courses"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Coming soon.."), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Coming soon.."), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Coming soon.."), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Coming soon.."), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, " ", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa ad veritatis quo, numquam, quis illum mollitia libero.", " "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-1 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "btn-service"
  }, "learn more")))))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "py-20 px-2 mt-0 bg-slate-200 dark:bg-neutral-800"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "text-3xl text-center"
  }, "About us"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-center mt-4"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime."))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "py-20 px-2 mt-0  bg-slate-100 dark:bg-neutral-800"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", {
    className: "text-3xl text-center"
  }, "Our Team"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "text-center mt-4"
  }, "Lorem ipsum dolor sit amet consectetur."), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "container grid grid-cols-2 max-w-screen-lg mx-auto my-6 md:gap-6"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "avator.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "John Doe"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, "CEO"), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row gap-4 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
  })), /* @__PURE__ */ import_react6.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  }))))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col rounded-md  shadow-md"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "p-6 flex flex-col items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-3/5 w-3/5 md:w-full md:h-full",
    src: "avator.svg",
    alt: ""
  }), /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "mt-5 mb-2 text-lg"
  }, "Mark Doe"), /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "mb-2 font-light items-center "
  }, "Manager "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-row gap-4 justify-center flex-wrap  items-center"
  }, /* @__PURE__ */ import_react6.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
  })), /* @__PURE__ */ import_react6.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  })))))))));
}
var Hero_default = Hero;

// route:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route:/home/ilunga/learning/remix/getConnected/app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  default: () => login
});
function login() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-1 py-6 px-4 md:flex-row md:px-18 md:py-20 md:mx-20  overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " md:basis-3/4 md:px-20  md:ml-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-3/4 lg:w-5/12 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl md:text-xl  text-center"
  }, "Please Login To continue..")), /* @__PURE__ */ React.createElement("form", {
    class: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block text-gray-700 text-sm font-bold mb-2",
    for: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "username",
    type: "email",
    placeholder: "email"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "block text-gray-700 text-sm font-bold mb-2",
    for: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    type: "password",
    placeholder: "***********"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "bg-teal-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "button"
  }, "Sign In"), /* @__PURE__ */ React.createElement("a", {
    class: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
    href: "#"
  }, "Forgot Password?")))), /* @__PURE__ */ React.createElement("div", {
    className: "basis-1/4 items-center hidden md:inline"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-56",
    src: "signup.svg",
    alt: "signup"
  }))), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e59f4f22", "entry": { "module": "/build/entry.client-UPCCS4GW.js", "imports": ["/build/_shared/chunk-UBX3SU2W.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SJNJJPAN.js", "imports": ["/build/_shared/chunk-UKHQ3TWG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-X42SZDDQ.js", "imports": ["/build/_shared/chunk-KMLAAXKA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-GZAOL55B.js", "imports": ["/build/_shared/chunk-KMLAAXKA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-L45T4E24.js", "imports": ["/build/_shared/chunk-KMLAAXKA.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E59F4F22.js" };

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
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
