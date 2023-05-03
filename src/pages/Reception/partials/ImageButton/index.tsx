import React from "react";
interface props {
  content: string;
  onClick: () => void;
}
const ImageButton: React.FC<props> = ({ content, onClick }) => {
  return (
    <button
      className="bg-color-1 bg-cover bg-no-repeat bg-reception-btn-bg w-96 h-36 rounded-md text-color-2 hover:text-color-3 text-center text-7xl uppercase m-4"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ImageButton;
