import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";
import CreateJob from "./CreateJob";
import Register from "./Register";
import JobApplication from "./JobApplication";
import NavBar from "./NavBar";
import ApplicationList from "./ApplicationList";
import AvailableJobList from "./AvailableJobList";
import BasicExample from "./Try";





function App(){

  

  return(
    <div>
    {/* <BasicExample/> */}
    
 {/* <Try/> */}
    <NavBar/>
   

    <Switch>
    <Route exact path="/list">
    <ApplicationList/>
    </Route>
    <Route exact path ="/create-Job">
  <CreateJob/>
</Route>
<Route exact path = "/">
  <AvailableJobList/>
</Route>
{<Route exact path="/apply">
<JobApplication/>
</Route>}
<Route exact path="/login">
<Login/>
</Route>
<Route exact path="/register">
<Register/>
</Route>
<Route exact path="/logout"> <Welcome /></Route>
  
    
    </Switch>
    </div>
  )
}

export default App;