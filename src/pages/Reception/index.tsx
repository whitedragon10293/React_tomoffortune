import React from "react";
import ImageButton from "./partials/ImageButton";
import Background from "assets/Reception/background.png";
import ComingSoon from "assets/Reception/Comingsoon.png";

const Reception = () => {
  return (
    <>
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-screen h-screen"
      ></img>
      <img
        src={ComingSoon}
        style={{ position: "fixed", bottom: 0, zIndex: 100, width: "25%" }}
        alt="coming soon"
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
