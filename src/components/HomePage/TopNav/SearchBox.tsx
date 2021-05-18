import React from "react";
import { SearchProps } from "./TopNav"

const SearchBox: React.FC<SearchProps> = ({Text, SearchChange, opt, optChange}) => {
    
    return(
        <div className="b-2 text-blue m-4">
            <select value={opt} onChange={optChange} className="p-2">
                <option value="Name">Name</option>
                <option value="Username">Username</option>
                <option value="Email">Email</option>
            </select>
            <input type="search" value={Text} placeholder="Search by name" onChange={SearchChange} 
            className="border-2 border-blue p-2"/>
        </div>
    )
}

export default SearchBox;