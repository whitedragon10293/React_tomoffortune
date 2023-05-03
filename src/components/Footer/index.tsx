import React from "react";

const Footer = () => {
  return (
    <footer className=" flex justify-end w-full absolute bottom-0 p-4 z-10">
      <button
        className="bg-twitter-btn-bg hover:bg-twitter-btn-bg-hover w-14 h-12"
        style={{ backgroundSize: "100% 100%" }}
      />
      <button
        className="bg-discord-btn-bg hover:bg-discord-btn-bg-hover w-14 h-12 ml-5"
        style={{ backgroundSize: "100% 100%" }}
      />
    </footer>
  );
};

export default Footer;
