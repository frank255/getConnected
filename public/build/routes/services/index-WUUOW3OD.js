import {
  useLoaderData
} from "/build/_shared/chunk-INFB3K4O.js";
import "/build/_shared/chunk-WVCR2VME.js";
import {
  Footer_default
} from "/build/_shared/chunk-QTGTY3SW.js";
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
  const image = '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="47.4" height="40.65" viewBox="21 18.5 158 135.5"><path d="M25,50 l150,0 0,100 -150,0 z" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></path><path d="M25,50 L175,150 M25,150 L175,50" stroke-width="4" stroke="black" fill="black" ></path><g transform="translate(0,0)" stroke-width="4" stroke="black" fill="none" ><circle cx="100" cy="30" r="7.5" fill="black" ></circle><circle cx="70" cy="30" r="7.5" fill="black" ></circle><circle cx="130" cy="30" r="7.5" fill="black" ></circle></g></svg>';
  console.log(services);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "container max-w-6xl mx-auto"
  }, /* @__PURE__ */ React.createElement("h2", {
    class: "text-4xl font-bold tracking-tight text-center"
  }, "Our Services"), /* @__PURE__ */ React.createElement("p", {
    class: "mt-2 text-lg text-center text-gray-600"
  }, "Check out our list of awesome services below."), services.data.map((service) => /* @__PURE__ */ React.createElement("div", {
    key: service.id,
    class: "grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "p-3 text-white bg-blue-500 rounded-full"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `data:image/svg+xml;utf8,${image}`
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
//# sourceMappingURL=/build/routes/services/index-WUUOW3OD.js.map
