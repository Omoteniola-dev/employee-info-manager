import React from "react";
import Form from "../components/CreateProfile/Form"
import CSS from "csstype"
const CreateProfile: React.FC<{}> = () => {
    const style: CSS.Properties = {
        position: "relative",
        top: "50%",
        left: "25%",
    }
    return(
        <div className="m-2">
            <p className="text-lg lg:text-4xl leading-track font-extrabold text-white ">Create a new user profile</p>
            <div className="lg:relative top-2.5 left-5 ">
                <Form />
            </div>
                
                {/* <Aside /> */}
            
        </div>
    )
}

export default CreateProfile;