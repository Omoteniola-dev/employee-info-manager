import React from "react";

interface Props {
    name: string;
    email: string;
  }

const Employee = (props: Props) => {
    return(
        <div className="p-4 w-1/4 bg-gray text-blue">
                <p>{props.name}</p>
                <p>{props.email}</p>
        </div>
    )
}

export default Employee;