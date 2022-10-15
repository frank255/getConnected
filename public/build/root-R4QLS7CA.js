import {
  require_axios
} from "/build/_shared/chunk-UKHQ3TWG.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-3RSVRBPT.js";
import {
  Outlet
} from "/build/_shared/chunk-WVCR2VME.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Volumes/ROOT/learning/getConnected/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-TS2K45Z6.css";

// app/root.jsx
var import_axios = __toESM(require_axios());
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "max-w-[2000px] \n       mx-auto\n      "
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-R4QLS7CA.js.map
