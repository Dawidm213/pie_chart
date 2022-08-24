import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Header } from "./Components/Header/Header";
import { ChartPick } from "./Components/ChartPick/ChartPick.js";
import { PieChartBuild } from "./Components/PieChartBuild/PieChartBuild.js";
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
      </Routes>
    </>
  );
}

export default App;
