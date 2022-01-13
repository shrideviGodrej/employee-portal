import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/employeeAdd';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {loadEmployees} from "./action/action-creation"
import { Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsEXports from './aws-exports';
Amplify.configure(awsEXports);

function App({loadEmployees}) {
  loadEmployees()
  return (
    <Authenticator loginMechanisms={['username']}> 
    {({signout,user}) => 
    <Router>
         <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">{process.env.REACT_APP_APPLICATION_NAME}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              <Nav.Link onClick={signout}>Signout</Nav.Link>
              <Nav.Link >Welcome {user.username}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
         <div id="pagecontainer">
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/About" element={<About />} ></Route>
          <Route exact path="/Contact" element={<Contact />} ></Route>
          <Route exact path="/employees/locid/:locid/ecode/:ecode" element={<EmployeeDetails />} ></Route>
          <Route exact path="/employees/create" element={<AddEmployee />} ></Route>
        </Routes>
      </div>
    </Router>
}
    </Authenticator>
  
  );

}

function mapDispatchToProps(dispatch){
  let actionMap={
    loadEmployees:loadEmployees
  }
  
  return bindActionCreators(actionMap,dispatch)
}
export default connect(null,mapDispatchToProps)(App)
