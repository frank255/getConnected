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

// app/components/Footer.jsx
init_react();
var import_react = __toESM(require_react());
function Footer() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "text-yellow-300"
  }, "Footer");
}
var Footer_default = Footer;

// app/components/Hero.jsx
init_react();
var import_react2 = __toESM(require_react());
function Hero() {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-orange-300"
  }, "Hero");
}
var Hero_default = Hero;

// app/components/Navbar.jsx
init_react();
var import_react3 = __toESM(require_react());
function Navbar() {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("header", {
    className: "navstyles"
  }, /* @__PURE__ */ import_react3.default.createElement("span", null, "getConnected"), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "text-xl font-semibold mx-[0.8rem] px-[0.8rem] py-[0.4rem] rounded-[0.8rem]  "
  }, "Home"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: ""
  }, "Services"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: ""
  }, "Learning"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: ""
  }, "About us"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: ""
  }, "Contacts")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("button", null, "Join us"), /* @__PURE__ */ import_react3.default.createElement("button", null, "Login"))));
}
var Navbar_default = Navbar;

// app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-VTCKBJDQ.js.map
