import React from "react";

function JobApplicationFormat({fName, email, history, education, availability,lName}){
    return (
        <div className="display-job">
         <h2>full Name: {fName} {lName}</h2>
        <h3>Email: {email}</h3>
        <span>Work History: {history} </span>
        <p>Education background: {education} </p>
        <p>Availability: {availability} </p>
        
  

    </div>
    )
}

export default JobApplicationFormat;