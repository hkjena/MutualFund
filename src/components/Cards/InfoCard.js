import React from "react";
import CardHolder from "./CardHolder";

import "./card.style.css";

const Card = ({ quantity, avg_cost, invested_amount }) => {
  return (
    <CardHolder>
      <div className="d-flex justify-content-between w-100">
        <span>
          <i className="fas fa-database mr-2" style={{ fontSize: "15px" }} />
          Quantity
        </span>
        <b>{quantity}</b>
      </div>
      <div className="d-flex justify-content-between w-100">
        <span>
          <i className="fas fa-at mr-2" style={{ fontSize: "15px" }} />
          Avg. Cost
        </span>
        <b>{avg_cost}</b>
      </div>
      <div className="d-flex justify-content-between w-100">
        <span>
          <i className="fas fa-money-bill mr-2" style={{ fontSize: "15px" }} />
          Invested Amt
        </span>
        <b>${invested_amount}</b>
      </div>
    </CardHolder>
  );
};
export default Card;
