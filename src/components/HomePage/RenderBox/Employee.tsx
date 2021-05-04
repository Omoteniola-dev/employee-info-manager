import React from "react";

interface Props {
    name: string;
    email: string;
  }

const Employee = (props: Props) => {
    const { name, email } = props;
    return(
        <div className="p-4 m-4 b-2 lg:w-1/5 w-1/4 lg:h-1/4 bg-blue-200 rounded-xl">
                <p>{name}</p>
                <p>{email}</p>
        </div>
    )
}

export default Employee;