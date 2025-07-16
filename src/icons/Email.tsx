import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#4b0b0b"
    stroke="#4b0b0b"
    strokeWidth={3.8}
    viewBox="-13 -13 126 126"
    {...props}
  >
    <rect
      width={126}
      height={126}
      x={-13}
      y={-13}
      fill="#f9f0f0"
      stroke="none"
      strokeWidth={0}
      rx={63}
    />
    <path d="M48.7 55c.8.7 1.9.7 2.7 0l28.3-26.2c.5-1 .4-2.6-1.6-2.6l-56 .1c-1.5 0-2.7 1.4-1.6 2.6L48.7 55z" />
    <path d="M80 40c0-1.3-1.6-2-2.5-1.1l-22 20.4c-1.5 1.4-3.4 2.1-5.4 2.1s-3.9-.7-5.4-2.1L22.6 38.9c-1-.9-2.5-.2-2.5 1.1v26c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6-.1 0-.1-18-.1-26z" />
  </svg>
)
export default SvgComponent
