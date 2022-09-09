import React from "react";
import Button from "./Pages/auth/LogIn/Button/Button";
// import { Button } from "@mui/material";
import {NavLink } from "react-router-dom";
// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
    return <>
    

    <NavLink to='/' style={({isActive}) => {return {backgroundColor: isActive ? "#6d1b7b" : ""}}}><Button text="Home"></Button></NavLink>
    <NavLink to='/contact'><Button text="Contact"></Button></NavLink>
    <NavLink to='/login'><Button text="Login"></Button></NavLink>
    </>
}

export default Navbar;