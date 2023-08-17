"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SvgEarth = (props) => ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", fontFamily: "Roboto", fontSize: 14, textAnchor: "middle", viewBox: "-10 -10 41 51" }, props, { children: [(0, jsx_runtime_1.jsx)("style", { children: ".earth_svg__E{stroke-width:.5}" }), (0, jsx_runtime_1.jsx)("use", { xlinkHref: "#earth_svg__A", x: 0.5, y: 0.5 }), (0, jsx_runtime_1.jsx)("symbol", { id: "earth_svg__A", overflow: "visible", children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M10 0v15M5 15h10M7.5 17.5h5M8.75 20h2.5", className: "earth_svg__E" }) })] })));
exports.default = SvgEarth;
