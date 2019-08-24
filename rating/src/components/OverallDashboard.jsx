import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Table from "./Table";
import Nava from "./Nav";

class OverallDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentname: [],
      arr: {
        Architecture : ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"],
        Civil : ["4", "5", "3", "4", "5", "1", "2", "3"],
        ElectricalPower : [],
        InformationTechnology : [],
        Chemical : [],
        Mechanical : [],
        Mechatronic : [],
        Petroleum : [],
        mathematics : [],
        English : [],
        Physics : [],
        Chemistry : [],
        Myanmar : [],
        StudentAffairs : [],
        HRD : [],
        InternationalRelations : [],
        InternalQA : []
      },
      average: ['1','3.3','3.6','3.2','4']
    };
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

  getDepartmentRating(){
    fetch(`http://localhost:5001/api/ratings`)
    .then(responses => responses.json())
    .then(data => {
        
    })
  }
calculateAverage = () => {
    const oneCount = this.state.arr.Architecture.filter(val => val == 1);
    const oneCountB = this.state.arr.Civil.filter(val => val == 1);
    const twoCount = this.state.arr.Architecture.filter(val => val == 2);
    const twoCountB = this.state.arr.Civil.filter(val => val == 2);
    const threeCount = this.state.arr.Architecture.filter(val => val == 3);
    const threeCountB = this.state.arr.Civil.filter(val => val == 3);
    const fourCount = this.state.arr.Architecture.filter(val => val == 4);
    const fourCountB = this.state.arr.Civil.filter(val => val == 4);
    const fiveCount = this.state.arr.Architecture.filter(val => val == 5);
    const fiveCountB = this.state.arr.Civil.filter(val => val == 5);
    const allSumA =
      oneCount.length * 1 +
      twoCount.length * 2 +
      threeCount.length * 3 +
      fourCount.length * 4 +
      fiveCount.length * 5;

    const avgArchitectureDepartment = allSumA / this.state.arr.Architecture.length;

    const allSumB =
      oneCountB.length * 1 +
      twoCountB.length * 2 +
      threeCountB.length * 3 +
      fourCountB.length * 4 +
      fiveCountB.length * 5;

    const avgCivilDepartment = allSumB / this.state.arr.Civil.length;

    this.setState({
      average: [avgArchitectureDepartment, avgCivilDepartment]
    });
  };
  componentWillMount() {
    this.getDepartment();
  }

  componentDidUpdate() {
    this.getDepartmentRating();
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
            // "rgb(71, 34, 174)",
            // "rgb(6, 190, 86)",
            // "rgb(176, 200, 21)",
            // "rgb(255,99,132)",
            // "rgb(71, 34, 174)",
            // "rgb(6, 190, 86)",
            // "rgb(176, 200, 21)",
            // "rgb(255,99,132)",
            // "rgb(71, 34, 174)",
            // "rgb(6, 190, 86)",
            // "rgb(176, 200, 21)",
            // "rgb(255,99,132)",
            // "rgb(71, 34, 174)",
            // "rgb(6, 190, 86)",
            // "rgb(176, 200, 21)"
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
