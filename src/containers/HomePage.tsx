import React, { useState } from "react";
import TopNav from "../components/HomePage/TopNav/TopNav";
import RenderBox from "../components/HomePage/RenderBox/RenderBox";



const HomePage: React.FC<{}> = () => {
    const [Text, setText] = useState<string>("");
    const [Employees, setEmployees] = useState([]);
    
    const SearchChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{ 
        return setText(e.currentTarget.value);
    }
    
    return(
        <div className="h-screen">
            <TopNav Text={Text} SearchChange={SearchChange} />
            <RenderBox Employees={Employees} setEmployees={setEmployees} Text={Text} />
        </div>
    )
}

export default HomePage;