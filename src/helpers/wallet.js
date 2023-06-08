import detectEthereumProvider from "@metamask/detect-provider";
import { ENVS } from "configurations/index";

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      const walletChainId = await provider.request({
        method: "eth_chainId",
      });

      if (parseInt(walletChainId) === parseInt(ENVS.CHAIN_ID)) {
        const addressArray = await provider.request({
          method: "eth_requestAccounts",
        });

        if (addressArray.length) {
          return {
            address: addressArray[0].toLowerCase(),
          };
        } else {
          return {
            address: "",
          };
        }
      } else {
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: ENVS.CHAIN_ID }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: ENVS.CHAIN_ID,
                    chainName: "Arbitrum Goerli Testnet",
                    rpcUrls: ["https://goerli-rollup.arbitrum.io/rpc"],
                    blockExplorerUrls: ["https://goerli.arbiscan.io/"],
                    nativeCurrency: {
                      name: "AGOR",
                      symbol: "AGOR",
                      decimals: 18,
                    },
                  },
                ],
              });
            } catch (err) {
              console.log(err);
            }
          }
        }

        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
    };
  }
};

export const getCurrentWalletConnected = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      const addressArray = await provider.request({
        method: "eth_accounts",
      });
      const walletChainId = await provider.request({
        method: "eth_chainId",
      });
      if (addressArray.length && walletChainId === ENVS.CHAIN_ID) {
        return {
          address: addressArray[0].toLowerCase(),
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  }
};
