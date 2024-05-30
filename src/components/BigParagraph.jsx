import React from "react";

function BigParagraph({
  text,
  widthClass = "w-[100%]",
  marginClass = "mx-auto",
  otherClasses = "",
  fontClass = "font-[700]",
  split = false,
  otherText = "",
  children,
  imageCustomClass = "mx-2",
}) {
  return (
    <p
      className={`lg:leading-[64px] md:leading-[1em] lg:text-[54px] md:text-[45px] sm:text-[30px] text-[1.5rem] ${otherClasses} ${marginClass} ${widthClass} ${fontClass}`}
    >
      {!split && <span>{text}</span>}
      {split && (
        <div className="">
          <span>
            {text}
            <span className="relative">
              <span
                className={`absolute top-0 right-[0] mt-2 ${imageCustomClass}`}
              >
                {children}{" "}
              </span>
              <span className="">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
            </span>
            {otherText}
          </span>
        </div>
      )}
    </p>
  );
}

export default BigParagraph;
