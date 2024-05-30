import React from "react";

function ThreeColumnRow({
  topBorder = false,
  selected = false,
  text1,
  text2,
  text3,
}) {
  return (
    <div
      className={`lg:flex lg:flex-row border border-[1.5px] cursor-pointer custom-column-item ${
        !topBorder ? "border-t-0" : ""
      } ${!selected ? "" : "bg-[#E8E8E8]"}`}
    >
      <div className="lg:w-[20%] lg:py-[1.5em] border-r-[1.5px] font-[600] bg-[#E8E8E8]">
        {text1}
      </div>
      <div className="lg:w-[20%] lg:py-[1.5em] border-r-[1.5px] lg:font-[600] font-[500] opacity-40 lg:opacity-100">
        {text2}
      </div>
      <div className="lg:w-[60%] lg:py-[1.5em] text-left lg:ml-[5em] flex items-center lg:justify-between justify-center">
        <span>{text3}</span>
        <span className="custom-column-item-selected-icon">
          <img className="mr-10" style={{}} src="/assets/orange-arrow.png" />
        </span>
      </div>
    </div>
  );
}

export default ThreeColumnRow;
