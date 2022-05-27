import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/ilunga/learning/remixjs/getConnected/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Hero.jsx
init_react();
var import_react = __toESM(require_react());
function Hero() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "text-yellow"
  }, "Hero");
}
var Hero_default = Hero;

// app/components/Navbar.jsx
init_react();
var import_react2 = __toESM(require_react());
function Navbar() {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-red-700"
  }, "Navbar");
}
var Navbar_default = Navbar;

// app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold underline text-red-700"
  }, "Hello world!"), /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-D62DA5SS.js.map
