import React from "react";
import infoCls from "./Info.module.scss"

const Info = (props) => {
  return (
    <div className={infoCls["dashboard-content"]}>
      <div className={infoCls.userinformation}>
        <p className={infoCls["user-profile"]}>
          <span className={infoCls["user-profile-details"]}>NAME:</span>
          <span className={infoCls["u-name"]}>{props.uName}</span>
        </p>{" "}
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details ">GENDER:</span>
          <span class="u-gender text-transform">{props.gndr}</span>
        </p>{" "}
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details"> EMAIL:</span>
          <span class="u-email">{props.uemail}</span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details">PH. NO:</span>
          <span class="u-ph">{props.uphNo}</span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details">ALTERNET PH: </span>{" "}
          <span class="u-cell">{props.cell}</span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details"> DOB: </span>
          <span class="u-dob">{props.uDoB}</span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details"> AGE: </span>
          <span class="u-age"></span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details float-left"> ADDRESS: </span>
          <span class="u-address"></span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details float-left"> LOGIN ID: </span>
          <span class="u-login u-address"></span>
        </p>
        <br />
        <p className={infoCls["user-profile"]}>
          <span class="user-profile-details"> Registration Date:</span>
          <span class="u-address u-registration"></span>
        </p>
        <br />
        {/* <p>ADDRESS: <span class="u-address"></span></p>  */}
      </div>
    </div>
  );
};

export default Info;
