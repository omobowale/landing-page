import React from "react";
import BulletIcon from "./BulletIcon";
import SmallerParagraph from "./SmallerParagraph";

function UnorderedListItem({ bulletIconColor, text }) {
  return (
    <div className="flex gap-3 items-center justify-start">
      <BulletIcon bgClass={bulletIconColor} />
      <SmallerParagraph
        marginClass=""
        otherClasses={""}
        marginTop="mt-"
        text={text}
      />
    </div>
  );
}

export default UnorderedListItem;
