import React from "react";


function Login() {
    return (
      <div className="divi">
        <form className="loginForm" action="index.html" method="post">
        <h1>Login</h1>

          <label htmlFor="fname">First Name</label><br />
          <input className="login" type="text" name="Fname" id="fname" placeholder="enter first name" /><br />
          <label htmlFor="lname">Last Name</label><br />
          <input className="login" type="text" name="lname" id="lname" placeholder="enter last name" /><br />
          <label htmlFor="password">Password</label><br />
          <input className="login" type="password" name="password" id="password" placeholder="password" /><br />
          <input className="check" type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label><br />
          <button type="button" name="button" className="loginButton">Login</button>
        </form>
      </div>
    );
  }
export default Login;  