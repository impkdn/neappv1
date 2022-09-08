import React from "react";
// import avatarIcon from "../../avatar/1389952697.png"
// import LogInForm from "./LogInForm/LogInForm";
import Dashboard from "./Dashboard";
import { useState } from "react";


// const Login = props => {



    

//     return (
//         <div>
           
//             <img 
//             src= {avatarIcon} 
//             alt="Icon" 
//             style={{height:"100px", width:"100px"}}/>

            
//             <LogInForm></LogInForm>
//         </div>
//     );

// }

// export default Login;
// import { useState } from "react";
// import Dashboard from "./Dashboard";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "pijush@gmail.com", password: "ASD2@dsdfafsd" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
    }
  };
  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default Login;
