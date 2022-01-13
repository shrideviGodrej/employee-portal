import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmployeeList from "./EmployeeList";
import SearchBar from "./Search";
import { connect } from "react-redux"

export const EmployeeContext = React.createContext()

export class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {
            employees: props.employees,
            filteredResult: props.filteredResult
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if (newProps.employees.length != oldState.employees.length) {
            console.log("Props changed", newProps)
            return {
                employees: newProps.employees,
                filteredResult: newProps.employees
            }
        }
        return null;
    }

    async componentDidMount() {

        //   let employees = await getEmployees().catch("Error getting employees")
        // this.setState({employees,filteredResult:employees})

    }
    handleSearch(searchText) {

        if (searchText && searchText.length > 0) {

            searchText = searchText.toUpperCase()
            let filteredResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0 ||
                item.Location.toUpperCase().indexOf(searchText) >= 0)

            this.setState({ filteredResult })

        }
        else {
            this.setState({ filteredResult: this.state.employees })
        }

    }
    render() {

        return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResult, doSearch: this.handleSearch }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Home</h2>
                        <SearchBar />
                        <EmployeeList></EmployeeList>
                    </Col>
                </Row>
            </Container>
        </EmployeeContext.Provider>
    }

}
function mapStateToProps(state) {
    return {
        employees: state.employeestate.employees,
        filteredResult:state.employeestate.employees
    }

}
export default connect(mapStateToProps,null)(Home);