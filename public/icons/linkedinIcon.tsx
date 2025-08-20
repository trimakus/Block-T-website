import * as React from "react";

const LinkedinIcon = ({width=40,height=40}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 40 40"
  >
    <rect
      width="39"
      height="39"
      x="0.5"
      y="0.5"
      stroke="#E2EAEE"
      rx="19.5"
    ></rect>
    <path
      fill="#ECA400"
      d="M29 9.5H10.995c-.825 0-1.495.68-1.495 1.514v17.972c0 .834.67 1.514 1.495 1.514H29c.825 0 1.5-.68 1.5-1.514V11.014A1.51 1.51 0 0 0 29 9.5m-13.153 18h-3.113V17.478h3.118V27.5zM14.29 16.11a1.806 1.806 0 0 1 0-3.61c.993 0 1.804.81 1.804 1.805 0 .998-.806 1.804-1.804 1.804M27.514 27.5h-3.112v-4.875c0-1.163-.024-2.658-1.618-2.658-1.621 0-1.87 1.266-1.87 2.574V27.5h-3.112V17.478h2.986v1.369h.042c.417-.788 1.434-1.617 2.948-1.617 3.15 0 3.736 2.076 3.736 4.776z"
    ></path>
  </svg>
);

export default LinkedinIcon;
