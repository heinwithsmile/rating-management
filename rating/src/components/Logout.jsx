import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div className="text-center mt-3">
        <h1>You have been Logouted!!!</h1>
       <button className="btn btn-outline-success mt-3"><Link to="/">Login Again</Link></button>
      </div>
    );
  }
}

export default Logout;
