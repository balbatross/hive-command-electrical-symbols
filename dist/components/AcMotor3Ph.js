"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const SvgAcMotor3Ph = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", fontFamily: "Roboto", fontSize: 14, textAnchor: "middle", viewBox: "-10 -10 101 81" }, props),
    React.createElement("defs", null,
        React.createElement("style", null, '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}.ac-motor-3ph_svg__B{fill:#000}.ac-motor-3ph_svg__C{stroke:none}.ac-motor-3ph_svg__F{stroke-width:.5}')),
    React.createElement("use", { xlinkHref: "#ac-motor-3ph_svg__A", x: 0.5, y: 0.5 }),
    React.createElement("symbol", { id: "ac-motor-3ph_svg__A", overflow: "visible" },
        React.createElement("circle", { cx: 29, cy: 30, r: 16, className: "ac-motor-3ph_svg__F" }),
        React.createElement("path", { d: "M24.462 21.308h1.211l2.324 5.801 2.324-5.801h1.216v7.109H30.6v-2.769l.088-2.988-2.334 5.757h-.718l-2.329-5.742.093 2.974v2.769h-.937v-7.109z", className: "ac-motor-3ph_svg__B ac-motor-3ph_svg__C" }),
        React.createElement("path", { fill: "none", d: "M36 35.356c-5 7.5-5-7.5-10 0", className: "ac-motor-3ph_svg__F" }),
        React.createElement("path", { d: "M21.301 35.672v-.664h.611q.576-.009.905-.303.33-.294.33-.795 0-1.125-1.121-1.125-.527 0-.842.301-.314.301-.314.798h-.813q0-.76.556-1.263.556-.503 1.413-.503.905 0 1.419.479t.514 1.331q0 .418-.27.809-.27.391-.736.584.527.167.815.554.288.387.288.945 0 .861-.562 1.367-.562.505-1.463.505t-1.466-.488Q20 37.716 20 36.916h.817q0 .505.33.809.33.303.883.303.589 0 .901-.308.312-.308.312-.883 0-.558-.343-.857-.343-.299-.989-.308H21.3z", className: "ac-motor-3ph_svg__B ac-motor-3ph_svg__C" }),
        React.createElement("path", { fill: "none", d: "M30 0v14M49.998 0v15.319l-7.437 6.118M10 0v15.16L15.5 21", className: "ac-motor-3ph_svg__F" }),
        React.createElement("text", { className: "ac-motor-3ph_svg__B ac-motor-3ph_svg__C", fontSize: 7, style: {
                textAnchor: "end",
            } },
            React.createElement("tspan", { x: 8.004, y: 8.998 }, "U1"),
            React.createElement("tspan", { x: 28.004, y: 8.998 }, "V1"),
            React.createElement("tspan", { x: 48.004, y: 8.998 }, "W1")))));
exports.default = SvgAcMotor3Ph;
