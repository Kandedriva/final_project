import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useHistory();

// useEffect(() => {
//   sessionStorage.clear();
  
// }, []);

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
      sessionStorage.setItem("email", email)

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
function goBack(){
  history.push("/logout")
}

    return (
      <>
      <Button  onClick={goBack} variant="light" className="go-back">Go-back</Button>
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
    </>
    );
  }
export default Login;  