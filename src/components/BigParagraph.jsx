import React from "react";

function BigParagraph({
  text,
  widthClass = "w-[100%]",
  marginClass = "mx-auto",
  otherClasses = "",
}) {
  return (
    <p
      className={`text-[54px] font-[700] ${otherClasses} ${marginClass} ${widthClass}`}
      style={{ lineHeight: "64px" }}
    >
      {text}
    </p>
  );
}

export default BigParagraph;
