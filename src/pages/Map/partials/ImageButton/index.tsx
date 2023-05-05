import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface props {
  normal: string;
  hover: string;
  customStyle: string;
  url: string;
}

const ImageButton: React.FC<props> = ({ normal, hover, customStyle, url }) => {
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
      className={`absolute ${customStyle}`}
      src={!isHovered ? normal : hover}
      alt="ButtonImage"
      onClick={() => navigate(url)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ImageButton;
