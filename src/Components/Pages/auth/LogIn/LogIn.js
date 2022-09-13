import React from "react";
import avatarIcon from "../../../../avatar/1389952697.png"
import LogInForm from "../LogIn/LogInForm/LogInForm"

import Dashboard from "./Dashboard";
import { useState } from "react";


const LogIn = props => {

    const {isValid, setIsValid} = useState(true);
    // const isValid = false
    const logInHandaler = (value) => {
        setIsValid (value) 
        console.log("hi value of isValid=" + isValid)
    }
    const logOutHandaler = () => {
        setIsValid (false) 
        console.log("hi value of isValid=" + isValid)
    }

    
    if (isValid) {
        return (
            <div>
                Data is valid

                <Dashboard onLogin = {logInHandaler} onLogOut = {logOutHandaler}></Dashboard>
            </div>
        );
    } else {

        return (
    
            <div>
               
                <img 
                src= {avatarIcon} 
                alt="Icon" 
                style={{height:"100px", width:"100px"}}/>
    
                
                <LogInForm ></LogInForm>
            </div>
        );
    
    }
    }


export default LogIn;



