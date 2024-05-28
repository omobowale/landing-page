import React from "react";

function SmallerParagraph({
  text,
  widthClass = "w-[100%]",
  marginClass = "mx-auto",
  otherClasses = "",
}) {
  return (
    <p
      className={`text-[16px] font-[400] ${otherClasses} ${marginClass} ${widthClass}`}
    >
      {text}
    </p>
  );
}

export default SmallerParagraph;
