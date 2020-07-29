import React from "react";
import { ProgressBar } from "react-bootstrap";
import CardHolder from "./CardHolder";

import "./card.style.css";

const MarketValueCard = ({ market_value, percent_portfolio_value }) => {
  return (
    <CardHolder>
      <div className="d-flex justify-content-between w-100">
        <b>Market Value</b>
        <b>${market_value}</b>
      </div>
      <div className="d-flex justify-content-between w-100">
        <p className="text-muted" style={{ fontSize: "13.5px" }}>
          % of portfolio value
        </p>
        <b>{percent_portfolio_value}%</b>
      </div>
      <ProgressBar
        variant="success"
        now={percent_portfolio_value}
        style={{ height: "10px" }}
      />
    </CardHolder>
  );
};
export default MarketValueCard;
