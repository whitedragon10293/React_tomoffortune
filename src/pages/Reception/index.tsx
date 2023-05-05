import React from "react";
import ImageButton from "./partials/ImageButton";
import Background from "assets/Reception/background.png";

const Reception = () => {
  return (
    <>
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-screen h-screen"
      ></img>
      <div className="container w-full h-full flex justify-center items-center relative">
        <div className="relative flex flex-col md:flex-row justify-center items-center mt-72 w-full">
          <ImageButton content="play" url="/map"></ImageButton>
          <ImageButton content="mint nft" url="/mint"></ImageButton>
        </div>
      </div>
    </>
  );
};

export default Reception;
