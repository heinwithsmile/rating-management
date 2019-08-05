import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import * as AllAction from '../redux/action/crudbank';
class BankCreate extends Component {
    state = {
        idno: '',
        townshipname: ''
    }

    handleID = (e) => {
        const idNo = e.target.value;
        this.setState({
            idno: idNo
        })
    }
    handleTown = (e) => {
        const town = e.target.value;
        this.setState({
            townshipname: town
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { idno, townshipname } = this.state;
        this.props.createbank(idno, townshipname);
        this.setState({
            idno : '',
            townshipname:''
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 max-10 col-md-8 mt-4">
                        <h2 className="text-center">Add Bank</h2>
                        <div className="card card-body">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ID NO</Form.Label>
                                    <input type="text" value={this.state.idno} onChange={this.handleID} placeholder="Enter ID NO" />
                                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Township Name</Form.Label>
                                    <input type="text" value={this.state.townshipname} onChange={this.handleTown} placeholder="Where your bank want to create" />
                                </Form.Group>
                                {/* <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Button variant="primary" type="submit">
                                    Create Bank
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {
                                this.props.bankinfo.map(info => (
                                    <li>
                                        {info.township_name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        bankinfo: state.township.banks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createbank: (idno, townshipname) => dispatch(AllAction.createbank(idno, townshipname)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BankCreate);