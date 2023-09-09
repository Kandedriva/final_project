import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";



function Login() {
    const [isLogIn, setisLogIn] = useState(false);
    const [mouseOver, setmouseOver] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useHistory();

function handleMouseOver(){
    setmouseOver(true);
    
}

function handleMouseOut(){
    setmouseOver(false);
}

function goBack(){
  history.push("/logout")
}

function handleSubmit(event){
event.preventDefault();

if(validation()){
  // console.log("Successfully Login")
  fetch(`https://phase-2-banckend.onrender.com/users`)
  .then(response=> response.json())
  .then(data=>{
    if(Object.keys(data).length ===0){
      alert("Please provide valides informations")
      

    }
    data.map((dat)=>{
      if(dat.password === password){
        history.push("/")
      }else{
        // alert("Please provide valides Password")
      }

    })
    // if(Object.keys(data).length ===0){
    //   alert("Please provide valides informations")
      

    // }
   // else{
      // if(data.password === password){
      //   history.push("/")
      // }else{
      //   alert("Please provide valides Password")
      // }
    //}
    
    console.log(data);
  })
  .catch((err)=>alert("Login failled due to" +err.message))
}
// const checkUser = usersArray.find((person)=>(person.fName===fName && person.lName===lName && person.password===password));

// if(checkUser){
//     setisLogIn(!isLogIn)
//     history.redirect("/AvailableJobList")
// }else{
//     alert("We couldn't find an account with these information: Please try it again")
// }

}

function validation(){
  let result = true;
  if(email==="" || email===null){
    result = false;
    alert("please Enter Email")
  }

  if(password==="" || email===null){
    result = false;
    alert("please Enter Password")
  }
  return result;
}
    return (
      <div className="divi">
      <nav><button className="goback" onClick={goBack}> Go back</button></nav>
        <form className="loginForm" action="index.html" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>

          <label htmlFor="fname">email</label><br />
          <input className="login" type="text" name="email" id="fname" placeholder="enter email"  onChange={(event)=>setEmail(event.target.value)}  value={email} /><br />
          {/* <label htmlFor="lname">password</label><br />
          <input className="login" type="text" name="lName" id="lname" placeholder="enter last name" onChange={handleChange} value={user.lName} /><br /> */}
          <label htmlFor="password">Password</label><br />
          <input className="login" type="password" name="password" id="password" placeholder="password" onChange={(event)=>setPassword(event.target.value)} value={password} autoComplete="false"/><br />
          {/* <input className="check" type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label><br /> */}
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