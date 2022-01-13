import axios from "axios"
const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL
export  function getEmployees(){
    return fetch(API_URL).then(response => response.json()).catch(err => console.log(err))
}
export  function getEmployee(locid,empcode){
    let URL = `${API_URL}/location/${locid}/emp/${empcode}`
    return fetch(URL).then(response => response.json()).catch(err => console.log(err))
}

export  function AddEmployee(employee){
    console.log(employee)
    return axios.post(API_URL,employee).then("Added Successfully").catch(err => console.log(err))
}