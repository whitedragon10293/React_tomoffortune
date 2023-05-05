import React from "react";
import ImageButton from "pages/Map/partials/ImageButton";

import MapImage from "assets/MummyCity/Map.png";
import Background from "assets/MummyCity/Background.png";

import ExitBtn from "assets/MummyCity/Exit.png";
import ExitBtnHover from "assets/MummyCity/Exit-hover.png";

import MarketBtn from "assets/MummyCity/Market.png";
import MarketBtnHover from "assets/MummyCity/Market-hover.png";

import ThroneBtn from "assets/MummyCity/Throne.png";
import ThroneBtnHover from "assets/MummyCity/Throne-hover.png";

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
            customStyle="top-[50%] left-0 w-[10%] translate-x-[20%] -translate-y-[50%]"
          />
          <ImageButton
            normal={ThroneBtn}
            hover={ThroneBtnHover}
            url=""
            customStyle="top-0 left-[50%] w-[15%] -translate-x-[50%] translate-y-[30%]"
          />
          <ImageButton
            normal={MarketBtn}
            hover={MarketBtnHover}
            url="/oasis"
            customStyle="top-[50%] right-0 w-[15%] -translate-x-[15%] -translate-y-[50%]"
          />
        </div>
      </div>
    </>
  );
};

export default MummyCity;
