import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div className="text-center mt-5">
        <h1>You have been Logouted!!!</h1>
       <button className="btn btn-outline-success mt-5"><Link to="/">Login Again</Link></button>
      </div>
    );
  }
}

export default Logout;
