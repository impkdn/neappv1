// import React from "react";
// import Button from "../Button/Button";
// import { useState } from "react";
// import Input from "../Input/Input";
// // import Dashboard from "../Dashboard";

// const LogInForm = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
//   const users = [{ email: "pijush@gmail.com", password: "ASD2@dsdfafsd" }];
//   const onEmailChangeHandeler = (event) => {
//     setEmail(event.target.value);
//   };

//   const onPasswordChangeHandeler = (event) => {
//     setPassword(event.target.value);
//   };
//   const emailValidationRegex =
//     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   const passwordValidationRegex =
//     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//   var errorHandeler;
//   //     if (email === "") {
//   //        const errorMsg = "Invalid Email"
//   //     //    console.log(errorMsg)
//   //     }
//   // }
//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     var isValid = true;
//     console.log(email);
//     console.log(password);
//     // const emailValidationRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     // const passwordValidationRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

//     if (!emailValidationRegex.test(email)) {
//       isValid = false;
//     }
//     if (!passwordValidationRegex.test(password)) {
//       isValid = false;
//     }
//     if (email === "" && password === "") {
//       isValid = false;
//     }
//     const account = users.find((user) => user.email === email);
//     if (account && account.password === password) {
//       setAuthenticated(true);
//       localStorage.setItem("authenticated", true);
//     } else {

//           isValid = false;
//     }
//     if (isValid) {
//       alert("Form data is valid");


//     //   else {
//     //     localStorage.setItem("authenticated", false);
//     //   }
//     } else {
//         alert ("Invalid Data")
//     }

//     console.log(localStorage.getItem("authenticated"));
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <form onSubmit={onSubmitHandler}>
//       <Input
//         type="email"
//         placeholder="Enter Your Email Here"
//         onChange={onEmailChangeHandeler}
//         label="Email:"
//         value={email}
//         errormsg={
//           !emailValidationRegex.test(email) || email === ""
//             ? "*Invalid Email"
//             : ""
//         }
//       ></Input>
//       <Input
//         type="password"
//         placeholder="Enter Password"
//         onChange={onPasswordChangeHandeler}
//         label="Password:"
//         value={password}
//         errormsg={
//           !passwordValidationRegex.test(password) || password === ""
//             ? "*Invalid Password"
//             : ""
//         }
//       ></Input>
//       <Button type="submit" text="Log In" />
//     </form>
//   );
// };

// export default LogInForm;
