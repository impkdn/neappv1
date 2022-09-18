import React, { useState } from "react";
import UserImage from "../../avatar/Avatar9.png";
// import classes from "./PersonalInfo.module.scss";
import { useEffect } from "react";
import DashboardHeader from "./auth/LogIn/DashboardElement/DashboardHeader";
import Navigation from "./auth/LogIn/DashboardElement/Navigation/Navigation";
import Button from "./auth/LogIn/Button/Button";
import classes from "../../../src/Components/Table.module.scss";
import Info from "./PersonalInfo/Info";
// import { useState } from "react";
// import Navigation from "./auth/LogIn/DashboardElement/Navigation/Navigation";

const PersonalInfo = () => {
  const [newUserName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [uDOB, setUDob] = useState("");
  const [uCell, setCell] = useState("");
  const [userAge, setAge] = useState("");
  const [uAddress, setuAddress] = useState("");
  const [ulogin, setulogin] = useState("");
  const [uReg, setuReg] = useState("");
  

  const myFunction = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var user = data.results[0];
        // console.log(user);
        showUsers(user);
        // Access your data here
      });
  };
  const showUsers = (user) => {
    // console.log(user)
    if (sessionStorage.getItem("userInfo")) {
      var myNewArr;
      // console.log(sessionStorage.getItem("userInfo" , JSON.stringify(user)));

      myNewArr = sessionStorage.getItem("userInfo");
      //  console.log(myNewArr);
    } else {
      sessionStorage.setItem("userInfo", JSON.stringify(user));
      // console.log(window.sessionStorage.getItem("userInfo"), JSON.stringify(user));

      myNewArr = sessionStorage.getItem("userInfo");
    }
    // console.log(myNewArr);
    var userObject = JSON.parse(myNewArr);
    console.log(userObject);
    var userName =" " +userObject.name.title +" " +userObject.name.first +
      " " +
      userObject.name.last;
    var userGender = " " + userObject.gender;
    setUserName(userName);
    console.log(userName);
    setGender(userGender);
    console.log(userGender);
    var userEmail = " " + userObject.email;
    setEmail(userEmail);
    var userPh =" " + userObject.phone;
    setPhNo(userPh);
    var uDob = new Date(userObject.dob.date);
    setUDob(uDob.toDateString())
    var userCell =" " +  userObject.cell;
    setCell(userCell)
    var uAge =" " + userObject.dob.age
    setAge(uAge)
    
    var userAddress =  userObject.location.city + " " + userObject.location.state + " " + userObject.location.country + " " + userObject.location.postcode  ;
    setuAddress(userAddress)
    var userlogin = userObject.login.username;
    setulogin(userlogin);

    var userReg =  new Date(userObject.registered.date);
    setuReg(userReg.toDateString())
    
  };

  useEffect(() => {
    myFunction();
  }, []);
  return (
    <>
      <div className={classes.DashboardWrapper}>
        <DashboardHeader />
        <Navigation />
        <Info uName={newUserName} gndr={gender} uemail={email} uphNo = {phNo} uDoB = {uDOB} cell = {uCell} uAge={userAge} uAdd = {uAddress} uLogIn = {ulogin} userRegt = {uReg}/>
        {/* <p>Welcome to your Dashboard </p> */}
        {/* <Button text="Logout" /> */}
        {/* <PersonalInfo></PersonalInfo> */}
      </div>
      {/* <Navigation/> */}
    </>
  );
};

export default PersonalInfo;
