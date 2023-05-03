import React from "react";

const ConnectWalletButton = () => {
  return (
    <button
      className="bg-connectWallet-btn-bg hover:bg-connectWallet-btn-bg-hover rounded-md w-80 h-24 text-color-2 text-center text-2xl uppercase pt-6"
      style={{ backgroundSize: "100% 100%" }}
    >
      Connect your wallet
    </button>
  );
};

export default ConnectWalletButton;
