import * as React from "react";
import type { SVGProps } from "react";

export const DCP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 26" {...props}>
    <circle cx={6} cy={6} r={5} fill="none" stroke="#000" />
    <path stroke="#000" d="M6 11v14" />
  </svg>
);

DCP.metadata = {
    width: 6,
    height: 13
}