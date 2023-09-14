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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Try from "./Try";





function App(){

  // const [openPosition, setOpenPosition] = useState([]);
  const [applications, setApplications] = useState([]);

  function addNewPostion(jobs){
    setApplications([...applications, jobs])

  }

  return(
    <div>
        <ToastContainer />

 {/* <Try/> */}
    <NavBar/>
   
    <Switch>
    <Route exact path="/list">
    <ApplicationList applications={applications} setApplications={setApplications} />
    </Route>
    <Route exact path ="/create-Job">
  <CreateJob addNewPostion={addNewPostion}/>
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