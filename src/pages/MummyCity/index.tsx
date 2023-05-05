import React from "react";
import ImageButton from "pages/Map/partials/ImageButton";

import MapImage from "assets/MummyCity/Map.png";
import Background from "assets/Map/background.png";

import ExitBtn from "assets/MummyCity/Exit.png";
import ExitBtnHover from "assets/MummyCity/Exit-hover.png";

import MarketBtn from "assets/MummyCity/Market.png";
import MarketBtnHover from "assets/MummyCity/Market-hover.png";

const MummyCity = () => {
  return (
    <>
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full"
      ></img>
      <div className="container">
        <div className="w-full lg:w-2/3 m-auto relative">
          <img src={MapImage} alt="map" className="w-full h-full" />
          <ImageButton
            normal={ExitBtn}
            hover={ExitBtnHover}
            url="/map"
            customStyle="top-[50%] left-[3%] w-[10%] -translate-x-[10%] -translate-y-[50%]"
          />
          <ImageButton
            normal={MarketBtn}
            hover={MarketBtnHover}
            url="/oasis"
            customStyle="top-[50%] right-[3%] w-[15%] translate-x-[5%] -translate-y-[50%]"
          />
        </div>
      </div>
    </>
  );
};

export default MummyCity;
