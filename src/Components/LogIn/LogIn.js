import React from "react";
import avatarIcon from "../../avatar/1389952697.png"
import LogInForm from "./LogInForm/LogInForm";


const Login = props => {

    return (
        <div>
           
            <img 
            src= {avatarIcon} 
            alt="Icon" 
            style={{height:"100px", width:"100px"}}>

            </img>
            <LogInForm></LogInForm>
        </div>
    );

}

export default Login;

