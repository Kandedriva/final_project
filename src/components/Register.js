import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, FloatingLabel } from 'react-bootstrap';





        function Register() {
            const [mouseOver, setmouseOver] = useState(false);
            const [registration, setRegistration] = useState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })
            const history = useHistory()


            function handleMouseOver(){
                setmouseOver(true);
                
            }
            
            function handleMouseOut(){
                setmouseOver(false);
            }
            

            function handleClick(event){
                const name = event.target.name;
                const value = event.target.value;
                setRegistration({
                    ...registration,
                    [name]: value,
                })
            }

            function handleUser(event){
                event.preventDefault();
                const newUser = {
                    firstName: registration.firstName,
                    lastName: registration.lastName,
                    email: registration.email,
                    password: registration.password
                }

                fetch("https://phase-2-banckend.onrender.com/users",{
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser),
                })
                .then(response=>response.json())
                .then(users=>{
                    setRegistration({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""})
                })
                history.push("/login")



                console.log("Submitted")

            }

            return (         
                <div className="logIn">
                <h2 className="logH2"><strong>Register</strong></h2>
                <Form onSubmit={handleUser}>
            
                <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" name="firstName" value={registration.firstName}  onChange={handleClick}/>
                    </Form.Group>
            
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" name="lastName" value={registration.lastName}  onChange={handleClick}/>
                    </Form.Group>
            
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email" value={registration.email} onChange={handleClick}/>
                    </Form.Group>
            
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm password..." name="password" value={registration.password}  onChange={handleClick}/>
                    </Form.Group>
            
                    <Button 
                    name="button" 
                    type="submit" 
                    variant="outline-success"
                    className="SignIn">
                    Sign Up</Button>{' '}
                    
                    </Form>
                </div>
                
                // <form className="accountForm" action="index.html" method="post" onSubmit={handleUser}>
                // <h1>Create an account</h1>
                //   <label htmlFor="fname">First Name</label>
                //   <input className="signUp" type="text" name="firstName" value={registration.firstName} placeholder="enter first name"  onChange={handleClick}/>
                //   <label htmlFor="lname">Last Name</label>
                //   <input className="signUp" type="text" name="lastName" value={registration.lastName} placeholder="enter last name"  onChange={handleClick}/>
                //   <label htmlFor="email">Email</label>
                //   <input className="signUp" type="text" name="email" value={registration.email} placeholder="password..."  onChange={handleClick}/>
                //   <label htmlFor="password">Create password </label><br />
                //   <input className="signUp" type="password" name="password" value={registration.password} placeholder="Confirm password..." onChange={handleClick} />
                //   <button 
                //   type="submit" 
                //   name="button" 
                //   className="signUpButton" 
                  
                //   onMouseOut={handleMouseOut}
                //   style={mouseOver? {backgroundColor: "#00FFFF"}: { backgroundColor: "white"}}
                //   onMouseOver={handleMouseOver}
                //   >Create</button>
                // </form>
            
            );
          }
          


export default Register;