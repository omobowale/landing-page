import React from "react";

function SmallParagraph({ text, otherClasses, colorClass, marginClass = "mx-auto" }) {
  return (
    <p
      className={`font-[400] text-[22px] ${otherClasses} ${colorClass} mt-3 w-[80%] ${marginClass}`}
    >
      {text}
    </p>
  );
}

export default SmallParagraph;
