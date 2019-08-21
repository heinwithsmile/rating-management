import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import PTable from "./Table";
import Navbar from "react-bootstrap/Navbar";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
class PieCo extends Component {
  // state = {  }
  render() {
    const logo_style = {
        width: "100px",
        height: "80px"
      };
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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"  className="mr-5">
            <img src={logo} alt="" style={logo_style} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
                <Link to="/admin">Home</Link>
                <Link to="/overalldepartment" className="ml-5">Overall Department</Link>
                <Link to="/department" className="ml-5">Department List</Link>

          </Navbar.Collapse>
        </Navbar>
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
