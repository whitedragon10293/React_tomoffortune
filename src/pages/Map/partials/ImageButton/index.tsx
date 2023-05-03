import React from "react";

interface props {
  direction: "up" | "down";
  content: string;
  onClick: () => void;
}

const ImageButton: React.FC<props> = ({ direction, content, onClick }) => {
  return (
    <button
      className={`${
        direction === "down"
          ? "bg-map-btn-down-bg hover:bg-map-btn-down-bg-hover"
          : "bg-map-btn-up-bg hover:bg-map-btn-up-bg-hover"
      } w-80 h-24 rounded-md text-color-3 hover:text-color-6 text-center text-4xl relative`}
      onClick={onClick}
      style={{ backgroundSize: "100% 100%" }}
    >
      <span
        className={`absolute ${
          direction === "down" ? "top-5" : "bottom-5"
        } left-0 w-full text-center`}
      >
        {content}
      </span>
    </button>
  );
};

export default ImageButton;
