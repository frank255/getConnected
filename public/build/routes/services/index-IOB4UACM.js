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
    } catch (Err) {
      console.er;
    }
  }
  fetch("http://localhost:1337/api/services").then((res) => res.json()).then(console.log);
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
  }, "Each of our plan will provide you and your team with certifications.")), /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
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
    d: "M18 8a3 3 0 0 1 0 6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Notifications"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "Send out notifications to all your customers to keep them engaged.")), /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
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
  }), /* @__PURE__ */ React.createElement("polyline", {
    points: "12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "20",
    y2: "7.5"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "4",
    y2: "7.5"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "16",
    y1: "5.25",
    x2: "8",
    y2: "9.75"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Bundles"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "High-quality bundles of awesome tools to help you out.")), /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
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
    d: "M8 9l3 3l-3 3"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "13",
    y1: "15",
    x2: "16",
    y2: "15"
  }), /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16",
    rx: "2"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Developer Tools"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "Developer tools to help grow your application and keep it up-to-date.")), /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
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
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "9.5",
    y1: "11",
    x2: "9.51",
    y2: "11"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "14.5",
    y1: "11",
    x2: "14.51",
    y2: "11"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.5 15a3.5 3.5 0 0 0 5 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Building Blocks"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "The right kind of building blocks to take your company to the next level.")), /* @__PURE__ */ React.createElement("div", {
    class: "rounded-md flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
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
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "15",
    y1: "5",
    x2: "15",
    y2: "7"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "15",
    y1: "11",
    x2: "15",
    y2: "13"
  }), /* @__PURE__ */ React.createElement("line", {
    x1: "15",
    y1: "17",
    x2: "15",
    y2: "19"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
  }))), /* @__PURE__ */ React.createElement("h4", {
    class: "text-xl font-medium text-gray-700"
  }, "Coupons"), /* @__PURE__ */ React.createElement("p", {
    class: "text-base text-center text-gray-500"
  }, "Coupons system to provide special offers and discounts for your app."))))), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services/index-IOB4UACM.js.map
