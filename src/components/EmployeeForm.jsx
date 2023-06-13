import React from "react";
import { useState } from "react";

const EmployeeForm = (props) => {
    const [employees, setEmployees] = useState([]);

   function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    return `${timestamp}${randomNum}`;
  }

   const [addFormData, setAddFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    employeePosition: "",
    idNumber: "",
})

const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    console.log(newFormData);

};

const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEmployee ={
        id: generateUniqueId(),
        fullName: addFormData.fullName,
        emailAddress: addFormData.emailAddress,
        phoneNumber: addFormData.phoneNumber,
        employeePosition: addFormData.employeePosition,
        idNumber: addFormData.idNumber,
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);

    //Reset the form after successful submission
    setAddFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        employeePosition: "",
        idNumber: "",
    });

    props.add(newEmployee.fullName, newEmployee.emailAddress, newEmployee.phoneNumber, newEmployee.employeePosition, newEmployee.idNumber)
};

const [showAddForm, setShowAddForm] = useState(false);
const handleCancelAddForm = () => {
    setAddFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        employeePosition: "",
        idNumber: "",
    });
    setShowAddForm(true);
};
const handleShowAddForm = () => {
    setShowAddForm(true);
};

    return(
        
        <div className="EmpForm">
            <form onSubmit={handleAddFormSubmit}>
                <div>
                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"50px", marginLeft:"50px", marginBottom:"20px"}}>
                            <label style={{display:"unset", marginBottom:"20px"}}>Full Name</label>
                            <br />
                            <input type="text"
                                name="fullName"
                                placeholder="Full Name"
                                onChange={handleAddFormChange}
                                className="Empinput"
                                value={addFormData.fullName}
                                style={{borderStyle:"none",borderRadius:"5px", marginTop:"20px", height:"25px", width:"250px"}}
                                required
                                maxLength={25}
                            />
                        </div>

                        <div style={{marginLeft:"50px", marginBottom:"20px"}}>
                            <label style={{display:"unset"}}>Email Address</label>
                            <br />
                            <input type="email"
                                placeholder="Email Address"
                                name="emailAddress"
                                onChange={handleAddFormChange}
                                className="Empinput"
                                value={addFormData.emailAddress}
                                style={{borderStyle:"none",borderRadius:"5px", marginTop:"20px", height:"25px", width:"250px"}}
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                required
                            />
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <div style={{marginRight:"50px", marginLeft:"50px", marginBottom:"20px"}}>
                            <label style={{display:"unset"}}>Phone Number</label>
                            <br />
                            <input type="tel"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                onChange={handleAddFormChange}
                                className="Empinput"
                                value={addFormData.phoneNumber}
                                style={{borderStyle:"none",borderRadius:"5px", marginTop:"20px", height:"25px", width:"250px"}}
                                required
                                pattern="[0-9]{10}"
                            />
                        </div>

                        <div style={{marginLeft:"50px", marginBottom:"20px"}}>
                            <label style={{display:"unset", marginBotton:"20px"}}>Employee Position</label>
                            <br />
                            <div style={{display:"flex", marginTop:"20px"}}>
                            <select 
                                name="employeePosition" 
                                value={addFormData.employeePosition}
                                onChange={handleAddFormChange} 
                                style={{borderRadius:"5px", width:"250px", height:"25px"}}>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Admin Clerk">Admin Clerk</option>
                                    <option value="Finance Clerk">Finance Clerk</option>
                            </select>
                            </div>
                        </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <div style={{marginLeft:"50px", marginBottom:"20px"}}>
                            <label style={{display:"unset"}}>ID Number</label>
                            <br />
                            <input type="text"
                                placeholder="ID Number"
                                name="idNumber"
                                onChange={handleAddFormChange}
                                value={addFormData.idNumber}
                                className="Empinput"
                                style={{borderStyle:"none",borderRadius:"5px", marginTop:"20px", height:"25px", width:"250px"}}
                                required
                                pattern="[0-9]{13}"
                            />
                        </div>

                        


                    </div>

                    <div style={{display:"flex", marginLeft:"120px", marginTop:"20px"}}>
                        <div style={{marginRight:"20px", marginBottom:"20px"}}>
                            <button 
                                type="submit"
                                name="Add"
                                style={{border:"none", borderRadius:"5px", width:"150px", height:"30px", backgroundColor:"#67b4ba", color:"#d1fafa"}}>
                                    Add Employee
                            </button>
                        </div>
                        <div style={{marginLeft:"20px", marginBottom:"20px",marginRight:"20px"}}>
                            <button 
                                type="button"
                                name="Cancel" 
                                onClick={handleCancelAddForm}
                                style={{border:"none", borderRadius:"5px", width:"150px", height:"30px", backgroundColor:"#98a7ac", color:"#d1fafa"}}>
                                    Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;