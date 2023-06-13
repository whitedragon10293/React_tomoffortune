import React from "react";
import ImageButton from "pages/Map/partials/ImageButton";

import MapImage from "assets/Oasis/Map.png";
import Background from "assets/Oasis/Background.png";

import BoardBtn from "assets/Oasis/Board.png";
import BoardBtnHover from "assets/Oasis/Board-hover.png";

import GuideBtn from "assets/Oasis/Guide.png";
import GuideBtnHover from "assets/Oasis/Guide-hover.png";

import MarketBtn from "assets/Oasis/Market.png";
import MarketBtnHover from "assets/Oasis/Market-hover.png";

import ExplorationBtn from "assets/Oasis/Exploration.png";
import ExplorationBtnHover from "assets/Oasis/Exploration-hover.png";

const Oasis = () => {
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
            normal={MarketBtn}
            hover={MarketBtnHover}
            url="/"
            customStyle="top-[4%] left-[2%] w-1/5"
          />
          <ImageButton
            normal={BoardBtn}
            hover={BoardBtnHover}
            url="/oasis"
            customStyle="top-[3%] right-[2%] w-1/5"
          />
          <ImageButton
            normal={ExplorationBtn}
            hover={ExplorationBtnHover}
            url="/map"
            customStyle="top-[50%] right-[2%] w-1/5"
          />
          <ImageButton
            normal={GuideBtn}
            hover={GuideBtnHover}
            url="/oasis"
            customStyle="bottom-[4%] right-[2%] w-1/5"
          />
        </div>
      </div>
    </>
  );
};

export default Oasis;
