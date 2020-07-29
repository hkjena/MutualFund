import React from "react";

import "./card.style.css";

const Card = ({ name, price }) => {
  return (
    <div className="cardholder d-flex align-items-center flex-fill px-2 py-2 border-secondary border-bottom rounded">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <i className="fas fa-bars" style={{ fontSize: "12px" }} />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ml-2">
        <span
          className="text-muted text-uppercase"
          style={{ fontSize: "10px" }}
        >
          {name}
        </span>
        <b className="text-primary">${price}</b>
      </div>
      <div className="d-flex flex-column justify-content-center ml-2">
        <span
          style={{ color: "#a8bd84", fontSize: "1.3rem", fontWeight: " 700" }}
        >
          iShares
        </span>
        <b style={{ fontSize: "8px" }}>by BlackDoc</b>
        <b style={{ fontSize: "12px" }}>S&P 500 Index</b>
        <span style={{ fontSize: "10px" }}>US Equity</span>
      </div>
    </div>
  );
};
export default Card;
