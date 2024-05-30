import React from "react";

function SmallParagraph({
  text,
  otherClasses,
  colorClass,
  marginTop = "mt-3",
  marginClass = "mx-auto",
}) {
  return (
    <p
      className={`font-[400] lg:text-[22px] md:text-[20px] sm:text-[14px] ${otherClasses} ${colorClass} ${marginTop} ${marginClass}`}
    >
      
      {text}
    </p>
  );
}

export default SmallParagraph;
