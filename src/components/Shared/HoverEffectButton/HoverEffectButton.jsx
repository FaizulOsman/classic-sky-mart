import React from "react";
import "./HoverEffectButton.css";

const HoverEffectButton = ({ text }) => {
  return (
    <button className="btn_regular text-sm hover:bg-orange-500 text-orange-500 hover:text-white font-semibold border border-orange-500 py-2 px-2 rounded">
      {text}
    </button>
  );
};

export default HoverEffectButton;
