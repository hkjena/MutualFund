import React from "react";
import { ProgressBar } from "react-bootstrap";
import CardHolder from "./CardHolder";

import "./card.style.css";

const profit = <i className="fas fa-sort-up text-success mt-2 mr-1" />;
const loss = <i className="fas fa-sort-down text-danger mb-1 mr-1" />;

const UnrealizedplCard = ({ preturn, unrealized_PL }) => {
  return (
    <CardHolder>
      <div className="d-flex justify-content-between w-100">
        <b>Unrealized P/L</b>
        <b>{unrealized_PL}</b>
      </div>
      <div className="d-flex justify-content-between w-100">
        <p className="text-muted">% Return</p>
        <div className="d-flex align-items-center">
          <span style={{ fontSize: "17px" }}>
            {preturn >= 0 ? profit : loss}
          </span>
          <b>{preturn}%</b>
        </div>
      </div>
      <div className="d-flex">
        <ProgressBar
          variant="danger"
          style={{
            transform: "rotate(180deg)",
            height: "10px"
          }}
          className="w-50"
          now={preturn > 0 ? 0 : Math.abs(preturn)}
        />
        <ProgressBar
          variant="success"
          style={{
            height: "10px"
          }}
          className="w-50"
          now={preturn < 0 ? 0 : Math.abs(preturn)}
        />
      </div>
    </CardHolder>
  );
};
export default UnrealizedplCard;
