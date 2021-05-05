import React, { Component } from "react";
import { Link } from "react-router-dom";

const inputValues = ["Firstname", "Lastname", "Email", "Choose username", "Password", "Confirm Password"]

type State = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Username: "",
    Password: "",
    "Confirm Password": "" 
}

class Form extends Component {
    constructor(props: State){
        super(props);
        this.state = {
            Firstname: "",
            Lastname: "",
            Email: "",
            Username: "",
            Password: "",
            "Confirm Password": "" 

        }
    }
    
    handleChange = (e:any) => {
        this.setState({[e.target.name]: e.currentTarget.value})
    }
    render(){
        inputValues.forEach(el => {
            console.log(this.state[el])
        });
        return (
        <div className="w-full lg:w-1/2 h-full">
            <form className="bg-blue-100 m-4 lg:w-1/2 lg:h-1/2 p-6">
                {
                    inputValues.map((placeholder, i)=> {
                        return <input type="text" name={placeholder} value={this.state[placeholder]} placeholder={placeholder} className="p-3 m-4 border-gray-400 border-b-2 bg-blue-100" onChange={this.handleChange}/>
                    })
                }

                <input type="submit" value="Create Profile" className="p-3 bg-blue-500 font-bold m-3 rounded-xl w-4/5 lg:hover:bg-blue-600"/>
                <small>Already have an account? <Link to="/" className="text-blue-400">Log in</Link></small>
            </form>
        </div>
    )
    }
    
}

export default Form;