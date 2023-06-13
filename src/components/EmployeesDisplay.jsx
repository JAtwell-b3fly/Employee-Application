import React from "react";
import { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import Update from "./Update";

const EmployeeDisplay = (props) => {
    const [editEmployeeid, setEditEmployeeid] = useState(null);
    const [employees, setEmployees] = useState([]);  

    const [editFormData, setEditFormData] = useState ({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        employeePosition: "",
        idNumber: "",
    })


    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        /*const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);*/

        setEditFormData((employees) => ({
            ...employees,
            [fieldName]: fieldValue,
        }))
      }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedEmployee = {
          id: editEmployeeid,
          fullName: editFormData.fullName,
          emailAddress: editFormData.emailAddress,
          phoneNumber:editFormData.phoneNumber,
          employeePosition: editFormData.employeePosition,
          idNumber: editFormData.idNumber,
        }
    
        const newEmployees = [ ...employees];
    
        const index = employees.findIndex((employee) => employee.id === editEmployeeid);
    
        newEmployees[index] = editedEmployee;
    
        setEmployees(newEmployees);
        setEditEmployeeid(null);
      }

      const handleCancelClick = () => {
        setEditEmployeeid(null);
      }


      const handleSaveClick = () => {
        const newEmployees = employees.map((employee) => {
          if (employee.id === editEmployeeid) {
            return { 
                ...employee,
                fullName: editFormData.fullName,
                emailAddress: editFormData.emailAddress,
                phoneNumber: editFormData.phoneNumber,
                employeePosition: editFormData.employeePosition,
                idNumber: editFormData.idNumber,
            };
          }
          return employee;
        });
    
        setEmployees(newEmployees);
        setEditFormData({});
        setEditEmployeeid(null);
      };

    return(
        <div>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Position</th>
                            <th>ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor:"#cdc9cb"}}>
                        {props.employees.map((employee) => (
                            <Fragment key={employee.id}>
                                { editEmployeeid === employee.id ? (
                                <Update 
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                                handleSaveClick={handleSaveClick}
                                onSubmit={handleEditFormSubmit}
                                /> 
                                ) : (
                                <ReadOnlyRow 
                                    employee={employee}
                                    handleDelete={props.delete}
                                    handleUpdate={props.handleUpdate}
                                    />
                                )} 
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default EmployeeDisplay;