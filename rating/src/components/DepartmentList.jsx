import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
// import Card from 'react-bootstrap/Card';
import logo from '../image/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pie from './DepamentDetail';

class TownShip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query : '',
            filteredData : [],
            data : []
        }
    }
    handleInputChange = event => {
        const query = event.target.value;
        this.setState( prevState => {
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
    townfunc =()=> {
        return (
            <Pie/>
        );
    }
    render() {
        const logo_style = {
            width: '200px',
            height: '50px'
        }
        const searchField = {
            'margin-left': '600px',
        }
       
        return (
            <div className="mb-5">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><img src={logo} alt="" style={logo_style} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <form inline style={searchField}>
                            <FormControl
                                placeholder="Search By Township"
                                value={this.state.query}
                                onChange={this.handleInputChange}
                            />
                        </form>
                    </Navbar.Collapse>
                </Navbar>
                <div className="mt-3" >
                <Router>
                    <Route path="/town" exact component={this.townfunc} />
                    {
                        this.state.filteredData.map(i => (
                            <ListGroup variant="flush" key={i.id}>
                                <ListGroup.Item><Link to="/town">{i.name_mm}</Link></ListGroup.Item>
                            </ListGroup>
                        ))
                    }
                    </Router>
                </div>
            </div>
        );
    }
}
export default TownShip;