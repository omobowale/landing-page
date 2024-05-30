import React from "react";

function InfoStrip({ imageLink, value, text }) {
  return (
    <div className="flex gap-2 items-center sm:mb-0 mb-4">
      <span>
        <img src={imageLink} />
      </span>
      <span>
        {value} {text}
      </span>
    </div>
  );
}

export default InfoStrip;
