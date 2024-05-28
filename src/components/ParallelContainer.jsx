import React from "react";

function ParallelContainer({ children, className }) {
  return (
    <div className={`parallelogram ${className}`}>
      <div>{children}</div>
    </div>
  );
}

export default ParallelContainer;
