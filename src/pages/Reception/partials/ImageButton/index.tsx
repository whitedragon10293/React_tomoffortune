import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
  content: string;
  url?: string;
  to?: string;
}
const ImageButton: React.FC<props> = ({ content, url, to }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-color-1 bg-reception-btn-bg w-80 h-20 rounded-md text-color-2 hover:text-color-3 text-center text-2xl md:text-5xl uppercase m-4"
      onClick={() => {
        url && navigate(url);
        to && window.open(to, "_blank");
      }}
      style={{ backgroundSize: "100% 100%" }}
    >
      {content}
    </button>
  );
};

export default ImageButton;
