import React from "react";

function UnderlinedText({ text, className }) {
  return (
    <span className={className} style={{ textDecoration: "underline" }}>
      {text}
    </span>
  );
}

export default UnderlinedText;
