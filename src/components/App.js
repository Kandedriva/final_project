import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";
import CreateJob from "./CreateJob";
import CreateAccount from "./CreateAccount";
import JobApplication from "./JobApplication";
import NavBar from "./NavBar";
import ApplicationList from "./ApplicationList";
import AvailableJobList from "./AvailableJobList";



function App(){
const [displayWelcome, setdisplayWelcome] = useState(true);
  const [signUp, setSignUp] = useState(false)
  const [ceateAccount, setceateAccount] = useState(false);

  function handleSignUp(){
    setdisplayWelcome(false)
    setSignUp(true)
    setceateAccount(false)

  }

  function handleCreate(){
    setceateAccount(true)
    setdisplayWelcome(false)
    setSignUp(false)
  }
  

  return(
    <div>
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
    {displayWelcome && (<Welcome logInClick={handleSignUp} createClick={handleCreate}/>)}
{signUp && <Login/>}
{ceateAccount && <CreateAccount/>}
{/* <JobApplication/> */}

    
    </Switch>
    </div>
  )
}

export default App;