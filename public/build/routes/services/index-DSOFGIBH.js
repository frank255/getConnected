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
  }), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var services_default = index;
export {
  services_default as default
};
//# sourceMappingURL=/build/routes/services/index-DSOFGIBH.js.map
