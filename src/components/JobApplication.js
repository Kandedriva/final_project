import React from "react";

function JobApplication() {
    return (
      <form className="jobApplication" action="index.html" method="post">
        <h2>Apply for this position</h2>
        <div className="firstName">
          <label htmlFor="applyingJob">First name</label><br />
          <input className="fullName" type="text" name="applyingJob" value="" placeholder="Your legal first name" />
        </div>
  
        <div className="lastName">
          <label htmlFor="middleandLast">Last name</label><br />
          <input className="fullName" type="text" name="middleandLast" value="" placeholder="Including middle name" />
        </div>
  
        <div className="email">
          <label htmlFor="email">Email</label><br />
          <input className="fullName" type="text" name="email" value="" placeholder="personal email" />
        </div>
  
        <div className="history">
          <label htmlFor="history">Employment History</label><br />
          <input className="fullName" type="text" name="history" value="" placeholder="Details about your previous work experience" />
        </div>
  
        <div className="education">
          <label htmlFor="education">Education</label><br />
          <small>Information about your educational background</small><br />
          <textarea className="fullName" name="education" rows="2" cols="25"></textarea>
        </div>
  
        <div className="availability">
          <label htmlFor="availability">Availability</label><br />
          <input className="fullName" type="text" name="availability" value="" placeholder="When you can start the job and any scheduling constraints" />
        </div>
  
        <p>
          After you submit your application, you will be contacted by the employer for more details and the rest of the procedure.<br />
          This process can take a long time depending on HR. Good Luck.
        </p>
  
        <button className="loginButton" type="button" name="button">Submit</button>
      </form>
    );
  }
export default JobApplication  