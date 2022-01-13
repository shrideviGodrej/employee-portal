import * as ActionTypes from "./action-types"

const initialstate = {
    employees: [
    ],
    employee:undefined
}

export default function employeeReducer(state = initialstate, action) {
    const { type, payload } = action
    switch (type) {
        case ActionTypes.GET_EMPLOYEES:
            
            return state = { ...state, employees: payload };
        case ActionTypes.GET_EMPLOYEE:
            return state = { ...state, employee: payload };
        case ActionTypes.ADD_EMPLOYEE:
            return { ...state, employees: [...state.employees, payload] };
        case ActionTypes.DELETE_EMPLOYEE:
            console.log("test")
            let delItem = state.employees.find(item => item.LocationId == payload.locationId && item.EmployeeCode == payload.empCode);
            console.log(delItem)
            return { ...state, employees: [...state.employees.filter(item => item != delItem)] }
        default:
            return state;

    }

}
