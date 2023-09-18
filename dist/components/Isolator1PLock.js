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
exports.Isolator1PLock = void 0;
const React = __importStar(require("react"));
const Isolator1PLock = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", fontFamily: "Roboto", fontSize: 14, textAnchor: "middle", viewBox: "5.5 -4.5 20 60" }, props),
    React.createElement("defs", null,
        React.createElement("style", null, '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}')),
    React.createElement("use", { xlinkHref: "#isolator-1p-lock_svg__A", x: 0.5, y: 0.5 }),
    React.createElement("symbol", { id: "isolator-1p-lock_svg__A", overflow: "visible" },
        React.createElement("g", { fill: "none", strokeWidth: 0.5 },
            React.createElement("path", { d: "M30 0v15m0 35V35l-5-20M27.5 15h5" }),
            React.createElement("path", { strokeDasharray: "1.5 2", d: "M27.5 25H10" }),
            React.createElement("path", { d: "M10 22.5v5M22.5 20v2.5M15 25v-3h5v3" })),
        React.createElement("text", { fill: "#000", stroke: "none", fontSize: 7, textAnchor: "end" },
            React.createElement("tspan", { x: 28, y: 9 }, "1"),
            React.createElement("tspan", { x: 28, y: 46.81 }, "2")))));
exports.Isolator1PLock = Isolator1PLock;
exports.Isolator1PLock.metadata = {
    width: 20,
    height: 60
};
