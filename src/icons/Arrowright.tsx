import * as React from "react"
const Arrowright = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#f7f3f3"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#f4f4f6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 12h16m0 0-6-6m6 6-6 6"
    />
  </svg>
)
export default Arrowright