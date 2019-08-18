import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DepartmentList from './components/DepartmentList';
import OverallDashboard from './components/OverallDashboard';
// import CreateBank from './components/BankCreateForm';
import ProgressTable from './components/Table';

class App extends Component {
  state = {
    ratings: []
  }
  
  getChartData() {
    fetch(`http://localhost:5001/api/city/findrating`)
      .then(response => response.json())
      .then(data => {
        var ratings = [];
        data.map(rate =>(
          ratings.push(rate.rating)
        ))

        this.setState({
          ratings: ratings
        })
      })
  }

  componentWillMount() {
    this.getChartData();
  }

  twonshipfunc = () => {
    return (
      <DepartmentList />
    );
  }

  yangonfunc = () => {
    return (
      <div>
      <OverallDashboard data={this.state.ratings} />
      </div>
    );
  }

  // createbankfunc = () => {
  //   return (
  //     <CreateBank />
  //   );
  // }
  viewProgress(){
    return(
      <ProgressTable/>
    );
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/overalldashboard" exact component={this.yangonfunc} />
          <Route path="/township" exact component={this.twonshipfunc} />
          {/* <Route path="/createbank" exact component={this.createbankfunc} /> */}
          <Route path="/progress" exact component={this.viewProgress} />
          <ul className="mt-5">
            <li>
              <Link to="/overalldashboard">OverallDashboard</Link>
            </li>
            <li><Link to="/township">Department List</Link></li>
            {/* <li>
              <Link to="/createbank">Create Department</Link>
            </li> */}
            <li><Link to="/progress">View Progress Rating</Link></li>
          </ul>
        </Router>
      </div>
    );
  }
}
export default App
