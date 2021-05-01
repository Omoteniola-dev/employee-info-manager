import React from "react";
import Employee from "./Employee";


interface Person{
    id: number
    name: string;
    email: string;
}

const EmployeeList: React.FC<{ Employees: any}> = ({Employees}) => {
    
    return(
        <div className="flex flex-wrap p-3">
            {
                
                Employees.map((Person: Person, i:number) => {
                    return <Employee 
                    key={Person["id"]}
                    name={Person.name}
                    email={Person.email}
                    />
                })
            }
            
        </div>            
    )
}

export default EmployeeList;