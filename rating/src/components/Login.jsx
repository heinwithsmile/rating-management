import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let { username, password } = this.state;
    if (username == "admin" && password == "admin123") {
      localStorage.setItem("token", "kdkfkksdjkjskjksjd");
      this.setState({
        loggedIn: true
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="text-center mt-5">
        <h1>Login Page</h1>
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={e => this.setState({ username: e.target.value })}
                value={this.state.username}
                placeholder="your unique name"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
                placeholder="your unique password"
                autoComplete="off"
              />
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
