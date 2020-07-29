import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import ShareCard from "./Cards/ShareCard";
import InfoCard from "./Cards/InfoCard";
import MarketValueCard from "./Cards/MarketValueCard";
import UnrealizedplCard from "./Cards/UnrealizedplCard";
import { setAllData } from "../actions/index";

const MainCard = ({ datas, setAllData }) => {
  useEffect(() => {
    setAllData();
  }, [setAllData]);

  return (
    <>
      {datas &&
        datas.map(
          ({
            scrip,
            quantity,
            price,
            invested_amount,
            type,
            avg_cost,
            market_value,
            percent_portfolio_value,
            unrealized_PL,
            preturn
          }) => (
            <div
              key={scrip}
              className="m-2 p-1 shadow-sm border d-flex justify-content-center rounded"
              style={{ gap: "10px" }}
            >
              <ShareCard name={scrip} price={price} />
              <InfoCard
                quantity={quantity}
                avg_cost={avg_cost}
                invested_amount={invested_amount}
              />
              <MarketValueCard
                market_value={market_value}
                percent_portfolio_value={percent_portfolio_value}
              />
              <UnrealizedplCard
                unrealized_PL={unrealized_PL}
                preturn={preturn}
              />
              <div className="d-flex flex-column justify-content-around">
                <Button variant="outline-warning" style={{ width: "80px" }}>
                  Buy
                </Button>
                <Button variant="outline-warning" style={{ width: "80px" }}>
                  Sell
                </Button>
              </div>
            </div>
          )
        )}
    </>
  );
};
const mapStateToProps = state => {
  return { datas: state.data };
};

export default connect(
  mapStateToProps,
  { setAllData }
)(MainCard);
