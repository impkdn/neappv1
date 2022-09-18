// import { useState, useEffect } from "react";
// import TableHeader from "../../../TableHeader";
// import TableRow from "../../../TableRow";
// import TableContent from "../../../TableContent";
import Table from "../../../Table";
import classes from "../../../../../src/Components/Pages/auth/LogIn/Dashboard.module.scss";
import DashboardHeader from "./DashboardElement/DashboardHeader";
// import Button from "./Button/Button";
// import PersonalInfo from "../../PersonalInfo";
import Navigation from "./DashboardElement/Navigation/Navigation";

const Dashboard = (props) => {
  // var [loadData, setLoadData] = useState([]);
  // const [personal,setPersonal] = useState("")

  // const myFunction = () => {
  //   fetch("https://api.publicapis.org/entries")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoadData(data.entries);

  //       // console.log(data);
  //     });
  // };

  // // console.log(loadData);

  // useEffect(() => {
  //   myFunction();
  // }, []);

  const onLoggedOut = (value) => {

    props.onLoggedOut(value);

  }

 
  
  return (
    <div className={classes.DashboardWrapper}>
      <DashboardHeader  onLogout = {onLoggedOut}/>
      <Navigation/>
      {/* <p>Welcome to your Dashboard </p> */}
      {/* <Button text="Logout" /> */}
       
      {/* <TableHeader /> */}
      
      <Table className={classes.tableWrapper}/>
      
    </div>
  );
};
export default Dashboard;
