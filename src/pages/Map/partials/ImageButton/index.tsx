import React, { useState } from "react";

interface props {
  normal: string;
  hover: string;
  position: string;
  onClick: () => void;
}

const ImageButton: React.FC<props> = ({ normal, hover, position, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <img
      className={`absolute ${position} w-1/4`}
      src={!isHovered ? normal : hover}
      alt="ButtonImage"
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ImageButton;
