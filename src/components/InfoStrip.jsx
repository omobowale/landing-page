import React from "react";

function InfoStrip({ imageLink, value, text }) {
  return (
    <div className="flex gap-2 items-center">
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
