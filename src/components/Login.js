import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";



function Login() {
    const [isLogIn, setisLogIn] = useState(false);
    const [mouseOver, setmouseOver] = useState(false);

const [user, setUser] = useState({
    fName: "",
    lName: "",
    password: ""
});
        

function handleMouseOver(){
    setmouseOver(true);
    
}

function handleMouseOut(){
    setmouseOver(false);
}

const history = useHistory();

function handleChange(event){
const name = event.target.name;
let value = event.target.value;

    console.log(value)

    setUser({
        ...user,
        [name]: value,
    });
}

function goBack(){
  history.push("/create-Job")
}

function handleSubmit(event){
event.preventDefault();
console.log("Submitted")
// const checkUser = usersArray.find((person)=>(person.fName===fName && person.lName===lName && person.password===password));

// if(checkUser){
//     setisLogIn(!isLogIn)
//     history.redirect("/AvailableJobList")
// }else{
//     alert("We couldn't find an account with these information: Please try it again")
// }

}

    return (
      <div className="divi">
      <nav><button className="goback" onClick={goBack}> Go back</button></nav>
        <form className="loginForm" action="index.html" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>

          <label htmlFor="fname">First Name</label><br />
          <input className="login" type="text" name="fName" id="fname" placeholder="enter first name"  onChange={handleChange}  value={user.fName} /><br />
          <label htmlFor="lname">Last Name</label><br />
          <input className="login" type="text" name="lName" id="lname" placeholder="enter last name" onChange={handleChange} value={user.lName} /><br />
          <label htmlFor="password">Password</label><br />
          <input className="login" type="password" name="password" id="password" placeholder="password" onChange={handleChange} value={user.password}/><br />
          <input className="check" type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label><br />
          <button 
          type="submit" 
          name="button" 
          className="loginButton"  
          onMouseOut={handleMouseOut}
        style={mouseOver? {backgroundColor: "#00FFFF"}: { backgroundColor: "white"}}
        onMouseOver={handleMouseOver}
          >Login</button>
        </form>
        
      </div>
    );
  }
export default Login;  