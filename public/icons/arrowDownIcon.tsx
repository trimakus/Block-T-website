import * as React from "react";

const ArrowDownIcon = ({width=8,height=8}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 12 12"
  >
    <g clipPath="url(#clip0_8_7541)">
      <path
        fill="#000"
        d="M11.84 2.887a.545.545 0 0 0-.771 0L6 7.956.931 2.887a.545.545 0 1 0-.771.771l5.454 5.455a.545.545 0 0 0 .772 0l5.454-5.455a.545.545 0 0 0 0-.771"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_8_7541">
        <path fill="#fff" d="M0 0h12v12H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default ArrowDownIcon;
