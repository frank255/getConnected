import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/ilunga/learning/remix/getConnected/app/routes/index.jsx?browser
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
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "mx-auto p-4 bg-amber-400"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "container mx-auto flex items-center justify-between"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    src: "logo.png",
    width: "200",
    className: "w-48 md:w-64 lg:w-72",
    alt: "getConnected logo"
  })), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "mt-[1rem]"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    src: "logo.png"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "navlinks"
  }, "Home"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "navlinks"
  }, "Services"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "navlinks"
  }, "Learning"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "navlinks"
  }, "About us"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "navlinks"
  }, "Contacts")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "btn-nav"
  }, "Join us"), /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "btn-nav"
  }, "Login"))));
}
var Navbar_default = Navbar;

// app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(Footer_default, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-GSY22ZRK.js.map
