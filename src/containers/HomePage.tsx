import React from "react";
import TopNav from "../components/HomePage/TopNav/TopNav";
import RenderBox from "../components/HomePage/RenderBox/RenderBox";

const HomePage: React.FC<{}> = () => {
    return(
        <div>
            <TopNav />
            <RenderBox />
        </div>
    )
}

export default HomePage;