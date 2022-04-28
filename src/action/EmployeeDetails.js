import { Component } from "react";
import axios from "axios";
import './EmployeeDetails.css';
import ViewEmployeeData from './ViewEmployeeData.js';
import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
class EmployeeDetails extends Component {

    constructor(props) {
        super(props)
        this.state ={
        firstName:'',lastName:'',address:'',country:'',zip:'',nationalID:''
        }
        
     }

     handlefirstName = (e) => {
        this.firstName=e.target.value;
    }

    handlelastName = (e) => {
        this.lastName=e.target.value;
    }

    handleaddress = (e) => {
        this.address=e.target.value;
    }

    handlecountry = (e) => {
        this.country=e.target.value;
    }

    handlezip = (e) => {
        this.zip=e.target.value;
    }

    handlenationalID = (e) => {
        this.nationalID=e.target.value;
    }

    handleSubmit = (e) => {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.address);
        console.log(this.country);
        console.log(this.zip);
        console.log(this.nationalID);
        e.preventDefault();
        var formData = new FormData();
        formData = {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "address": this.address,
            "country": this.country,
            "zip": this.zip,
            "nationalID": this.nationalID,
        }
        const axios = require('axios');
        axios({
            method: 'post',
            headers: { "Accept": "application/json", "content-type": "application/json"},
            url:'http://localhost:8888/kafka/add/emp/details',
            data: JSON.stringify(formData)
        }).then((res) =>{ 
            console.log(res.status);
            if(res.status===200)
            {
            console.log(res);
            alert("Employee onboarding details added successfully...")
            }
        }).catch(error=>{
            console.error('Error',error.response);
            alert("Invalid data entered...");
        });
    }
    resetbutton=(e)=>{
        console.log(e);
        document.getElementById("details").reset();   
      
        }

render(){
    return(
    <div>
        <body>
        <h1 className="heading">Employee Onboarding Portal</h1>
        <form id="details" className="formLook">
            <div>
            <div>
            <p>First Name : <input  onChange={this.handlefirstName} value={this.firstName} type="text" id="fname" className="textboxPadding" required/></p>
            </div>
            <div>
            <p>Last Name  : <input  onChange={this.handlelastName} value={this.lastName} type="text" id="lname" className="textboxPadding" required/></p> 
            </div>
            <div>
            <p>Address    : <input  onChange={this.handleaddress} value={this.address} type="text" id="ads" className="textboxPadding"  required/></p> 
            </div>
            <div>
            <p>Country    : <select id='country'  onChange={this.handlecountry} value={this.country}>
            <option value="Select" selected defaultValue>Select</option>   
            <option value="India">India</option>   
            <option value="Japan">Japan</option> 
            <option value="USA">USA</option> 
            <option value="UK">UK</option> 
            <option value="Germany">Germany</option> 
            </select> 
            </p>
            </div>
            <div>
            <p>Zip Code    : <input  onChange={this.handlezip} value={this.zip} type="number" id="zip" className="textboxPadding"  required/></p> 
            </div>
            <div>
            <p>National ID    : <input  onChange={this.handlenationalID} value={this.nationalID} type="text" id="id" className="textboxPadding"  required/></p> 
            <input type="button" onClick={(e)=>this.resetbutton(e)} value="Reset"/>
            <input type="button" onClick={(e)=>this.handleSubmit(e)} value="Submit"/>
            </div>
           <BrowserRouter>
            <div>
             <ul>
                 <li>
                     <Link to="/view-data" element={<ViewEmployeeData />}>View Employee Data</Link>
                 </li>
             </ul>
             <Routes>  <Route path ="/view-data" element = {<ViewEmployeeData />}/> </Routes>
             </div>
            </BrowserRouter>
           </div>
        </form>
        </body>
    </div>
    )
}
}
export default EmployeeDetails;