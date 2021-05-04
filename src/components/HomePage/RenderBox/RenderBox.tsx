import React from "react";
import EmployeeList from "./EmployeeList";

interface EmployeeType {
    Employees: {},
    setEmployees: any
    Text: string
}
const RenderBox: React.FC<EmployeeType> = ({Employees, setEmployees, Text}) => {
    fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setEmployees(data))
    console.log(Employees)
    
    return(
        <div>
                <EmployeeList Employees={Employees}/>
            
        </div>
    )
}

export default RenderBox;