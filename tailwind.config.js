/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "reception-btn-bg": "url('assets/Reception/btn-bg.png')",
      "connectWallet-btn-bg": "url('assets/Header/connectWalletBtn-bg.png')",
      "connectWallet-btn-bg-hover":
        "url('assets/Header/connectWalletBtn-bg-hover.png')",
      "menu-btn-bg": "url('assets/Header/menuBtn-bg.png')",
      "menu-btn-bg-hover": "url('assets/Header/menuBtn-bg-hover.png')",
      "page-menu-bg": "url('assets/Header/pageMenu-bg.png')",
      "twitter-btn-bg": "url('assets/Footer/twitter-btn.png')",
      "twitter-btn-bg-hover": "url('assets/Footer/twitter-btn-hover.png')",
      "discord-btn-bg": "url('assets/Footer/discord-btn.png')",
      "discord-btn-bg-hover": "url('assets/Footer/discord-btn-hover.png')",
      "mint-background": "url('assets/Mint/background.png')",
      "mint-border": "url('assets/Mint/border.svg')",
      "mint-plus": "url('assets/Mint/plus.svg')",
      "mint-minus": "url('assets/Mint/minus.svg')",
      "mint-mint-btn-bg": "url('assets/Mint/mint-btn.png')",
      "mint-buy-btn-bg": "url('assets/Mint/buy-btn.png')",
    },
    borderColor: {
      green: "rgb(104,241,146)",
      orange: "rgb(255, 128,82)",
      purple: "rgb(154, 82, 255)",
    },
    colors: {
      "color-1": "#675335E2",
      "color-2": "#BDBF50",
      "color-3": "#A66E1A",
      "color-4": "#B68EE9",
      "color-5": "#8642DD",
      "color-6": "#FEE692",
      "color-7": "#FAFF00",
      "color-8": "rgba(50,50,50,0.8)",
      "color-9": "#FFFFFF",
      "color-10": "rgba(255,255,255, 0.4)",
    },
    extend: {},
  },
  plugins: [],
};
