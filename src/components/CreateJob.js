import React from "react";



function CreateJob() {
    return (
      <form className="createJob" action="index.html" method="post">
        <h3>Open a position and receive the candidats you need</h3>

                <label htmlFor="company">Company's name:</label>

        <div className="jobCreation">
          {/* <label htmlFor="company">Company's name:</label> */}
          
          <input className="createJobInput" type="text" name="company" value="" />
        </div>
        <label htmlFor="title">Job Title:</label>

        <div className="jobCreation">
          {/* <label htmlFor="title">Job Title:</label> */}
          <input className="createJobInput" type="text" name="title" value="" />
        </div>
        <label htmlFor="link">Company's website:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="link">Company's website:</label> */}
          <input className="createJobInput" type="text" name="link" value="" />
        </div>
        <label htmlFor="experience">Experiences required:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="experience">Experiences required:</label> */}
          <input className="createJobInput" type="text" name="experience" value="" />
        </div>
        <label htmlFor="salary">Average salary/hour:</label>

  
        <div className="jobCreation">
          {/* <label htmlFor="salary">Average salary/hour:</label> */}
          <input className="createJobInput" type="text" name="salary" value="" />
        </div>
        <label htmlFor="location">Job's Location:</label>

        <div className="jobCreation">
          {/* <label htmlFor="location">Job's Location:</label> */}
          <input className="createJobInput" type="text" name="location" value="" />
        </div>
        <label htmlFor="description">Job description:</label>

         <div className="description">
          {/* <label htmlFor="description">Job description:</label> */}
          <textarea name="description" rows="15" cols="80"></textarea>
        </div>
  
        <button className="signUpButton" type="button" name="button">
          Post the Job
        </button>
      </form>
    );
  }
  



export default CreateJob; 