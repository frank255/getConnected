import {
  useLoaderData
} from "/build/_shared/chunk-T57CXCYH.js";
import "/build/_shared/chunk-WVCR2VME.js";
import {
  Footer_default
} from "/build/_shared/chunk-QTGTY3SW.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Volumes/ROOT/learning/getConnected/app/routes/services/index.jsx?browser
init_react();

// app/routes/services/index.jsx
init_react();
var import_react = __toESM(require_react());
function index() {
  const services = useLoaderData();
  console.log(services);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "container max-w-6xl mx-auto"
  }, /* @__PURE__ */ React.createElement("h2", {
    class: "text-4xl font-bold tracking-tight text-center"
  }, "Our Services"), /* @__PURE__ */ React.createElement("p", {
    class: "mt-2 text-lg text-center text-gray-600"
  }, "Check out our list of awesome services below."), JSON.stringify(services))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services/index-AGM46N6D.js.map
