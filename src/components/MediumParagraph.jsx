import React from "react";

function MediumParagraph({
  text,
  widthClass = "w-[100%]",
  marginClass = "mx-auto",
  otherClasses = "",
}) {
  return (
    <p
      className={`text-[34px] font-[600] ${otherClasses} ${marginClass} ${widthClass}`}
      style={{ lineHeight: "44px" }}
    >
      {text}
    </p>
  );
}

export default MediumParagraph;
