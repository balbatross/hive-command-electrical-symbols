import * as React from "react";
import type { SVGProps } from "react";
export const MCB2P = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="5.5 -4.5 30 60"
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}.mcb-2p_svg__B{fill:#000}.mcb-2p_svg__C{stroke-width:.5}'
        }
      </style>
    </defs>
    <use xlinkHref="#mcb-2p_svg__A" x={0.5} y={0.5} />
    <symbol id="mcb-2p_svg__A" overflow="visible">
      <g fill="none" className="mcb-2p_svg__C">
        <path d="M20 0v15m0 35V35l-5-20M40 0v15m0 35V35l-5-20" />
        <path strokeDasharray="1.5 2" d="M37.5 25h-20" />
      </g>
      <path
        fillOpacity={0.99}
        d="M14.087 27.427 9.5 30.038l5.268.337z"
        className="mcb-2p_svg__B mcb-2p_svg__C"
      />
      <path fill="none" d="m18.14 28.011-3.703.855" className="mcb-2p_svg__C" />
      <path
        fillOpacity={0.99}
        d="M34.087 27.427 29.5 30.038l5.268.337z"
        className="mcb-2p_svg__B mcb-2p_svg__C"
      />
      <path
        fill="none"
        d="m38.14 28.011-3.703.855m-17.756-4.827-2.768.717L13.148 22l-2.768.717.763 2.756-2.768.717m28.306-2.151-2.768.717L33.148 22l-2.768.717.763 2.756-2.768.717"
        className="mcb-2p_svg__C"
      />
      <text
        className="mcb-2p_svg__B"
        style={{
          stroke: "none",
          textAnchor: "end",
          fontSize: 7,
        }}
      >
        <tspan x={18} y={9}>
          {"1"}
        </tspan>
        <tspan x={18} y={46.81}>
          {"2"}
        </tspan>
        <tspan x={38} y={9}>
          {"3"}
        </tspan>
        <tspan x={38} y={46.81}>
          {"4"}
        </tspan>
      </text>
    </symbol>
  </svg>
);

MCB2P.metadata = {
  width: 30,
  height: 60
}