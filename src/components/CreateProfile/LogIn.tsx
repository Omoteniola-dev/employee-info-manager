import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    const profile: any = {
    username: "",
    password: ""
    }
    const [details, setDetails] = useState(profile)

    const handleChange = (e: any) => {
        e.preventDefault();
        details[e.target.name] = e.currentTarget.value;
        setDetails({ details })
    }
    return(
        <div>
            <h1> Login page </h1>
            <div className="w-full lg:w-1/2 h-full">
            <form className="bg-blue-100 m-4 lg:w-1/2 lg:h-1/2 p-6">
                <input type="text" name="Username" value={details.username} placeholder="Username" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>
                <input type="text" name="Password" value={details.password} placeholder="Password" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>

                <input type="submit" value="Create Profile" className="p-3 bg-blue-500 font-bold m-3 rounded-xl w-4/5 lg:hover:bg-blue-600"/><br />
                <small>Are you a new employee? <Link to="/createprofile" className="text-blue-400">Create account </Link></small>
            </form>
        </div>
        </div>
    )
}

export default LogIn;