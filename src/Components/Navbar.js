import React from "react";
import Button from "./Pages/auth/LogIn/Button/Button";
// import { Button } from "@mui/material";
import {NavLink } from "react-router-dom";
import navbar from './Navbar.module.scss'
import { useState } from "react";

// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
    const [userStatus, setUserStatus] = useState(true);

    // const checkLoggedIn = () {

    // }



    return (<div className={navbar.navbarWrapper}>
    

    <NavLink to='/'><Button text="Home"></Button></NavLink>
    <NavLink to='/contact'><Button text="Contact"></Button></NavLink>
    <NavLink to='/login'><Button text={!userStatus ? "LogIn" : "LogOut"} ></Button></NavLink>
    </div>)
}

export default Navbar;