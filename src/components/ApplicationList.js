import React, { useState, useEffect } from "react";
import JobApplicationFormat from "./JobApplicationFormat";
import JobApplication from "./JobApplication";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ApplicationList({applications, setApplications}){
    // const [applications, setApplications] = useState([]);
    const history= useHistory()

useEffect(() => {
    fetch("https://phase-2-banckend.onrender.com/waitingList ")
    .then(response=>response.json())
    .then(data=>setApplications(data))
    
}, []);



return(
    <div>
    
            {applications.map((application)=>
            <JobApplicationFormat 
            key={application.id} 
            fName={application.applicationName} 
            lName={application.lastName} 
            email={application.email} 
            history={application.history} 
            education={application.education} 
            availability={application.availability}

            />)}
            <Route path="/apply" component={JobApplication } />
            


            

    </div>
)
}

export default ApplicationList