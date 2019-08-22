import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "../image/logo.png";
import Table from "./Table";
// import { Link } from "react-router-dom";
import Nava from './Nav';


class OverallDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      townshipname: []
    };
  }
  getTownship() {
    fetch(`http://localhost:5001/api/department/finddepartments`)
      .then(response => response.json())
      .then(data => {
        var townships = [];
        data.map(township => townships.push(township.name_en));
        // console.log(townships)
        this.setState({
          townshipname: townships
        });
      });
  }
  componentWillMount() {
    this.getTownship();
  }
  render() {
    // const logo_style = {
    //   width: "100px",
    //   height: "80px"
    // };
    // const searchField = {
    //   "margin-left": "600px"
    // };

    // const { data } = this.props;
    var chartData = {
      labels: this.state.townshipname,
      datasets: [
        {
          label: "Customer Satisfaction Survey",
          data: [
            "5",
            "7",
            "9",
            "5",
            "7",
            "9",
            "5",
            "7",
            "9",
            "7",
            "9",
            "3",
            "2",
            "5",
            "7",
            "9",
            "5",
            "7",
            "9",
            "7",
            "5",
            "7",
            "9"
          ],
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)"
          ]
        }
      ]
    };

    return (
      <div className="Chart">
       <Nava />
        <h1 className="text-center mt-3 mb-3">
          Customer Satisfaction Survey of Overall Departments
        </h1>
        <Bar data={chartData} options={{}} />
        <Table />
      </div>
    );
  }
}
export default OverallDashboard;
