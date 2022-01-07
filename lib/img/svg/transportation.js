const Transportation_svg = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox=" 0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          stroke="#002161"
          d="M18 3.5c.414 0 .79.168 1.06.44.272.27.44.646.44 1.06v12c0 .414-.168.79-.44 1.06a1.49 1.49 0 01-1.06.44H6a1.49 1.49 0 01-1.06-.44A1.495 1.495 0 014.5 17V5c0-.414.168-.79.44-1.06A1.49 1.49 0 016 3.5z"
        ></path>
        <circle cx="8.5" cy="15.5" r="1" stroke="#002161"></circle>
        <circle cx="15.5" cy="15.5" r="1" stroke="#002161"></circle>
        <rect
          width="9"
          height="6"
          x="7.5"
          y="6.5"
          stroke="#002161"
          rx="2"
        ></rect>
        <path
          stroke="#002161"
          d="M16.063 18.502L18.5 21.5M8.062 18.502L5.625 21.5"
        ></path>
      </g>
    </svg>
  );
};

export default Transportation_svg;
