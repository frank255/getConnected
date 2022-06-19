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

// route:/home/ilunga/learning/remix/getConnected/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-X4JNM2UH.css";

// route:/home/ilunga/learning/remix/getConnected/app/root.jsx
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
    className: "max-w-[2000px] \n       mx-auto\n       text-neutral-900\n       dark:text-neutral-200\n       bg-white\n       dark:bg-neutral-800"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Footer.jsx
var import_react3 = __toESM(require("react"));
function Footer() {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "text-yellow-300"
  }, "Footer");
}
var Footer_default = Footer;

// app/components/Hero.jsx
var import_react4 = __toESM(require("react"));
function Hero() {
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("section", {
    className: "relative"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "container \n    flex\n    flex-col-reverse\n    lg:flex-row\n    items-center\n    gap-12\n    mt-14\n    lg:mt-28"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-1 flex-col items-center lg:items-start"
  }, /* @__PURE__ */ import_react4.default.createElement("h2", {
    className: "text-black text-3xl md:text-5xl text-center lg:text-left mb-6"
  }, "We Connect you to the World!"), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-lg text-center lg:items-start mx-auto"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, amet eaque obcaecati velit voluptatibus maxime."), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex justify-center flex-wrap gap-8"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "btn"
  }, "get Started"), /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "btn"
  }, "get Started")))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10"
  }, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: "world.svg",
    alt: "world",
    className: "w-5/6 h-5/6"
  }))));
}
var Hero_default = Hero;

// app/components/Navbar.jsx
var import_react5 = __toESM(require("react"));
function Navbar() {
  (0, import_react5.useEffect)(() => {
    const navBtn = document.querySelector("#menu");
    const menuBar = document.querySelector('[role="menubar"]');
    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
      menuBar.classList.toggle("hidden");
      menuBar.classList.toggle("flex");
    });
  });
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("nav", {
    className: "mx-auto p-4 bg-amber-400"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "container mx-auto flex items-center justify-between"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "/",
    "aria-label": "Go to home page",
    className: "\n        focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-400\n        lg:absolute\n        lg:left-1/2\n        lg:-translate-x-1/2\n        lg:top-9\n        z-50"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "",
    alt: "getConnected logo",
    width: "200",
    className: "W-48 md:w-64 lg:w-72 ml-[-0.5]"
  })), /* @__PURE__ */ import_react5.default.createElement("button", {
    id: "menu",
    className: "\n          lg:hidden\n          focus:outline-none\n        focus-visible:ring-4\n        ring-neutral-900\n        rounded-sm\n        ring-offset-4\n        ring-offset-amber-400",
    "aria-expanded": "false",
    "aria-label": "Open Menu"
  }, /* @__PURE__ */ import_react5.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-8 w-8",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react5.default.createElement("div", {
    role: "menubar",
    className: "\n          hidden\n          flex-col\n          gap-4\n          absolute\n          right-0\n          left-0\n          top-16\n          bg-amber-400\n          shadow-xl\n          text-center\n          text-lg\n          p-6 \n          items-center \n          lg:flex\n          lg:flex-row\n          lg:static\n          lg:shadow-none\n          lg:justify-between\n          lg:w-full\n          "
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Home"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Services"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Learning"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900\n          lg:ml-auto"
  }, "About us"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          dark:text-neutral-900"
  }, "Contacts"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Login"), /* @__PURE__ */ import_react5.default.createElement("a", {
    role: "menuitem",
    href: "/",
    className: "\n          py-1\n          px-6\n          bg-teal-900\n          text-white\n          rounded-lg\n          "
  }, "Join us")))));
}
var Navbar_default = Navbar;

// route:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "233858e8", "entry": { "module": "/build/entry.client-2XCMPGQO.js", "imports": ["/build/_shared/chunk-QPZC4VH7.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IY3HBQ6X.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JWBR4CHV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-233858E8.js" };

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
