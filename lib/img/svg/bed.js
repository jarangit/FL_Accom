const Bed_svg = () => {
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
          x1="50%"
          x2="50%"
          y1="0%"
          y2="76.259%"
        >
          <stop offset="0%" stopColor="#002161"></stop>
          <stop offset="100%" stopColor="#A7BACA"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-2"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="127.272%"
        >
          <stop offset="0%" stopColor="#002161"></stop>
          <stop offset="100%" stopColor="#267DBD" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-766 -546)">
          <g transform="translate(766 546)">
            <path fill="#FFF" fillOpacity="0" d="M0 0H14V14H0z"></path>
            <g transform="translate(1 2)">
              <rect
                width="10"
                height="5"
                x="1"
                y="0"
                fill="url(#linearGradient-1)"
                rx="1"
              ></rect>
              <rect
                width="3"
                height="2"
                x="7"
                y="2"
                fill="#002161"
                rx="1"
              ></rect>
              <rect
                width="3"
                height="2"
                x="2"
                y="2"
                fill="#002161"
                rx="1"
              ></rect>
              <rect
                width="12"
                height="6"
                x="0"
                y="4"
                fill="url(#linearGradient-2)"
                rx="1"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Bed_svg;
