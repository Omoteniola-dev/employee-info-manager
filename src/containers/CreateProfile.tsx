import React from "react";
import Form from "../components/CreateProfile/Form"
import Aside from "../components/CreateProfile/Aside"
const CreateProfile: React.FC<{}> = () => {
    return(
        <div className="m-2">
            <p className="text-lg lg:text-3xl leading-track">Create a new user profile</p>
            <div className="flex flex-wrap justify-center">
                <Form />
                <Aside />
            </div>
            
        </div>
    )
}

export default CreateProfile;