import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import OverallDashboard from "./components/OverallDashboard";
import DepartmentList from "./components/DepartmentList";
import Pie from "./components/DepamentDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={OverallDashboard} />
          <Route path="/department" component={DepartmentList} />
          <Route path="/detail" component={Pie} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
