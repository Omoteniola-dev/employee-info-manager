import React from "react";
import { Link } from "react-router-dom";

const nav = [
    {
        text: "Create profile",
        link: "./CreateProfile"
    },
    {
        text: "Search",
        link: "/Homepage"
    }
]
const Preview: React.FC<{}> = () => {
    return(
        <div>
            <header className="App-header font-bold">Welcome to the employee information manager application.
            <div className="flex flex-wrap lg:flex-row flex-col justify-between mt-6">
                {
                    nav.map((n) => {
                     return <p><Link to={n.link} className="App-link m-5 p-3 bg-gray-500 rounded-xl">{n.text}</Link></p>
                    })
                }
                {/* <p create><Link to ="./CreateProfile" className="App-link">Create Profile</Link></p>
                <p><Link to="/HomePage" className="App-link">Search</Link></p> */}
            </div>
                
            </header>
        </div>
    )
}
export default Preview;