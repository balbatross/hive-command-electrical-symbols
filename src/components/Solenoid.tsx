import * as React from "react";
import type { SVGProps } from "react";
export const Solenoid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#fff"
    fillRule="evenodd"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    fontFamily="Roboto"
    fontSize={14}
    textAnchor="middle"
    viewBox="-10 -10 61 71"
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}.solenoid_svg__E{stroke-width:.5}'
        }
      </style>
    </defs>
    <use xlinkHref="#solenoid_svg__A" x={0.5} y={0.5} />
    <symbol id="solenoid_svg__A" overflow="visible">
      <path fill="none" d="M20 0v20M20 30v20" className="solenoid_svg__E" />
      <path d="M10 20h20v10H10z" className="solenoid_svg__E" />
      <path
        fill="none"
        strokeDasharray="1.5 2"
        d="M30 25h8"
        className="solenoid_svg__E"
      />
      <path d="M36 20h4l-4 10h4z" className="solenoid_svg__E" />
      <text
        fontSize={7}
        style={{
          stroke: "none",
          fill: "#000",
        }}
        textAnchor="end"
      >
        <tspan x={18} y={9}>
          {"A1"}
        </tspan>
        <tspan x={18} y={46.81}>
          {"A2"}
        </tspan>
      </text>
    </symbol>
  </svg>
);
