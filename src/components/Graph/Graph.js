import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { connect } from "react-redux";

import "./graph.style.css";

const Graph = ({ chartData }) => {
  const data = chartData && [
    { name: "Mutual Funds", value: +chartData["mfPercent"] },
    { name: "ETFs", value: +chartData["etfPercent"] }
  ];

  const COLORS = ["#03a9f4", "#ae9c46"];
  const style = {
    top: "40%",
    left: "60%",
    lineHeight: "24px"
  };

  return (
    <>
      {data && (
        <div
          className="d-flex flex-column graphholder p-2 rounded m-3"
          style={{ width: "320px", minWidth: "310px", height: "240px" }}
        >
          <div className="d-flex justify-content-between w-100 px-3">
            <h5>Portfolio</h5>
            <span>Asset Wise</span>
          </div>
          <PieChart width={310} height={200}>
            <Pie
              data={data}
              cx="30%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={1}
            >
              {data.map((entry, index) => (
                <Cell key={entry} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              iconSize={15}
              width={130}
              height={50}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
            <Tooltip />
          </PieChart>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { chartData: state.chartData };
};
export default connect(mapStateToProps)(Graph);
