import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import PTable from "./Table";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "../image/logo.png";
// import { Link } from "react-router-dom";
import Nava from './Nav';
class PieCo extends Component {
  // state = {  }
  render() {
    var chartData = {
      labels: ["Very Poor", "Poor", "Average", "Good", "Very Good"],
      datasets: [
        {
          label: "Customer Satisfaction Survey",
          data: ["10", "20", "30", "40", "50"],
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(33, 213, 207)"
          ]
        }
      ]
    };

    return (
      <div className="">
    <Nava />
        {/* <h1 className="text-center mb-5">Admin Department Rating Data</h1> */}
        <div className="mt-5">
          <Pie data={chartData} options={{}} />
        </div>
        <PTable />
      </div>
    );
  }
}

export default PieCo;
