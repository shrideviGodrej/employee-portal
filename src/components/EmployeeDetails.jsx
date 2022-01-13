import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Table, Container, Row, Col  } from "react-bootstrap";
import {connect} from "react-redux"
import { GetEmployee } from "../action/action-creation";
import { bindActionCreators } from 'redux'

export function EmployeeDetails({GetEmployee}) {
    const { locid, ecode } = useParams();
    const [employee, setEmployee] = useState();

    

    useEffect(() => {
        async function FetchEmployee() {
            console.log(locid)
            let result = await GetEmployee(locid,ecode)
            setEmployee(result)
        }
        FetchEmployee()

    }, [locid, ecode])
    console.log("test1")

    console.log(employee)
    
    return (<React.Fragment>{employee && createUI() }</React.Fragment>)

    function createUI(){
        return (<Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Employee Details</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{employee.Name}</td>
                            </tr>
                            <tr>
                                <th>Employee Code</th>
                                <td>{employee.EmployeeCode}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{employee.Age}</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>{employee.Department}</td>
                            </tr>
                            <tr>
                                <th>Designation</th>
                                <td>{employee.Designation}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{employee.Location}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>)
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        GetEmployee
    }
    
    return bindActionCreators(actionMap,dispatch)
}
function mapDispatchToState(state)
{
    return{
        employee:state.employeestate.employee,
        
        }
}
export default connect(mapDispatchToState,mapDispatchToProps)(EmployeeDetails)