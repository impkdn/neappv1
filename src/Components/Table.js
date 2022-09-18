import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import { useState, useEffect } from "react";
import wrapper from "./TableWrapper.module.scss";




const Table = () => {
    var [loadData, setLoadData] = useState([]);
    // const [personal,setPersonal] = useState("")
  
    const myFunction = () => {
      fetch("https://api.publicapis.org/entries")
        .then((response) => response.json())
        .then((data) => {
          setLoadData(data.entries);
  
          // console.log(data);
        });
    };
  
    // console.log(loadData);
  
    useEffect(() => {
      myFunction();
    }, []);

    return (
        <>
          <table className={wrapper.tableWrapper}>
            <TableHeader/>
            <div className={wrapper.loader}></div>
            {loadData.map((data, index) => {
        return (
          <TableContent
            key={index}
            API={data.API}
            Auth={data.Auth}
            Category={data.Category}
            Cors={data.Cors}
            Description={data.Description}
            HTTPS={data.HTTPS.toString()}
            Link={data.Link}
          />
        );
            })}
          </table>

        
        </>
    );
}


export default Table;