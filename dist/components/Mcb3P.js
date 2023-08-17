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
const SvgMcb3P = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#fff", fillRule: "evenodd", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", fontFamily: "Roboto", fontSize: 14, textAnchor: "middle", viewBox: "-10 -10 91 71" }, props),
    React.createElement("defs", null,
        React.createElement("style", null, '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA3AAA8AAAAAF/wAAiMSAAAAAAAAAAAAAAAAAAAAAAAAAABHUE9TAAABWAAAAB4AAAAeRHRMdU9TLzIAAAF4AAAAUQAAAGB0bxD+Y21hcAAAAcwAAABLAAABSgpeB89jdnQgAAACGAAAAFQAAABUK6gHnWZwZ20AAAJsAAABPAAAAbx3+GCrZ2FzcAAAA6gAAAAMAAAADAAIABNnbHlmAAADtAAABpAAAA4MzWWcHGhlYWQAAApEAAAANgAAADb9pNHiaGhlYQAACnwAAAAbAAAAJAduArpobXR4AAAKmAAAAEQAAABsYjEJ1WxvY2EAAArcAAAAOAAAADg0UDfwbWF4cAAACxQAAAAgAAAAIAIvAeRuYW1lAAALNAAAAXkAAAJ/70AFmXBvc3QAAAywAAAAFAAAACD/bQB/cHJlcAAADMQAAAD7AAABSaJm+skAAQAAAAoAHAAcAAFERkxUAAgABAAAAAD//wAAAAAAAHicY2BhXsw4gYGVgYF1FqsxAwOjPIRmvsiQxsTAwADCENDAwKAuAGEqgAh3f393Bgcg24yN4R8DQxr7LCYgh3E+SI7FinUDkKPAwAwACSUK6QAAAHicY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmBgUGMz+/wfyFRgM//////D/Rah6IGBkYyAIGNEFmJhZWNnYCWscIgAABZYJOAAAKgCdAIAAigB4ANQAZABOAFoAhwBgAFYANAI8ALwAsgCOAMQAAAAU/mAAFAKbACADIQALBDoAFASNABAFsAAUBhgAFQGmABEGwAAOBtkABgAAAAB4nF2QvU7DMBSFbRKg5UdiRLKQbEWFtrLFzpQhqYS6BNLBl4Ef0Uq0Ey+AlAGkyAPPcrKlWx+nL4HATaECFh+fc+VP5xpMD9HObMX5O9X88w2vJ1U7uLs14FrKdJqA3xtsafC+Mgi0HCDoDK5tRNJJdzl2ciCfHsYIO436wcTRuQTL7dSfI6sQk9hcJ0QXBuEKEzYYRx4w+wbMGoB//2GwrYcSwWlmryyKRCBOSCglUywyi0UiFJHBzqaj15fp8brtrsZO36C1JuQWsQAj59YuUiicE85v8OMXf33N2f8g/h34H0hrXmTNpIiUWAWRipRvSIlBWw9zm/qKylfc0+imBvsaPS8HujrjpXS5nccsZI91i5UjO2fdYPlMApGHy7I+YptsteWhRlzWkt3YqscSMWe9YJmQ+QLD+okZAAEAAgAIAAL//wAPeJy9VmtsFFUY/e6dmZ1u2S4zZXfbUlq6XVhKgPSxtKRIiyDP8ijKsyFAIkqQCkJBoDxasLVSQEuLPGypoBgqNOjMaKpANFEgRIi4GOVpUCKaSIhELQkoO/WbmS6daQsBUfvjTu/s7r3nnO98517g4BkAJoWTgAEb2MEBXWGJ4hBEMTpbcggSBLXRpo92fYwKggQjZ0g0NV6mibkF+gRwAtG5BQpLAX+pcMaDNx4R+kOOdDQrDuNNlP6QqCA7Hc1p6b29opcR7UQkjJdkEi+TEhpCj2Wpv6qHieMqZVSV0FAIOOnPdzg+tJau+EukK0Oz6ewNdDZY/ggcAKAXuI+QzWADKIfYuI5AgdMQsKkyQ6TIfjO85+ObCxTKaG8RkE/kMnsH6IXD6iYanQDsmcp3TxjrzwJgA9wxiIF8Y30BlxTary/HtK0q0aDCCDHadoIg200fCILkCCruGMHY1JtJcknmQL8v2eb2DewVyPC4XXbiZQN3RpFbi6duXLrxjUOEuXDqOgqzil6Cl2la6e6pRTX1m7+49a18Tj2nFhgYZ7dcZ24jRj+sNjBGIayoMMY4nMRpGkBUnAYKUpWvgMxSdgNZoqRq/80BUiRFCbLNhDVKNwAIst+kVze/Xsc4QeoRxFHu2fZZWjoJIBvBIJOlk7HxicTtYpN6ZQZcnkBGFnLt4yMVm8q2t6ysOhQ6evra6gUry1pAnae2HN5eUvHarq2bmAxaUUSgcsnBny5+Pkfp75dKj/18uWnpxs1lpRuoxpdCJtZkEno4EpyQZzC2I0l7mDGLE1ZjTOyshpekytREDe1NBKlLUImwddHdqX9LI+D2iT4RyxIgXpFnKk6ePBx6jm4+HlpPjnvILzvU98hTC5nf7mTTkyma7rUt19kBiCMBu0rfmODGJIxCLwKiwM1k1iQiH0U0UHyq3N30luO7a29RdjGo1cJlAswLUkIwLT2eeN1eBqWNdruoL9nfJ5BIDFV9yV3J6Tx6LfRB/8INJ679cfGzZvF9ccvy9Vt3lxePTKcX6dlGdelQ9fYPV9TQ2U/Wlkp1NXJmiqZlOXLowcngAi88CW2m7sACrUAsLKCVhdviGrmHxRNun43l70KGHCJAbybZxrvDhmDyk8+3gGvpiU9/vHn6jHqHTCeTv56zp+fbxWurqjm5nr11pVxt/uaK+jsZFhpNash+LrS4aNqID7/7eNv2Q4b/h9M62sgdAQ9MUyJiYhGXQcSJ2J2WVvVgq3qotVWdHo2IU5AjTB84dYO4PE7DGeiJrLudmpWE3u5KvbQxtJ/0X/j4kHGj6xtIRG3hFIlU0brnSfd5I9NzxmcXvV66aH5hfrWOMZduobWI0Q+blaQ+KZ1j1FvVo7VqnNNo1aYXoBSqgJmlDMV2beoKPSFVm+kti5j5NsxKpNPob+xZtu2tS+9ZJcFYEZs2iVqaNsNErLVrtQH9dbdrsWntU/LGDB2VPa5+75rKXaOGbzuwoXzfm/lPjBq7awY7LydtwOBA36dXF88fNDOub9WCtSWFA4YMCSyhyHsVrSM3sEdsMEwhfMRd3h1j2mONadoxpolP5DGmyY3682RuNBa9IHvdi1r90ciNTFLn9Y9tH9Vua/1dbk0YtIHrXjYwovoB6w+dlV/TAYcbjBt1yDIJEAanB4d+TnGkowAIUz+jTOQhzD235SatRe5+WNYJ6bbs18u/BlWIbVoHW2APmqiDf4AP+4e290874ygJ/qTWzHxk/5BT9/YPRbWAHkHd2md97H2ynnaW9V1s7bPe7cv09sGsD4g8nVRYWK9W2kjxW2r59yLp99L+/fOoTfUQbw+jfjNR5wbEEW/J+tjOst7eWdbHUXPWx1myvhu1ZH18OOv5VkH1rPeEleYXZ5DL6l7PsLx1VXsqihtsdZHrh42ZmDf2MVJGasoPJFQWr6kueXbuuBG5E/rp5+U0xN7IJEI3TA9zxofRO3DiCGe8CafNoZfeliq7TAgdghxPrRnPmpDmkIFZg9oifqCfpohqc8yYouWv7C7f1HD5y5LABHHy0JyJo5nEMnppQvWKZbX7dgSCVzl1Uf+k5ClT89eM1+pOd9Ij3EG97nD/ajFHLdXCWtFXaQP+Nh7gH+nIxt9DR1y3kWvSdYR/TJtruidt3KMEz2NP63kMD3B8jn2k45PAdNy0Qr8/Q/gWXGG9BZvvwPAvXVrNd1b4ny6O1nsjPORtz3rfg//kLrYT1097iNrPfZTa/w2I/iwAAAEAAAACIxL2OtbXXw889QAZCAAAAAAAxPARLgAAAADVAVL0ADX/7ARQBcQAAAAJAAIAAAAAAAB4nGNgZGBgz/nHw8DAMokBAhgZUIE0ADwxAjEAeJxj7mFIYfzNwMBSx7AKiGOBOA6ITYF4FhC3ML1ncAJiOyCugrKroHwzII4G4jBkNks9Qx1zJUM4hlmTGGYAADaqHVYAAABiAGgAmADqAWIBpgIIAmoCvAM4A2oDvAPoBFgEnAT6BVQFcgWeBdAGCAYaBkQGfgaeBs4HBgABAAAAGwAnAAUAAAAAAAEAAAAAAA4AAAIAAbwAAAAAeJxdks9qwkAQxr/4r5SKFHropYeFQg8FN1EpgvZiRawgHmLxUijEuEQhZEMSFZ+j79T36QMU+iUuFptldn8z38zsLATANb5g4fjZtCNbqNE7cgkXeDJcZvzZcIX8YriKG7warqGBd8MNPGLDKqtySe8Dn4Yt1PFtuMSsH8Nl1K0rwxXyreEqHqx7wzXcWRPDDbxZaqjjQ7IJ1ploO62WGGsdhEpMIl+KQRgKN5dS4apUJTu1kq5e6ky7KtiGXmKcYl+oJN3oSLRlq9Pt5826R6FpktdZFvdse7/fSy/2/LWSOgnscOOrKFWpPZ0MR7P5qNmWDobQiHFAwucHWCODQBsOWlwCY6qa8RCK3gQRfEjSgJGQp3uqSgtP8VTsteO+YqbL6iUto+VqgC3rPGacK3+8KOpT9tW8LZ9FcpIOuuifJuueVTT/dc6nyfimHn8MG/tiSSoxzaeq6GnmBVRD3uMzEhVzp4xM+cohRphhzr1Z3O/8AvqeboUAAAB4nGNgZgCD/1kMKQyYQBoAKjoB7Hic28CjvYFBm2ETowCTNuMmQUYguV3QykBVWoCBQ5thO6OHtZ6iCJC5nSnCw0IDzGIOcjZRFQOxWOJ8bbQlQSxWMx0lSX4Qi60w1s1IGsRin1geY6UMYnHUpQdYSoFYnCGuZmpgU7jKErzNZEEs7uYUP4g6npubupJtQCxeEQEeTjYQi8/GSF1GEMTidzDRlAXrFQhwhLiKYZMQNzvQAwqutZkSLpvspRiLN8WDiHoQoS/FWLLJH0Tkg4h+ELEeRPwHEfJSjKUgHaUgHaUgHaWb+OVAekHEexAhLwdUFw8i+kHEeRDxH0TYywEV54MIfQWgunwgAQBTHFWSAA==)format("woff");font-weight:400;font-style:normal}.mcb-3p_svg__B{fill:#000}.mcb-3p_svg__C{stroke-width:.5}.mcb-3p_svg__G{fill-opacity:.99}')),
    React.createElement("use", { xlinkHref: "#mcb-3p_svg__A", x: 0.5, y: 0.5 }),
    React.createElement("symbol", { id: "mcb-3p_svg__A", overflow: "visible" },
        React.createElement("text", { className: "mcb-3p_svg__B", style: {
                stroke: "none",
                textAnchor: "end",
                fontSize: 7,
            } },
            React.createElement("tspan", { x: 18.002, y: 9 }, "1"),
            React.createElement("tspan", { x: 18.002, y: 46.81 }, "2"),
            React.createElement("tspan", { x: 38.001, y: 9 }, "3"),
            React.createElement("tspan", { x: 38.001, y: 46.81 }, "4"),
            React.createElement("tspan", { x: 58, y: 9 }, "5"),
            React.createElement("tspan", { x: 58, y: 46.81 }, "6")),
        React.createElement("g", { fill: "none", className: "mcb-3p_svg__C" },
            React.createElement("path", { d: "M20 0v15m0 35V35l-5-20M40 0v15m0 35V35l-5-20M60 0v15m0 35V35l-5-20" }),
            React.createElement("path", { strokeDasharray: "1.5 2", d: "M57.5 25h-40" }),
            React.createElement("path", { d: "m16.681 24.039-2.768.717L13.148 22l-2.768.717.763 2.756-2.768.717m28.306-2.151-2.768.717L33.148 22l-2.768.717.763 2.756-2.768.717m28.306-2.151-2.768.717L53.148 22l-2.768.717.763 2.756-2.768.717" })),
        React.createElement("path", { d: "M14.087 27.427 9.5 30.038l5.268.337z", className: "mcb-3p_svg__B mcb-3p_svg__C mcb-3p_svg__G" }),
        React.createElement("path", { fill: "none", d: "m18.14 28.011-3.703.855", className: "mcb-3p_svg__C" }),
        React.createElement("path", { d: "M34.087 27.427 29.5 30.038l5.268.337z", className: "mcb-3p_svg__B mcb-3p_svg__C mcb-3p_svg__G" }),
        React.createElement("path", { fill: "none", d: "m38.14 28.011-3.703.855", className: "mcb-3p_svg__C" }),
        React.createElement("path", { d: "M54.087 27.427 49.5 30.038l5.268.337z", className: "mcb-3p_svg__B mcb-3p_svg__C mcb-3p_svg__G" }),
        React.createElement("path", { fill: "none", d: "m58.14 28.011-3.703.855", className: "mcb-3p_svg__C" }))));
exports.default = SvgMcb3P;
