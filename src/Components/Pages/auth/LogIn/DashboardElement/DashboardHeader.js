// import { style } from "@mui/system";
import React from "react";
import classes from "./Dashboard.module.scss"
import { useState } from "react";
import userImage from "../../../../../avatar/Avatar9.png"
import menuIcon from "../../../../../avatar/2292434-200.png"
import Dropdown from "./Dropdown/Dropdown";

const DashboardHeader = () => {
    const [display, setDisplay] = useState(true)
    const displayHideShow = (display) => {
        display = display
        if (display) {
            setDisplay(false);
            
        }
        setDisplay(true)
    }

    return (
        <header className={classes.dashboardHeader}>
        <div className={classes.dashboardTextBtn}>
          <h2>DASHBOARD</h2>
          <span className={classes.dashboardBtn}>
            <button>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20374 12H12.2037C12.7537 12 13.2037 11.55 13.2037 11C13.2037 10.45 12.7537 10 12.2037 10H1.20374C0.653735 10 0.203735 10.45 0.203735 11C0.203735 11.55 0.653735 12 1.20374 12ZM1.20374 7H9.20374C9.75374 7 10.2037 6.55 10.2037 6C10.2037 5.45 9.75374 5 9.20374 5H1.20374C0.653735 5 0.203735 5.45 0.203735 6C0.203735 6.55 0.653735 7 1.20374 7ZM0.203735 1C0.203735 1.55 0.653735 2 1.20374 2H12.2037C12.7537 2 13.2037 1.55 13.2037 1C13.2037 0.45 12.7537 0 12.2037 0H1.20374C0.653735 0 0.203735 0.45 0.203735 1ZM17.5037 8.88L14.6237 6L17.5037 3.12C17.8937 2.73 17.8937 2.1 17.5037 1.71C17.1137 1.32 16.4837 1.32 16.0937 1.71L12.5037 5.3C12.1137 5.69 12.1137 6.32 12.5037 6.71L16.0937 10.3C16.4837 10.69 17.1137 10.69 17.5037 10.3C17.8837 9.91 17.8937 9.27 17.5037 8.88Z"
                  fill="#B8BFCC"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className={classes.dashboardLeftArea}>
          <div className={classes.dashboardHeaderText}>
            <h1>Welcome to tier5</h1>
          </div>
          <div className={classes.dashboardMenu}>
            <span className={classes.userImage}>
              <img src={userImage} alt="user-image" />
            </span>
            <div className={classes.menu}>
              <button onclick={displayHideShow}>
                <span>
                  <img src={menuIcon} alt="menu-icon" />
                </span>
              </button>
              <div className={display ? classes.dropDownContnentHide : classes.dropDownContnentHide } id="dropDown">
                <a href="./profile.html">Personal Info</a>
                <a href="#">Settings</a>
                <a href="#">Profile</a>
                <a href="./index.html" onclick="removeStorage()">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <Dropdown placeHolder="ME..."/>
      </header>
    );
}

export default DashboardHeader;