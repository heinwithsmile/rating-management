import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TownShip from './components/Township';
import Yangon from './components/Yangon';
import CreateBank from './components/BankCreateForm';

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
      <TownShip />
    );
  }
  yangonfunc = () => {
    return (
      <div>
      <Yangon data={this.state.ratings} />
      </div>
    );
  }
  createbankfunc = () => {
    return (
      <CreateBank />
    );
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/yangon" exact component={this.yangonfunc} />
          <Route path="/township" exact component={this.twonshipfunc} />
          <Route path="/createbank" exact component={this.createbankfunc} />
          <ul className="mt-5">
            <li>
              <Link to="/yangon">Yangon</Link>
            </li>
            <li><Link to="/township">Township</Link></li>
            <li>
              <Link to="/createbank">Create Bank</Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}
export default App
