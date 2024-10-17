import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainButton = ({ label, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="px-8 py-3 bg-white text-black rounded-full font-bold border-2 border-black shadow-lg flex items-center hover:bg-gray-200 transition duration-300"
    >
      {label}
      <svg
        className="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d={
            isHovered
              ? "M1 8a.5.5 0 0 1 .5-.5h12.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L14.293 8.5H1.5A.5.5 0 0 1 1 8z"
              : "M1 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"
          }
        />
      </svg>
    </button>
  );
};

export default MainButton;
