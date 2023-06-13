import React from "react";

const ReadOnlyRow = ({ employee, handleDelete, handleUpdate }) => {

   /* const handleUpdateClick = (id) => {
        console.log(id);
            handleUpdate(id);
        } */

    const Delete = (id) => {
        console.log(id);
        handleDelete(id);
    }

    return(
        <tr style={{color:"black"}}>
            <td>{employee.fullName}</td>
            <td>{employee.emailAddress}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.employeePosition}</td>
            <td>{employee.idNumber}</td>                  
            <td>
                <button
                    name="update"
                    type="button"
                    onClick={(event) => handleUpdate(event, employee)}
                    style={{border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"#a6d1d3", color:"#d1fafa"}}
                    >Update
                </button>
                <button
                    name="delete"
                    type="button"
                    onClick={() => Delete(()=>(employee.id))}
                    style={{border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"#93a589", color:"#d1fafa"}}
                    >Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;