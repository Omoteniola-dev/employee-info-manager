import React, { useState } from "react";
import TopNav from "../components/HomePage/TopNav/TopNav";
import RenderBox from "../components/HomePage/RenderBox/RenderBox";



const HomePage: React.FC<{}> = () => {
    const [Text, setText] = useState<string>("");
    const [Employees, setEmployees] = useState([]);
    const [opt, setOpt] = useState<string>("");
    
    const SearchChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{ 
        return setText(e.currentTarget.value);
    }
    
    const optChange= (e: any) => {
        return setOpt(e.currentTarget.value)
    }


    return(
        <div className="h-screen">
            <TopNav Text={Text} SearchChange={SearchChange} opt={opt} optChange={optChange}/>
            <RenderBox Employees={Employees} setEmployees={setEmployees} Text={Text} opt={opt}/>
        </div>
    )
}

export default HomePage;