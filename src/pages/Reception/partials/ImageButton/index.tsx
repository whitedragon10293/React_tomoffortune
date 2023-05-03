import React from "react";
interface props {
  content: string;
  onClick: () => void;
}
const ImageButton: React.FC<props> = ({ content, onClick }) => {
  return (
    <button
      className="bg-color-1 bg-reception-btn-bg w-80 h-24 rounded-md text-color-2 hover:text-color-3 text-center text-5xl uppercase m-4"
      onClick={onClick}
      style={{ backgroundSize: "100% 100%" }}
    >
      {content}
    </button>
  );
};

export default ImageButton;
