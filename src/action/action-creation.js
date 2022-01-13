
import axios from "axios"
import * as ActionTypes from "./action-types"

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL

export function loadEmployees() {
    return async (dispatch) => {
        let result
        try {
            result = await axios(API_URL)
            dispatch({
                type: ActionTypes.GET_EMPLOYEES,
                payload: result.data
            })
            return Promise.resolve(result.data)
        }
        catch (e) {
            return Promise.reject(result.data)
        }
    }
    //type : ActionTypes.GET_EMPLOYEES,
    //payload  : employees
}


export function GetEmployee(locid, ecode) {
    console.log(`${API_URL}/location/${locid}/emp/${ecode}`)
    return async (dispatch) => {
        let result
        let URL = `${API_URL}/location/${locid}/emp/${ecode}`

        try {
            console.log("test")
            result = await axios(URL)

            dispatch({
                type: ActionTypes.GET_EMPLOYEE,
                payload: result.data
            })

            return Promise.resolve(result.data)
        }
        catch (e) {
            console.log("test")
            return Promise.reject(e)
        }
    }
    //type : ActionTypes.GET_EMPLOYEES,
    //payload  : employees
}


export function AddEmployee(employee) {
    return async (dispatch) => {
        let result
        try {
            result = await axios.post(API_URL, employee)
            dispatch({
                type: ActionTypes.ADD_EMPLOYEE,
                payload: employee
            })
            return Promise.resolve(result.data)
        }
        catch (e) {
            return Promise.reject(result.data)
        }
    }
}

export function deleteEmployee(locId, eCode) {
    return async (dispatch) => {
        try {
            let url = `${API_URL}/location/${locId}/empcode/${eCode}`;
            let result = await axios.delete(url);
            dispatch({
                type: ActionTypes.DELETE_EMPLOYEE,
                payload: { locationId: locId, empCode: eCode }
            })
            return Promise.resolve(result.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}