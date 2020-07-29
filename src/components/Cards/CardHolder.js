import React from "react";

const CardHolder = ({ children }) => {
  return (
    <div
      className="cardholder d-flex flex-column justify-content-center flex-fill px-2 py-2 border-secondary border-bottom rounded"
      style={{ minWidth: "200px" }}
    >
      {children}
    </div>
  );
};

export default CardHolder;
