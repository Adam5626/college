import React, {useState} from "react";
import userContext from "./userContext";

const UserState = (props)=>{
    const state = {
        "name" : "",
        "email" : "",
        "password" : "",
        "dob" : "",
        "gender" : "",
        "education" : ""
    }

    const [state_, setState] = useState(state);

    const update = (type, value)=>{
        var temp_state = state_;
        temp_state[type] = value;
        setState(temp_state);
    }
    return (
        <userContext.Provider value = {{state_, update}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;