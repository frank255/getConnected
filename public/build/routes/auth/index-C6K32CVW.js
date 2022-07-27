import "/build/_shared/chunk-BHPDSR5L.js";
import {
  Outlet
} from "/build/_shared/chunk-WVCR2VME.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Volumes/ROOT/learning/getConnected/app/routes/auth/index.jsx?browser
init_react();

// app/routes/auth/index.jsx
init_react();
var import_react = __toESM(require_react());
function index() {
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("header", {
    className: "px-4 py-4 bg-gray-100 "
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "hidden md:flex justify-between text-black"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "font-tangerine text-5xl"
  }, "getConnected"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "inline-flex space-x-6 text-xl "
  }, /* @__PURE__ */ import_react.default.createElement(Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "/"
  }, "Home"), /* @__PURE__ */ import_react.default.createElement(Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "services"
  }, "Services"), /* @__PURE__ */ import_react.default.createElement(Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "learning"
  }, "Learning"), /* @__PURE__ */ import_react.default.createElement(Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "about"
  }, "About"), /* @__PURE__ */ import_react.default.createElement(Link, {
    className: "hover:bg-orange-200 p-2 rounded-md",
    to: "contacts"
  }, "Contacts"))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Link, {
    to: "auth"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    className: "bg-green-400 hover:bg-orange-200 text-xl px-4 py-3 rounded-md"
  }, "Get Started"))))), "    ", /* @__PURE__ */ import_react.default.createElement(Outlet, null));
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/auth/index-C6K32CVW.js.map
