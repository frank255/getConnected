import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-73XGU5ER.js";
import {
  require_axios
} from "/build/_shared/chunk-UKHQ3TWG.js";
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
var app_default = "/build/_assets/app-ILLIGW7D.css";

// app/root.jsx
var import_axios = __toESM(require_axios());
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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "max-w-[2000px] \n       mx-auto\n       text-neutral-900\n       dark:text-neutral-200\n        bg-transparent\n       dark:bg-neutral-800"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-QNWVFO6B.js.map
