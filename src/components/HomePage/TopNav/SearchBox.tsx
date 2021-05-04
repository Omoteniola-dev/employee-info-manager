import React from "react";
import { SearchProps } from "./TopNav"

const SearchBox: React.FC<SearchProps> = ({Text, SearchChange}) => {
    
    return(
        <div className="b-2 text-blue m-4">
            <input type="search" value={Text} onChange={SearchChange} />
        </div>
    )
}

export default SearchBox;