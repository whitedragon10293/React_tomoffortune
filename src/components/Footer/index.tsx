import React from "react";

const Footer = () => {
  return (
    <footer className="container flex justify-end w-full absolute bottom-0 p-4 z-10">
      <button
        className="bg-twitter-btn-bg hover:bg-twitter-btn-bg-hover bg-contain bg-center bg-no-repeat w-16 h-16"
        onClick={() => window.open("https://twitter.com/TombsOfFortune")}
      />
      <button
        className="bg-discord-btn-bg hover:bg-discord-btn-bg-hover bg-contain bg-center bg-no-repeat w-16 h-16 ml-5"
        onClick={() => window.open("https://discord.com/invite/Rg4QkDUwcJ")}
      />
    </footer>
  );
};

export default Footer;
