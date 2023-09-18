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
exports.Blower = void 0;
const React = __importStar(require("react"));
const Blower = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", viewBox: "-10 -10 61 61" }, props),
    React.createElement("use", { xlinkHref: "#blower_svg__a", x: 0.5, y: 0.5 }),
    React.createElement("symbol", { id: "blower_svg__a", overflow: "visible" },
        React.createElement("g", { strokeWidth: 0.5 },
            React.createElement("path", { d: "M31.432 36.432C28.196 38.683 24.258 40 20 40s-8.196-1.317-11.432-3.568A19.947 19.947 0 0 1 0 20 19.96 19.96 0 0 1 20 0a19.96 19.96 0 0 1 20 20 19.938 19.938 0 0 1-8.568 16.432z" }),
            React.createElement("path", { strokeLinecap: "square", d: "m2.727 30 9.091-28.182m16.364 0L37.273 30" }),
            React.createElement("path", { d: "M8.25 27.063Q12.382 28.464 19.893 20 7.157 22.504 7.779 26.61l.471.453z" }),
            React.createElement("path", { d: "M19.569 6.432q-3.28 2.878.295 13.615 4.2-12.282.333-13.796l-.627.182zM31.643 27.063Q27.511 28.464 20 20q12.737 2.504 12.114 6.61l-.471.453z" })))));
exports.Blower = Blower;
exports.Blower.metadata = {
    width: 60,
    height: 60
};
