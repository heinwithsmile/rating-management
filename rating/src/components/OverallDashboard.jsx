import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Table from "./Table";
import Nava from "./Nav";

class OverallDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentname: [],
  }
  getDepartment() {
    fetch(`http://localhost:5001/api/department/finddepartments`)
      .then(response => response.json())
      .then(data => {
        var departments = [];
        data.map(department => departments.push(department.name));
        this.setState({
          departmentname: departments
        });
      });
  }

  componentWillMount() {
    this.getDepartment();
  }
    
  render() {
    var chartData = {
      labels: this.state.departmentname,
      datasets: [
        {
          label: "Satisfaction Survey",
          data: this.state.average,
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(71, 34, 174)",
            "rgb(6, 190, 86)",
            "rgb(176, 200, 21)",
            "rgb(255,99,132)",
          ]
        }
      ]
    };

    return (
      <div className="Chart">
        <Nava />
        <h1 className="text-center mt-3 mb-3">
          Satisfaction Survey of Overall Departments
        </h1>
        <Bar data={chartData} options={{}} />
        <Table />
      </div>
    );
  }
}
export default OverallDashboard;
