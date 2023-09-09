import React, { useState } from "react";
import AvailableJobFormat from "./AvailableJobFormat";

function CreateJob() {
  const [newJob, setnewJob] = useState({
    company: "",
    title: "",
    link: "",
    experience: "",
    salary: "",
    location: "",
    description: ""
  });
  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    setnewJob({
      ...newJob,
      [name]: value,
    })
  }
  function submitJob(event){
    event.preventDefault();
    const newjobForma = {
      company: newJob.company, 
      title: newJob.title, 
      link: newJob.link, 
      experience: newJob.experience, 
      salary: newJob.salary, 
      location: newJob.location,
       description: newJob.description
      }
    console.log("Submitted")
    fetch("https://phase-2-banckend.onrender.com/availableJobs",{
      method: "POST",
      headers:{"content-type": "application/json"

      },
      body: JSON.stringify(newjobForma),
  })
  .then(response=>response.json())
  .then(jobs=>{
   
   setnewJob(jobs)
  })

  setnewJob({
    company: "",
    title: "",
    link: "",
    experience: "",
    salary: "",
    location: "",
    description: ""
  })

  }

 
    return (
      <form className="createJob" action="index.html" method="post" onSubmit={submitJob}>
        <h3>Open a position and receive the candidats you need</h3>

                <label htmlFor="company">Company's name:</label>

        <div className="jobCreation">
          {/* <label htmlFor="company">Company's name:</label> */}
          
          <input className="createJobInput" type="text" name="company" value={newJob.company}  onChange={handleChange}/>
        </div>
        <label htmlFor="title">Job Title:</label>

        <div className="jobCreation">
          {/* <label htmlFor="title">Job Title:</label> */}
          <input className="createJobInput" type="text" name="title" value={newJob.title}  onChange={handleChange}/>
        </div>
        <label htmlFor="link">Company's website:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="link">Company's website:</label> */}
          <input className="createJobInput" type="text" name="link" value={newJob.link}  onChange={handleChange}/>
        </div>
        <label htmlFor="experience">Experiences required:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="experience">Experiences required:</label> */}
          <input className="createJobInput" type="text" name="experience" value={newJob.experience} onChange={handleChange}/>
        </div>
        <label htmlFor="salary">Average salary/hour:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="salary">Average salary/hour:</label> */}
          <input className="createJobInput" type="text" name="salary" value={newJob.salary}  onChange={handleChange}/>
        </div>
        <label htmlFor="location">Job's Location:</label>

        <div className="jobCreation">
          {/* <label htmlFor="location">Job's Location:</label> */}
          <input className="createJobInput" type="text" name="location" value={newJob.location}  onChange={handleChange}/>
        </div>
        <label htmlFor="description">Job description:</label>

         <div className="description">
          {/* <label htmlFor="description">Job description:</label> */}
          <textarea name="description" rows="15" cols="80" onChange={handleChange} value={newJob.description}></textarea>
        </div>
  
        <button 
        className="signUpButton" 
        type="submit" 
        name="button" 
        
        
        >
          Post the Job
        </button>
      </form>
    );
  }
  



export default CreateJob; 