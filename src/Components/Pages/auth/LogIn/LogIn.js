import React from "react";
import avatarIcon from "../../../../avatar/1389952697.png"
import LogInForm from "../LogIn/LogInForm/LogInForm"

import Dashboard from "./Dashboard";
import { useState } from "react";
import LoginWrap from './Login.module.scss'


const LogIn = props => {

    const {isValid, setIsValid} = useState(false);
    // const isValid = false
    const checkOnLoggedIn = (value) => {
        if (value === true ) {
            setIsValid(true)
        } else {
            setIsValid (false)
        }
    }
    // const logInHandaler = (value) => {
    //     setIsValid (value) 
    //     console.log("hi value of isValid=" + isValid)
    // }
    // const logOutHandaler = () => {
    //     setIsValid (false) 
    //     console.log("hi value of isValid=" + isValid)
    // }

    const handleLogout = (value) => {
        if (value === true) {
            setIsValid(true)
        }
    }

    
    if (isValid) {
        return (
            <div>
                Data is valid

                <Dashboard onLoggedOut = {handleLogout}></Dashboard>
            </div>
        );
    } else {

        return (
    
            <div className={LoginWrap.loginWrapper}>
               
                <img 
                src= {avatarIcon} 
                alt="Icon" 
                style={{height:"100px", width:"100px"}}/>
    
                
                <LogInForm onLoggedIn={checkOnLoggedIn}></LogInForm>
            </div>
        );
    
    }
    }


export default LogIn;



