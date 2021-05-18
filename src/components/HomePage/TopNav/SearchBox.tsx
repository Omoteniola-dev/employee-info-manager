import React from "react";
import { SearchProps } from "./TopNav"

const SearchBox: React.FC<SearchProps> = ({Text, SearchChange}) => {
    return(
        <div className="b-2 text-blue m-4">
            <input type="search" value={Text} placeholder="Search by name" onChange={SearchChange} 
            className="border-2 border-blue p-2"/>
        </div>
    )
}

export default SearchBox;