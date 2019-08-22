import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from "react-bootstrap/FormControl";
// import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";
// import Card from 'react-bootstrap/Card';
// import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import Nava from './Nav';


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
    return (
      <div className="mb-5">
        <Nava searchQuery={this.state.query} change={this.handleInputChange} />
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
