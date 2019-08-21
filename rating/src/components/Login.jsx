import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  onSubmit=(e)=> {
    e.preventDefault();
    let { username, password } = this.state;
    if(username == "admin" && password=="admin123"){
        this.setState({
            loggedIn:true
        })
    }
  }

  render() {
      if(this.state.loggedIn){
          return <Redirect to="/admin"/>
      }
    return (
      <div>
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
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
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
