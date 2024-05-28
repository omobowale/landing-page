import React from "react";

function PlayListItem({ selected, text, description, step }) {
  return (
    <div
      className={`border hover:shadow-md cursor-pointer mb-2 py-3 px-4 rounded-md text-left ${
        selected ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center gap-5">
        <div>
          {selected && <img src="/assets/play-button-blue-bg.png" />}
          {!selected && <img src="/assets/play-button-gray-bg.png" />}
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-[16px] font-[600]">{step}:</div>
          <div className="text-[16px] font-[400]">{text}</div>
        </div>
      </div>
      {selected && <div className="mt-3 w-[80%] opacity-70">{description}</div>}
    </div>
  );
}

export default PlayListItem;
