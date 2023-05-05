import React, { useState } from "react";
import Explorer from "assets/Mint/Explorer.png";
import Mummy from "assets/Mint/Mummy.png";
import Pharaoh from "assets/Mint/Pharaoh.png";

import Background from "assets/Map/background.png";
const Mint = () => {
  const [count, setCount] = useState<number>(0);

  const increase = () => {
    setCount(Math.min(count + 1, 9999));
  };
  const decrease = () => {
    setCount(Math.max(count - 1, 0));
  };
  return (
    <>
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full"
      ></img>
      <div
        className="container bg-mint-background bg-color-8 w-3/4 h-3/4 z-10 p-8 flex flex-col justify-between"
        style={{ backgroundSize: "100% 100%" }}
      >
        <div className="px-24">
          <div className="flex justify-between items-center">
            <div className="border-8 border-green w-1/4 p-2 bg-color-10 flex justify-center">
              <img src={Explorer} alt="explorer" />
            </div>
            <div className="border-8 border-orange w-1/4 p-2 bg-color-10 flex justify-center">
              <img src={Mummy} alt="mummy" />
            </div>
            <div className="border-8 border-purple w-1/4 p-2 bg-color-10 flex justify-center">
              <img src={Pharaoh} alt="pharaoh" />
            </div>
          </div>
          <div className="text-lg text-color-9">
            Explorer risking their lives to get{" "}
            <span className="text-color-7">$TOMBS</span> while mummies are
            protecting it, in order to offer it to the pharaoh. Will the
            explorer succeed to escape with the stolen{" "}
            <span className="text-color-7">$TOMBS</span> or will the mummies
            will catch them to do offerings to the pharaoh ?
          </div>
        </div>
        <div className="flex" style={{ height: "inherit" }}>
          <div className="flex justify-center items-center w-1/6">
            <div
              className="bg-mint-border w-20 h-20 flex items-center justify-around text-color-9 text-sm sm:text-base md:text-xl"
              style={{ backgroundSize: "100% 100%" }}
            >
              {count}
            </div>
            <div className="flex flex-col justify-between items-center h-20">
              <div
                className=" bg-mint-plus w-9 h-9"
                style={{ backgroundSize: "100% 100%" }}
                onClick={increase}
              ></div>
              <div
                className=" bg-mint-minus w-9 h-9"
                style={{ backgroundSize: "100% 100%" }}
                onClick={decrease}
              ></div>
            </div>
          </div>
          <div className="w-5/6 relative flex flex-col items-center">
            <div className="flex justify-around items-start w-full">
              <div className="flex justify-between items-center">
                <span className="text-color-9 text-2xl">MINT NOW</span>
                <button
                  className="bg-mint-mint-btn w-12 h-12 ml-4"
                  style={{ backgroundSize: "100% 100%" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="bg-mint-buy-btn w-12 h-12 mr-4"
                  style={{ backgroundSize: "100% 100%" }}
                />
                <span className="text-color-9 text-2xl">
                  BUY
                  <span className="text-color-7"> $TOMBS </span>
                </span>
              </div>
            </div>
            <div
              className="bg-mint-progress-bar-bg w-2/3 h-4/5 absolute bottom-0"
              style={{ backgroundSize: "100% 100%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
