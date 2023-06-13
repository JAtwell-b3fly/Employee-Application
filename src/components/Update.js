import React from "react";

const Update = ({editFormData, handleEditFormChange, handleCancelClick, handleSaveClick}) => {
    return(
        <tr>
            <td>
                <input 
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleEditFormChange}
                    value={editFormData.fullName}
                />
            </td>

            <td>
                <input 
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                    onChange={handleEditFormChange}
                    value={editFormData.emailAddress}
                />
            </td>

            <td>
                <input 
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleEditFormChange}
                    value={editFormData.phoneNumber}
                />
            </td>

            <td>
                <select name="employeePosition" onChange={handleEditFormChange} value={editFormData.employeePosition}>
                    <option>Secretary</option>
                    <option>Admin Clerk</option>
                    <option>Finance Clerk</option>
                </select>
            </td>

            <td>
                <input 
                    type="text"
                    name="idNumber"
                    placeholder="ID Number"
                    required="required"
                    onChange={handleEditFormChange}
                    value={editFormData.idNumber}
                />
            </td>

            <td>
                <button 
                    type="submit" 
                    name="Save"
                    onClick={() => handleSaveClick()}>
                    Save
                </button>
                <button 
                    type="button" 
                    name="Cancel"
                    onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    )
}

export default Update;