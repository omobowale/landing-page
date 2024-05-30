import React from "react";
import MediumParagraph from "./MediumParagraph";
import PartialRoundedBoxWithImage from "./PartialRoundedBoxWithImage";
import SmallerParagraph from "./SmallerParagraph";
import ProfileWithImageCard from "./ProfileWithImageCard";

function StartJourneyStep({
  mainColor,
  subColor,
  value,
  label,
  description,
  buttonSideText,
  children
}) {
  return (
    <div className="flex justify-between">
      {/* Left Side */}
      <div className="flex text-left gap-6 items-start">
        <h1
          className="text-[80px] opacity-60"
          style={{
            background: `linear-gradient(to bottom, ${mainColor}, ${subColor})`,
            "text-fill-color": "transparent",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "-webkit-background-clip": "text",
          }}
        >
          {value}
        </h1>
        <div className="mt-7 w-[70%]">
          <MediumParagraph text={label} />
          <div className="my-4"></div>
          <SmallerParagraph
            text={description}
            otherClasses="text-left"
            marginClass=""
          />
          <div className="flex gap-4 mt-5 items-center">
            <PartialRoundedBoxWithImage
              roundedClass={"rounded-[1.8em]"}
              bgClass={"bg-black"}
              padding={6}
              heightClass={"h-[55px]"}
              widthClass={"w-[55px]"}
              imagePath="/assets/forward-arrow-icon-white.png"
              text={buttonSideText}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="">
        {children}
      </div>
    </div>
  );
}

export default StartJourneyStep;
