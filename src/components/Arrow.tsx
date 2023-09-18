import * as React from "react";
import type { SVGProps } from "react";

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path stroke="#000" strokeWidth={2} d="M0 5h10" />
    <path d="m10 0 10 5-10 5z" />
  </svg>
);

Arrow.metadata = {
  width: 20,
  height: 10
}