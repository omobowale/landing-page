import React from "react";

function TwoColumnRow({ topBorder = false, text1, selected = false, text2 }) {
  return (
    <div
      className={`md:flex md:flex-row block mx-auto border border-[1.5px] cursor-pointer custom-column-item ${
        !topBorder ? "border-t-0" : ""
      } ${!selected ? "" : "bg-[#E8E8E8]"}`}
    >
      <div className="lg:w-[20%] md:w-[30%] w-full md:py-[1.5em] border-r-[1.5px] font-[600]">
        {text1}
      </div>
      <div className="lg:w-[20%] md:w-[10%] w-0 md:py-[1.5em]"></div>
      <div className="lg:w-[60%] md:w-[60%] w-full md:py-[1.5em] text-center md:ml-[5em] flex md:flex-row items-center md:justify-between justify-center md:gap-0 gap-2">
        <span>{text2}</span>
        <span className="custom-column-item-selected-icon">
          <img className="mr-10" style={{}} src="/assets/orange-arrow.png" />
        </span>
      </div>
    </div>
  );
}

export default TwoColumnRow;
