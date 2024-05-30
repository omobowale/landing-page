import React from "react";

function ParallelContainer({ children, className }) {
  return (
    <div
      className={`parallelogram ${className}`}
      style={{ overflow: "hidden" }}
    >
      <div>{children}</div>
    </div>
  );
}

export default ParallelContainer;
