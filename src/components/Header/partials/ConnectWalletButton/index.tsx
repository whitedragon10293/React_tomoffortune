import { useState, useEffect } from "react";
import { connectWallet, getCurrentWalletConnected } from "helpers/wallet";

declare var window: any;

const abbreviateAddress = (address: string) => {
  const walletAddress = address;
  return walletAddress.slice(0, 6) + " ... " + walletAddress.slice(38);
};

const ConnectWalletButton = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet();
    setWalletAddress(walletResponse.address);
  };
  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        if (accounts.length) {
          setWalletAddress(accounts[0].toLowerCase());
        } else {
          setWalletAddress("");
        }
      });

      window.ethereum.on("chainChanged", (chainId: any) => {
        onConnectWalletHandler();
      });
    }
  };
  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        const { address }: any = await getCurrentWalletConnected();

        setWalletAddress(address);

        onChangeWalletListener();
        onConnectWalletHandler();
      } else {
        setWalletAddress("No Provider");
      }
    };

    initDatas();
  }, []);

  return (
    <button
      className="bg-connectWallet-btn-bg hover:bg-connectWallet-btn-bg-hover bg-contain bg-center bg-no-repeat rounded-md w-48 lg:w-60 h-16 text-color-2 text-center text-sm lg:text-lg uppercase pt-4 lg:pt-4"
      onClick={() => {
        walletAddress === ""
          ? onConnectWalletHandler()
          : walletAddress === "No Provider" &&
            window.open("https://metamask.io/", "_blank");
      }}
    >
      {walletAddress === "No Provider"
        ? "Install Metamask"
        : walletAddress === ""
        ? "Connect your wallet"
        : abbreviateAddress(walletAddress)}
    </button>
  );
};

export default ConnectWalletButton;
