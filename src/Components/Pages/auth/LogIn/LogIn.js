import React from "react";
import avatarIcon from "../../../../avatar/1389952697.png"
import LogInForm from "../LogIn/LogInForm/LogInForm"

// import Dashboard from "./Dashboard";
// import { useState } from "react";


const LogIn = props => {



    

    return (
        <div>
           
            <img 
            src= {avatarIcon} 
            alt="Icon" 
            style={{height:"100px", width:"100px"}}/>

            
            <LogInForm></LogInForm>
        </div>
    );

}

export default LogIn;



