import { Component, useRef } from "react";
import { Table, Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {AddEmployee} from "../action/action-creation"
import { bindActionCreators } from 'redux'

class employeeAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employee: {
                LocationId: '',
                EmployeeCode: '',
                Name: '',
                Age: 0,
                Location: '',
                Designation: '',
                Department: ''
            },
            error: {
                locationId: '',
                employeeCode: '',
                name: '',
                age: '',
                location: '',
                designation: '',
                department: ''
            },
            Added: "Add Record"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("in Submit")
        console.log(this.state.employee)
        const { Added, employee } = this.state

        let result =  this.props.AddEmployee(this.state.employee)
        if(result.length != 0){
            this.setState({Added:"Added Successfully"})
        }
        //AddEmployee(employee).then(this.setState({Added:"Added Successfully"})).catch(this.setState({Added:"Error Adding Successfully"}));
        

    }



    handleChange(e) {
        const { name, value } = e.target
        const { error, employee } = this.state
        switch (name) {
            case "EmployeeCode":
                if (value.length != 4) this.setState({ ...this.state, error: { employeeCode: "Employee code must be 4 digit" } })
                else
                    this.setState({ ...this.state, error: { employeeCode: '' } })

                break;
            case "Age":
                if (value < 20) this.setState({ ...this.state, error: { age: "Employee code 20 years old" } })
                else
                    this.setState({ ...this.state, error: { age: 0 } })
                break;
            default:
                break
        }

        this.setState({ employee: { ...employee, [name]: value } })
        console.log(this.state.employee)
    }
    render() {

        return (<Container>
            <Row>
                <Col>
                    <h2>Add Employee</h2>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <div name="added" className="text-danger">{this.state.Added}</div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="empCode">
                            <Form.Label>Employee code </Form.Label>
                            <Form.Control name="EmployeeCode" type="text" onChange={this.handleChange} value={this.state.employee.EmployeeCode} placeholder="Enter employee code" />
                            <div className="text-danger">{this.state.error.employeeCode}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="Name" value={this.state.employee.Name} placeholder="Enter employee name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" onChange={this.handleChange} name="Age" value={this.state.employee.Age} placeholder="Enter employee age" />
                            <div className="text-danger">{this.state.error.age}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="Designation" value={this.state.employee.Designation} placeholder="Enter designation" />
                            <div className="text-danger">{this.state.error.designation}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="Department" value={this.state.employee.Department} placeholder="Enter department" />
                            <div className="text-danger">{this.state.error.department}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="locId">
                            <Form.Label>Location ID</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="LocationId" value={this.state.employee.LocationId} placeholder="Enter location ID" />
                            <div className="text-danger">{this.state.error.locationId}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name="Location" value={this.state.employee.Location} placeholder="Enter location" />
                            <div className="text-danger">{this.state.error.location}</div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>)
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        AddEmployee:AddEmployee
    }
    
    return bindActionCreators(actionMap,dispatch)
}
export default connect(null,mapDispatchToProps)(employeeAdd)