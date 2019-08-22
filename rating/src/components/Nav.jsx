import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
class NavBr extends Component {
  // state = {  }
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="/home" class="navbar-brand">
          <img src={logo} alt="DICA" />
        </a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ml-5">
            <Link to="/home" class="nav-item nav-link">
              Home
            </Link>
            <Link to="/department" class="nav-item nav-link">
              Department List
            </Link>
            <Link to="/logout" class="nav-item nav-link">
              Logout
            </Link>
          </div>
          <form class="form-inline ml-auto">
            <input
              type="text"
              class="form-control mr-sm-2"
              placeholder="Search By Name"
              value={this.props.searchQuery}
              onChange={this.props.change}
            />
            <button type="submit" class="btn btn-outline-light">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBr;
