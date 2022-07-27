import {
  HelmetExport
} from "/build/_shared/chunk-Z7Q6IFVF.js";
import "/build/_shared/chunk-342G2A3P.js";
import {
  Link,
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
  }, /* @__PURE__ */ import_react.default.createElement(HelmetExport, null, /* @__PURE__ */ import_react.default.createElement("title", null, "Authentication - getConnected"), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col items-center justify-center w-full flex-1 px-20  text-center "
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bg-white shadow-2xl flex w-2/3 max-w-4xl rounded-2xl"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "w-3/5 p-5"
  }, "sign in"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "w-2/5 text-white rounded-tr-2xl rounded-br-2xl bg-orange-300 py-36 px-12"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-3xl font-bold mb-2"
  }, "Hi, There! \u{1F44B}\u{1F3FD}"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "border-2 w-20 border-green-200 inline-block mb-2 rounded-md"
  }), /* @__PURE__ */ import_react.default.createElement("p", {
    className: "mb-10"
  }, "Fill up personal informations and start journey with us."), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: ""
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    className: "font-semibold border-2 border-green-200 rounded-full inline-block px-12 py-2 hover:bg-gree"
  }, "Sign Up"))))), /* @__PURE__ */ import_react.default.createElement(Outlet, null)));
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/auth/index-TOGRPEU5.js.map
