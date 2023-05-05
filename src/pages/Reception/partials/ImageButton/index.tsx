import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
  content: string;
  url: string;
}
const ImageButton: React.FC<props> = ({ content, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-color-1 bg-reception-btn-bg w-80 h-20 rounded-md text-color-2 hover:text-color-3 text-center text-2xl md:text-5xl uppercase m-4"
      onClick={() => navigate(url)}
      style={{ backgroundSize: "100% 100%" }}
    >
      {content}
    </button>
  );
};

export default ImageButton;
