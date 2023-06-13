import EmployeeForm from "./EmployeeForm";
import '../App.css';
import EmployeeDisplay from "./EmployeesDisplay";
import { useState } from "react";

const MainBox = (props) => {
    const [employees, setEmployees] = useState([]);
 
    const [searchValue, setSearchValue] = useState("");
    const handleSearchValue = (event) => {
        setSearchValue(event.target.value);
    }
    const onSearch = (searchTerm) => {
        setSearchValue(searchTerm);
        //our api to fetch the search result
        console.log("search", searchTerm);
    }

    const [isDetailsClick, setIsDetailsClick] = useState(false);
    const handleShowDetails = () => {
        if (isDetailsClick === true){
            setIsDetailsClick(false);
        }
        else {
            setIsDetailsClick(true);
        }
    }

    const [isNewEmployeeClick, setIsNewEmployeeClick] = useState(false);
    const handleShowAddNew = () => {
        if (isNewEmployeeClick === true){
            setIsNewEmployeeClick(false);
        }
        else {
            setIsNewEmployeeClick(true);
        }
    }

    
    return(
        <div className="BigBox" style={{display:"flex", marginLeft:"150px"}}>

            <div className="Left">
                <div>
                    <>
                    <h1><b>Welcome</b></h1>
                    <p>to the</p>
                    <h3>Employee Application</h3>
                    </>
                </div>

                <h3>Dashboard</h3>

                <div>
                    <div>
                        <button
                            onClick={() => handleShowAddNew(!isNewEmployeeClick)}
                            style={{border:"none", borderRadius:"5px", width:"150px", height:"30px", backgroundColor:"#67b4ba", color:"#d1fafa", marginBottom:"20px"}}>
                            Add New Employee</button>
                            {
                                isNewEmployeeClick && (
                                    <>
                                        <div className="AddNewEmployee"></div>
                                    </>
                                )
                            }
                    </div>
                    
                    <div>
                        <button 
                            onClick={() => handleShowDetails(!isDetailsClick)}
                            style={{border:"none", borderRadius:"5px", width:"150px", height:"30px", backgroundColor:"#98a7ac", color:"#d1fafa"}}>
                            Employee Details</button>
                            { 
                                isDetailsClick && (
                                    <>
                                        <div className="EmployeeDetails"></div>
                                    </>
                                )
                            }
                    </div>
                </div>

                <div>
                    <svg width="200px" height="800px" xmlns="http://www.w3.org/2000/svg">
                        <image href="https://www.freepnglogos.com/uploads/workers-png/workers-concierge-corporate-wellness-lexington-kentucky-19.png" height="750px" width="200px"  paddingRight="10px" />
                    </svg>
                </div>
            </div>

            <div className="Right">
                <br />
                <div style={{display:"flex", marginTop:"30px"}}>
                    <br />
                    <div>
                        <div>
                            <input 
                                type="text" 
                                className="SearchBar"
                                style={{width:"500px", height:"30px",textAlign:"left", marginLeft:"50px",borderRadius:"5px",border:"none",backgroundColor:"#ffffff"}}
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleSearchValue} 
                            />
                            <button
                                type="submit"
                                name="SearchIcon"
                                style={{width:"30px", height:"30px",textAlign:"left",border:"none",borderRadius:"5px",backgroundColor:"#ffffff"}}
                                onClick={() => onSearch(searchValue)}
                                >
                                    <>
                                        <svg width="20px" height="15px" xmlns="http://www.w3.org/2000/svg">
                                            <image href="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" height="15px" width="20px" />
                                        </svg>
                                    </>
                            </button>
                        </div>
                        <div style={{backgroundColor:"white", color:"black", display: "flex", flexDirection:"column", marginLeft:"50px"}}>
                            {employees.filter((employee) => {
                                const searchTerm = searchValue.toLowerCase();
                                const searchFullName = employee.fullName.toLowerCase();

                                return searchTerm && searchFullName.startsWith(searchTerm) && searchFullName !== searchTerm;
                            })
                            .slice(0,10)
                            .map((employee) => (
                                <div 
                                onClick={() => onSearch(employee.fullName)}
                                style={{cursor:"pointer", textAlign:"start", margin: "2px 0"}}>
                                    {employee.fullName}
                                </div>
                                ))}
                        </div>
                    </div>
                
                    <div>
                        <select style={{fontSize:"12", borderStyle:"none", borderRadius:"5px",textAlign:"right", marginLeft:"130px"}}>
                            <option>English UK</option>
                            <option>Afrikaans</option>
                        </select>
                    </div>
                    
                </div>


                <div>

                    {
                        isNewEmployeeClick ? 
                            <>
                                <div>
                                    <h3 style={{textAlign:"left", marginLeft:"50px"}}>Add New Employee</h3>
                                </div>

                                <div className="AddNewEmployee"></div>
                                <EmployeeForm  add={props.add} />
                            </>
                             : 
                            null
                    }

                    {
                        isDetailsClick ?
                            <>
                                <div className="EmployeeDetails"></div>
                                <h3 style={{textAlign:"left", marginLeft:"50px"}}>View Employee Results</h3>
                                <EmployeeDisplay   employees={props.workers} delete={props.delete} handleUpdate={props.handleUpdate}/>
                            </>
                                 : 
                            null
                    }
                        
                    
                </div>
            </div>

        </div>
    );
};

export default MainBox;