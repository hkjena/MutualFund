import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainCard from "./components/MainCard";
import Graph from "./components/Graph/Graph";

import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap">
        <div className="flex-fill">
          <MainCard />
        </div>
        <Graph />
      </div>
    </>
  );
}
