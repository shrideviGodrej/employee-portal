import { useRef , useContext} from "react";
import { FormControl, InputGroup,Form } from "react-bootstrap";
import { EmployeeContext } from "./Home";

export default function SearchBar(){
    const searchInput = useRef('')
    const {doSearch,employees, data} =  useContext(EmployeeContext)
   // console.log(employees,data)
    return(
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="search">Search</InputGroup.Text>
                <FormControl ref={searchInput} placeholder="search by name or location" onChange={
                    ()=> doSearch(searchInput.current.value)
                }></FormControl>
                </InputGroup>
                <p>Showing {data.length} of {employees.length}</p>
        </Form>
    )
}

