import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form, Button, Card, Col } from "react-bootstrap";

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
      return <Redirect to="/home" />;
    }
    return (
      <Container className="mt-5">
        <Row>
          <Col xs={6} md={4}>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
            <Card.Title className="text-center mt-3">Login</Card.Title>
              <Card.Body>
                <Form name="loginForm" onSubmit={this.onSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
                      value={this.state.username}
                      placeholder="unique name"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                      value={this.state.password}
                      placeholder="unique password"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
