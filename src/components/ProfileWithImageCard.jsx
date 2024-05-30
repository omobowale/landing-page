import React from "react";

function ProfileWithImageCard({ jobRole, bgColor, otherDescription, imagePath }) {
  return (
    <div className="shadow-md text-left max-w-[14em] h-[16em] bg-white rounded-[1em] text-black">
      <div className={`p-0 m-0 rounded-[1em] ${bgColor}`}>
        <img
          style={{ objectFit: "fill" }}
          className="w-full h-[8em] p-0 m-0"
          src={imagePath}
        />
      </div>
      <div className="px-3 mt-4 font-[400]">
        <p className="mb-[1em] text-[16px]">{jobRole}</p>
        <p className="font-[400] text-[12px]">{otherDescription}</p>
      </div>
    </div>
  );
}

export default ProfileWithImageCard;
