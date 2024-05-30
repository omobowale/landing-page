import React from "react";

function SkillLabelWithIcon({ label, imageLink }) {
  return (
    <div className="flex w-[7em] vsm:mb-0 mb-6 flex-col justify-center items-center gap-3 mx-auto">
      <div className="rounded-full w-[7em] h-[7em] bg-[#F6F6F6] items-center flex justify-center">
        <img src={imageLink} />
      </div>
      <div className="text-center mx-auto w-[70%] font-[600] sm:text-[14px] vsm:text-[12px] text-[11px]">
        {label}
      </div>
    </div>
  );
}

export default SkillLabelWithIcon;
