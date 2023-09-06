import React from "react";





        function CreateAccount() {
            return (
              <div className="divi">
                
                <form className="accountForm" action="index.html" method="post">
                <h1>Create an account</h1>
                  <label htmlFor="fname">First Name</label>
                  <input className="signUp" type="text" name="Fname" value="" placeholder="enter first name" />
                  <label htmlFor="lname">Last Name</label>
                  <input className="signUp" type="text" name="lname" value="" placeholder="enter last name" />
                  <label htmlFor="email">Email</label>
                  <input className="signUp" type="password" name="password" value="" placeholder="password..." />
                  <label htmlFor="password">Create password </label><br />
                  <input className="signUp" type="password" name="confirmPassword" value="" placeholder="Confirm password..." />
          
                  <button type="button" name="button" className="signUpButton">Create</button>
                </form>
              </div>
            );
          }
          


export default CreateAccount;