import React from "react";
import { Link } from "react-router-dom";

const Preview: React.FC<{}> = () => {
    return(
        <div>
            <header className="App-header">Welcome to the employee information manager application.
                <Link to ="./CreateProfile" className="App-link"><p>Create Profile</p></Link>
                <Link to="/HomePage" className="App-link"><p>Search</p></Link>
            </header>
        </div>
    )
}
export default Preview;