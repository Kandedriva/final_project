import React, { useState, useEffect } from "react";
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




function App(){
  //state to create new job
  const [jobs, setJobs] = useState([]);
  //state to create new application
  const [applications, setApplications] = useState([]);

    //function to create new job
  function addNewPostion(job){
    setJobs([...jobs, job])

  }
  //get request to display the list of available jobs.
  useEffect(() => {
    fetch("https://phase-2-banckend.onrender.com/availableJobs")
    .then(response=>response.json())
    .then(data=>setJobs(data))

   
}, []);

//Get request to display the applications list.
useEffect(() => {
  fetch("https://phase-2-banckend.onrender.com/waitingList ")
  .then(response=>response.json())
  .then(data=>setApplications(data))
  
}, []);

  return(
    <div>
        <ToastContainer />

    <NavBar/>
   
    <Switch>
    <Route exact path="/list">
    <ApplicationList applications={applications} setApplications={setApplications} />
    </Route>
    <Route exact path ="/create-Job">
  <CreateJob addNewPostion={addNewPostion}/>
</Route>
<Route exact path = "/">
  <AvailableJobList jobs={jobs} setJobs={setJobs} />
</Route>
{<Route exact path="/apply">
<JobApplication applications={applications} setApplications={setApplications} />
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