import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
// import DepartmentList from "./DepartmentList";
// import OverallDashboard from "./OverallDashboard";
// import ProgressTable from "./Table";
// import Logout from "./Logout";

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    const loggedIn = true;
    if (token == false) {
      loggedIn = false;
    }
    this.state = {
      ratings: [],
      loggedIn
    };
  }

  getChartData() {
    fetch(`http://localhost:5001/api/city/findrating`)
      .then(response => response.json())
      .then(data => {
        var ratings = [];
        data.map(rate => ratings.push(rate.rating));

        this.setState({
          ratings: ratings
        });
      });
  }

  componentWillMount() {
    this.getChartData();
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <ul className="mt-5">
          <li>
            <Link to="/overalldepartment">Overall Department</Link>
          </li>
          <li>
            <Link to="/department">Department List</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
