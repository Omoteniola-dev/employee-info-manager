import React from "react";
import SearchBox from "./SearchBox"

export interface SearchProps{
    Text: string,
    SearchChange: any
}

const TopNav: React.FC<SearchProps> = ({Text, SearchChange}) => {
    return(
        <div className="flex flex-row justify-between">
            <img src="" alt="Company Logo" />
            <p>Icon</p>
            <SearchBox Text={Text} SearchChange={SearchChange} />
        </div>
    )
}
export default TopNav;