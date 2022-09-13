import React from "react";
import Button from "./Pages/auth/LogIn/Button/Button";
// import { Button } from "@mui/material";
import {NavLink } from "react-router-dom";
import navbar from './Navbar.module.scss'

// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
    return <div className={navbar.navbarWrapper}>
    

    <NavLink to='/'><Button text="Home"></Button></NavLink>
    <NavLink to='/contact'><Button text="Contact"></Button></NavLink>
    <NavLink to='/login'><Button text="Login"></Button></NavLink>
    </div>
}

export default Navbar;