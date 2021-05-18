import React from "react";
import EmployeeList from "./EmployeeList";
import { Person } from "../RenderBox/EmployeeList"
import EmploList from "./Employees.json"

interface EmployeeType {
    Employees: any,
    setEmployees: any,
    Text: string,
    opt: string
}

const RenderBox: React.FC<EmployeeType> = ({Employees, setEmployees, Text, opt}) => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(data => setEmployees(data))
    // console.log(Employees)
    setEmployees(EmploList)
    
    // const filteredList = Employees.filter((Employee: Person) =>{
    //     return Employee.name.toLowerCase().includes(Text.toLowerCase())
    // })
    const filteredList = Employees.filter((Employee: Person) =>{
        return Employee.opt.toLowerCase().includes(Text.toLowerCase())
    })
    return(
        <div>
                <EmployeeList Employees={filteredList}/>
            
        </div>
    )
}

export default RenderBox;