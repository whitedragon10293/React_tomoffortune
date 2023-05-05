import React from "react";

import ImageButton from "./partials/ImageButton";

import OasisBtn from "assets/Map/oasis-btn.png";
import OasisBtnHover from "assets/Map/oasis-btn-hover.png";

import UnknownBtn from "assets/Map/unknown-btn.png";
import UnknownBtnHover from "assets/Map/unknown-btn-hover.png";

import TombsBtn from "assets/Map/tombs-btn.png";
import TombsBtnHover from "assets/Map/tombs-btn-hover.png";

import MapImage from "assets/Map/Map.png";
import Background from "assets/Map/background.png";

const Map = () => {
  return (
    <>
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full"
      ></img>
      <div className="container">
        <div className="w-full lg:w-1/2 xl:w-[40%] m-auto relative">
          <img src={MapImage} alt="map" className="w-full h-full" />
          <ImageButton
            normal={OasisBtn}
            hover={OasisBtnHover}
            url="/oasis"
            customStyle="top-[35%] left-[47%] w-1/4"
          />
          <ImageButton
            normal={UnknownBtn}
            hover={UnknownBtnHover}
            url="/unknown"
            customStyle="top-[62%] left-[3%] w-1/4"
          />
          <ImageButton
            normal={TombsBtn}
            hover={TombsBtnHover}
            url="/tombs"
            customStyle="top-[65%] left-[68%] w-1/4"
          />
        </div>
      </div>
    </>
  );
};

export default Map;
