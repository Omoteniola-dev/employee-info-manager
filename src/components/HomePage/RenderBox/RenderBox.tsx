import React from "react";
import EmployeeList from "./EmployeeList";
import { Person } from "../RenderBox/EmployeeList"
interface EmployeeType {
    Employees: any,
    setEmployees: any
    Text: string
}

const RenderBox: React.FC<EmployeeType> = ({Employees, setEmployees, Text}) => {
    fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setEmployees(data))
    console.log(Employees)
    
    const filteredList = Employees.filter((Employee: Person) =>{
        return Employee.name.toLowerCase().includes(Text.toLowerCase())
    })
    return(
        <div>
                <EmployeeList Employees={filteredList}/>
            
        </div>
    )
}

export default RenderBox;