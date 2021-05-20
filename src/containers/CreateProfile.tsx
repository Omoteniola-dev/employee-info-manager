import React from "react";
import Form from "../components/CreateProfile/Form"
const CreateProfile: React.FC<{}> = () => {
    return(
        <div className="m-2">
            <p className="text-lg lg:text-4xl text-3xl leading-track font-extrabold text-white">Create a new user profile</p>
            <div className="lg:relative top-2.5 left-5 ">
                <Form />
            </div>
                {/* <Aside /> */}
            
        </div>
    )
}

export default CreateProfile;