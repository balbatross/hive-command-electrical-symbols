import * as React from "react";
import type { SVGProps } from "react";

export const MCB1P = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="5.5 -4.5 20 60"
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}'
        }
      </style>
    </defs>
    <use xlinkHref="#mcb-1p_svg__A" x={0.5} y={0.5} />
    <symbol id="mcb-1p_svg__A" overflow="visible">
      <text fill="#000" stroke="none" fontSize={7} textAnchor="end">
        <tspan x={18.001} y={9}>
          {"1"}
        </tspan>
        <tspan x={18.001} y={46.81}>
          {"2"}
        </tspan>
      </text>
      <path
        fill="none"
        strokeWidth={0.5}
        d="M20 0v15m0 35V35l-5-20m2.181 9.039-2.768.717L13.648 22l-2.768.717.763 2.756-2.768.717"
      />
      <path
        fill="#000"
        fillOpacity={0.99}
        strokeWidth={0.5}
        d="M14.087 27.427 9.5 30.038l5.268.337z"
      />
      <path fill="none" strokeWidth={0.5} d="m18.14 28.011-3.703.855" />
    </symbol>
  </svg>
);


MCB1P.metadata = {
  width: 20,
  height: 60,
  ports: [
    {
      id: '1',
      x: 12,
      y: 0
    },
    {
      id: '2',
      x: 12,
      y: 58
    }
  ]
}