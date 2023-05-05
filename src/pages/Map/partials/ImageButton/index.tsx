import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface props {
  normal: string;
  hover: string;
  position: string;
  url: string;
}

const ImageButton: React.FC<props> = ({ normal, hover, position, url }) => {
  const navigate = useNavigate();
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
      onClick={() => navigate(url)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ImageButton;
