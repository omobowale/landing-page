import React from "react";

function CustomActionButton({ label, className = "bg-white" }) {
  return (
    <button className={`rounded-[1em] px-4 py-3 flex ${className}`}>
      {label}
    </button>
  );
}

export default CustomActionButton;
