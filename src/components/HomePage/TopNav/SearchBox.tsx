import React, { useState } from "react";


const SearchBox: React.FC<{}> = () => {
    const [Text, setText] = useState<string>("");
    const SearchChange = (e: React.ChangeEvent<HTMLInputElement>):void =>{ 
        console.log(e.currentTarget.value);   
        return setText(e.currentTarget.value);
    }
    
    return(
        <div>
            <input type="search" value={Text} onChange={SearchChange} />
        </div>
    )
}

export default SearchBox;