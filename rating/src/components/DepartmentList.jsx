import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Nava from './Nav';

class DepartmentList extends React.Component {
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
        return element.name.toLowerCase().includes(query.toLowerCase());
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
          return element.name.toLowerCase().includes(query.toLowerCase());
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
                  <Link to="/detail">{i.name}</Link>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </div>
      </div>
    );
  }
}
export default DepartmentList;
