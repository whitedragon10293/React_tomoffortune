import React from "react";
import ConnectWalletButton from "./partials/ConnectWalletButton";
const Header = () => {
  return (
    <div className="flex justify-between items-center absolute top-0 left-0 p-5 z-10">
      <ConnectWalletButton />
    </div>
  );
};

export default Header;
