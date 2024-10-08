
import React from "react";


type svgProps = {
    fill ?: string,
    transform ?: string,
}

function MainIcon({fill = 'black' ,transform ="rotate(180)"} : svgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      transform={transform}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M.923.02A.75.75 0 00.02.923l2.476 10.433a.75.75 0 00.587.563l4.245.822a.75.75 0 00.142.864l2.175 2.175a.75.75 0 001.06 0l5.075-5.075a.75.75 0 000-1.06L13.605 7.47a.75.75 0 00-.864-.142l-.822-4.245a.75.75 0 00-.563-.587L.923.02zm10.529 8.542l-.913-4.718L3.15 2.09l3.08 3.08a2.25 2.25 0 11-1.06 1.06L2.09 3.15l1.753 7.388 4.718.913 2.89-2.89zM9.06 13.075l4.014-4.014 1.114 1.114-4.014 4.014-1.114-1.114zM6.45 7.201a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>

  );
}

export default MainIcon;