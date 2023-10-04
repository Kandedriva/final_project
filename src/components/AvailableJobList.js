import React from "react";
import AvailableJobFormat from "./AvailableJobFormat";

function AvailableJobList({jobs}){
    return(
        <div>
                    
            {jobs.map((displayjob)=><AvailableJobFormat
             key={displayjob.id} 
             title={displayjob.jobTitle} 
             Company={displayjob.company} 
             experiences={displayjob.experience} 
             average={displayjob.salary} 
             location={displayjob.location} 
             description={displayjob.description} 
             website={displayjob.website}/>)}
        </div>
    )
}

export default AvailableJobList;