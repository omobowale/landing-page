import React from "react";

function PartialRoundedBoxWithImage({
  imagePath,
  widthClass,
  heightClass,
  roundedClass,
  bgClass,
}) {
  return (
    <div
      className={`${widthClass} px-2 ${heightClass} ${roundedClass} ${bgClass} flex items-center justify-center`}
    >
      <img src={imagePath} />
    </div>
  );
}

export default PartialRoundedBoxWithImage;
