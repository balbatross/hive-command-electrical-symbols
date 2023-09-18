import * as React from "react";
import type { SVGProps } from "react";

export const DCP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 20 40" {...props}>
    <circle cx={5} cy={5} r={5} fill="none" stroke="#000" />
    <path stroke="#000" d="M5 10v15" />
  </svg>
);

DCP.metadata = {
    width: 6,
    height: 13
}