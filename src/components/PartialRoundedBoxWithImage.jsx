import React from "react";

function PartialRoundedBoxWithImage({
  imagePath,
  widthClass,
  heightClass,
  roundedClass,
  bgClass,
  text,
  smallText = true,
  className=""
}) {
  return (
    <div className={`cursor-pointer ${text ? "pointer-box" : ""} ${className}`}>
    <div className="pointer-box-touched ">
        <div
          className={`text-white px-6 ${heightClass} ${roundedClass} ${bgClass} flex items-center justify-center gap-5`}
        >
          {text && (
            <span
              className={`font-[500] ${
                smallText ? "text-[15px]" : "text-[20px]"
              }`}
            >
              {text}
            </span>
          )}
          <img src={imagePath} />
        </div>
      </div>
      <div className="pointer-box-default flex items-center gap-4">
        <div
          className={`${widthClass} px-2 ${heightClass} ${roundedClass} ${bgClass} flex items-center justify-center`}
        >
          <img src={imagePath} />
        </div>
        {text && (
          <span
            className={`font-[500] ${
              smallText ? "text-[15px]" : "text-[20px]"
            }`}
          >
            {text}
          </span>
        )}
      </div>
    </div>
  );
}

export default PartialRoundedBoxWithImage;
