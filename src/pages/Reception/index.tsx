import React from "react";
import ImageButton from "./partials/ImageButton";
import Background from "assets/Reception/background.png";

const Reception = () => {
  const handleClick = () => {};
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full"
      ></img>
      <div className="relative flex justify-center mt-72">
        <ImageButton content="play" onClick={handleClick}></ImageButton>
        <ImageButton content="mint nft" onClick={handleClick}></ImageButton>
      </div>
    </div>
  );
};

export default Reception;
