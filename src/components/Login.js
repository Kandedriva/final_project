import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';



function Login() {
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
      }

    })
    
    console.log(data);
  })
  .catch((err)=>alert("Login failled due to" +err.message))
}

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

<Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>


      <nav><button className="goback" onClick={goBack}> Go back</button></nav>
        <form className="mb-3 loginForm" action="index.html" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>

          <label htmlFor="fname">email</label><br />
          <input className="login" type="text" name="email" id="fname" placeholder="enter email"  onChange={(event)=>setEmail(event.target.value)}  value={email} /><br />
          <label htmlFor="password">Password</label><br />
          <input className="login" type="password" name="password" id="password" placeholder="password" onChange={(event)=>setPassword(event.target.value)} value={password} autoComplete="false"/><br />
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