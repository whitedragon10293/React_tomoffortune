import React from "react";

const Footer = () => {
  return (
    <footer className="container flex justify-end w-full absolute bottom-0 p-4 z-10">
      <button
        className="bg-twitter-btn-bg hover:bg-twitter-btn-bg-hover w-14 h-12"
        style={{ backgroundSize: "100% 100%" }}
        onClick={() => window.open("https://twitter.com/TombsOfFortune")}
      />
      <button
        className="bg-discord-btn-bg hover:bg-discord-btn-bg-hover w-14 h-12 ml-5"
        style={{ backgroundSize: "100% 100%" }}
        onClick={() => window.open("https://discord.com/invite/Rg4QkDUwcJ")}
      />
    </footer>
  );
};

export default Footer;
