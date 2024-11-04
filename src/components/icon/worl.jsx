import * as React from "react"

const WorldIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
    </g>
  </svg>
)
export default WorldIcon