import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
 return <>
 {/* includes reset CSS  by  CssBaseline*/}
 <CssBaseline/>
 <Navbar></Navbar>
 <Outlet/>
 </>  
}

export default Layout;