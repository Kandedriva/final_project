import React, { useState, useEffect } from "react";
import AvailableJobFormat from "./AvailableJobFormat";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function AvailableJobList(){
const [jobs, setJobs] = useState([]);

useEffect(() => {
    fetch("https://phase-2-banckend.onrender.com/availableJobs")
    .then(response=>response.json())
    .then(data=>setJobs(data))

   
}, []);

    return(
        <div>
   
        {/* <div className="navbar">
        <NavLink to="/" exact>
                Job List 
            </NavLink>
            <NavLink to ="/list" exact>
                <span>Your Applications</span>
            </NavLink>
            <NavLink to="/create-Job" exact>
                Open a position
            </NavLink>
            <NavLink to="/logout" exact>
                Logout
            </NavLink>

        </div> */}
                    
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