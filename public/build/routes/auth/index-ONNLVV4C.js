import {
  HelmetExport
} from "/build/_shared/chunk-Z7Q6IFVF.js";
import "/build/_shared/chunk-FBOCLGPX.js";
import {
  Link,
  Outlet
} from "/build/_shared/chunk-WVCR2VME.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Volumes/ROOT/learning/getConnected/app/routes/auth/index.jsx?browser
init_react();

// app/routes/auth/index.jsx
init_react();
var import_react3 = __toESM(require_react());

// node_modules/react-icons/fa/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.esm.js
function FaFacebookF(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" } }] })(props);
}
function FaGoogle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 488 512" }, "child": [{ "tag": "path", "attr": { "d": "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" } }] })(props);
}
function FaLinkedinIn(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" } }] })(props);
}
function FaRegEnvelope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" } }] })(props);
}

// app/routes/auth/index.jsx
function index() {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100"
  }, /* @__PURE__ */ import_react3.default.createElement(HelmetExport, null, /* @__PURE__ */ import_react3.default.createElement("title", null, "Authentication - getConnected"), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "description",
    content: "A platform for connecting people to different Opportunities"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center justify-center w-full flex-1 px-20  text-center "
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-white shadow-2xl flex w-2/3 max-w-4xl rounded-2xl"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "w-3/5 p-5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex text-left  font-tangerine text-2xl"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "h-10",
    src: "favicon.ico",
    alt: "logo"
  }), /* @__PURE__ */ import_react3.default.createElement("span", null, "getConnected")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-10"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-3xl font-bold mb-2 text-black"
  }, "Please Sign in"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "border-2 w-20 rounded-md border-orange-300 inline-block mb-2"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex justify-center my-2"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react3.default.createElement(FaFacebookF, null), " "), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react3.default.createElement(FaGoogle, null), " "), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "",
    className: "border-2 border-green-400 rounded-full p-3 mx-1"
  }, " ", /* @__PURE__ */ import_react3.default.createElement(FaLinkedinIn, null), " ")), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "text-gray-400 my-3"
  }, "You may sign in using links above"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-gray-100 w-64 p-2  flex items-center rounded-md"
  }, /* @__PURE__ */ import_react3.default.createElement(FaRegEnvelope, {
    className: "text-gray-400 m-2"
  }), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Username",
    className: "bg-gray-100 border-gray-100 text-sm flex-1"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-gray-100 w-64 p-2 mt-3 flex items-center rounded-md"
  }, /* @__PURE__ */ import_react3.default.createElement(FaRegEnvelope, {
    className: "text-gray-400 m-2"
  }), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "pass",
    name: "Password",
    placeholder: "Username",
    className: "bg-gray-100 border-gray-100 text-sm flex-1"
  }))))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "w-2/5 text-white rounded-tr-2xl rounded-br-2xl bg-orange-300 py-36 px-12"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-3xl font-bold mb-2"
  }, "Hi, There! \u{1F44B}\u{1F3FD}"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "border-2 w-20 border-green-400 inline-block mb-2 rounded-md"
  }), /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "mb-10"
  }, "Not registered yet? ", /* @__PURE__ */ import_react3.default.createElement("br", null), " Kindly click the button below to get registered."), /* @__PURE__ */ import_react3.default.createElement(Link, {
    to: ""
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    className: "font-semibold border-2 border-green-400 rounded-full inline-block px-12 py-2 hover:bg-green-400 hover:text-black"
  }, "Sign Up"))))), /* @__PURE__ */ import_react3.default.createElement(Outlet, null)));
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/auth/index-ONNLVV4C.js.map
