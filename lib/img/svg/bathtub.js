const Bathtub_svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="75.494%"
          x2="45.775%"
          y1="13.765%"
          y2="121.743%"
        >
          <stop offset="0%" stopColor="#002161"></stop>
          <stop offset="100%" stopColor="#00459A" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-2"
          x1="50%"
          x2="50%"
          y1="-60.737%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00459A" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#002161"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-842 -546)">
          <g transform="translate(842 546)">
            <path fill="#FFF" fillOpacity="0" d="M0 0H14V14H0z"></path>
            <g transform="translate(1 2.059)">
              <path
                stroke="url(#linearGradient-1)"
                strokeLinecap="square"
                d="M2 1.441v3m.21-3.4L3.601 0"
              ></path>
              <path
                fill="url(#linearGradient-2)"
                d="M1.373 4.941h9.275a1 1 0 01.956 1.293l-.226.739v.968a3 3 0 01-3 3H3.634a3 3 0 01-3-3.066l.02-.902-.233-.725a1 1 0 01.952-1.307z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Bathtub_svg;
