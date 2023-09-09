import React from "react";
import { useHistory } from "react-router-dom";



 
function Welcome() {
  const history = useHistory();

  // function backToLogIn(){
  //   history.goBack();
  // }

function logInClick(){
  history.push("/login");
}
function createClick(){
  history.push("/register")
}

    return (
      <div className="homePage">
            {/* <nav><button className="goback" onClick={backToLogIn}> Go back</button></nav> */}

      <h1>Welcome to Dream Job</h1>
        <div >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
          <br />
          <button className="sign" type="button" name="button" onClick={logInClick}>
            Log in
           
          </button>
          <button className="sign" type="button" name="button" onClick={createClick}>
          Sign Up  
          </button>
        </div>
        </div>
     
    );
  }

  export default Welcome;
  