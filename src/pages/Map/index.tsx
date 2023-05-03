import React from "react";
import ImageButton from "./partials/ImageButton";
import MapImage from "assets/Map/Map.png";

const Map = () => {
  const handleClick = () => {};
  return (
    <div className="container w-screen h-screen flex justify-center items-center relative">
      <img src={MapImage} alt="map" className="w-2/5" />
      <ImageButton content="The Oasis" direction="down" onClick={handleClick} />
      <ImageButton content="???" direction="up" onClick={handleClick} />
      <ImageButton content="Tombs" direction="up" onClick={handleClick} />
    </div>
  );
};

export default Map;
