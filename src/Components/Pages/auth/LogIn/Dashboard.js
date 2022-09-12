
import { useState, useEffect } from "react";
import TableHeader from "../../../TableHeader";
// import TableRow from "../../../TableRow";
import TableContent from "../../../TableContent";
import classes from "../../../../Components/Table.module.scss"
import DashboardHeader from "./DashboardElement/DashboardHeader";

const Dashboard = () => {

  var [loadData, setLoadData] = useState([]);

  const myFunction = () => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => {
        setLoadData(data.entries)

        // console.log(data);

      });

  }


  console.log(loadData);

  useEffect(() => {

    myFunction()
  }, []
  )
  return (

    <div className={classes.DashboardWrapper}>
      <DashboardHeader/>
      <p>Welcome to your Dashboard </p>
      {/* <Tables /> */}
      <TableHeader/>
      {
        loadData.map((data,index)=>{ return <TableContent key={index} API = {data.API} Auth={data.Auth} Category={data.Category} Cors={data.Cors} Description={data.Description} HTTPS={data.HTTPS.toString()} Link={data.Link}/>})
      }

      

    </div>
  );
};
export default Dashboard;