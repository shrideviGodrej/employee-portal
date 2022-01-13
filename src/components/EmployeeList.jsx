import React,  { Component, useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EmployeeContext } from "./Home";
import {Trash} from "react-bootstrap-icons"
import { deleteEmployee } from "../action/action-creation";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import "../trash.css"
function EmployeeList ({deleteEmployee}) {

    const {data} =  useContext(EmployeeContext)
 

    async function  handleDelete(locid,empcode,e){
        
       await deleteEmployee(locid,empcode)
    }
 
    
    return (
    <React.Fragment>
        <Link to='/employees/create' className="btn btn-success">Add Employees</Link>
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>
                Location
            </th>
            <th>
                Employee Code
            </th>
            <th>
                Employee Name
            </th>
            <th>
                Designation
            </th>
            <th>
                Department
            </th>
        </tr>
        </thead>
       <tbody>
            {
                
                data.map((item,index)=>{
                    
                   return (<tr key={index}>
                        <td>{item.Location}</td>
                        <td>{item.EmployeeCode}</td>
                        <td>{item.Name}</td>
                        <td>{item.Department}</td>
                        <td>{item.Designation}</td>
                        <td><Link to={`/employees/locid/${item.LocationId}/ecode/${item.EmployeeCode}`}>Details</Link></td>
                        <td><Trash className="trashiconstyle" onClick={(e) =>   handleDelete(item.LocationId,item.EmployeeCode,e)}></Trash></td>
                    </tr>)
                   
                   
                }
                
                )
            }
        </tbody>
    </Table></React.Fragment>)
    
}

function mapDispatchToProps(dispatch){
    let actionMap={
        deleteEmployee:deleteEmployee
    }
    
    return bindActionCreators(actionMap,dispatch)
}
export default connect(null,mapDispatchToProps)(EmployeeList)