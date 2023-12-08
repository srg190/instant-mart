import React from "react";
import "./index.css";

const Counter = ({ numberOfItems = 0 }: { numberOfItems: number }) => {
  return (
    <>
      <i className="fa"></i>
      <span className="badge badge-warning" id="lblCartCount">
        {numberOfItems < 10 ? numberOfItems : "9+"}
      </span>
    </>
  );
};

export default Counter;
