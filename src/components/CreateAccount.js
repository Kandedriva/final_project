import React, { useState } from "react";





        function CreateAccount() {
            const [registration, setRegistration] = useState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })

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
                console.log("Submitted")

            }

            return (             
                <form className="accountForm" action="index.html" method="post" >
                <h1>Create an account</h1>
                  <label htmlFor="fname">First Name</label>
                  <input className="signUp" type="text" name="firstName" value={registration.firstName} placeholder="enter first name"  onChange={handleClick}/>
                  <label htmlFor="lname">Last Name</label>
                  <input className="signUp" type="text" name="lastName" value={registration.lastName} placeholder="enter last name"  onChange={handleClick}/>
                  <label htmlFor="email">Email</label>
                  <input className="signUp" type="text" name="email" value={registration.email} placeholder="password..."  onChange={handleClick}/>
                  <label htmlFor="password">Create password </label><br />
                  <input className="signUp" type="password" name="password" value={registration.password} placeholder="Confirm password..." onChange={handleClick} />
                  <button type="submit" name="button" className="signUpButton" onSubmit={handleUser}>Create</button>
                </form>
            
            );
          }
          


export default CreateAccount;