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
  const [services, setServices] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    getServices();
  }, []);
  async function getServices() {
    try {
      const res = await fetch("http://localhost:1337/services");
      const data = await res.json();
      setServices(data);
    } catch (Err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    class: "p-6 mb-20 md:mb-6 md:py-20 bg-white"
  }, services.map((service, index2) => /* @__PURE__ */ React.createElement("div", {
    class: "container max-w-6xl mx-auto key={index}"
  }, /* @__PURE__ */ React.createElement("h2", {
    class: "text-4xl font-bold tracking-tight text-center"
  }, service.title), /* @__PURE__ */ React.createElement("p", {
    class: "mt-2 text-lg text-center text-gray-600"
  }, "service.description}"), /* @__PURE__ */ React.createElement("div", {
    class: "grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "p-3 text-white bg-blue-500 rounded-full"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "w-8 h-8 ",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "6",
    cy: "14",
    r: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Certifications"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "Each of our plan will provide you and your team with certifications.")))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services/index-GPRJ72FD.js.map
