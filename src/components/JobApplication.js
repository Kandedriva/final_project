import React, { useState } from "react";
import { Button,  } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'; 
import { useHistory } from "react-router-dom";

function JobApplication() {

  const [newApplication, setNewApplication] = useState([]);
  const history = useHistory()

  const [application, setApplication] = useState({
    applyName: "",
    restOfName: "",
    email: "",
    history:"",
    education: "",
    availability: ""
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    setApplication({
      ...application,
      [name]: value,
    })

  }

function newapplication(newpost){
  setNewApplication([...newApplication, newpost])
}

  function handleApplication(event){
    event.preventDefault();
    const newApplication ={
      applyName: application.applyName,
      restOfName: application.restOfName,
      email: application.email,
      history: application.history,
      education: application.education,
      availability: application.availability

    }
    fetch("https://phase-2-banckend.onrender.com/waitingList",{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newApplication)
    })
    .then(response=>response.json())
    .then(newpost=>newapplication(newpost)
  )

  history.push("/list")

    console.log("Your applied successfully to this position.")

  }
    return (

<div className="logIn"> 
    <h2 className="CreatgH2">Apply for this position</h2>

<Form onSubmit={handleApplication}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="applyName" value={application.applyName} placeholder="Your legal first name" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="restOfName" value={application.restOfName} placeholder="Including middle name" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={application.email} placeholder="personal email" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Employment History</Form.Label>
          <Form.Control type="text" name="history" value={application.history} placeholder="Details about your previous work experience" onChange={handleChange} />
        </Form.Group>
        <InputGroup className="post-new-job">
        <InputGroup.Text>Education</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Details about your education background" name="education" onChange={handleChange} value={application.education} />
      </InputGroup>

      <InputGroup className="post-new-job">
        <InputGroup.Text>Availability</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="When you can start the job and any scheduling constraints" name="availability" value={application.availability}  onChange={handleChange} />
      </InputGroup>

      <p className="warning">
          After you submit your application, you will be contacted by the employer for more details and the rest of the procedure.<br />
          This process can take a long time depending on HR. Good Luck.
        </p>

        <Button 
        type="submit"
         name="button"
        variant="secondary" 
        className="SignIn">
        Send Your Application
        </Button>{' '}

        </Form>



    </div>


















      // <form className="jobApplication" action="index.html" method="post" onSubmit={handleApplication}>
      //   <h2>Apply for this position</h2>
      //   <div className="firstName">
      //     <label htmlFor="applyName">First name</label><br />
      //     <input className="fullName" type="text" name="applyName" value={application.applyName} placeholder="Your legal first name"  onChange={handleChange}/>
      //   </div>
  
      //   <div className="lastName">
      //     <label htmlFor="restOfName">Last name</label><br />
      //     <input className="fullName" type="text" name="restOfName" value={application.restOfName} placeholder="Including middle name" onChange={handleChange}/>
      //   </div>
  
      //   <div className="email">
      //     <label htmlFor="email">Email</label><br />
      //     <input className="fullName" type="text" name="email" value={application.email} placeholder="personal email" onChange={handleChange}/>
      //   </div>
  
      //   <div className="history">
      //     <label htmlFor="history">Employment History</label><br />
      //     <input className="fullName" type="text" name="history" value={application.history} placeholder="Details about your previous work experience" onChange={handleChange}/>
      //   </div>
  
      //   <div className="education">
      //     <label htmlFor="education">Education</label><br />
      //     <small>Information about your educational background</small><br />
      //     <textarea className="fullName" name="education" rows="2" cols="25" onChange={handleChange} value={application.education}></textarea>
      //   </div>
  
      //   <div className="availability">
      //     <label htmlFor="availability">Availability</label><br />
      //     <input className="fullName" type="text" name="availability" value={application.availability} placeholder="When you can start the job and any scheduling constraints" onChange={handleChange}/>
      //   </div>
  
      //   <p>
      //     After you submit your application, you will be contacted by the employer for more details and the rest of the procedure.<br />
      //     This process can take a long time depending on HR. Good Luck.
      //   </p>
  
      //   <button className="loginButton" type="submit" name="button" >Submit</button>
      // </form>
    );
  }
export default JobApplication  