import React from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import CreateJob from "./CreateJob";
import CreateAccount from "./CreateAccount";
import JobApplication from "./JobApplication";


function App(){
  return(
    <div>
      <Welcome/>
    <Login/>
    <CreateJob/>
    <CreateAccount/>
    <JobApplication/>
    </div>
  )
}

export default App;