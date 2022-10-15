import {
  useLoaderData
} from "/build/_shared/chunk-H5RJRLYZ.js";
import "/build/_shared/chunk-WVCR2VME.js";
import {
  Footer_default
} from "/build/_shared/chunk-PQCLLIOF.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Volumes/ROOT/learning/getConnected/app/routes/services/index.jsx?browser
init_react();

// app/routes/services/index.jsx
init_react();
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
  }, "Check out our list of awesome services below."), /* @__PURE__ */ React.createElement("div", {
    class: "grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
  }, services.data.map((service) => /* @__PURE__ */ React.createElement("div", {
    key: service.id,
    class: "rounded-md relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "p-3 text-white bg-blue-500 rounded-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: service.attributes.icon
  })), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, service.attributes.title), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, service.attributes.description)))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services/index-REHJT2TT.js.map
