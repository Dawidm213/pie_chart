import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import { PieChartBuild } from "./Components/PieChartBuild/PieChartBuild.js";
import { DonutChart } from "./Components/DonutChart/DonutChart.js";
import { DiffChart } from "./Components/DiffChart/DiffChart.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  //console.log(data)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Charts" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/pieChart" element={<PieChartBuild />} />
        <Route path="/donutChart" element={<DonutChart />} />
        <Route path="/diffPieChart" element={<DiffChart />} />
      </Routes>
    </>
  );
}

export default App;
