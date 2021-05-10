import React, { Component } from "react";
import { Link } from "react-router-dom";


type State = {
    profile:{
        Firstname: "",
        Lastname: "",
        Email: "",
        Username: "",
        Password: "",
    }
    
}

class Form extends Component<{}, any> {
    constructor(props: State){
        super(props);
        this.state = {
            profile:{
                Firstname: "",
                Lastname: "",
                Email: "",
                Username: "",
                Password: "",
            }
            
        }
    }

    
    
    render(){
        const { profile } = this.state;
        
        const handleChange = (e: any) =>{
        e.preventDefault();
        profile[e.target.name] = e.currentTarget.value
        return this.setState({ profile})
    }
        return (
        <div className="w-full lg:w-1/2 h-full">
            <form className="bg-blue-100 m-4 lg:w-1/2 lg:h-1/2 p-6">
                <input type="text" name="Firstname" value={profile.Firstname} placeholder="Firstname" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>
                <input type="text" name="Lastname" value={profile.Lastname} placeholder="Lastname" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>
                <input type="text" name="Email" value={profile.Email} placeholder="Email" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>
                <input type="text" name="Username" value={profile.Username} placeholder="Username" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>
                <input type="text" name="Password" value={profile.Password} placeholder="Password" className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={handleChange}/>

                <input type="submit" value="Create Profile" className="p-3 bg-blue-500 font-bold m-3 rounded-xl w-4/5 lg:hover:bg-blue-600"/>
                <small>Already have an account? <Link to="/login" className="text-blue-400">Log in</Link></small>
            </form>
        </div>
    )
    }
    
}

export default Form;