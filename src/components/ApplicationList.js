import React from "react";
import JobApplicationFormat from "./JobApplicationFormat";
import JobApplication from "./JobApplication";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ApplicationList({applications}){

    // const history= useHistory()
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