import React from "react";

function SkillLabelWithIcon({ label, imageLink }) {
  return (
    <div className="flex w-[7em] flex-col justify-center items-center gap-3">
      <div className="rounded-full w-[7em] h-[7em] bg-[#F6F6F6] items-center flex justify-center">
        <img src={imageLink} />
      </div>
      <div className="text-center mx-auto w-[70%] font-[600] text-[14px]">
        {label}
      </div>
    </div>
  );
}

export default SkillLabelWithIcon;
