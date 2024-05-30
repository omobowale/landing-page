import React from "react";
import BigParagraph from "./BigParagraph";
import BulletIcon from "./BulletIcon";
import SmallParagraph from "./SmallParagraph";
import UnorderedListItem from "./UnorderedListItem";
import PartialRoundedBoxWithImage from "./PartialRoundedBoxWithImage";

function CarouselCardItem({
  itemDetails,
  title,
  bulletIconColor,
  buttonText,
  children,
}) {
  return (
    <div className="flex min-w-[100%] flex-nowrap md:items-center md:flex-row flex-col-reverse p-8 text-left shadow-lg rounded-lg bg-white">
      <div className="w-full">
        <BigParagraph
          widthClass="lg:w-[70%] w-full"
          marginClass="mb-4"
          text={title}
        />
        <div>
          {itemDetails.map((text) => {
            return (
              <UnorderedListItem
                bulletIconColor={bulletIconColor}
                text={text}
              />
            );
          })}
        </div>
        <div className="flex gap-4 mt-5 items-center">
          <PartialRoundedBoxWithImage
            roundedClass={"rounded-[1.8em]"}
            bgClass={"bg-black"}
            padding={6}
            heightClass={"h-[55px]"}
            widthClass={"w-[55px]"}
            imagePath="/assets/forward-arrow-icon-white.png"
            text={buttonText}
          />
        </div>
      </div>
      <div className="w-full">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default CarouselCardItem;
