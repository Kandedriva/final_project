import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import CreateJob from "./CreateJob";
import CreateAccount from "./CreateAccount";


function App(){
  return(
    <div>
      <Welcome/>
    <Login/>
    <CreateJob/>
    <CreateAccount/>
    </div>
  )
}

export default App;