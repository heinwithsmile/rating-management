import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
// import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";
// import Card from 'react-bootstrap/Card';
import logo from "../image/logo.png";
import { Link } from "react-router-dom";


class TownShip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredData: [],
      data: []
    };
  }
  handleInputChange = event => {
    const query = event.target.value;
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name_mm.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };
  getData = () => {
    fetch(`http://localhost:5001/api/department/finddepartments`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name_mm.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    const logo_style = {
      width: "100px",
      height: "80px"
    };
    const searchField = {
      "margin-left": "300px"
    };

    return (
      <div className="mb-5">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" style={logo_style} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <li className="ml-5"><Link to="/admin">Home</Link></li>
          <li className=" ml-5 "> <a href="http://localhost:3002">MENAGEMENT DEPARTMENT</a></li>
          <li className="ml-5"><Link to="/logout">Logout</Link></li>         
            <form inline style={searchField}>
              <FormControl
                placeholder="Search Here"
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </form>
           
            {/* <a href="http://localhost:3002">
              <button className="btn btn-outline-success ml-3">
                MENAGEMENT DEPARTMENT
              </button>
            </a> */}
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-3 text-center">
            {this.state.filteredData.map(i => (
              <ListGroup variant="flush" key={i.id}>
                <ListGroup.Item>
                  <Link to="/detail">{i.name_mm}</Link>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </div>
      </div>
    );
  }
}
export default TownShip;
