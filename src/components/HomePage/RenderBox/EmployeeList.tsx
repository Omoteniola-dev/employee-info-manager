import React from "react";
import Employee from "./Employee";


export interface Person{
    id: number
    name: string;
    email: string;
    opt: any
}

const EmployeeList: React.FC<{ Employees: any}> = ({Employees}) => {

    return(
        <div className="flex flex-wrap lg:flex-wrap p-3">
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