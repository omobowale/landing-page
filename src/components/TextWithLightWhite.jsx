import React from "react";

function TextWithLightWhite({ text, textClass = "font-[600] text-[14px]" }) {
  return <p className={`opacity-40 ${textClass}`}>{text?.toUpperCase()}</p>;
}

export default TextWithLightWhite;
