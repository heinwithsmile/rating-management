import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

class SignIn extends Component {
  // state = {  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
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
                      placeholder="your unique name"
                      autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
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
                      placeholder="your unique password"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
