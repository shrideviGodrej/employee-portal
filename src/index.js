import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './action/reducer'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadEmployees } from './action/action-creation';
import { getEmployees } from './services/employeeservices';
import { GET_EMPLOYEES } from './action/action-types';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

//console.log(store)
//let sampleData = [
  //{Designation:"Team Lead",Department:"IT",EmployeeCode:"2344",LocationId:"L1",Age:"22",Name:"Viha",Location:"Mumbai"},
  //{Designation:"Team Lead",Department:"IT",EmployeeCode:"2345",LocationId:"L1",Age:"22",Name:"Vihan",Location:"Delhi"}
//]
//store.dispatch(loadEmployees(sampleData))
//console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
