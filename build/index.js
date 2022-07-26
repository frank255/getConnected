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
var app_default = "/build/_assets/app-NBNTYCBK.css";

// route:/Volumes/ROOT/learning/getConnected/app/root.jsx
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
    className: "max-w-[2000px] \n       mx-auto\n       bg-gray-100\n       text-neutral-900\n       dark:text-neutral-200\n        bg-transparent\n       dark:bg-neutral-800"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/register.jsx
var register_exports = {};

// route:/Volumes/ROOT/learning/getConnected/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: "px-4 py-4 bg-gray-100"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "hidden md:flex justify-between text-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-tangerine text-5xl"
  }, "getConnected"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "inline-flex space-x-6 text-xl"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Services")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Learning")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Contacts")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "bg-orange-300 text-xl px-4 py-3 rounded-md"
  }, "Get Started")))), /* @__PURE__ */ React.createElement("hero", {
    className: "pt-20 flex  flex-1 mx-0 bg-gray-100 pb-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " w-1/2 grid h-64  justify-items-center text-black mx-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-2 text-6xl"
  }, "we connect you to the"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 text-5xl text-orange-300"
  }, "World of Opportunities!"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 grid justify-items-center text-black text-l"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus omnis quasi ipsum magni, quaerat voluptas officia, porro aspernatur culpa debitis neque blanditiis quia optio tempora numquam, doloremque dolores fugit!")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " flex bg-orange-300 text-xl px-6 py-3 rounded-md"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "px-2"
  }, "Find out More"), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "w-5 h-7 "
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
  }))))), /* @__PURE__ */ React.createElement("div", {
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
    class: "fixed w-full  bg-gray-100 text-gray-300 py-2 bottom-0 left-0 text-center"
  }, /* @__PURE__ */ React.createElement("span", null, "\xA9 getConnected 2022")));
}

// route:/Volumes/ROOT/learning/getConnected/app/routes/login.jsx
var login_exports = {};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "82efe8c0", "entry": { "module": "/build/entry.client-YRSU5NCE.js", "imports": ["/build/_shared/chunk-PKO6KJXJ.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-C5TUZFVB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-52KUDUGK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-MZWXZ65I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-RQLMTE5M.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-82EFE8C0.js" };

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
