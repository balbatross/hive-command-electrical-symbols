import * as React from "react";
import type { SVGProps } from "react";

export const DCP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 10 15" {...props}>
    <circle cx={5} cy={7} r={3} fill="none" stroke="#000" />
    <path stroke="#000" d="M5 10v15" />
  </svg>
);

DCP.metadata = {
    width: 10, //15,
    height: 20, //23
}