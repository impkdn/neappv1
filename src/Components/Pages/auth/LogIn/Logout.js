import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button/Button";
const Logout = (props) => {
    const onClickHandeler = () => {
        sessionStorage.clear();
    }



    return (
        <>
            <NavLink to="/login"><Button type = "button" text = "Logout" onClick={onClickHandeler}></Button></NavLink>
        </>
    );
}

export default Logout;