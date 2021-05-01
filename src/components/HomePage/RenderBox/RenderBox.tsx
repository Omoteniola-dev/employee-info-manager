import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

const RenderBox: React.FC<{}> = () => {
    const [Employees, setEmployees] = useState([])
    fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setEmployees(data))
    return(
        <div>
            
                <EmployeeList Employees={Employees}/>
            
        </div>
    )
}

export default RenderBox;