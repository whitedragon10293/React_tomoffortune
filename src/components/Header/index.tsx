import React from "react";
import ConnectWalletButton from "./partials/ConnectWalletButton";
import PageMenu from "./partials/PageMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-start w-full absolute top-0 p-5 z-10">
      <PageMenu />
      <ConnectWalletButton />
    </header>
  );
};

export default Header;
