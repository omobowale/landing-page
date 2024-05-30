import React from "react";
import TextWithLightWhite from "./TextWithLightWhite";

function FooterLinkWithOptions({ label, options = [] }) {
  return (
    <div className="lg:mb-0 md:mb-2 mb-6">
      <TextWithLightWhite text={label} textClass="mb-5" />
      {options.map((option) => {
        return <p className="font-[500] text-[18px] mb-2">{option}</p>;
      })}
    </div>
  );
}

export default FooterLinkWithOptions;
