import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';




function Login() {
    // const [mouseOver, setmouseOver] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useHistory();

// function handleMouseOver(){
//     setmouseOver(true);
    
// }

// function handleMouseOut(){
//     setmouseOver(false);
// }

// function goBack(){
//   history.push("/logout")
// }

function handleSubmit(event){
event.preventDefault();

if(validation()){
  fetch(`https://phase-2-banckend.onrender.com/users`)
  .then(response=> response.json())
  .then(data=>{
    if (Object.keys(data).length === 0) {
      alert("Please provide valid information");
  } else {
      const user = data.find(dat => dat.password === password);
      if (user) {
          history.push("/");
      } else {
          alert("Invalid email or password");
      }
  }
  })
  .catch((err)=>alert(err))
}

}

function validation(){
  let result = true;
  if(email==="" || email===null){
    result = false;
    alert("please Enter Email")
  }

  if(password==="" || password===null){
    result = false;
    alert("please Enter Password")
  }
  return result;
}
    return (
      <div className="logIn">
    <h2 className="logH2"><strong>Log In</strong></h2>
    <Form method="post" onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" className="login" onChange={(event)=>setEmail(event.target.value)}  value={email} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" className="login" name="password" onChange={(event)=>setPassword(event.target.value)} value={password} autoComplete="off"/>
        </Form.Group>

        <Button 
        name="button"
        type="submit"
        variant="outline-primary"
         className="SignIn">
         Log In
         </Button>{' '}
        </Form>
    </div>
   
      // <div className="divi">




      // <nav><button className="goback" onClick={goBack}> Go back</button></nav>
      //   <form className="mb-3 loginForm" action="index.html" method="post" onSubmit={handleSubmit}>
      //   <h1>Login</h1>

      //     <label htmlFor="fname">email</label><br />
      //     <input className="login" type="text" name="email" id="fname" placeholder="enter email"  onChange={(event)=>setEmail(event.target.value)}  value={email} /><br />
      //     <label htmlFor="password">Password</label><br />
      //     <input className="login" type="password" name="password" id="password" placeholder="password" onChange={(event)=>setPassword(event.target.value)} value={password} autoComplete="false"/><br />
      //     <button 
      //     type="submit" 
      //     name="button" 
      //     className="loginButton"  
      //     onMouseOut={handleMouseOut}
      //   style={mouseOver? {backgroundColor: "#00FFFF"}: { backgroundColor: "white"}}
      //   onMouseOver={handleMouseOver}
      //     >Login</button>
      //   </form>
        
      // </div>
    );
  }
export default Login;  