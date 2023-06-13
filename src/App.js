import './App.css';
import MainBox from './components/Box';
import data from "./mock-data.json";
import { useState } from 'react';

function App() {
  //Declaration of the employees list using the hardcoded data
  const [employees, setEmployees] = useState(data);

 //Employee Form Component Functions and Variables
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    employeePosition: "",
    idNumber: "",
  });

  const handleAddFormChange = (fullName, emailAddress, phoneNumber, employeePosition, idNumber) => {
    setAddFormData(
      [...employees,
        {fullName: fullName, 
          emailAddress: emailAddress, 
          phoneNumber: phoneNumber,
          employeePosition: employeePosition, 
          idNumber: idNumber}
      ]);
  }

  function generateUniqueId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    return `${timestamp}-${randomNum}`;
  }

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddFormSubmit = (fullName,emailAddress,phoneNumber,employeePosition, idNumber) => {

    setEmployees([...employees,
      {fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      employeePosition: employeePosition,
    idNumber: idNumber} 
    ])
   

    
   // setShowAddForm(true);
}; 

//______________________________________________________________________________________________________________________

  //Update Component Variables and Functions
  const [editFormData, setEditFormData] = useState ({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    employeePosition: "",
    idNumber: "",
  })

  const [editEmployeeid, setEditEmployeeid] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }

  const handleEditClick = (employee) => {
    setEditEmployeeid(employee.id);
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
      if (employee.id === editFormData.id) {
        return { ...employee, ...editFormData};
      }
      return employee;
    });

    setEmployees(newEmployees);
    setEditFormData(null);
  };

  //__________________________________________________________________________________


  //Read Only Component Functions and Variables
  const handleDeleteClick = (employeeID) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === employeeID);

    newEmployees.splice(index, 1);

    setEmployees(newEmployees);
  }

  const updateState = (employeeID) => {
    const newState = employees.map(employee => {
      // 👇️ if id equals 2, update country property
      if ( employeeID === employee.id) {

        const formValues = {
          fullName: employee.fullName,
          emailAddress: employee.emailAddress,
          phoneNumber: employee.phoneNumber,
          employeePosition: employee.employeePosition,
          idNumber: employee.idNumber,
        }
        //setEmployees(formValues);
        setEditFormData(formValues);
        return {...employee, formValues};
      }

      // 👇️ otherwise return the object as is
      return employee;
    });

    setEmployees(newState);
  };

  return (
    <div className="App">
      <h1>Employee Application</h1>
      <MainBox add={handleAddFormSubmit}   workers={employees}    delete={handleDeleteClick} handleUpdate={updateState}/>
      <div>
        <svg width="200px" height="100px" xmlns="http://www.w3.org/2000/svg">
          <image href="https://www.freepnglogos.com/uploads/bank-of-america-png-logo/bank-of-america-png-logo-black-design-24.png" height="100px" width="200px" />
        </svg>
      </div>
    </div>
    
  );
}

export default App;
