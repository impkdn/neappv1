import React from "react";
import Button from "../Button/Button";
import { useState } from "react";

const LogInForm = props => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    
    const onEmailChangeHandeler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChangeHandeler = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(email)
        console.log(password)

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>EMAIL</label>
            <input type = "email"  onChange={onEmailChangeHandeler}  placeholder="Enter your email for log in"/>
            <label>PASSWORD</label>
            <input type= "password" placeholder = "Enter Password" onChange={onPasswordChangeHandeler}/>
            <Button type = "submit" text = "Log In" />
        </form>
    );
}

export default LogInForm;