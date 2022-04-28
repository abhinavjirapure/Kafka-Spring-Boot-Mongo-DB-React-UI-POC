import React, { Component, useState } from "react";
import axios from "axios";
import './EmployeeDetails.css';


const ViewEmployeeData = () =>{

    const [employees,setEmployees] = useState([]);

    const ViewEmployeeData = () =>{
      //e.preventDefault();
      axios.get("http://localhost:8888/kafka/find/emp/details")
      .then(res => {
          console.log(res.data);
          console.log("res", res);
          if (res.status === 200) {
            console.log(res);
            setEmployees(res.data);  
          }
      }).catch(error => {
          console.log("res", error);
          alert("Invalid...");
      });
    }

    return(
    <div>
      <h1 className="heading">View Employee Onboarding Data</h1>  
      <button type="button"  onClick={()=>ViewEmployeeData()} class="btn btn-success">View</button>
      <table class="table table-striped" className="table">
          <thead>
              <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Country</th>
                  <th scope="col">Zip Code</th>
                  <th scope="col">National ID</th>
              </tr>
          </thead>
          <tbody>
          {employees.map(emp =>
                   <tr>
                   <td>{emp.firstName}</td>
                   <td>{emp.lastName}</td>
                   <td>{emp.address}</td>
                   <td>{emp.country}</td>
                   <td>{emp.zip}</td>
                   <td>{emp.nationalID}</td>
                   </tr>  
          )}
          </tbody>
      </table>
          <button type="button" class="btn btn-success">Previous Page</button>
    </div>

    );
}
export default ViewEmployeeData;