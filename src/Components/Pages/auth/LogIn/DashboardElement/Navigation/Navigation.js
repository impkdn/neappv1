import React from "react";
import UserImage from "../../../../../../avatar/Avatar9.png"
import classes from "./Navigation.module.scss"
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";


const Navigation = () => {

    return (
        <div className={classes["navigation-wrapper"]}>
        <div className={classes["user-info"]}>
          <span className={classes["profile-image user-image"]}>
            <img src={UserImage} alt="User-Image" />
          </span>
          <div className={classes["user-details"]}>
            <h3 className={classes["user-name"]}></h3>
            <p>Software developer</p>
            <p>Kolkata, India</p>
          </div>
        </div>
        <div className={classes["nvabar-wrapper"]}>
          <nav className={classes["nvabar"]}>
            <ul className={classes["nav-content"]}>
              <li className={classes["nav-item"]}>
                <a className={classes["nav-link"]} href="#">
                  Home
                </a>
              </li>
              <li className={classes["nav-item"]}>
                <a className={classes["nav-link"]} href="#">
                  Profile
                </a>
              </li>
              <li className={classes["nav-item"]}>
                <a className={classes["nav-link"]} href="#">
                  Contact Us
                </a>
              </li>
              <li className={classes["nav-item"]}>
              <NavLink to='/dashboard'><Button text="Dashboard" type = "button"></Button></NavLink>
                
                {/* <a className={classes["nav-link"]} href="./dashboard.html">
                  Dashboard
                </a> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

export default Navigation;